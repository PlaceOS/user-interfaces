import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotkeysService, i18n } from '@placeos/common';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupEditModalComponent } from '../../app/groups/signage-group-edit-modal.component';
import { SignageContextService } from '../../app/signage-context.service';

describe('SignageGroupEditModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    const save_signage_group = vi.fn();
    const manageable_signage_groups = signal<any[]>([]);
    const signage_groups = signal<any[]>([]);
    const hotkey_listen = vi.fn();
    let hotkey_callback: () => void;
    const can_change_parent = vi.fn();
    const load_group = vi.fn();
    const group_admin_stub = {
        manageable_signage_groups,
        saveSignageGroup: save_signage_group,
        canChangeGroupParent: can_change_parent,
        loadGroup: load_group,
    };
    const context_stub = { signage_groups };
    let modal_data: { group: any };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
                {
                    provide: SignageGroupAdminService,
                    useValue: group_admin_stub,
                },
                { provide: SignageContextService, useValue: context_stub },
                {
                    provide: HotkeysService,
                    useValue: { listen: hotkey_listen },
                },
            ],
        }).overrideComponent(SignageGroupEditModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupEditModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        hotkey_listen.mockImplementation(
            (_combo: string[], callback: () => void) => {
                hotkey_callback = callback;
                return { unsubscribe: vi.fn() };
            },
        );
        dialog_ref.disableClose = false;
        can_change_parent.mockReturnValue(true);
        signage_groups.set([]);
        load_group.mockRejectedValue(new Error('forbidden'));
        save_signage_group.mockResolvedValue({ id: 'group-1' });
        manageable_signage_groups.set([
            { id: 'group-1', name: 'Group 1' },
            { id: 'group-2', name: 'Group 2' },
        ]);
        modal_data = { group: {} };
    });

    it('seeds the form model from the supplied group', () => {
        modal_data = {
            group: {
                id: 'group-1',
                name: 'Group 1',
                description: 'desc',
                parent_id: 'group-2',
            },
        };
        const component = make();
        expect(component.model()).toEqual({
            name: 'Group 1',
            description: 'desc',
            parent_id: 'group-2',
        });
    });

    it('excludes the edited group from the parent group options', () => {
        modal_data = { group: { id: 'group-1', name: 'Group 1' } };
        const component = make();
        expect(component.parent_groups().map((group: any) => group.id)).toEqual(
            ['group-2'],
        );
    });

    it('offers only the parents the user can move the group to', () => {
        manageable_signage_groups.set([
            { id: 'group-1', name: 'Group 1' },
            { id: 'group-2', name: 'Group 2' },
            { id: 'group-3', name: 'Group 3' },
        ]);
        can_change_parent.mockImplementation(
            (_group: unknown, parent_id: string) => parent_id === 'group-3',
        );
        modal_data = { group: { id: 'group-1', parent_id: 'group-3' } };
        const component = make();

        expect(component.parent_groups().map(({ id }) => id)).toEqual([
            'group-3',
        ]);
        expect(component.can_remove_parent()).toBe(false);
    });

    it('keeps the current parent as an option when the user does not manage it', () => {
        manageable_signage_groups.set([{ id: 'group-b', name: 'B' }]);
        signage_groups.set([
            { group: { id: 'group-a', name: 'A' }, permissions: 0 },
        ]);
        can_change_parent.mockImplementation(
            (_group: unknown, parent_id: string) => parent_id === 'group-a',
        );
        modal_data = { group: { id: 'group-b', parent_id: 'group-a' } };
        const component = make();

        expect(component.parent_groups()).toEqual([
            { id: 'group-a', name: 'A' },
        ]);
        expect(component.model().parent_id).toBe('group-a');
    });

    it('reads the current parent when it is not in the group lists', async () => {
        load_group.mockResolvedValue({ id: 'hidden', name: 'Hidden parent' });
        modal_data = { group: { id: 'group-1', parent_id: 'hidden' } };
        const component = make();

        expect(load_group).toHaveBeenCalledWith('hidden');
        await vi.waitFor(() =>
            expect(component.parent_groups()[0]).toEqual({
                id: 'hidden',
                name: 'Hidden parent',
            }),
        );
    });

    it('labels the current parent when it cannot be read', async () => {
        can_change_parent.mockReturnValue(false);
        modal_data = { group: { id: 'group-1', parent_id: 'hidden' } };
        const component = make();
        await new Promise((resolve) => setTimeout(resolve));

        expect(component.parent_groups()).toEqual([
            {
                id: 'hidden',
                name: i18n('SIGNAGE_MANAGER.CURRENT_PARENT_GROUP'),
            },
        ]);
    });

    it('saves a valid group and closes with the result', async () => {
        const component = make();
        component.model.set({
            name: 'New Group',
            description: '',
            parent_id: 'group-1',
        });

        await component.save();

        expect(save_signage_group).toHaveBeenCalledWith(
            {},
            { name: 'New Group', description: '', parent_id: 'group-1' },
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'group-1' });
    });

    it('saves when the S hotkey is pressed', () => {
        const component = make();
        const save = vi.spyOn(component, 'save').mockResolvedValue();

        hotkey_callback();

        expect(hotkey_listen).toHaveBeenCalledWith(
            ['KeyS'],
            expect.any(Function),
        );
        expect(save).toHaveBeenCalled();
    });

    it('does not save a new group when required fields are missing', async () => {
        const component = make();
        // name and parent_id are required for a new group
        component.model.set({ name: '', description: '', parent_id: '' });

        await component.save();

        expect(save_signage_group).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('stays open and resets loading when the save fails', async () => {
        // The service shows the error and returns null
        save_signage_group.mockResolvedValue(null);
        const component = make();
        component.model.set({
            name: 'New Group',
            description: '',
            parent_id: 'group-1',
        });

        await component.save();

        expect(save_signage_group).toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
    });
});
