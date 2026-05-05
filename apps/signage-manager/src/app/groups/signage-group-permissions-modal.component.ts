import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    FullscreenModalShellComponent,
    SettingsToggleComponent,
} from '@placeos/components';

const GROUP_PERMISSION_FLAGS = [
    { key: 'read', label: 'Read', value: 1 },
    { key: 'create', label: 'Create', value: 2 },
    { key: 'update', label: 'Update', value: 4 },
    { key: 'delete', label: 'Delete', value: 8 },
    { key: 'operate', label: 'Operate', value: 16 },
    { key: 'approve', label: 'Approve', value: 32 },
    { key: 'manage', label: 'Manage', value: 64 },
    { key: 'share', label: 'Share', value: 128 },
];

@Component({
    selector: 'signage-group-permissions-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="data.title || 'Permissions'"
            (confirm)="save()"
        >
            <div class="flex flex-col gap-3">
                @for (permission of permissions; track permission.key) {
                    <settings-toggle
                        [name]="permission.label"
                        [ngModel]="hasPermission(permission.value)"
                        (ngModelChange)="
                            setPermission(permission.value, $event)
                        "
                    />
                }
                @if (data.show_deny) {
                    <div class="border-base-300 mt-2 border-t pt-3">
                        <settings-toggle
                            name="Deny selected permissions"
                            [(ngModel)]="deny"
                        />
                    </div>
                }
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        FormsModule,
        SettingsToggleComponent,
    ],
})
export class SignageGroupPermissionsModalComponent {
    private readonly _dialog_ref =
        inject<MatDialogRef<SignageGroupPermissionsModalComponent>>(
            MatDialogRef,
        );
    public readonly data = inject<{
        title?: string;
        permissions: number;
        deny?: boolean;
        show_deny?: boolean;
    }>(MAT_DIALOG_DATA);
    public readonly permissions = GROUP_PERMISSION_FLAGS;
    public readonly value = signal(+this.data.permissions || 0);
    public deny = !!this.data.deny;

    public hasPermission(permission: number) {
        return (this.value() & permission) === permission;
    }

    public setPermission(permission: number, enabled: boolean) {
        const value = this.value();
        this.value.set(enabled ? value | permission : value & ~permission);
    }

    public save() {
        this._dialog_ref.close({ permissions: this.value(), deny: this.deny });
    }
}

export function groupPermissionLabels(permissions: number) {
    return GROUP_PERMISSION_FLAGS.filter(
        (permission) =>
            ((+permissions || 0) & permission.value) === permission.value,
    ).map((permission) => permission.label);
}
