import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'parking-users-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <custom-table
                class="block min-w-[76rem]"
                [dataSource]="user_list"
                [columns]="[
                    'name',
                    'email',
                    'car_colour',
                    'plate_number',
                    'phone',
                    'notes',
                    'deny',
                    'actions'
                ]"
                [display_column]="['', '', '', '', '', '', '', ' ']"
                [column_size]="[
                    '10r',
                    'flex',
                    '10r',
                    '10r',
                    '10r',
                    '10r',
                    '3.5r',
                    '6r'
                ]"
                [template]="{
                    actions: action_template,
                    deny: denied_template
                }"
                [filter]="(options | async).search"
                [class.opacity-50]="(loading | async)?.includes('users')"
            ></custom-table>
            <ng-template #denied_template let-data="data">
                <div
                    *ngIf="data"
                    class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto"
                >
                    <app-icon>close</app-icon>
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="w-full flex items-center justify-end space-x-2">
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
