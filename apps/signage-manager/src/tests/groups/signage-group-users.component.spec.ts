import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SignageGroupUsersComponent } from '../../app/groups/signage-group-users.component';
import { SignageGroupUserSelectModalComponent } from '../../app/groups/signage-group-user-select-modal.component';
import { SignageGroupPermissionsModalComponent } from '../../app/groups/signage-group-permissions-modal.component';
import { SignageService } from '../../app/signage.service';

function dialogRef(value: unknown) {
    return {
        afterClosed: () => ({
            subscribe: (handler: (value: unknown) => void) => {
                Promise.resolve().then(() => handler(value));
                return { unsubscribe: jest.fn() };
            },
        }),
    };
}

describe('SignageGroupUsersComponent', () => {
    const managed_group_users = signal<any[]>([]);
    const add_user = jest.fn();
    const update_user = jest.fn();
    const remove_user = jest.fn();
    const dialog = { open: jest.fn() };
    const service_stub = {
        managed_group_users,
        addManagedGroupUser: add_user,
        updateManagedGroupUser: update_user,
        removeManagedGroupUser: remove_user,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MatDialog, useValue: dialog },
            ],
        }).overrideComponent(SignageGroupUsersComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupUsersComponent)
            .componentInstance;
    }

    beforeEach(() => {
        jest.clearAllMocks();
        managed_group_users.set([
            { user_id: 'user-1', permissions: 1 },
            { user_id: 'user-2', permissions: 0 },
        ]);
    });

    it('exposes the managed group users from the service', () => {
        const component = make();
        expect(component.users().map((row: any) => row.user_id)).toEqual([
            'user-1',
            'user-2',
        ]);
    });

    it('opens the user picker excluding already-assigned users and adds the result', async () => {
        dialog.open.mockReturnValue(dialogRef({ id: 'user-3' }));
        const component = make();

        await component.addUser();

        expect(dialog.open).toHaveBeenCalledWith(
            SignageGroupUserSelectModalComponent,
            expect.objectContaining({
                data: { exclude_ids: ['user-1', 'user-2'] },
            }),
        );
        expect(add_user).toHaveBeenCalledWith({ id: 'user-3' });
    });

    it('does not add a user when the picker is dismissed', async () => {
        dialog.open.mockReturnValue(dialogRef(undefined));
        const component = make();

        await component.addUser();

        expect(add_user).not.toHaveBeenCalled();
    });

    it('updates permissions when the permissions modal returns a result', async () => {
        dialog.open.mockReturnValue(dialogRef({ permissions: 5, deny: false }));
        const component = make();
        const row = { user_id: 'user-1', permissions: 1 } as any;

        await component.editUserPermissions(row);

        expect(dialog.open).toHaveBeenCalledWith(
            SignageGroupPermissionsModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({ permissions: 1 }),
            }),
        );
        expect(update_user).toHaveBeenCalledWith(row, 5);
    });

    it('does not update permissions when the modal is cancelled', async () => {
        dialog.open.mockReturnValue(dialogRef(undefined));
        const component = make();

        await component.editUserPermissions({ user_id: 'user-1' } as any);

        expect(update_user).not.toHaveBeenCalled();
    });

    it('removes a user through the service', () => {
        const component = make();
        const row = { user_id: 'user-1' } as any;
        component.removeUser(row);
        expect(remove_user).toHaveBeenCalledWith(row);
    });
});
