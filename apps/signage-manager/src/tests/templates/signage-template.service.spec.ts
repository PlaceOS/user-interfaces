import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import {
    addSignageTemplate,
    addSignageTemplateMapping,
    listSignageTemplateApprovers,
    PlaceCurrentGroup,
    query,
    removeSignageTemplate,
    removeSignageTemplateDraft,
    requestApprovalSignageTemplate,
    shareSignageTemplates,
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
    };

    beforeEach(() => {
        vi.clearAllMocks();
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

        const undone = await service.undoTemplateChanges(draft.id, approved);

        expect(undone).toBe(true);
        expect(removeSignageTemplateDraft).toHaveBeenCalledWith(
            'template-draft',
        );
        expect(service.selected_template()).toBe(approved);
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

    it('replaces an approved template with its new draft ID', () => {
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

        expect(service.templates()).toEqual([draft]);
        expect(service.selected_template()).toBe(draft);
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
                    x_pos: 0,
                    y_pos: 0,
                },
            ],
        });
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
                    name: 'Welcome',
                    approved: true,
                }),
            ],
        }));

        const templates = await service.listApprovedTemplates();

        expect(templates[0]).toBeInstanceOf(SignageTemplate);
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
                    template_details: { name: 'Welcome' },
                }),
            ],
        }));

        const mappings = await service.listTemplateMappings({
            zone_id: 'zone-1',
        });

        expect(mappings[0]).toBeInstanceOf(HydratedSignageTemplateMapping);
        expect(mappings[0].template_details.name).toBe('Welcome');
        expect(query).toHaveBeenCalledWith(
            expect.objectContaining({
                path: 'signage/template_mappings',
                query_params: expect.objectContaining({ zone_id: 'zone-1' }),
            }),
        );
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
});
