import { Component } from '@angular/core';
import { RoomManagementService } from './room-management.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { notifySuccess } from '@placeos/common';

@Component({
    selector: 'room-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[48rem] block text-sm"
                [data]="rooms"
                empty_message="No rooms for selected level or building"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'Room Name',
                        content: name_template
                    },
                    {
                        key: 'zones',
                        name: 'Level',
                        size: '10rem',
                        content: level_template
                    },
                    { key: 'capacity', name: 'Capacity', size: '6rem' },
                    { key: 'type', name: 'Room Type', size: '8rem' },
                    {
                        key: 'bookable',
                        name: 'Bookable',
                        size: '5.5rem',
                        content: bool_template,
                        sortable: false
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false
                    }
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
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ (data | level)?.display_name || (data | level)?.name }}
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div
                [class.bg-error]="!data"
                [class.bg-success]="data"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl text-white mx-auto"
            >
                <app-icon>{{ data ? 'done' : 'close' }}</app-icon>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2 p-2">
                <button
                    btn
                    icon
                    matRipple
                    matTooltip="Edit Room"
                    (click)="editRoom(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RoomListComponent {
    public readonly rooms = this._manager.filtered_rooms;

    public readonly editRoom = (room) => this._manager.editRoom(room);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess('Room ID copied to clipboard.');
    };

    constructor(
        private _manager: RoomManagementService,
        private _clipboard: Clipboard
    ) {}
}
