import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { ConfirmModalComponent } from '@placeos/components';
import {
    addSignageTemplate,
    addSignageTemplateMapping,
    listSignageTemplateApprovers,
    PlaceCurrentGroup,
    query,
    querySignageTemplates,
    removeSignageTemplate,
    removeSignageTemplateDraft,
    removeSignageTemplateMapping,
    requestApprovalSignageTemplate,
    shareSignageTemplates,
    showSignageTemplate,
    SignageTemplate,
    updateSignageTemplate,
    updateSignageTemplateMapping,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { TemplateApproveModalComponent } from '../../app/shared/template-approve-modal.component';
import { TemplateMappingModalComponent } from '../../app/shared/template-mapping-modal.component';
import { TemplateRequestApprovalModalComponent } from '../../app/shared/template-request-approval-modal.component';
import { SignageContextService } from '../../app/signage-context.service';
import { HydratedSignageTemplateMapping } from '../../app/signage-template-mapping';
import { SignageTemplateService } from '../../app/templates/signage-template.service';

type SignageTemplateServiceTestAccess = SignageTemplateService &
    Record<string, any>;

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageTemplateService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: any) => signal(default_value),
    };
    const org = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
    };
    const dialog = {
        open: vi.fn(),
        openDialogs: [] as unknown[],
    };

    beforeEach(() => {
        vi.clearAllMocks();
        dialog.openDialogs = [];
        setNotifyOutlet({ open: notify_open } as any, true);
        settings.get.mockReturnValue(false);
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve().then(() => handler(undefined));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        TestBed.configureTestingModule({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        const service = TestBed.inject(SignageTemplateService);
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'requirePermission',
        ).mockReturnValue(true);
        return service;
    }

    function confirmNextDialog() {
        dialog.open.mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        });
    }

    function closeNextDialogWith(value: unknown) {
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (result: unknown) => void) => {
                    Promise.resolve().then(() => handler(value));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
    }

    function selectApiGroup(group_id: string) {
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'api_group_id',
            { value: () => group_id },
        );
    }

    it('duplicates a template with its saved layouts', async () => {
        vi.mocked(addSignageTemplate).mockResolvedValue(
            new SignageTemplate({ id: 'copy-1' }),
        );
        const service = createService();
        const template = new SignageTemplate({
            id: 'tpl-1',
            name: 'Welcome',
            layouts: [{ position: 'floating', x_pos: 0.2, y_pos: 0.3 }] as any,
        });

        const copy = await service.duplicateTemplate(template);

        expect(copy?.id).toBe('copy-1');
        expect(vi.mocked(addSignageTemplate).mock.calls[0][0]).toMatchObject({
            name: 'Welcome (copy)',
            layouts: template.layouts,
        });
    });

    it('unshares deleted templates from the selected group', async () => {
        confirmNextDialog();
        const service = createService();
        selectApiGroup('group-1');
        vi.mocked(removeSignageTemplate).mockResolvedValue({});

        await service.removeTemplate(
            new SignageTemplate({ id: 'template-1', name: 'Welcome' }),
        );

        expect(removeSignageTemplate).toHaveBeenCalledWith('template-1', {
            group_id: 'group-1',
        });
    });

    it('drops a deleted template from the loaded list at once', async () => {
        confirmNextDialog();
        const service = createService();
        vi.mocked(removeSignageTemplate).mockResolvedValue({});
        const deleted = new SignageTemplate({ id: 'template-1' });
        const kept = new SignageTemplate({ id: 'template-2' });
        (service as any)._template_list.update(() => [deleted, kept]);

        const removed = await service.removeTemplate(deleted);

        expect(removed).toBe(true);
        expect(service.templates().map(({ id }) => id)).toEqual(['template-2']);
    });

    it('shows an error and closes the confirm modal when delete fails', async () => {
        confirmNextDialog();
        const service = createService();
        const template = new SignageTemplate({ id: 'template-1' });
        service.selected_template.set(template);
        vi.mocked(removeSignageTemplate).mockRejectedValue(new Error('Denied'));

        await service.removeTemplate(template);

        expect(dialog.open.mock.results[0].value.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledExactlyOnceWith(
            'Error removing template',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(service.selected_template()).toBe(template);
    });

    it('shares templates with the selected signage group', async () => {
        const service = createService();
        const context = TestBed.inject(SignageContextService);
        (shareSignageTemplates as any).mockResolvedValue({});
        Object.defineProperty(context, 'can_share', {
            value: () => true,
        });
        Object.defineProperty(context, 'selected_group', {
            value: () => ({ group: { id: 'group-1' } }),
        });
        Object.defineProperty(context, 'signage_groups', {
            value: () => [
                { group: { id: 'group-1', name: 'Current' } },
                { group: { id: 'group-2', name: 'Target' } },
            ],
        });
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value: string) => void) => {
                    Promise.resolve().then(() => handler('group-2'));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });

        await service.shareTemplate(
            new SignageTemplate({ id: 'template-1', name: 'Welcome' }),
        );

        expect(shareSignageTemplates).toHaveBeenCalledWith({
            items: 'template-1',
            to: 'group-2',
        });
    });

    it('opens template approval for users with approval permission', async () => {
        const service = createService();
        const template = new SignageTemplate({ id: 'template-1' });

        await service.approveTemplate(template);

        expect(dialog.open).toHaveBeenCalledWith(
            TemplateApproveModalComponent,
            {
                data: { template },
                panelClass: 'mobile-fullscreen',
            },
        );
    });

    it('requests template approval and updates the cached status', async () => {
        const service = createService();
        const context = TestBed.inject(SignageContextService);
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const template = new SignageTemplate({
            id: 'template-1',
            approved: false,
        });
        // The template list reloads once the group flags turn templates on
        await vi.waitFor(() => expect(context.templates_enabled()).toBe(true));
        TestBed.flushEffects();
        test_service['_template_list'].update(() => [template]);
        Object.defineProperty(context, 'can_approve', {
            value: () => false,
        });
        vi.spyOn(context, 'groupsHolding').mockResolvedValue([
            { group: { id: 'group-1' } } as PlaceCurrentGroup,
        ]);
        vi.mocked(listSignageTemplateApprovers).mockResolvedValue([
            { id: 'user-1', name: 'Reviewer' },
        ]);
        (requestApprovalSignageTemplate as any).mockResolvedValue({});
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve().then(() =>
                        handler({ approver_id: 'user-1', message: 'Review' }),
                    );
                    return { unsubscribe: vi.fn() };
                },
            }),
        });

        await service.requestTemplateApproval(template);

        expect(dialog.open).toHaveBeenCalledWith(
            TemplateRequestApprovalModalComponent,
            expect.objectContaining({
                data: {
                    template,
                    approvers: [{ id: 'user-1', name: 'Reviewer' }],
                },
            }),
        );
        expect(requestApprovalSignageTemplate).toHaveBeenCalledWith(
            'template-1',
            'group-1',
            'Review',
            'user-1',
        );
        expect(service.templates()[0].approval_requested).toBe(true);
    });

    it('shows an error when the template approval request fails', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const template = new SignageTemplate({ id: 'template-1' });
        TestBed.flushEffects();
        test_service['_template_list'].update(() => [template]);
        const context = TestBed.inject(SignageContextService);
        Object.defineProperty(context, 'can_approve', {
            value: () => false,
        });
        vi.spyOn(context, 'groupsHolding').mockResolvedValue([
            { group: { id: 'group-1' } } as PlaceCurrentGroup,
        ]);
        vi.mocked(listSignageTemplateApprovers).mockResolvedValue([]);
        vi.mocked(requestApprovalSignageTemplate).mockRejectedValue(
            new Error('Denied'),
        );
        closeNextDialogWith({ approver_id: '', message: '' });

        await service.requestTemplateApproval(template);

        expect(notify_open).toHaveBeenCalledExactlyOnceWith(
            'Error requesting template approval',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(service.templates()[0].approval_requested).toBe(false);
    });

    it('blocks approval while the selected template has unsaved layouts', async () => {
        const service = createService();
        const template = new SignageTemplate({ id: 'template-1' });
        service.selected_template.set(template);
        service.template_layout_draft.set([
            { position: 'top', plugin_params: {} },
        ]);

        await service.approveTemplate(template);
        await service.requestTemplateApproval(template);

        expect(dialog.open).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledTimes(2);
        expect(notify_open).toHaveBeenLastCalledWith(
            'Save or discard the layout changes first.',
            expect.anything(),
            expect.anything(),
        );
    });

    it('keeps unsaved layouts when the same template is refreshed', () => {
        const service = createService();
        const draft = new SignageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const layouts = [{ position: 'top' as const, plugin_params: {} }];
        service.selected_template.set(
            new SignageTemplate({ id: 'template-live', approved: true }),
        );
        service.template_layout_draft.set(layouts);

        // Editing details or approving caches a new record of the template
        service.updateCachedTemplate(draft);

        expect(service.template_layout_draft()).toBe(layouts);
        expect(service.template_layout_dirty()).toBe(true);

        service.selected_template.set(
            new SignageTemplate({ id: 'template-2' }),
        );

        expect(service.template_layout_draft()).toEqual([]);
    });

    it('discards a template draft and restores the previous version', async () => {
        const service = createService();
        const draft = new SignageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const approved = new SignageTemplate({
            id: 'template-live',
            approved: true,
        });
        service.selected_template.set(draft);
        vi.mocked(removeSignageTemplateDraft).mockResolvedValue(undefined);
        confirmNextDialog();

        const undone = await service.undoTemplateChanges(draft.id, approved);

        expect(undone).toBe(true);
        expect(removeSignageTemplateDraft).toHaveBeenCalledWith(
            'template-draft',
        );
        expect(service.selected_template()).toBe(approved);
    });

    it('keeps the undo confirmation open until the draft is removed', async () => {
        const service = createService();
        const confirm_ref = {
            componentInstance: Object.assign(
                Object.create(ConfirmModalComponent.prototype),
                { event: of({ reason: 'done' }), loading: { set: vi.fn() } },
            ),
            afterClosed: () => NEVER,
            close: vi.fn(),
            disableClose: false,
        };
        dialog.open.mockReturnValue(confirm_ref);
        dialog.openDialogs = [confirm_ref];
        let locked_during_request = false;
        vi.mocked(removeSignageTemplateDraft).mockImplementation(async () => {
            locked_during_request = confirm_ref.disableClose;
        });

        await service.undoTemplateChanges(
            'template-1',
            new SignageTemplate({ id: 'template-1', approved: true }),
        );

        expect(locked_during_request).toBe(true);
        expect(confirm_ref.close).toHaveBeenCalled();
    });

    it('keeps the pending draft when the user cancels undo', async () => {
        const service = createService();
        const draft = new SignageTemplate({ id: 'template-1' });
        service.selected_template.set(draft);
        dialog.open.mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of(undefined),
            close: vi.fn(),
        });

        const undone = await service.undoTemplateChanges(
            draft.id,
            new SignageTemplate({ id: 'template-1', approved: true }),
        );

        expect(undone).toBe(false);
        expect(removeSignageTemplateDraft).not.toHaveBeenCalled();
        expect(service.selected_template()).toBe(draft);
    });

    it('updates template approval state in the list and selection', () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const template = new SignageTemplate({
            id: 'template-1',
            approved: false,
        });
        test_service['_template_list'].update(() => [template]);
        service.selected_template.set(template);

        service.setTemplateApprovalStatus('template-1', true);

        expect(service.templates()[0].approved).toBe(true);
        expect(service.selected_template()?.approved).toBe(true);
        expect(service.selected_template_requires_approval()).toBe(false);
    });

    it('keeps an approved template under its live ID when it gets a draft', () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const approved = new SignageTemplate({
            id: 'template-live',
            approved: true,
        });
        const draft = new SignageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        test_service['_template_list'].update(() => [approved]);
        service.selected_template.set(approved);

        service.updateCachedTemplate(draft);

        expect(service.templates().map(({ id }) => id)).toEqual([
            'template-live',
        ]);
        expect(service.selected_template()?.id).toBe('template-live');
        expect(service.selected_template()?.live_template_id).toBe(
            'template-live',
        );
    });

    it('replaces a draft with its approved template', () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const draft = new SignageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const approved = new SignageTemplate({
            id: 'template-live',
            approved: true,
        });
        test_service['_template_list'].update(() => [draft]);
        service.selected_template.set(draft);

        service.updateCachedTemplate(approved);

        expect(service.templates()).toEqual([approved]);
        expect(service.selected_template()).toBe(approved);
    });

    it('sends displayed layout position defaults when saving', async () => {
        const service = createService();
        service.selected_template.set(
            new SignageTemplate({ id: 'template-1', layouts: [] }),
        );
        service.template_layout_draft.set([
            { position: 'top', plugin_params: {} },
            { position: 'left', plugin_params: {} },
            { position: 'floating', plugin_params: {} },
        ]);
        (updateSignageTemplate as any).mockImplementation((_id, data) =>
            Promise.resolve(new SignageTemplate({ id: 'template-1', ...data })),
        );

        await service.saveTemplateLayouts();

        expect(updateSignageTemplate).toHaveBeenCalledWith('template-1', {
            layouts: [
                { position: 'top', plugin_params: {}, y_pos: 0.15 },
                { position: 'left', plugin_params: {}, x_pos: 0.2 },
                {
                    position: 'floating',
                    plugin_params: {},
                    x_pos: 0.5,
                    y_pos: 0.5,
                },
            ],
        });
    });

    it('keeps the live ID when a layout save returns a draft', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const approved = new SignageTemplate({
            id: 'template-live',
            approved: true,
            layouts: [],
        });
        test_service['_template_list'].update(() => [approved]);
        service.selected_template.set(approved);
        service.template_layout_draft.set([
            { position: 'top', plugin_params: {} },
        ]);
        vi.mocked(updateSignageTemplate).mockResolvedValue(
            new SignageTemplate({
                id: 'template-draft',
                live_template_id: 'template-live',
            }),
        );

        await service.saveTemplateLayouts();

        expect(service.selected_template()?.id).toBe('template-live');
        expect(service.templates().map(({ id }) => id)).toEqual([
            'template-live',
        ]);
        expect(service.template_layout_dirty()).toBe(false);
    });

    it('keeps saved plugin details when the update response omits them', async () => {
        const service = createService();
        service.selected_template.set(
            new SignageTemplate({ id: 'template-1', layouts: [] }),
        );
        service.template_layout_draft.set([
            {
                position: 'top',
                plugin_id: 'clock-widget',
                plugin_params: { display: { format: '24h' } },
            },
        ]);
        vi.mocked(updateSignageTemplate).mockResolvedValue(
            new SignageTemplate({
                id: 'template-1',
                layouts: [
                    {
                        position: 'top',
                        y_pos: 0.15,
                        plugin_params: {},
                    },
                ],
            }),
        );

        await service.saveTemplateLayouts();

        expect(service.selected_template()?.layouts).toEqual([
            {
                position: 'top',
                y_pos: 0.15,
                plugin_id: 'clock-widget',
                plugin_params: { display: { format: '24h' } },
            },
        ]);
        expect(service.template_layout_draft()).toEqual(
            service.selected_template()?.layouts,
        );
        expect(service.template_layout_dirty()).toBe(false);
    });

    it('queries only approved templates for the mapping picker', async () => {
        const service = createService();
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'canQueryLists',
        ).mockReturnValue(true);
        selectApiGroup('group-1');
        (query as any).mockImplementation(async (options: any) => ({
            total: 1,
            next: () => null,
            data: [
                options.fn({
                    id: 'template-1',
                    name: 'Sales &amp; Marketing',
                    approved: true,
                }),
            ],
        }));

        const templates = await service.listApprovedTemplates();

        expect(templates[0]).toBeInstanceOf(SignageTemplate);
        expect(templates[0].name).toBe('Sales & Marketing');
        expect(query).toHaveBeenCalledWith(
            expect.objectContaining({
                path: 'signage/templates',
                query_params: expect.objectContaining({
                    approved: true,
                    group_id: 'group-1',
                }),
            }),
        );
    });

    it('keeps hydrated template details when listing mappings', async () => {
        const service = createService();
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'canQueryLists',
        ).mockReturnValue(true);
        (query as any).mockImplementation(async (options: any) => ({
            total: 1,
            next: () => null,
            data: [
                options.fn({
                    id: 'mapping-1',
                    zone_id: 'zone-1',
                    template_id: 'template-1',
                    template_details: { name: 'Sales &amp; Marketing' },
                }),
            ],
        }));

        const mappings = await service.listTemplateMappings({
            zone_id: 'zone-1',
        });

        expect(mappings[0]).toBeInstanceOf(HydratedSignageTemplateMapping);
        expect(mappings[0].template_details.name).toBe('Sales & Marketing');
        expect(mappings[0].template_details.id).toBe('template-1');
        expect(query).toHaveBeenCalledWith(
            expect.objectContaining({
                path: 'signage/template_mappings',
                query_params: expect.objectContaining({ zone_id: 'zone-1' }),
            }),
        );
    });

    it('shows an error instead of the mapping modal when templates fail to load', async () => {
        const service = createService();
        vi.spyOn(service, 'listApprovedTemplates').mockRejectedValue(
            new Error('Offline'),
        );

        const changed = await service.editTemplateMapping({
            control_system_id: 'display-1',
        });

        expect(changed).toBe(false);
        expect(dialog.open).not.toHaveBeenCalled();
        expect(service.template_mapping_opening()).toBe(false);
        expect(notify_open).toHaveBeenCalledWith(
            expect.any(String),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('returns false when removing a mapping fails', async () => {
        const service = createService();
        vi.mocked(removeSignageTemplateMapping).mockRejectedValue(
            new Error('Denied'),
        );
        confirmNextDialog();

        const removed = await service.removeTemplateMapping(
            new HydratedSignageTemplateMapping({
                id: 'mapping-1',
                template_details: { name: 'Welcome' },
            }),
        );

        expect(removed).toBe(false);
    });

    it('creates a mapping with its target and updates only its schedule', async () => {
        const service = createService();
        vi.spyOn(service, 'listApprovedTemplates').mockResolvedValue([
            new SignageTemplate({
                id: 'template-1',
                name: 'Welcome',
                approved: true,
            }),
        ]);
        vi.mocked(addSignageTemplateMapping).mockResolvedValue({} as any);
        vi.mocked(updateSignageTemplateMapping).mockResolvedValue({} as any);
        const schedule = {
            play_at: 0,
            play_cron: '0 9 * * *',
            play_period: 60,
            play_takeover: false,
        };

        await service.editTemplateMapping({ control_system_id: 'display-1' });
        const add_config = dialog.open.mock.calls.at(-1)?.[1] as any;
        await add_config.data.save('template-1', schedule);

        expect(dialog.open).toHaveBeenLastCalledWith(
            TemplateMappingModalComponent,
            expect.anything(),
        );
        expect(addSignageTemplateMapping).toHaveBeenCalledWith({
            control_system_id: 'display-1',
            template_id: 'template-1',
            schedule,
        });

        const mapping = new HydratedSignageTemplateMapping({
            id: 'mapping-1',
            template_id: 'template-1',
            control_system_id: 'display-1',
            template_details: { name: 'Welcome' },
        });
        await service.editTemplateMapping(
            { control_system_id: 'display-1' },
            mapping,
        );
        const edit_config = dialog.open.mock.calls.at(-1)?.[1] as any;
        await edit_config.data.save('template-changed', null);

        expect(updateSignageTemplateMapping).toHaveBeenCalledWith('mapping-1', {
            schedule: null,
        });
    });

    describe('template list', () => {
        type TemplatePage = Awaited<ReturnType<typeof querySignageTemplates>>;

        function page(ids: string[], total = ids.length): TemplatePage {
            return {
                data: ids.map((id) => new SignageTemplate({ id, name: id })),
                total,
                next: () => null,
            } as unknown as TemplatePage;
        }

        async function loadedService() {
            const service = createService();
            const context = TestBed.inject(SignageContextService);
            Object.defineProperty(context, 'can_manage_all_groups', {
                value: () => true,
            });
            await vi.waitFor(() =>
                expect(context.templates_enabled()).toBe(true),
            );
            TestBed.flushEffects();
            return { service, context };
        }

        it('keeps the loaded templates on screen while a data change reloads them', async () => {
            vi.mocked(querySignageTemplates).mockResolvedValue(
                page(['template-1'], 450),
            );
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(1));
            expect(service.templates_total()).toBe(450);

            vi.mocked(querySignageTemplates).mockReturnValue(
                new Promise<TemplatePage>(() => {}),
            );
            context.changed();
            TestBed.flushEffects();

            expect(querySignageTemplates).toHaveBeenCalledTimes(2);
            expect(service.templates().map(({ id }) => id)).toEqual([
                'template-1',
            ]);
        });

        it('counts the user retries of the list', () => {
            const service = createService();

            service.reloadTemplates();

            expect(service.templates_retries()).toBe(1);
        });

        it('shows a load error and reloads the list on retry', async () => {
            vi.mocked(querySignageTemplates).mockRejectedValue(
                new Error('Offline'),
            );
            const { service } = await loadedService();
            await vi.waitFor(() =>
                expect(service.templates_error()).toBe(true),
            );

            vi.mocked(querySignageTemplates).mockResolvedValue(
                page(['template-1']),
            );
            service.reloadTemplates();
            TestBed.flushEffects();

            await vi.waitFor(() => expect(service.templates()).toHaveLength(1));
            expect(service.templates_error()).toBe(false);
        });

        function livePage(): TemplatePage {
            return {
                data: [
                    new SignageTemplate({
                        id: 'template-live',
                        name: 'A',
                        approved: true,
                    }),
                    new SignageTemplate({ id: 'other', name: 'B' }),
                ],
                total: 2,
                next: () => null,
            } as unknown as TemplatePage;
        }

        const draft = () =>
            new SignageTemplate({
                id: 'template-draft',
                live_template_id: 'template-live',
                name: 'A',
            });

        /** Reload the list after a data change, with the live record in the page */
        async function reloadWithLiveRecord(
            service: SignageTemplateService,
            context: SignageContextService,
        ) {
            const calls = vi.mocked(querySignageTemplates).mock.calls.length;
            vi.mocked(querySignageTemplates).mockResolvedValue(livePage());
            context.changed();
            TestBed.flushEffects();
            expect(querySignageTemplates).toHaveBeenCalledTimes(calls + 1);
            await vi.waitFor(() => {
                expect(service.templates_loading()).toBe(false);
                expect(service.templates()).toHaveLength(2);
            });
        }

        it('keeps a fetched draft when a page returns its live record', async () => {
            vi.mocked(querySignageTemplates).mockResolvedValue(page(['other']));
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(1));
            vi.mocked(showSignageTemplate).mockResolvedValue(draft());
            await service.loadTemplate('template-live');

            await reloadWithLiveRecord(service, context);

            const row = service
                .templates()
                .find(({ id }) => id === 'template-live');
            expect(row?.approved).toBe(false);
            expect(row?.live_template_id).toBe('template-live');
        });

        it('keeps a saved layout draft when the list reloads', async () => {
            vi.mocked(querySignageTemplates).mockResolvedValue(livePage());
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(2));
            service.selected_template.set(service.templates()[0]);
            service.template_layout_draft.set([
                { position: 'top', plugin_params: {} },
            ]);
            vi.mocked(updateSignageTemplate).mockResolvedValue(draft());
            await service.saveTemplateLayouts();

            await reloadWithLiveRecord(service, context);

            expect(service.templates()[0].approved).toBe(false);
            expect(service.templates()[0].layouts).toEqual([
                { position: 'top', plugin_params: {}, y_pos: 0.15 },
            ]);
        });

        it('shows the live record again once the draft is approved', async () => {
            vi.mocked(querySignageTemplates).mockResolvedValue(livePage());
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(2));
            service.updateCachedTemplate(draft());
            expect(service.templates()[0].approved).toBe(false);

            service.updateCachedTemplate(
                new SignageTemplate({
                    id: 'template-live',
                    name: 'A (approved)',
                    approved: true,
                }),
            );
            await reloadWithLiveRecord(service, context);

            // The reloaded record wins, as nothing is held any more
            expect(service.templates()[0].name).toBe('A');
            expect(service.templates()[0].approved).toBe(true);
        });

        it('drops a fetched template when the group changes while it loads', async () => {
            const service = createService();
            let group_id = 'group-1';
            Object.defineProperty(
                TestBed.inject(SignageContextService),
                'api_group_id',
                { value: () => group_id },
            );
            let resolve: (template: SignageTemplate) => void = () => {};
            vi.mocked(showSignageTemplate).mockReturnValue(
                new Promise((done) => (resolve = done)),
            );

            const loading = service.loadTemplate('template-old');
            group_id = 'group-2';
            resolve(new SignageTemplate({ id: 'template-old', name: 'Old' }));

            expect(await loading).toBeNull();
            expect(service.templates()).toEqual([]);
        });

        it('stores a fetched draft under its live ID as one row', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageTemplateServiceTestAccess;
            test_service['_template_list'].update(() => [
                new SignageTemplate({ id: 'template-live', name: 'A' }),
            ]);
            vi.mocked(showSignageTemplate).mockResolvedValue(
                new SignageTemplate({
                    id: 'template-draft',
                    live_template_id: 'template-live',
                    name: 'A',
                }),
            );

            const template = await service.loadTemplate('template-live');

            expect(template?.id).toBe('template-live');
            expect(service.templates().map(({ id }) => id)).toEqual([
                'template-live',
            ]);
        });

        it('keeps a fetched template out of search results', async () => {
            vi.mocked(querySignageTemplates).mockResolvedValue(
                page(['bulk-19']),
            );
            const { service } = await loadedService();
            service.template_search_term.set('bulk-19');
            await vi.waitFor(() => {
                TestBed.flushEffects();
                expect(querySignageTemplates).toHaveBeenLastCalledWith(
                    expect.objectContaining({ q: 'bulk-19' }),
                );
            });
            await vi.waitFor(() =>
                expect(service.templates_loading()).toBe(false),
            );
            vi.mocked(showSignageTemplate).mockResolvedValue(
                new SignageTemplate({ id: 'template-req', name: 'req' }),
            );

            const template = await service.loadTemplate('template-req');

            expect(template?.id).toBe('template-req');
            expect(service.templates().map(({ id }) => id)).toEqual([
                'bulk-19',
            ]);
        });

        it('adds a template fetched by ID to the loaded templates', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageTemplateServiceTestAccess;
            test_service['_template_list'].update(() => [
                new SignageTemplate({ id: 'template-1', name: 'B' }),
            ]);
            vi.mocked(showSignageTemplate).mockResolvedValue(
                new SignageTemplate({ id: 'template-300', name: 'A &amp; Z' }),
            );

            const template = await service.loadTemplate('template-300');

            expect(template?.name).toBe('A & Z');
            expect(service.templates().map(({ id }) => id)).toEqual([
                'template-300',
                'template-1',
            ]);
        });
    });
});
