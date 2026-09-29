import {
    Component,
    computed,
    debounced,
    inject,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifyError } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { PlaceGroup, PlaceGroupAdMappings } from '@placeos/ts-client';
import { adGroupKey } from '../signage-group-access';
import { dialogClosed, SignageService } from '../signage.service';
import {
    GROUP_PERMISSION_FLAGS,
    groupPermissionLabels,
    SignageGroupPermissionsModalComponent,
} from './signage-group-permissions-modal.component';

interface AdGroupRow {
    id: string;
    name: string;
    permissions: number;
}

/**
 * Edit who gets access to a group. Default permissions apply to members that
 * are added without explicit permissions. Members of a mapped AD group are
 * added to the group with the permissions of the mapping.
 */
@Component({
    selector: 'signage-group-access-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                'SIGNAGE_MANAGER.GROUP_ACCESS_HEADING'
                    | translate: { name: group.name }
            "
            [loading]="
                saving() ? ('SIGNAGE_MANAGER.GROUP_SAVING' | translate) : ''
            "
            [confirm_disabled]="!loaded()"
            (confirm)="save()"
        >
            <div class="flex w-[36rem] max-w-full flex-col gap-4">
                @if (!loaded()) {
                    <div class="flex justify-center p-8">
                        <mat-spinner diameter="32" />
                    </div>
                } @else {
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <div class="border-base-300 border-b px-4 py-3">
                            <h3 class="text-sm font-medium">
                                {{
                                    'SIGNAGE_MANAGER.GROUP_DEFAULT_PERMISSIONS'
                                        | translate
                                }}
                            </h3>
                            <p class="text-base-content/60 text-xs">
                                {{
                                    'SIGNAGE_MANAGER.GROUP_DEFAULT_PERMISSIONS_HINT'
                                        | translate
                                }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-3 p-4">
                            @for (
                                permission of permissions;
                                track permission.key
                            ) {
                                <settings-toggle
                                    [label]="permission.label | translate"
                                    [ngModel]="hasDefault(permission.value)"
                                    (ngModelChange)="
                                        setDefault(permission.value, $event)
                                    "
                                />
                            }
                        </div>
                    </section>
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <div class="border-base-300 border-b px-4 py-3">
                            <h3 class="text-sm font-medium">
                                {{
                                    'SIGNAGE_MANAGER.AD_GROUP_SYNC' | translate
                                }}
                            </h3>
                            <p class="text-base-content/60 text-xs">
                                {{
                                    'SIGNAGE_MANAGER.AD_GROUP_SYNC_HINT'
                                        | translate
                                }}
                            </p>
                        </div>
                        <ul class="divide-base-300 divide-y">
                            @for (row of mapping_list(); track row.id) {
                                <li class="flex items-center gap-3 px-4 py-3">
                                    <icon class="shrink-0 text-xl opacity-60"
                                        >groups</icon
                                    >
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
                                            {{ row.name || row.id }}
                                        </div>
                                        <div
                                            class="text-base-content/60 truncate font-mono text-xs"
                                        >
                                            {{ row.id }}
                                        </div>
                                        <div
                                            class="text-base-content/70 mt-1 truncate text-xs"
                                        >
                                            @let labels =
                                                permissionLabels(
                                                    row.permissions
                                                );
                                            @if (labels.length) {
                                                @for (
                                                    label of labels;
                                                    track label
                                                ) {
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
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.AD_GROUP_EDIT_PERMS'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_EDIT_PERMS'
                                                | translate
                                        "
                                        (click)="editMapping(row)"
                                    >
                                        <icon>edit</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.AD_GROUP_REMOVE'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_REMOVE'
                                                | translate
                                        "
                                        (click)="removeMapping(row.id)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </li>
                            } @empty {
                                <li class="text-base-content/60 p-4 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.AD_GROUP_NO_MAPPINGS'
                                            | translate
                                    }}
                                </li>
                            }
                        </ul>
                        <div
                            class="border-base-300 flex flex-col gap-2 border-t p-4"
                        >
                            @if (directory_unavailable()) {
                                <p class="text-base-content/60 text-xs">
                                    {{
                                        'SIGNAGE_MANAGER.AD_GROUP_SEARCH_UNAVAILABLE'
                                            | translate
                                    }}
                                </p>
                                <div class="flex items-center gap-2">
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript flex-1"
                                    >
                                        <input
                                            matInput
                                            name="ad-group-id"
                                            [(ngModel)]="manual_id"
                                            [placeholder]="
                                                'SIGNAGE_MANAGER.AD_GROUP_ID'
                                                    | translate
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.AD_GROUP_ID'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript flex-1"
                                    >
                                        <input
                                            matInput
                                            name="ad-group-name"
                                            [(ngModel)]="manual_name"
                                            [placeholder]="
                                                'SIGNAGE_MANAGER.AD_GROUP_NAME'
                                                    | translate
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.AD_GROUP_NAME'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [disabled]="!manual_id().trim()"
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.AD_GROUP_ADD'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_ADD'
                                                | translate
                                        "
                                        (click)="addManual()"
                                    >
                                        <icon>add</icon>
                                    </button>
                                </div>
                            } @else {
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        name="ad-group-search"
                                        [(ngModel)]="search"
                                        [placeholder]="
                                            'SIGNAGE_MANAGER.AD_GROUP_SEARCH'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_SEARCH'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                                <div
                                    class="flex max-h-60 flex-col gap-1 overflow-auto"
                                >
                                    @for (
                                        item of directory_groups();
                                        track item.id
                                    ) {
                                        <button
                                            type="button"
                                            matRipple
                                            class="hover:bg-base-200 flex w-full items-center gap-2 rounded-sm p-2 text-left"
                                            (click)="
                                                addMapping(item.id, item.name)
                                            "
                                        >
                                            <icon class="shrink-0 opacity-60"
                                                >add</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div class="truncate text-sm">
                                                    {{ item.name || item.id }}
                                                </div>
                                                @if (item.email) {
                                                    <div
                                                        class="text-base-content/60 truncate text-xs"
                                                    >
                                                        {{ item.email }}
                                                    </div>
                                                }
                                            </div>
                                        </button>
                                    } @empty {
                                        @if (!directory_loading()) {
                                            <p
                                                class="text-base-content/60 p-2 text-sm"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.AD_GROUP_NO_RESULTS'
                                                        | translate
                                                }}
                                            </p>
                                        }
                                    }
                                    @if (directory_loading()) {
                                        <div class="flex justify-center p-2">
                                            <mat-spinner diameter="24" />
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </section>
                }
            </div>
        </fullscreen-modal-shell>
    `,
    imports: [
        FullscreenModalShellComponent,
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class SignageGroupAccessModalComponent {
    private readonly _data = inject<{ group: PlaceGroup }>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<SignageGroupAccessModalComponent>>(MatDialogRef);
    private readonly _dialog = inject(MatDialog);
    private readonly _service = inject(SignageService);

    public readonly group = this._data.group;
    public readonly permissions = GROUP_PERMISSION_FLAGS;
    public readonly permissionLabels = groupPermissionLabels;
    public readonly loaded = signal(false);
    public readonly saving = signal(false);
    public readonly default_permissions = signal(0);
    public readonly mappings = signal<PlaceGroupAdMappings>({});
    public readonly mapping_list = computed<AdGroupRow[]>(() =>
        Object.entries(this.mappings()).map(([id, [name, permissions]]) => ({
            id,
            name,
            permissions,
        })),
    );

    public readonly search = signal('');
    private readonly _search_debounced = debounced(this.search, 300);
    private readonly _directory = resource({
        params: () => this._search_debounced.value() ?? '',
        loader: ({ params }) => this._service.searchDirectoryGroups(params),
    });
    /** Without a staff API tenant that lists groups, the ID is typed in */
    public readonly directory_unavailable = computed(
        () => !!this._directory.error(),
    );
    public readonly directory_loading = computed(() =>
        this._directory.isLoading(),
    );
    /** Directory groups that are not mapped yet */
    public readonly directory_groups = computed(() => {
        if (!this._directory.hasValue()) return [];
        const mappings = this.mappings();
        return this._directory
            .value()
            .filter((item) => !mappings[adGroupKey(item.id)]);
    });
    public readonly manual_id = signal('');
    public readonly manual_name = signal('');

    constructor() {
        this._load();
    }

    // Without current values a save would clear the stored mappings, so a
    // failed read closes the editor.
    private async _load() {
        try {
            const access = await this._service.loadGroupAccess(this.group.id);
            this.default_permissions.set(access.default_permissions);
            this.mappings.set(access.ad_group_mappings);
            this.loaded.set(true);
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.GROUP_ACCESS_LOAD_ERROR'));
            this._dialog_ref.close();
        }
    }

    public hasDefault(permission: number) {
        return (this.default_permissions() & permission) === permission;
    }

    public setDefault(permission: number, enabled: boolean) {
        this.default_permissions.update((value) =>
            enabled ? value | permission : value & ~permission,
        );
    }

    /** Map an AD group. It starts with the group's default permissions. */
    public addMapping(id: string, name: string) {
        const key = adGroupKey(id);
        if (!key || this.mappings()[key]) return;
        const permissions = this.default_permissions();
        this.mappings.update((mappings) => ({
            ...mappings,
            [key]: [name.trim() || id.trim(), permissions],
        }));
    }

    public addManual() {
        this.addMapping(this.manual_id(), this.manual_name());
        this.manual_id.set('');
        this.manual_name.set('');
    }

    public async editMapping(row: AdGroupRow) {
        const result = await dialogClosed<{ permissions: number }>(
            this._dialog.open(SignageGroupPermissionsModalComponent, {
                data: {
                    title: i18n('SIGNAGE_MANAGER.AD_GROUP_PERMISSIONS', {
                        name: row.name || row.id,
                    }),
                    permissions: row.permissions,
                },
            }),
        );
        if (!result) return;
        this.mappings.update((mappings) => ({
            ...mappings,
            [row.id]: [row.name, result.permissions],
        }));
    }

    public removeMapping(id: string) {
        this.mappings.update((mappings) => {
            const next = { ...mappings };
            delete next[id];
            return next;
        });
    }

    public async save() {
        if (this.saving() || !this.loaded()) return;
        this.saving.set(true);
        this._dialog_ref.disableClose = true;
        try {
            const result = await this._service.saveGroupAccess(this.group, {
                default_permissions: this.default_permissions(),
                ad_group_mappings: this.mappings(),
            });
            this._dialog_ref.disableClose = false;
            if (result) this._dialog_ref.close(result);
            else this.saving.set(false);
        } catch {
            this._dialog_ref.disableClose = false;
            this.saving.set(false);
        }
    }
}
