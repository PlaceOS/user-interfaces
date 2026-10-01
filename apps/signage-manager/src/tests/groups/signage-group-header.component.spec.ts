import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupEditModalComponent } from '../../app/groups/signage-group-edit-modal.component';
import { SignageGroupHeaderComponent } from '../../app/groups/signage-group-header.component';
import { SignageContextService } from '../../app/signage-context.service';

describe('SignageGroupHeaderComponent', () => {
    const manageable_signage_groups = signal<any[]>([]);
    const managed_group_id = signal('');
    const can_manage_all_groups = signal(true);
    const dialog = { open: vi.fn() };
    const group_admin_stub = {
        manageable_signage_groups,
        managed_group_id,
    };
    const context_stub = { can_manage_all_groups };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SignageGroupAdminService,
                    useValue: group_admin_stub,
                },
                { provide: SignageContextService, useValue: context_stub },
                { provide: MatDialog, useValue: dialog },
            ],
        }).overrideComponent(SignageGroupHeaderComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupHeaderComponent)
            .componentInstance;
    }

    beforeEach(() => {
        dialog.open.mockReset();
        manageable_signage_groups.set([]);
        managed_group_id.set('');
        can_manage_all_groups.set(true);
    });

    it('reports the number of manageable groups', () => {
        const component = make();
        expect(component.group_count()).toBe(0);

        manageable_signage_groups.set([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
        expect(component.group_count()).toBe(3);
    });

    it('allows group admins to add a child group', () => {
        can_manage_all_groups.set(false);
        manageable_signage_groups.set([{ id: 'group-1' }]);

        expect(make().can_add_groups()).toBe(true);
    });

    it('opens the edit modal to create a new empty group', () => {
        const component = make();
        component.editGroup();

        expect(dialog.open).toHaveBeenCalledWith(
            SignageGroupEditModalComponent,
            expect.objectContaining({ data: { group: {} } }),
        );
    });
});
