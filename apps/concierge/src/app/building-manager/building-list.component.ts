import { Component } from '@angular/core';
import { BuildingManagementService } from './building-management.service';
import { i18n, notifySuccess } from '@placeos/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatDialog } from '@angular/material/dialog';

import { BookingPanelSettingsModalComponent } from '../ui/app-settings/booking-panel-settings-modal.component';
import { WorkplaceSettingsFormModalComponent } from '../ui/app-settings/workplace-settings-form-modal.component';
import { ConciergeSettingsFormModalComponent } from '../ui/app-settings/concierge-settings-form-modal.component';
import { VisitorKioskSettingsFormModalComponent } from '../ui/app-settings/visitor-kiosk-settings-form-modal.component';

@Component({
    selector: 'building-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[62rem] w-full block text-sm"
                [data]="buildings"
                [empty_message]="'APP.CONCIERGE.BUILDINGS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.BUILDINGS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'location',
                        name: 'Location',
                        size: '16rem',
                    },
                    {
                        key: 'timezone',
                        name: 'COMMON.TIMEZONE' | translate,
                        size: '14rem',
                        content: timezone_template,
                    },
                    {
                        key: 'region',
                        name: 'RESOURCE.REGION' | translate,
                        size: '11rem',
                        sortable: false,
                    },
                    {
                        key: 'level_count',
                        name: 'APP.CONCIERGE.BUILDINGS_LEVELS' | translate,
                        size: '6rem',
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
            <div class="w-full h-20"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="text-[0.625rem] opacity-30 font-mono">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #timezone_template let-data="data">
            <div class="p-4 font-mono text-sm">{{ data }}</div>
        </ng-template>
        <ng-template #level_template let-data="data">
            {{ (data | level)?.display_name || (data | level)?.name }}
        </ng-template>
        <ng-template #image_template let-data="data">
            <img
                auth
                *ngIf="data.length"
                [source]="data[0]"
                class="max-h-[3rem] max-w-[8rem]"
            />
            <span *ngIf="!data.length" class="opacity-30">{{
                'COMMON.IMAGES_EMPTY' | translate
            }}</span>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-center space-x-2 p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="menu"
                >
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit_square</app-icon>
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
                                <app-icon class="text-xl"
                                    >meeting_room</app-icon
                                >
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
                                <app-icon class="text-xl"
                                    >support_agent</app-icon
                                >
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
                                <app-icon class="text-xl">event_busy</app-icon>
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
                                <app-icon class="text-xl">qr_code</app-icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <button mat-menu-item (click)="editBuilding(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit</app-icon>
                            <div>
                                {{ 'APP.CONCIERGE.BUILDINGS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setAutoRelease(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                release_alert
                            </app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_AUTO_RELEASE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setInduction(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                badge
                            </app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_INDUCTION'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setSupportIssueTypes(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                support_agent
                            </app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeBuilding(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <app-icon class="text-error text-xl">
                                delete
                            </app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_REMOVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class BuildingListComponent {
    public readonly buildings = this._manager.filtered_buildings;
    public settings = {};

    public readonly editBuilding = (building) =>
        this._manager.editBuilding(building);

    public readonly editBuildingMetadata = (building) =>
        this._manager.editBuildingMetadata(building);

    public readonly removeBuilding = (building) =>
        this._manager.removeBuilding(building);

    public readonly setAutoRelease = (building) =>
        this._manager.setAutoRelease(building);

    public readonly setInduction = (building) =>
        this._manager.setInduction(building);

    public readonly setSupportIssueTypes = (building) =>
        this._manager.setSupportIssueTypes(building);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.BUILDINGS_COPIED_ID'));
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

    constructor(
        private _manager: BuildingManagementService,
        private _clipboard: Clipboard,
        private _dialog: MatDialog,
    ) {}
}
