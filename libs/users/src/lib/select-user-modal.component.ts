import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { queryUsers } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { StaffUser } from './user.class';

@Component({
    selector: `select-user-modal`,
    template: ` <div class="w-[28rem]">
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.SELECT_USER_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[60vh] overflow-auto px-2 pb-2">
            <mat-form-field
                class="no-subscript sticky top-0 z-10 mb-2 w-full bg-base-100"
                appearance="outline"
            >
                <icon class="relative -left-2 text-2xl" matPrefix>search</icon>
                <input
                    matInput
                    [placeholder]="'COMMON.SELECT_USER_SEARCH' | translate"
                    [ngModel]="search.value"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <div class="relative z-0 w-full space-y-2">
                <button
                    class="w-full rounded border border-base-300 p-2 text-left hover:bg-base-200"
                    matRipple
                    *ngFor="let user of users | async"
                    (click)="select(user)"
                >
                    <div>{{ user.name }}</div>
                    <div class="text-xs opacity-30">{{ user.email }}</div>
                </button>
                <div
                    class="flex h-32 w-full items-center justify-center p-8 opacity-30"
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
