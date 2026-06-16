import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    FullscreenModalShellComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';

const GROUP_PERMISSION_FLAGS = [
    { key: 'read', label: 'SIGNAGE_MANAGER.PERM_READ', value: 1 },
    { key: 'create', label: 'SIGNAGE_MANAGER.PERM_CREATE', value: 2 },
    { key: 'update', label: 'SIGNAGE_MANAGER.PERM_UPDATE', value: 4 },
    { key: 'delete', label: 'COMMON.DELETE', value: 8 },
    { key: 'operate', label: 'SIGNAGE_MANAGER.PERM_OPERATE', value: 16 },
    { key: 'approve', label: 'COMMON.APPROVE', value: 32 },
    { key: 'manage', label: 'SIGNAGE_MANAGER.PERM_MANAGE', value: 64 },
    { key: 'share', label: 'SIGNAGE_MANAGER.PERM_SHARE', value: 128 },
];

@Component({
    selector: 'signage-group-permissions-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                data.title || ('SIGNAGE_MANAGER.PERMISSIONS' | translate)
            "
            (confirm)="save()"
        >
            <div class="flex flex-col gap-3">
                @for (permission of permissions; track permission.key) {
                    <settings-toggle
                        [label]="permission.label | translate"
                        [ngModel]="hasPermission(permission.value)"
                        (ngModelChange)="
                            setPermission(permission.value, $event)
                        "
                    />
                }
                @if (data.show_deny) {
                    <div class="border-base-300 mt-2 border-t pt-3">
                        <settings-toggle
                            [label]="
                                'SIGNAGE_MANAGER.PERM_DENY_SELECTED' | translate
                            "
                            [(ngModel)]="deny"
                        />
                    </div>
                }
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        FormsModule,
        SettingsToggleComponent,
        TranslatePipe,
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
