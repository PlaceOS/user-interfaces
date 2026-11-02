import { Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import { PlaceGroupUser } from '@placeos/ts-client';
import { dialogClosed } from '../signage-service.util';
import { SignageGroupAdminService } from './signage-group-admin.service';
import { SignageGroupMembersComponent } from './signage-group-members.component';
import { SignageGroupPermissionsModalComponent } from './signage-group-permissions-modal.component';
import { SignageGroupUserSelectModalComponent } from './signage-group-user-select-modal.component';

@Component({
    selector: 'signage-group-users',
    template: `
        <signage-group-members
            kind="users"
            [members]="members()"
            [loading]="loading()"
            [failed]="failed()"
            (add)="addUser()"
            (edit)="editUserPermissions($event)"
            (remove)="removeUser($event)"
        />
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [SignageGroupMembersComponent],
})
export class SignageGroupUsersComponent {
    private readonly _group_admin = inject(SignageGroupAdminService);
    private readonly _dialog = inject(MatDialog);

    public readonly users = this._group_admin.managed_group_users;
    public readonly loading = this._group_admin.managed_group_users_loading;
    public readonly failed = this._group_admin.managed_group_users_failed;
    public readonly members = computed(() =>
        this.users().map((row) => ({
            id: row.user_id,
            name: row.user?.name || row.user_id,
            detail: row.user?.email,
            permissions: row.permissions,
            row,
        })),
    );

    public async addUser() {
        const user = await dialogClosed(
            this._dialog.open(SignageGroupUserSelectModalComponent, {
                data: {
                    exclude_ids: this.users().map((item) => item.user_id),
                },
                panelClass: 'mobile-fullscreen',
            }),
        );
        if (user) await this._group_admin.addManagedGroupUser(user);
    }

    public async editUserPermissions(row: PlaceGroupUser) {
        const result = await dialogClosed(
            this._dialog.open(SignageGroupPermissionsModalComponent, {
                data: {
                    title: i18n('SIGNAGE_MANAGER.USER_PERMISSIONS'),
                    permissions: row.permissions,
                },
            }),
        );
        if (result) {
            await this._group_admin.updateManagedGroupUser(
                row,
                result.permissions,
            );
        }
    }

    public removeUser(row: PlaceGroupUser) {
        this._group_admin.removeManagedGroupUser(row);
    }
}
