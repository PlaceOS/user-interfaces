import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignageGroupEditModalComponent } from '../../app/groups/signage-group-edit-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupEditModalComponent', () => {
    const dialog_ref = { close: jest.fn(), disableClose: false };
    const save_signage_group = jest.fn();
    const manageable_signage_groups = signal<any[]>([]);
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
            ],
        }).overrideComponent(SignageGroupEditModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupEditModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        jest.clearAllMocks();
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
        expect(component.parent_groups().map((group: any) => group.id)).toEqual([
            'group-2',
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
