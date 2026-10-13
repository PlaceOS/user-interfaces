import { Clipboard } from '@angular/cdk/clipboard';

import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifySuccess } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-users-list',
    template: `
        <div class="w-fit px-8">
            <mat-progress-bar
                [class.opacity-0]="!loading().includes('users')"
                class="w-full"
            />
            <simple-table
                class="block min-w-272 text-sm"
                [data]="user_list()"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.PARKING_USER' | translate,
                        content: name_template,
                    },
                    {
                        key: 'car_colour',
                        name: 'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate,
                    },
                    {
                        key: 'plate_number',
                        name: 'BOOKINGS.PARKING_PLATE_NUMBER' | translate,
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
                        size: '6rem',
                    },
                ]"
                [filter]="options().search"
                [sortable]="true"
            />
            <ng-template #name_template let-row="row" let-data="data">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.id)"
                >
                    <div class="">{{ data }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.email }}
                    </div>
                </button>
            </ng-template>
            <ng-template #denied_template let-data="data">
                @if (data) {
                    <div
                        class="bg-error text-error-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    >
                        <icon>close</icon>
                    </div>
                }
            </ng-template>
            <ng-template #plate_template let-data="data">
                <div class="p-4 font-mono text-sm uppercase">
                    {{ data }}
                    @if (!data) {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center gap-2">
                    <button
                        icon
                        default
                        matRipple
                        (click)="editUser(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_USER_EDIT' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        (click)="removeUser(row)"
                        error
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_USER_REMOVE' | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        MatProgressBarModule,
        IconComponent,
        TranslatePipe,
        SimpleTableComponent,
        MatTooltipModule,
    ],
})
export class ParkingUsersListComponent {
    private _state = inject(ParkingStateService);
    private _clipboard = inject(Clipboard);

    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly user_list = this._state.users;

    public readonly editUser = (u?) => this._state.editUser(u);
    public readonly removeUser = (u) => this._state.removeUser(u);

    public copyToClipboard(id: string) {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.PARKING_COPIED_USER'));
    }
}
