import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifySuccess, SettingsService } from '@placeos/common';
import {
    IconComponent,
    LevelPipe,
    SanitizePipe,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { RoomManagementService } from './room-management.service';

@Component({
    selector: 'room-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-6xl text-sm"
                [data]="rooms"
                empty_message="No rooms for selected level or building"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.ROOMS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'zones',
                        name: 'RESOURCE.LEVEL' | translate,
                        size: '10rem',
                        content: level_template,
                    },
                    {
                        key: 'capacity',
                        name: 'COMMON.CAPACITY' | translate,
                        size: '6rem',
                    },
                    {
                        key: 'type',
                        name: 'APP.CONCIERGE.ROOMS_TYPE' | translate,
                        size: '8rem',
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: feature_list_template,
                        size: '16rem',
                    },
                    {
                        key: 'approval',
                        name: 'COMMON.APPROVAL' | translate,
                        size: '5.5rem',
                        content: bool_template,
                        sortable: false,
                    },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        size: '5.5rem',
                        content: bool_template,
                        sortable: false,
                    },
                    {
                        key: 'alert',
                        name: 'APP.CONCIERGE.ROOMS_ALERT' | translate,
                        size: '5.5rem',
                        content: alert_template,
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
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ (data | level)?.display_name || (data | level)?.name }}
            </div>
        </ng-template>
        <ng-template #feature_list_template let-data="data">
            <div class="flex flex-wrap p-2">
                @for (feature of data || []; track feature) {
                    <span
                        class="bg-info text-info-content m-1 rounded-2xl px-2 py-1 font-mono text-xs"
                    >
                        {{ feature }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            @if (data) {
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                >
                    <icon>{{ data ? 'done' : 'close' }}</icon>
                </div>
            }
        </ng-template>
        <ng-template #alert_template let-data="data">
            @if (data) {
                <div
                    [class.bg-warning]="data.status === 'warn'"
                    [class.bg-error]="data.status === 'closed'"
                    [class.bg-info]="data.status === 'info'"
                    [class.text-warning-content]="data.status === 'warn'"
                    [class.text-error-content]="data.status === 'closed'"
                    [class.text-info-content]="data.status === 'info'"
                    [matTooltip]="data.message"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                >
                    <icon>{{
                        data.status === 'warn'
                            ? 'warning'
                            : data.status === 'info'
                              ? 'info'
                              : 'close'
                    }}</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded-sm"
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editRoom(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">edit</icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_EDIT' | translate
                        }}</span>
                    </div>
                </button>
                <button mat-menu-item (click)="setRoomAlert(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">notification_important</icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_SET_ALERT' | translate
                        }}</span>
                    </div>
                </button>
                <button mat-menu-item (click)="viewBookingHistory(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">history</icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_VIEW_HISTORY' | translate
                        }}</span>
                    </div>
                </button>
                @if (row.support_url || control_path()) {
                    <a
                        mat-menu-item
                        [href]="
                            row.support_url || control_path() + row.id
                                | sanitize: 'url'
                        "
                        target="_blank"
                        ref="noopener noreferrer"
                    >
                        <div class="flex items-center space-x-2">
                            <icon
                                class="text-xl"
                                className="material-symbols-rounded"
                                >tv_remote</icon
                            >
                            <span>{{
                                'APP.CONCIERGE.ROOMS_VIEW_CONTROL' | translate
                            }}</span>
                        </div>
                    </a>
                }
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        SimpleTableComponent,
        IconComponent,
        MatMenuModule,
        MatTooltipModule,
        SanitizePipe,
        TranslatePipe,
        LevelPipe,
    ],
})
export class RoomListComponent {
    private _manager = inject(RoomManagementService);
    private _clipboard = inject(Clipboard);
    private _settings = inject(SettingsService);

    public readonly rooms = this._manager.filtered_rooms;
    public readonly control_path = this._settings.signal(
        'app.control_path',
        '',
        true,
    );

    public readonly editRoom = (room) => this._manager.editRoom(room);
    public readonly setRoomAlert = (room) => this._manager.setRoomAlert(room);
    public readonly viewBookingHistory = (room) =>
        this._manager.viewBookingHistory(room);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.ROOMS_COPIED_ID'));
    };
}
