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
    type GroupsCurrentGroup,
    signage_template_mappings,
    signage_templates,
    type SignageTemplateLayout,
    type SignageTemplateLayoutInput,
    type SignageTemplate as SignageTemplateV7,
} from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { NEVER, of } from 'rxjs';
import { TemplateApproveModalComponent } from '../../app/shared/template-approve-modal.component';
import { TemplateMappingModalComponent } from '../../app/shared/template-mapping-modal.component';
import { TemplateRequestApprovalModalComponent } from '../../app/shared/template-request-approval-modal.component';
import { SignageContextService } from '../../app/signage-context.service';
import { signageTemplate } from '../../app/signage-models';
import { hydratedTemplateMapping } from '../../app/signage-template-mapping';
import { SignageTemplateService } from '../../app/templates/signage-template.service';
import { signageGroup } from '../signage-test-models';

type SignageTemplateServiceTestAccess = SignageTemplateService &
    Record<string, unknown>;

vi.mock('@placeos/ts-client', { spy: true });

/** A template layout, with the fields that a test leaves out set to null */
function layout(
    data: SignageTemplateLayoutInput & {
        position: SignageTemplateLayout['position'];
    },
): SignageTemplateLayout {
    return {
        plugin_id: null,
        x_pos: null,
        y_pos: null,
        plugin_params: {},
        ...data,
    };
}

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageTemplateService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: unknown) =>
            signal(default_value),
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
        vi.mocked(signage_templates.create).mockResolvedValue(
            mockReply(signageTemplate({ id: 'copy-1' })),
        );
        const service = createService();
        const template = signageTemplate({
            id: 'tpl-1',
            name: 'Welcome',
            layouts: [{ position: 'floating', x_pos: 0.2, y_pos: 0.3 }] as any,
        });

        const copy = await service.duplicateTemplate(template);

        expect(copy?.id).toBe('copy-1');
        expect(
            vi.mocked(signage_templates.create).mock.calls[0][0].body,
        ).toMatchObject({
            name: 'Welcome (copy)',
            layouts: template.layouts,
        });
    });

    it('unshares deleted templates from the selected group', async () => {
        confirmNextDialog();
        const service = createService();
        selectApiGroup('group-1');
        vi.mocked(signage_templates.destroy).mockResolvedValue(mockReply(''));

        await service.removeTemplate(
            signageTemplate({ id: 'template-1', name: 'Welcome' }),
        );

        expect(signage_templates.destroy).toHaveBeenCalledWith({
            id: 'template-1',
            group_id: 'group-1',
        });
    });

    it('drops a deleted template from the loaded list at once', async () => {
        confirmNextDialog();
        const service = createService();
        vi.mocked(signage_templates.destroy).mockResolvedValue(mockReply(''));
        const deleted = signageTemplate({ id: 'template-1' });
        const kept = signageTemplate({ id: 'template-2' });
        (service as any)._template_list.update(() => [deleted, kept]);

        const removed = await service.removeTemplate(deleted);

        expect(removed).toBe(true);
        expect(service.templates().map(({ id }) => id)).toEqual(['template-2']);
    });

    it('shows an error and closes the confirm modal when delete fails', async () => {
        confirmNextDialog();
        const service = createService();
        const template = signageTemplate({ id: 'template-1' });
        service.selected_template.set(template);
        vi.mocked(signage_templates.destroy).mockRejectedValue(
            new Error('Denied'),
        );

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
        (signage_templates.share as any).mockResolvedValue(mockReply({}));
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
            signageTemplate({ id: 'template-1', name: 'Welcome' }),
        );

        expect(signage_templates.share).toHaveBeenCalledWith({
            items: ['template-1'],
            to: 'group-2',
        });
    });

    it('opens template approval for users with approval permission', async () => {
        const service = createService();
        const template = signageTemplate({ id: 'template-1' });

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
        const template = signageTemplate({
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
            {
                group: signageGroup({ id: 'group-1' }),
                permissions: 0,
            } satisfies GroupsCurrentGroup,
        ]);
        vi.mocked(signage_templates.approvers).mockResolvedValue(
            mockReply([{ id: 'user-1', name: 'Reviewer' }]),
        );
        vi.mocked(signage_templates.requestApproval).mockResolvedValue(
            mockReply(''),
        );
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
        expect(signage_templates.requestApproval).toHaveBeenCalledWith({
            id: 'template-1',
            group_id: 'group-1',
            approver_id: 'user-1',
            body: { message: 'Review' },
        });
        expect(service.templates()[0].approval_requested).toBe(true);
    });

    it('shows an error when the template approval request fails', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const template = signageTemplate({ id: 'template-1' });
        TestBed.flushEffects();
        test_service['_template_list'].update(() => [template]);
        const context = TestBed.inject(SignageContextService);
        Object.defineProperty(context, 'can_approve', {
            value: () => false,
        });
        vi.spyOn(context, 'groupsHolding').mockResolvedValue([
            {
                group: signageGroup({ id: 'group-1' }),
                permissions: 0,
            } satisfies GroupsCurrentGroup,
        ]);
        vi.mocked(signage_templates.approvers).mockResolvedValue(mockReply([]));
        vi.mocked(signage_templates.requestApproval).mockRejectedValue(
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
        const template = signageTemplate({ id: 'template-1' });
        service.selected_template.set(template);
        service.template_layout_draft.set([layout({ position: 'top' })]);

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
        const draft = signageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const layouts = [layout({ position: 'top' })];
        service.selected_template.set(
            signageTemplate({ id: 'template-live', approved: true }),
        );
        service.template_layout_draft.set(layouts);

        // Editing details or approving caches a new record of the template
        service.updateCachedTemplate(draft);

        expect(service.template_layout_draft()).toBe(layouts);
        expect(service.template_layout_dirty()).toBe(true);

        service.selected_template.set(signageTemplate({ id: 'template-2' }));

        expect(service.template_layout_draft()).toEqual([]);
    });

    it('discards a template draft and restores the previous version', async () => {
        const service = createService();
        const draft = signageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const approved = signageTemplate({
            id: 'template-live',
            approved: true,
        });
        service.selected_template.set(draft);
        vi.mocked(signage_templates.destroyDraft).mockResolvedValue(
            mockReply(undefined),
        );
        confirmNextDialog();

        const undone = await service.undoTemplateChanges(draft.id, approved);

        expect(undone).toBe(true);
        expect(signage_templates.destroyDraft).toHaveBeenCalledWith({
            id: 'template-draft',
        });
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
        vi.mocked(signage_templates.destroyDraft).mockImplementation(
            async () => {
                locked_during_request = confirm_ref.disableClose;
                return mockReply('');
            },
        );

        await service.undoTemplateChanges(
            'template-1',
            signageTemplate({ id: 'template-1', approved: true }),
        );

        expect(locked_during_request).toBe(true);
        expect(confirm_ref.close).toHaveBeenCalled();
    });

    it('keeps the pending draft when the user cancels undo', async () => {
        const service = createService();
        const draft = signageTemplate({ id: 'template-1' });
        service.selected_template.set(draft);
        dialog.open.mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of(undefined),
            close: vi.fn(),
        });

        const undone = await service.undoTemplateChanges(
            draft.id,
            signageTemplate({ id: 'template-1', approved: true }),
        );

        expect(undone).toBe(false);
        expect(signage_templates.destroyDraft).not.toHaveBeenCalled();
        expect(service.selected_template()).toBe(draft);
    });

    it('updates template approval state in the list and selection', () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const template = signageTemplate({
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
        const approved = signageTemplate({
            id: 'template-live',
            approved: true,
        });
        const draft = signageTemplate({
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
        const draft = signageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const approved = signageTemplate({
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
            signageTemplate({ id: 'template-1', layouts: [] }),
        );
        service.template_layout_draft.set([
            layout({ position: 'top' }),
            layout({ position: 'left' }),
            layout({ position: 'floating' }),
        ]);
        vi.mocked(signage_templates.update).mockImplementation(
            async ({ body }) =>
                mockReply(signageTemplate({ id: 'template-1', ...body })),
        );

        await service.saveTemplateLayouts();

        expect(signage_templates.update).toHaveBeenCalledWith({
            id: 'template-1',
            body: {
                layouts: [
                    layout({ position: 'top', y_pos: 0.15 }),
                    layout({ position: 'left', x_pos: 0.2 }),
                    layout({ position: 'floating', x_pos: 0, y_pos: 0 }),
                ],
            },
        });
    });

    it('keeps the live ID when a layout save returns a draft', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignageTemplateServiceTestAccess;
        const approved = signageTemplate({
            id: 'template-live',
            approved: true,
            layouts: [],
        });
        test_service['_template_list'].update(() => [approved]);
        service.selected_template.set(approved);
        service.template_layout_draft.set([layout({ position: 'top' })]);
        vi.mocked(signage_templates.update).mockResolvedValue(
            mockReply(
                signageTemplate({
                    id: 'template-draft',
                    live_template_id: 'template-live',
                }),
            ),
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
            signageTemplate({ id: 'template-1', layouts: [] }),
        );
        service.template_layout_draft.set([
            layout({
                position: 'top',
                plugin_id: 'clock-widget',
                plugin_params: { display: { format: '24h' } },
            }),
        ]);
        vi.mocked(signage_templates.update).mockResolvedValue(
            mockReply(
                signageTemplate({
                    id: 'template-1',
                    layouts: [
                        {
                            position: 'top',
                            y_pos: 0.15,
                            plugin_params: {},
                        },
                    ],
                }),
            ),
        );

        await service.saveTemplateLayouts();

        expect(service.selected_template()?.layouts).toEqual([
            layout({
                position: 'top',
                y_pos: 0.15,
                plugin_id: 'clock-widget',
                plugin_params: { display: { format: '24h' } },
            }),
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
        vi.mocked(signage_templates.query).mockResolvedValue(
            mockPage({
                total: 1,
                data: [
                    signageTemplate({
                        id: 'template-1',
                        name: 'Sales &amp; Marketing',
                        approved: true,
                    }),
                ],
            }),
        );

        const templates = await service.listApprovedTemplates();

        expect(templates[0].name).toBe('Sales & Marketing');
        expect(signage_templates.query).toHaveBeenCalledWith(
            expect.objectContaining({ approved: true, group_id: 'group-1' }),
        );
    });

    it('keeps hydrated template details when listing mappings', async () => {
        const service = createService();
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'canQueryLists',
        ).mockReturnValue(true);
        vi.mocked(signage_template_mappings.query).mockResolvedValue(
            mockPage({
                total: 1,
                data: [
                    hydratedTemplateMapping({
                        id: 'mapping-1',
                        zone_id: 'zone-1',
                        template_id: 'template-1',
                        template_details: { name: 'Sales &amp; Marketing' },
                    }),
                ],
            }),
        );

        const mappings = await service.listTemplateMappings({
            zone_id: 'zone-1',
        });

        expect(mappings[0].template_details.name).toBe('Sales & Marketing');
        expect(mappings[0].template_details.id).toBe('template-1');
        expect(signage_template_mappings.query).toHaveBeenCalledWith(
            expect.objectContaining({ zone_id: 'zone-1' }),
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
        vi.mocked(signage_template_mappings.destroy).mockRejectedValue(
            new Error('Denied'),
        );
        confirmNextDialog();

        const removed = await service.removeTemplateMapping(
            hydratedTemplateMapping({
                id: 'mapping-1',
                template_details: { name: 'Welcome' },
            }),
        );

        expect(removed).toBe(false);
    });

    it('creates a mapping with its target and updates only its schedule', async () => {
        const service = createService();
        vi.spyOn(service, 'listApprovedTemplates').mockResolvedValue([
            signageTemplate({
                id: 'template-1',
                name: 'Welcome',
                approved: true,
            }),
        ]);
        vi.mocked(signage_template_mappings.create).mockResolvedValue(
            mockReply({} as any),
        );
        vi.mocked(signage_template_mappings.update).mockResolvedValue(
            mockReply({} as any),
        );
        const schedule = {
            play_at: 0,
            play_cron: '0 9 * * *',
            play_period: 60,
            play_takeover: false,
        };

        await service.editTemplateMapping({ control_system_id: 'display-1' });
        const add_config = dialog.open.mock.calls.at(-1)?.[1];
        await add_config.data.save('template-1', schedule);

        expect(dialog.open).toHaveBeenLastCalledWith(
            TemplateMappingModalComponent,
            expect.anything(),
        );
        expect(signage_template_mappings.create).toHaveBeenCalledWith({
            body: {
                control_system_id: 'display-1',
                template_id: 'template-1',
                schedule,
            },
        });

        const mapping = hydratedTemplateMapping({
            id: 'mapping-1',
            template_id: 'template-1',
            control_system_id: 'display-1',
            template_details: { name: 'Welcome' },
        });
        await service.editTemplateMapping(
            { control_system_id: 'display-1' },
            mapping,
        );
        const edit_config = dialog.open.mock.calls.at(-1)?.[1];
        await edit_config.data.save('template-changed', null);

        expect(signage_template_mappings.update).toHaveBeenCalledWith({
            id: 'mapping-1',
            body: {
                schedule: null,
            },
        });
    });

    describe('template list', () => {
        function page(ids: string[], total = ids.length) {
            return {
                data: ids.map((id) => signageTemplate({ id, name: id })),
                total,
            };
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
            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(page(['template-1'], 450)),
            );
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(1));
            expect(service.templates_total()).toBe(450);

            vi.mocked(signage_templates.query).mockImplementation(
                () => new Promise(() => {}),
            );
            context.changed();
            TestBed.flushEffects();

            expect(signage_templates.query).toHaveBeenCalledTimes(2);
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
            vi.mocked(signage_templates.query).mockRejectedValue(
                new Error('Offline'),
            );
            const { service } = await loadedService();
            await vi.waitFor(() =>
                expect(service.templates_error()).toBe(true),
            );

            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(page(['template-1'])),
            );
            service.reloadTemplates();
            TestBed.flushEffects();

            await vi.waitFor(() => expect(service.templates()).toHaveLength(1));
            expect(service.templates_error()).toBe(false);
        });

        function livePage() {
            return {
                data: [
                    signageTemplate({
                        id: 'template-live',
                        name: 'A',
                        approved: true,
                    }),
                    signageTemplate({ id: 'other', name: 'B' }),
                ],
                total: 2,
            };
        }

        const draft = () =>
            signageTemplate({
                id: 'template-draft',
                live_template_id: 'template-live',
                name: 'A',
            });

        /** Reload the list after a data change, with the live record in the page */
        async function reloadWithLiveRecord(
            service: SignageTemplateService,
            context: SignageContextService,
        ) {
            const calls = vi.mocked(signage_templates.query).mock.calls.length;
            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(livePage()),
            );
            context.changed();
            TestBed.flushEffects();
            expect(signage_templates.query).toHaveBeenCalledTimes(calls + 1);
            await vi.waitFor(() => {
                expect(service.templates_loading()).toBe(false);
                expect(service.templates()).toHaveLength(2);
            });
        }

        it('keeps a fetched draft when a page returns its live record', async () => {
            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(page(['other'])),
            );
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(1));
            vi.mocked(signage_templates.show).mockResolvedValue(
                mockReply(draft()),
            );
            await service.loadTemplate('template-live');

            await reloadWithLiveRecord(service, context);

            const row = service
                .templates()
                .find(({ id }) => id === 'template-live');
            expect(row?.approved).toBe(false);
            expect(row?.live_template_id).toBe('template-live');
        });

        it('keeps a saved layout draft when the list reloads', async () => {
            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(livePage()),
            );
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(2));
            service.selected_template.set(service.templates()[0]);
            service.template_layout_draft.set([layout({ position: 'top' })]);
            vi.mocked(signage_templates.update).mockResolvedValue(
                mockReply(draft()),
            );
            await service.saveTemplateLayouts();

            await reloadWithLiveRecord(service, context);

            expect(service.templates()[0].approved).toBe(false);
            expect(service.templates()[0].layouts).toEqual([
                layout({ position: 'top', y_pos: 0.15 }),
            ]);
        });

        it('shows the live record again once the draft is approved', async () => {
            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(livePage()),
            );
            const { service, context } = await loadedService();
            await vi.waitFor(() => expect(service.templates()).toHaveLength(2));
            service.updateCachedTemplate(draft());
            expect(service.templates()[0].approved).toBe(false);

            service.updateCachedTemplate(
                signageTemplate({
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
            let resolve: (template: SignageTemplateV7) => void = () => {};
            vi.mocked(signage_templates.show).mockImplementation(
                () =>
                    new Promise((done) => {
                        resolve = (template) => done(mockReply(template));
                    }),
            );

            const loading = service.loadTemplate('template-old');
            group_id = 'group-2';
            resolve(signageTemplate({ id: 'template-old', name: 'Old' }));

            expect(await loading).toBeNull();
            expect(service.templates()).toEqual([]);
        });

        it('stores a fetched draft under its live ID as one row', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageTemplateServiceTestAccess;
            test_service['_template_list'].update(() => [
                signageTemplate({ id: 'template-live', name: 'A' }),
            ]);
            vi.mocked(signage_templates.show).mockResolvedValue(
                mockReply(
                    signageTemplate({
                        id: 'template-draft',
                        live_template_id: 'template-live',
                        name: 'A',
                    }),
                ),
            );

            const template = await service.loadTemplate('template-live');

            expect(template?.id).toBe('template-live');
            expect(service.templates().map(({ id }) => id)).toEqual([
                'template-live',
            ]);
        });

        it('keeps a fetched template out of search results', async () => {
            vi.mocked(signage_templates.query).mockResolvedValue(
                mockPage(page(['bulk-19'])),
            );
            const { service } = await loadedService();
            service.template_search_term.set('bulk-19');
            await vi.waitFor(() => {
                TestBed.flushEffects();
                expect(signage_templates.query).toHaveBeenLastCalledWith(
                    expect.objectContaining({ q: 'bulk-19' }),
                );
            });
            await vi.waitFor(() =>
                expect(service.templates_loading()).toBe(false),
            );
            vi.mocked(signage_templates.show).mockResolvedValue(
                mockReply(signageTemplate({ id: 'template-req', name: 'req' })),
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
                signageTemplate({ id: 'template-1', name: 'B' }),
            ]);
            vi.mocked(signage_templates.show).mockResolvedValue(
                mockReply(
                    signageTemplate({
                        id: 'template-300',
                        name: 'A &amp; Z',
                    }),
                ),
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
