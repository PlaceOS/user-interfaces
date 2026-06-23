import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';

import { RegionManagementService } from './region-management.service';

import { MatMenuModule } from '@angular/material/menu';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { BookingPanelSettingsModalComponent } from '../ui/app-settings/booking-panel-settings-modal.component';
import { ConciergeSettingsFormModalComponent } from '../ui/app-settings/concierge-settings-form-modal.component';
import { VisitorKioskSettingsFormModalComponent } from '../ui/app-settings/visitor-kiosk-settings-form-modal.component';
import { WorkplaceSettingsFormModalComponent } from '../ui/app-settings/workplace-settings-form-modal.component';

@Component({
    selector: 'region-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-lg text-sm"
                [data]="regions()"
                [empty_message]="'APP.CONCIERGE.REGIONS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.REGIONS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building_count',
                        name: 'APP.CONCIERGE.REGIONS_BUILDINGS' | translate,
                        size: '8rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex w-full justify-end space-x-2 p-1">
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <mat-menu #app_settings_menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="editWorkplaceSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editConciergeSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editBookingPanelSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editVisitorKioskSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">qr_code</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <button mat-menu-item (click)="editRegion(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div>
                                {{ 'APP.CONCIERGE.REGIONS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeRegion(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error text-xl"> delete </icon>
                            <div>
                                {{ 'APP.CONCIERGE.REGIONS_REMOVE' | translate }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatMenuModule,
    ],
})
export class RegionListComponent {
    private _manager = inject(RegionManagementService);
    private _clipboard = inject(Clipboard);
    private _dialog = inject(MatDialog);

    public readonly regions = this._manager.filtered_regions;

    public readonly editRegion = (region) => this._manager.editRegion(region);
    public readonly removeRegion = (region) =>
        this._manager.removeRegion(region);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess('Region ID copied to clipboard.');
    };

    public editWorkplaceSettings(zone) {
        this._dialog.open(WorkplaceSettingsFormModalComponent, {
            data: { zone },
        });
    }

    public editConciergeSettings(zone) {
        this._dialog.open(ConciergeSettingsFormModalComponent, {
            data: { zone },
        });
    }

    public editBookingPanelSettings(zone) {
        this._dialog.open(BookingPanelSettingsModalComponent, {
            data: { zone },
        });
    }

    public editVisitorKioskSettings(zone) {
        this._dialog.open(VisitorKioskSettingsFormModalComponent, {
            data: { zone },
        });
    }
}
