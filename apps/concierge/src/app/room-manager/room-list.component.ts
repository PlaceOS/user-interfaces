import { Component } from '@angular/core';
import { RoomManagementService } from './room-management.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { notifySuccess } from '@placeos/common';

@Component({
    selector: 'room-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <custom-table
                class="block min-w-[48rem] w-full h-full"
                [dataSource]="rooms"
                [columns]="[
                    'display_name',
                    'zones',
                    'capacity',
                    'type',
                    'bookable',
                    'actions'
                ]"
                [display_column]="[
                    'Room Name',
                    'Level',
                    'Capacity',
                    'Room Type',
                    'Bookable',
                    ' '
                ]"
                [column_size]="['flex', '8r', '6r', '8r', '6r', '3.75r']"
                [template]="{
                    display_name: name_template,
                    bookable: bool_template,
                    zones: level_template,
                    actions: action_template
                }"
                empty="No rooms for selected level or building"
            ></custom-table>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <span
                [matTooltip]="row.id"
                class="underline"
                (click)="copyToClipboard(row.id)"
                >{{ data }}</span
            >
        </ng-template>
        <ng-template #level_template let-data="data">
            {{ (data | level)?.display_name || (data | level)?.name }}
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
            <div class="w-full flex justify-end space-x-2">
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
