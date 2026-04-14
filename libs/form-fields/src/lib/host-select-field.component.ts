import { CommonModule } from '@angular/common';
import { Component, forwardRef, signal } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    Calendar,
    currentUser,
    nextValueFrom,
    StaffUser,
    unique,
    User,
} from '@placeos/common';
import { queryCalendars } from 'libs/events/src/lib/calendar.fn';
import { combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'host-select-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-label>Select host</mat-label>
            <mat-select
                [ngModel]="item()?.email"
                (ngModelChange)="setValue($event)"
                [disabled]="disabled()"
                [placeholder]="
                    item()?.email
                        ? item()?.name || item()?.email
                        : 'Select host'
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
    public readonly item = signal<User | null>(null);
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
    public readonly disabled = signal(false);

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public async setValue(email: string) {
        const users = (await nextValueFrom(this.users)) || [];
        let item: User | null = users?.find((_) => _.email === email) || null;
        if (!item) item = new User({ email });
        this.item.set(item);
        if (this._onChange) this._onChange(item);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User) {
        this.item.set(value?.email ? value : currentUser());
    }

    public readonly registerOnChange = (fn: (_: User) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: User) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);
}
