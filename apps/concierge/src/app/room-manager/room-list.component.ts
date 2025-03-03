import { Component } from '@angular/core';
import { RoomManagementService } from './room-management.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { i18n, notifySuccess, SettingsService } from '@placeos/common';

@Component({
    selector: 'room-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[48rem] text-sm"
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
        <ng-template #bool_template let-data="data">
            <div
                [class.bg-error]="!data"
                [class.bg-success]="data"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
            >
                <app-icon>{{ data ? 'done' : 'close' }}</app-icon>
            </div>
        </ng-template>
        <ng-template #alert_template let-data="data">
            <div
                [class.bg-warning]="data.status === 'warn'"
                [class.bg-error]="data.status === 'closed'"
                [class.bg-info]="data.status === 'info'"
                *ngIf="data"
                [matTooltip]="data.message"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
            >
                <app-icon>{{
                    data.status === 'warn'
                        ? 'warning'
                        : data.status === 'info'
                          ? 'info'
                          : 'close'
                }}</app-icon>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="menu"
                >
                    <app-icon>more_vert</app-icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editRoom(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl">edit</app-icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_EDIT' | translate
                        }}</span>
                    </div>
                </button>
                <button mat-menu-item (click)="setRoomAlert(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl"
                            >notification_important</app-icon
                        >
                        <span>{{
                            'APP.CONCIERGE.ROOMS_SET_ALERT' | translate
                        }}</span>
                    </div>
                </button>
                <a
                    mat-menu-item
                    [href]="
                        row.support_url || control_path + row.id
                            | sanitize: 'url'
                    "
                    *ngIf="row.support_url || control_path"
                    target="_blank"
                    ref="noopener noreferrer"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon
                            class="text-xl"
                            className="material-symbols-rounded"
                            >tv_remote</app-icon
                        >
                        <span>{{
                            'APP.CONCIERGE.ROOMS_VIEW_CONTROL' | translate
                        }}</span>
                    </div>
                </a>
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class RoomListComponent {
    public readonly rooms = this._manager.filtered_rooms;

    public readonly editRoom = (room) => this._manager.editRoom(room);
    public readonly setRoomAlert = (room) => this._manager.setRoomAlert(room);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.ROOMS_COPIED_ID'));
    };

    public get control_path() {
        return this._settings.get('app.control_path') || '';
    }

    constructor(
        private _manager: RoomManagementService,
        private _clipboard: Clipboard,
        private _settings: SettingsService,
    ) {}
}
