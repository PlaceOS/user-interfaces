import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { currentUser, nextValueFrom, unique } from '@placeos/common';
import { Calendar } from 'libs/calendar/src/lib/calendar.class';
import { queryCalendars } from 'libs/calendar/src/lib/calendar.fn';
import { StaffUser, User } from 'libs/users/src/lib/user.class';
import { combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

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
            >
                @for (user of users | async; track user) {
                    <mat-option [value]="user?.email" class="leading-tight">
                        <div class="flex flex-col">
                            <div>{{ user.name }}</div>
                            <span class="hidden">&nbsp;|&nbsp;</span>
                            <div class="text-xs opacity-60">
                                {{ user?.email }}
                            </div>
                        </div>
                    </mat-option>
                }
            </mat-select>
            <mat-error>Host is required</mat-error>
        </mat-form-field>
        @if (users | async) {}
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HostSelectFieldComponent),
            multi: true,
        },
    ],
    imports: [MatFormFieldModule, MatSelectModule, CommonModule, FormsModule],
})
export class HostSelectFieldComponent implements ControlValueAccessor {
    public item?: User;
    public readonly users = combineLatest([
        queryCalendars().pipe(catchError(() => of([] as Calendar[]))),
    ]).pipe(
        map(([list]) =>
            list
                .filter((_) => _.can_edit)
                .map((_) =>
                    _.primary
                        ? currentUser()
                        : {
                              id: _.id,
                              email: _.id,
                              name: _.summary || _.id,
                          },
                ),
        ),
        map((l) => l.map((_) => new StaffUser(_))),
        map((_) => unique([currentUser(), ..._], 'email')),
        shareReplay(1),
    );
    public disabled = false;

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public async setValue(email: string) {
        const users = (await nextValueFrom(this.users)) || [];
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
