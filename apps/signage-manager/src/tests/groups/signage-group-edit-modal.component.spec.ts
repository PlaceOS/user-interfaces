import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotkeysService } from '@placeos/common';
import { SignageGroupEditModalComponent } from '../../app/groups/signage-group-edit-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupEditModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    const save_signage_group = vi.fn();
    const manageable_signage_groups = signal<any[]>([]);
    const hotkey_listen = vi.fn();
    let hotkey_callback: () => void;
    const service_stub = {
        manageable_signage_groups,
        saveSignageGroup: save_signage_group,
    };
    let modal_data: { group: any };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageService, useValue: service_stub },
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

    it('keeps the dialog open and resets loading when saving fails', async () => {
        save_signage_group.mockRejectedValue(new Error('nope'));
        const component = make();
        component.model.set({
            name: 'New Group',
            description: '',
            parent_id: 'group-1',
        });

        await component.save();

        expect(component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('does not close when the service reports no saved group', async () => {
        save_signage_group.mockResolvedValue(undefined);
        const component = make();
        component.model.set({
            name: 'New Group',
            description: '',
            parent_id: 'group-1',
        });

        await component.save();

        expect(save_signage_group).toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
