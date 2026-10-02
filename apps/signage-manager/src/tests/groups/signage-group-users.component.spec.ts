import { Component, input, Pipe, PipeTransform, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupPermissionsModalComponent } from '../../app/groups/signage-group-permissions-modal.component';
import { SignageGroupUserSelectModalComponent } from '../../app/groups/signage-group-user-select-modal.component';
import { SignageGroupUsersComponent } from '../../app/groups/signage-group-users.component';

function dialogRef(value: unknown) {
    return {
        afterClosed: () => ({
            subscribe: (handler: (value: unknown) => void) => {
                Promise.resolve().then(() => handler(value));
                return { unsubscribe: vi.fn() };
            },
        }),
    };
}

@Component({ selector: 'icon', template: '<ng-content />' })
class IconStubComponent {}

@Component({ selector: 'signage-group-permission-labels', template: '' })
class PermissionLabelsStubComponent {
    public readonly permissions = input(0);
}

@Pipe({ name: 'translate' })
class TranslateStubPipe implements PipeTransform {
    public transform(key: string) {
        return key;
    }
}

describe('SignageGroupUsersComponent', () => {
    const managed_group_users = signal<any[]>([]);
    const add_user = vi.fn();
    const update_user = vi.fn();
    const remove_user = vi.fn();
    const dialog = { open: vi.fn() };
    const managed_group_users_loading = signal(false);
    const managed_group_users_failed = signal(false);
    const service_stub = {
        managed_group_users,
        managed_group_users_loading,
        managed_group_users_failed,
        addManagedGroupUser: add_user,
        updateManagedGroupUser: update_user,
        removeManagedGroupUser: remove_user,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageGroupAdminService, useValue: service_stub },
                { provide: MatDialog, useValue: dialog },
            ],
        }).overrideComponent(SignageGroupUsersComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupUsersComponent)
            .componentInstance;
    }

    /** Renders the real template with stubbed icons, labels and text */
    async function render() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageGroupAdminService, useValue: service_stub },
                { provide: MatDialog, useValue: dialog },
            ],
        }).overrideComponent(SignageGroupUsersComponent, {
            set: {
                imports: [
                    MatProgressSpinnerModule,
                    MatRippleModule,
                    MatTooltipModule,
                    IconStubComponent,
                    PermissionLabelsStubComponent,
                    TranslateStubPipe,
                ],
            },
        });
        const fixture = TestBed.createComponent(SignageGroupUsersComponent);
        await fixture.whenStable();
        return fixture.nativeElement as HTMLElement;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        managed_group_users_loading.set(false);
        managed_group_users_failed.set(false);
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

    it('shows the load error above the rows it kept', async () => {
        managed_group_users_failed.set(true);
        const element = await render();

        expect(element.querySelector('[role="alert"]')?.textContent).toContain(
            'SIGNAGE_MANAGER.USERS_LOAD_ERROR',
        );
        expect(element.textContent).toContain('user-1');
    });

    it('removes a user through the service', () => {
        const component = make();
        const row = { user_id: 'user-1' } as any;
        component.removeUser(row);
        expect(remove_user).toHaveBeenCalledWith(row);
    });
});
