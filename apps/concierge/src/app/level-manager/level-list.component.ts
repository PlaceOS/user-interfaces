import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { i18n, notifySuccess } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { BookingPanelSettingsModalComponent } from '../ui/app-settings/booking-panel-settings-modal.component';
import { LevelManagementService } from './level-management.service';

@Component({
    selector: 'level-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-3xl text-sm"
                [data]="levels()"
                [empty_message]="'APP.CONCIERGE.LEVELS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.LEVELS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building',
                        name: 'RESOURCE.BUILDING' | translate,
                        size: '16rem',
                    },
                    {
                        key: 'parking',
                        name: 'RESOURCE.PARKING' | translate,
                        content: parking_template,
                        size: '5rem',
                        sortable: false,
                    },
                    {
                        key: 'room_count',
                        name: 'RESOURCE.ROOMS' | translate,
                        size: '6rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
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
        <ng-template #parking_template let-row="row">
            @if (row.tags?.includes('parking')) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center gap-2 p-2">
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LEVELS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        [disabled]="!row.map_id"
                        (click)="editLevelMap(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">map</icon>
                            <span>Edit SVG map</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        (click)="editBookingPanelSettings(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-2xl"
                            >
                                top_panel_open
                            </icon>
                            <span>{{
                                'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl"> delete </icon>
                            <span>
                                {{ 'APP.CONCIERGE.LEVELS_REMOVE' | translate }}
                            </span>
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
export class LevelListComponent {
    private _manager = inject(LevelManagementService);
    private _clipboard = inject(Clipboard);
    private _dialog = inject(MatDialog);

    public readonly levels = this._manager.filtered_levels;

    public readonly editLevel = (level) => this._manager.editLevel(level);
    public readonly editLevelMap = (level) => this._manager.editLevelMap(level);
    public readonly removeLevel = (level) => this._manager.removeLevel(level);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.LEVELS_COPIED_ID'));
    };

    public editBookingPanelSettings(level) {
        this._dialog.open(BookingPanelSettingsModalComponent, {
            data: { zone: level },
        });
    }
}
