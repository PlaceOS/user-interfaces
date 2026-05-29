import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceGroupZone } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';
import {
    groupPermissionLabels,
    SignageGroupPermissionsModalComponent,
} from './signage-group-permissions-modal.component';
import { SignageGroupZoneSelectModalComponent } from './signage-group-zone-select-modal.component';

@Component({
    selector: 'signage-group-zones',
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
                    <icon class="text-lg">layers</icon>
                    {{
                        'SIGNAGE_MANAGER.ZONES_COUNT'
                            | translate: { count: zones().length } : zones().length
                    }}
                </h5>
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                    [matTooltip]="'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_ZONE_ARIA' | translate
                    "
                    (click)="addZone()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
                @if (zones().length) {
                    @for (row of zones(); track row.zone_id) {
                        <div
                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3"
                        >
                            <icon class="shrink-0 text-xl opacity-60"
                                >layers</icon
                            >
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{
                                        row.zone?.display_name ||
                                            row.zone?.name ||
                                            row.zone_id
                                    }}
                                </div>
                                <div
                                    class="text-base-content/70 mt-1 truncate text-xs"
                                >
                                    @let labels =
                                        permissionLabels(row.permissions).join(
                                            ', '
                                        ) || '';
                                    @if (labels) {
                                        {{ labels }}
                                    } @else {
                                        <span class="italic">{{
                                            'SIGNAGE_MANAGER.DEFAULT_PERMISSIONS'
                                                | translate
                                        }}</span>
                                    }
                                    @if (row.deny) {
                                        <span class="text-error">
                                            {{
                                                'SIGNAGE_MANAGER.DENIED'
                                                    | translate
                                            }}</span
                                        >
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.EDIT_ZONE_PERMS' | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.EDIT_ZONE_PERMS' | translate
                                "
                                (click)="editZonePermissions(row)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_ZONE' | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.REMOVE_ZONE' | translate
                                "
                                (click)="removeZone(row)"
                            >
                                <icon class="text-error">close</icon>
                            </button>
                        </div>
                    }
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">layers_clear</icon>
                        <p class="text-sm">
                            {{ 'SIGNAGE_MANAGER.NO_ZONES_ASSIGNED' | translate }}
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
    imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe],
})
export class SignageGroupZonesComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly zones = toSignal(this._service.managed_group_zones, {
        initialValue: [] as PlaceGroupZone[],
    });
    public readonly permissionLabels = groupPermissionLabels;

    public async addZone() {
        const zone = await lastValueFrom(
            this._dialog
                .open(SignageGroupZoneSelectModalComponent, {
                    data: {
                        exclude_ids: this.zones().map((item) => item.zone_id),
                    },
                    panelClass: 'mobile-fullscreen',
                })
                .afterClosed(),
        );
        if (zone) await this._service.addManagedGroupZone(zone);
    }

    public async editZonePermissions(row: PlaceGroupZone) {
        const result = await lastValueFrom(
            this._dialog
                .open(SignageGroupPermissionsModalComponent, {
                    data: {
                        title: i18n('SIGNAGE_MANAGER.ZONE_PERMISSIONS'),
                        permissions: row.permissions,
                        deny: row.deny,
                        show_deny: true,
                    },
                })
                .afterClosed(),
        );
        if (result) {
            await this._service.updateManagedGroupZone(
                row,
                result.permissions,
                result.deny,
            );
        }
    }

    public removeZone(row: PlaceGroupZone) {
        this._service.removeManagedGroupZone(row);
    }
}
