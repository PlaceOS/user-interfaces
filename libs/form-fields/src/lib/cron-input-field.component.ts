import { Component, DestroyRef, forwardRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

const DEFAULT_CRON = '* * * * *';
const ALLOWED_KEYS = new Set([
    'Backspace',
    'Delete',
    'Tab',
    'Enter',
    'Escape',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
]);
const CRON_CHARACTER = /^[\d*,/\-]$/;

function listPattern(field_pattern: string) {
    return `(?:${field_pattern})(?:,(?:${field_pattern}))*`;
}

function control(pattern: string) {
    return new FormControl('*', [
        Validators.required,
        Validators.pattern(pattern),
    ]);
}

@Component({
    selector: 'cron-input-field',
    template: `
        <div class="space-y-2">
            <div class="grid grid-cols-5 gap-2" [formGroup]="form">
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Minute</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="minute"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="minute"
                        aria-label="Cron minute"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Hour</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="hour"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="hour"
                        aria-label="Cron hour"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Day</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="day"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="day"
                        aria-label="Cron day of month"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Month</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="month"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="month"
                        aria-label="Cron month"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Weekday</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="day_of_week"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="day_of_week"
                        aria-label="Cron day of week"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
            </div>
            <div class="flex flex-wrap gap-2">
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('* * * * *')"
                >
                    Every minute
                </button>
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('0 * * * *')"
                >
                    Hourly
                </button>
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('0 9 * * *')"
                >
                    Daily 9am
                </button>
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('0 9 * * 1-5')"
                >
                    Weekdays 9am
                </button>
            </div>
            @if (show_error) {
                <div class="text-error text-xs">
                    Enter a valid 5-part CRON expression.
                </div>
            }
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CronInputFieldComponent),
            multi: true,
        },
    ],
    imports: [ReactiveFormsModule],
})
export class CronInputFieldComponent implements ControlValueAccessor {
    private readonly _destroy_ref = inject(DestroyRef);

    public cron_string = DEFAULT_CRON;
    public readonly form = new FormGroup({
        minute: control(
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)',
            ),
        ),
        hour: control(
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)',
            ),
        ),
        day: control(
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]\\d|3[01]))?(?:/\\d{1,2})?)',
            ),
        ),
        month: control(
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)',
            ),
        ),
        day_of_week: control(
            listPattern('(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)'),
        ),
    });

    public get show_error() {
        return this.form.invalid && (this.form.dirty || this.form.touched);
    }

    private _onChange: (value: string) => void = () => undefined;
    private _onTouched: () => void = () => undefined;

    constructor() {
        this.form.valueChanges
            .pipe(takeUntilDestroyed(this._destroy_ref))
            .subscribe(() => {
                if (this.form.invalid) return;
                const value = this._formValue();
                this.cron_string = value;
                this._onChange(value);
            });
    }

    public writeValue(value: string): void {
        this._writeCron(value || DEFAULT_CRON, false);
    }

    public registerOnChange(fn: (value: string) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    public setDisabledState(disabled: boolean): void {
        if (disabled) {
            this.form.disable({ emitEvent: false });
        } else {
            this.form.enable({ emitEvent: false });
        }
    }

    public setPreset(value: string): void {
        this._writeCron(value, true);
        this.markTouched();
    }

    public markTouched(): void {
        this.form.markAllAsTouched();
        this._onTouched();
    }

    public preventInvalidCharacters(event: KeyboardEvent): void {
        if (
            event.ctrlKey ||
            event.metaKey ||
            ALLOWED_KEYS.has(event.key) ||
            CRON_CHARACTER.test(event.key)
        ) {
            return;
        }
        event.preventDefault();
    }

    private _writeCron(value: string, emit_event: boolean): void {
        const [minute, hour, day, month, day_of_week] = value
            .trim()
            .split(/\s+/);
        this.form.setValue(
            {
                minute: minute || '*',
                hour: hour || '*',
                day: day || '*',
                month: month || '*',
                day_of_week: day_of_week || '*',
            },
            { emitEvent: emit_event },
        );
        this.cron_string = this._formValue();
    }

    private _formValue(): string {
        const value = this.form.getRawValue();
        return `${value.minute || '*'} ${value.hour || '*'} ${
            value.day || '*'
        } ${value.month || '*'} ${value.day_of_week || '*'}`;
    }
}
