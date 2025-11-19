import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifySuccess } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { BehaviorSubject } from 'rxjs';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-users-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!loading()?.includes('users')"
            class="w-full"
        />
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[68rem] text-sm"
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
            />
        </div>
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-error text-2xl text-error-content"
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
            <div class="mx-auto flex items-center space-x-2">
                <button
                    icon
                    matRipple
                    (click)="editUser(row)"
                    [matTooltip]="'APP.CONCIERGE.PARKING_USER_EDIT' | translate"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    (click)="removeUser(row)"
                    class="text-error"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_USER_REMOVE' | translate
                    "
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatProgressBarModule,
        SimpleTableComponent,
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
    public readonly loading = toSignal(this._state.loading);

    public readonly new_items = new BehaviorSubject<FormGroup[]>([]);
    public readonly user_list = this._state.users;

    public readonly editUser = (u?) => this._state.editUser(u);
    public readonly removeUser = (u) => this._state.removeUser(u);

    public copyToClipboard(id: string) {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.PARKING_COPIED_USER'));
    }
}
