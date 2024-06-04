import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'parking-users-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[76rem] block text-sm"
                [data]="user_list"
                [columns]="[
                    { key: 'name', name: 'Name' },
                    { key: 'email', name: 'Email' },
                    { key: 'car_color', name: 'Car Colour' },
                    {
                        key: 'plate_number',
                        name: 'Plate Number',
                        content: plate_template
                    },
                    { key: 'phone', name: 'Phone' },
                    { key: 'notes', name: 'Notes' },
                    {
                        key: 'deny',
                        name: 'Deny',
                        size: '4.5rem',
                        content: denied_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '7.5rem'
                    }
                ]"
                [filter]="(options | async)?.search"
                [sortable]="true"
            ></simple-table>
            <ng-template #denied_template let-data="data">
                <div
                    *ngIf="data"
                    class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto"
                >
                    <app-icon>close</app-icon>
                </div>
            </ng-template>
            <ng-template #plate_template let-data="data">
                <div class="p-4 font-mono text-sm">
                    {{ data }}
                    <span *ngIf="!data" class="opacity-30">N/A</span>
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div
                    class="w-full flex items-center justify-end space-x-2 px-4"
                >
                    <button
                        icon
                        matRipple
                        (click)="editUser(row)"
                        matTooltip="Edit User"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        icon
                        (click)="removeUser(row)"
                        class="text-error"
                        matTooltip="Remove User"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class ParkingUsersListComponent {
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;

    public readonly new_items = new BehaviorSubject<FormGroup[]>([]);
    public readonly user_list = this._state.users;

    public readonly editUser = (u?) => this._state.editUser(u);
    public readonly removeUser = (u) => this._state.removeUser(u);

    constructor(private _state: ParkingStateService) {}
}
