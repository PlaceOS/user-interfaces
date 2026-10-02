import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupFeaturesModalComponent } from '../../app/groups/signage-group-features-modal.component';
import { SignageContextService } from '../../app/signage-context.service';
import { SignagePluginService } from '../../app/signage-plugin.service';

describe('SignageGroupFeaturesModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    const all_plugins = signal<any[]>([]);
    const global_features = signal<string[]>([]);
    const plugin_stub = { all_plugins };
    const context_stub = {
        global_features,
        loadGroupFeatures: vi.fn(),
    };
    const group_admin_stub = {
        loadGroup: vi.fn(),
        saveGroupFeatures: vi.fn(),
    };
    let group: any;

    function create() {
        TestBed.configureTestingModule({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { group } },
                { provide: MatDialogRef, useValue: dialog_ref },
                {
                    provide: SignageGroupAdminService,
                    useValue: group_admin_stub,
                },
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignagePluginService, useValue: plugin_stub },
            ],
        }).overrideComponent(SignageGroupFeaturesModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupFeaturesModalComponent)
            .componentInstance;
    }

    async function make() {
        const component = create();
        await vi.waitFor(() => expect(component.inherited_loaded()).toBe(true));
        return component;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        all_plugins.set([
            { id: 'plugin-1', name: 'Clock' },
            { id: 'plugin-2', name: 'Weather' },
        ]);
        global_features.set(['templates', 'ai-generation', 'ai-editing']);
        context_stub.loadGroupFeatures.mockResolvedValue({
            features: ['templates', 'ai-generation'],
        });
        group_admin_stub.saveGroupFeatures.mockResolvedValue({ id: 'group-1' });
        group_admin_stub.loadGroup.mockImplementation(async () => group);
        group = { id: 'group-1', parent_id: 'root', features: {} };
    });

    it('lists only the features the global settings allow', async () => {
        context_stub.loadGroupFeatures.mockResolvedValue({});
        global_features.set([
            'templates',
            'ai-generation',
            'ai-editing',
            'branding-editing',
        ]);
        const component = await make();

        // Branding is for the whole organisation, so groups cannot limit it
        expect(component.available_features().map(({ id }) => id)).toEqual([
            'templates',
            'ai-generation',
            'ai-editing',
        ]);
    });

    it('offers only the features and plugins the parent group allows', async () => {
        context_stub.loadGroupFeatures.mockResolvedValue({
            features: ['templates', 'ai-generation'],
            available_plugins: ['plugin-2'],
        });
        const component = await make();

        expect(component.available_features().map(({ id }) => id)).toEqual([
            'templates',
            'ai-generation',
        ]);
        expect(component.plugins().map(({ id }) => id)).toEqual(['plugin-2']);
    });

    it('shows the parent list until the group sets its own', async () => {
        const component = await make();

        expect(group_admin_stub.loadGroup).toHaveBeenCalledWith('group-1');
        expect(context_stub.loadGroupFeatures).toHaveBeenCalledWith('root');
        expect(component.isSet('features')).toBe(false);
        expect(component.isAllowed('features', 'ai-editing')).toBe(false);
        expect(component.isAllowed('features', 'templates')).toBe(true);
    });

    it('re-enables an inherited feature and resets back', async () => {
        const component = await make();

        component.setAllowed('features', 'ai-editing', true);
        expect(component.own().features).toEqual(
            expect.arrayContaining([
                'templates',
                'ai-generation',
                'ai-editing',
            ]),
        );

        component.reset('features');
        expect(component.isSet('features')).toBe(false);
        expect(component.isAllowed('features', 'ai-editing')).toBe(false);
    });

    it('keeps features the global settings hide when the list changes', async () => {
        context_stub.loadGroupFeatures.mockResolvedValue({});
        const component = await make();

        component.setAllowed('features', 'templates', false);

        expect(component.own().features).toEqual(
            expect.arrayContaining(['template-editing', 'branding-editing']),
        );
        expect(component.own().features).not.toContain('templates');
    });

    it('starts a plugin list from every plugin when one is removed', async () => {
        const component = await make();

        component.setAllowed('available_plugins', 'plugin-1', false);

        expect(component.own().available_plugins).toEqual(['plugin-2']);
    });

    it('drops plugins that no longer exist when saving', async () => {
        group.features = {
            signage: { available_plugins: ['plugin-1', 'gone'] },
        };
        const component = await make();

        await component.save();

        expect(group_admin_stub.saveGroupFeatures).toHaveBeenCalledWith(group, {
            available_plugins: ['plugin-1'],
        });
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'group-1' });
    });

    it('keeps the plugin list when no plugins loaded', async () => {
        all_plugins.set([]);
        group.features = { signage: { available_plugins: ['plugin-1'] } };
        const component = await make();

        await component.save();

        expect(group_admin_stub.saveGroupFeatures).toHaveBeenCalledWith(group, {
            available_plugins: ['plugin-1'],
        });
    });

    it('allows every option when the backend has no features route', async () => {
        context_stub.loadGroupFeatures.mockRejectedValue({ status: 404 });
        const component = await make();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(component.available_features().map(({ id }) => id)).toEqual([
            'templates',
            'ai-generation',
            'ai-editing',
        ]);
        expect(component.isAllowed('features', 'ai-editing')).toBe(true);
    });

    it('closes when the parent features fail to load', async () => {
        context_stub.loadGroupFeatures.mockRejectedValue({ status: 500 });
        create();

        await vi.waitFor(() => expect(dialog_ref.close).toHaveBeenCalled());
    });

    it('closes when the group cannot be read', async () => {
        group_admin_stub.loadGroup.mockRejectedValue(new Error('fail'));
        create();

        await vi.waitFor(() => expect(dialog_ref.close).toHaveBeenCalled());
    });
});
