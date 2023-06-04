import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { currentUser, unique } from '@placeos/common';
import { showStaff } from 'libs/users/src/lib/staff.fn';
import { User } from 'libs/users/src/lib/user.class';
import { Calendar } from 'libs/calendar/src/lib/calendar.class';
import { queryCalendars } from 'libs/calendar/src/lib/calendar.fn';
import { of, zip } from 'rxjs';
import { catchError, map, shareReplay, switchMap, take } from 'rxjs/operators';

@Component({
    selector: 'host-select-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [ngModel]="this.item?.email"
                (ngModelChange)="setValue($event)"
                [disabled]="disabled"
                [placeholder]="
                    item?.email ? item.name || item.email : 'Select host'
                "
                i18n-placeholder
            >
                <mat-option
                    *ngFor="let user of users | async"
                    [value]="user?.email"
                    class="leading-tight"
                >
                    <div class="flex flex-col">
                        <div>{{ user.name }}</div>
                        <span class="hidden">&nbsp;|&nbsp;</span>
                        <div class="text-xs opacity-60">{{ user?.email }}</div>
                    </div>
                </mat-option>
            </mat-select>
            <mat-error i18n>Host is required</mat-error>
        </mat-form-field>
        <ng-container *ngIf="users | async"></ng-container>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HostSelectFieldComponent),
            multi: true,
        },
    ],
})
export class HostSelectFieldComponent implements ControlValueAccessor {
    public item?: User;
    public readonly users = of(1).pipe(
        switchMap(() =>
            queryCalendars().pipe(catchError((_) => of([] as Calendar[])))
        ),
        switchMap((list) =>
            zip(
                ...list.map((_) =>
                    showStaff(_.id).pipe(catchError((_) => of(null)))
                )
            )
        ),
        map((_) => unique([currentUser(), ..._], 'email')),
        shareReplay(1)
    );
    public disabled = false;

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public async setValue(email: string) {
        const users = await this.users.pipe(take(1)).toPromise();
        this.item = users?.find((_) => _.email === email);
        if (!this.item) this.item = new User({ email });
        if (this._onChange) this._onChange(this.item);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User) {
        this.item = value;
        if (!value?.email) this.item = currentUser();
    }

    public readonly registerOnChange = (fn: (_: User) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: User) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);
}
