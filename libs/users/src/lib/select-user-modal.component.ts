import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { searchStaff } from './staff.fn';
import { StaffUser } from './user.class';
import { queryUsers } from '@placeos/ts-client';

@Component({
    selector: `select-user-modal`,
    template: ` <div class="w-[28rem]">
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{ 'COMMON.SELECT_USER_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="px-2 pb-2 h-[60vh] overflow-auto">
            <mat-form-field
                class="sticky top-0 no-subscript mb-2 w-full bg-base-100 z-10"
                appearance="outline"
            >
                <app-icon class="relative -left-2 text-2xl" matPrefix
                    >search</app-icon
                >
                <input
                    matInput
                    [placeholder]="'COMMON.SELECT_USER_SEARCH' | translate"
                    [ngModel]="search.value"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <div class="relative w-full space-y-2 z-0">
                <button
                    class="p-2 rounded border border-base-300 hover:bg-base-200 w-full text-left"
                    matRipple
                    *ngFor="let user of users | async"
                    (click)="select(user)"
                >
                    <div>{{ user.name }}</div>
                    <div class="text-xs opacity-30">{{ user.email }}</div>
                </button>
                <div
                    class="w-full h-32 flex items-center justify-center p-8 opacity-30"
                    *ngIf="!(users | async).length"
                >
                    {{
                        (search.value
                            ? 'COMMON.SELECT_USER_EMPTY_MATCHES'
                            : 'COMMON.SELECT_USER_EMPTY'
                        ) | translate
                    }}
                </div>
            </div>
        </main>
    </div>`,
    styles: [``],
    standalone: false,
})
export class SelectUserModalComponent {
    public readonly search = new BehaviorSubject('');

    public readonly users = this.search.pipe(
        debounceTime(300),
        switchMap((s) =>
            queryUsers({ q: s }).pipe(
                map((o) => o.data),
                catchError(() => of([])),
            ),
        ),
        startWith([]),
    );

    constructor(private _dialog_ref: MatDialogRef<SelectUserModalComponent>) {}

    public select(user: StaffUser) {
        this._dialog_ref.close(user);
    }
}
