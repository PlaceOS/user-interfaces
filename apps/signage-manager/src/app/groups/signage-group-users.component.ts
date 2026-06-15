import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceGroupUser } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';
import {
    groupPermissionLabels,
    SignageGroupPermissionsModalComponent,
} from './signage-group-permissions-modal.component';
import { SignageGroupUserSelectModalComponent } from './signage-group-user-select-modal.component';

@Component({
    selector: 'signage-group-users',
    template: `
        <div
            class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-auto rounded-lg border"
        >
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h5
                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                >
                    <icon class="text-lg">group</icon>
                    {{
                        'SIGNAGE_MANAGER.USERS_COUNT'
                            | translate
                                : { count: users().length }
                                : users().length
                    }}
                </h5>
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.ADD_USER_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_USER_ARIA' | translate
                    "
                    (click)="addUser()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
                @if (users().length) {
                    @for (row of users(); track row.user_id) {
                        <div
                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3"
                        >
                            <icon class="shrink-0 text-xl opacity-60"
                                >person</icon
                            >
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ row.user?.name || row.user_id }}
                                </div>
                                @if (row.user?.email) {
                                    <div
                                        class="text-base-content/70 truncate text-xs"
                                    >
                                        {{ row.user?.email }}
                                    </div>
                                }
                                <div
                                    class="text-base-content/70 mt-1 truncate text-xs"
                                >
                                    @let labels =
                                        permissionLabels(row.permissions);
                                    @if (labels.length) {
                                        @for (label of labels; track label) {
                                            {{ label | translate }}
                                            @if (!$last) {
                                                ,
                                            }
                                        }
                                    } @else {
                                        <span class="italic">{{
                                            'SIGNAGE_MANAGER.DEFAULT_PERMISSIONS'
                                                | translate
                                        }}</span>
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.EDIT_USER_PERMS'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.EDIT_USER_PERMS'
                                        | translate
                                "
                                (click)="editUserPermissions(row)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_USER' | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.REMOVE_USER' | translate
                                "
                                (click)="removeUser(row)"
                            >
                                <icon class="text-error">close</icon>
                            </button>
                        </div>
                    }
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">group_off</icon>
                        <p class="text-sm">
                            {{
                                'SIGNAGE_MANAGER.NO_USERS_ASSIGNED' | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe],
})
export class SignageGroupUsersComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly users = toSignal(this._service.managed_group_users, {
        initialValue: [] as PlaceGroupUser[],
    });
    public readonly permissionLabels = groupPermissionLabels;

    public async addUser() {
        const user = await lastValueFrom(
            this._dialog
                .open(SignageGroupUserSelectModalComponent, {
                    data: {
                        exclude_ids: this.users().map((item) => item.user_id),
                    },
                    panelClass: 'mobile-fullscreen',
                })
                .afterClosed(),
        );
        if (user) await this._service.addManagedGroupUser(user);
    }

    public async editUserPermissions(row: PlaceGroupUser) {
        const result = await lastValueFrom(
            this._dialog
                .open(SignageGroupPermissionsModalComponent, {
                    data: {
                        title: i18n('SIGNAGE_MANAGER.USER_PERMISSIONS'),
                        permissions: row.permissions,
                    },
                })
                .afterClosed(),
        );
        if (result) {
            await this._service.updateManagedGroupUser(row, result.permissions);
        }
    }

    public removeUser(row: PlaceGroupUser) {
        this._service.removeManagedGroupUser(row);
    }
}
