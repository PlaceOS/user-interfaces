import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    forwardRef,
    resource,
    signal,
} from '@angular/core';
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
    StaffUser,
    unique,
    User,
} from '@placeos/common';
import { queryCalendars } from 'libs/events/src/lib/calendar.fn';

@Component({
    selector: 'host-select-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
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
                @for (user of users(); track user) {
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
    private readonly _calendars = resource({
        params: () => true,
        loader: () => queryCalendars().catch(() => [] as Calendar[]),
    });
    public readonly users = computed(() => {
        const list = this._calendars.value() ?? [];
        const mapped = list
            .filter((_) => _.can_edit)
            .map((_) =>
                _.primary
                    ? currentUser()
                    : { id: _.id, email: _.id, name: _.summary || _.id },
            )
            .map((_) => new StaffUser(_));
        return unique([currentUser(), ...mapped], 'email').sort((a, b) =>
            a.name.localeCompare(b.name),
        );
    });
    public readonly disabled = signal(false);

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(email: string) {
        const users = this.users() || [];
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
