import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { i18n, notifySuccess } from '@placeos/common';

@Component({
    selector: 'parking-users-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('users')"
            class="w-full"
        ></mat-progress-bar>
        <simple-table
            class="min-w-[68rem] block text-sm"
            [data]="user_list"
            [columns]="[
                {
                    key: 'name',
                    name: 'APP.CONCIERGE.PARKING_USER' | translate,
                    content: name_template,
                },
                {
                    key: 'car_color',
                    name: 'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate,
                },
                {
                    key: 'plate_number',
                    name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                    content: plate_template,
                },
                { key: 'notes', name: 'FORM.NOTES' | translate },
                {
                    key: 'deny',
                    name: 'APP.CONCIERGE.PARKING_USER_DENY' | translate,
                    size: '4.5rem',
                    content: denied_template,
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    sortable: false,
                    size: '6.5rem',
                },
            ]"
            [filter]="(options | async)?.search"
            [sortable]="true"
        ></simple-table>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="text-[0.625rem] opacity-30 font-mono">
                    {{ row.email }}
                </div>
            </button>
        </ng-template>
        <ng-template #denied_template let-data="data">
            <div
                *ngIf="data"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto"
            >
                <app-icon>close</app-icon>
            </div>
        </ng-template>
        <ng-template #plate_template let-data="data">
            <div class="p-4 font-mono text-sm uppercase">
                {{ data }}
                <span *ngIf="!data" class="opacity-30">
                    {{ 'COMMON.EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center space-x-2 mx-auto">
                <button
                    icon
                    matRipple
                    (click)="editUser(row)"
                    [matTooltip]="'APP.CONCIERGE.PARKING_USER_EDIT' | translate"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    (click)="removeUser(row)"
                    class="text-error"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_USER_REMOVE' | translate
                    "
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
        <div class="w-full h-20"></div>
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

    public copyToClipboard(id: string) {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.PARKING_COPIED_USER'));
    }

    constructor(
        private _state: ParkingStateService,
        private _clipboard: Clipboard,
    ) {}
}
