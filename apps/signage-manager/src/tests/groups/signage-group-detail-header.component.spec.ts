import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SignageGroupDetailHeaderComponent } from '../../app/groups/signage-group-detail-header.component';
import { SignageGroupEditModalComponent } from '../../app/groups/signage-group-edit-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupDetailHeaderComponent', () => {
    const managed_group = signal<any>({ id: 'group-1', name: 'Group 1' });
    const managed_group_id = signal('group-1');
    const remove_signage_group = vi.fn();
    const dialog = { open: vi.fn() };
    const service_stub = {
        managed_group,
        managed_group_id,
        removeSignageGroup: remove_signage_group,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MatDialog, useValue: dialog },
            ],
        }).overrideComponent(SignageGroupDetailHeaderComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupDetailHeaderComponent)
            .componentInstance;
    }

    beforeEach(() => {
        dialog.open.mockReset();
        remove_signage_group.mockReset();
        managed_group_id.set('group-1');
    });

    it('clears the managed group id when navigating back', () => {
        const component = make();
        component.clearSelection();
        expect(managed_group_id()).toBe('');
    });

    it('opens the edit modal seeded with the given group', () => {
        const component = make();
        const group = { id: 'group-1', name: 'Group 1' } as any;
        component.editGroup(group);

        expect(dialog.open).toHaveBeenCalledWith(
            SignageGroupEditModalComponent,
            expect.objectContaining({ data: { group } }),
        );
    });

    it('delegates group removal to the service', () => {
        const component = make();
        const group = { id: 'group-1' } as any;
        component.removeGroup(group);

        expect(remove_signage_group).toHaveBeenCalledWith(group);
    });
});
