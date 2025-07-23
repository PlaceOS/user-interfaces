import { Component, forwardRef, OnInit } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

const VALID_INPUT = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '*',
    '/',
    '-',
    ',',
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Delete',
];
function listPattern(fieldPattern) {
    // One instance of `fieldPattern` plus any number of `,fieldPattern`
    return `(?:${fieldPattern})(?:,(?:${fieldPattern}))*`;
}

@Component({
    selector: 'cron-input-field',
    template: `
        <div
            class="mb-1 flex w-full items-center space-x-2 rounded border border-base-300 focus-within:border-base-content focus-within:outline-4 focus-within:outline-base-content"
            [formGroup]="form"
        >
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-none"
                placeholder="*"
                name="minute"
                formControlName="minute"
                (keydown)="preventInvalidCharacters($event)"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-none"
                placeholder="*"
                name="hour"
                formControlName="hour"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-none"
                placeholder="*"
                name="day"
                formControlName="day"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-none"
                placeholder="*"
                name="month"
                formControlName="month"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-none"
                placeholder="*"
                name="day_of_week"
                formControlName="day_of_week"
            />
        </div>
        <div class="text-xs text-error" [class.opacity-0]="form.valid">
            CRON expression is invalid
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
export class CronInputFieldComponent implements ControlValueAccessor, OnInit {
    public cron_string: string;
    public readonly form = new FormGroup({
        minute: new FormControl('*', [
            Validators.pattern(
                listPattern(
                    '(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)',
                ),
            ),
        ]),
        hour: new FormControl('*', [
            Validators.pattern(
                listPattern(
                    '(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)',
                ),
            ),
        ]),
        day: new FormControl('*', [
            Validators.pattern(
                listPattern(
                    '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]d|3[01]))?(?:/\\d{1,2})?)',
                ),
            ),
        ]),
        month: new FormControl('*', [
            Validators.pattern(
                listPattern(
                    '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)',
                ),
            ),
        ]),
        day_of_week: new FormControl('*', [
            Validators.pattern(
                listPattern(
                    '(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)',
                ),
            ),
        ]),
    });

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    private _onChange: (_: string) => void;
    private _onTouch: (_: string) => void;

    public ngOnInit(): void {
        this.form.valueChanges.subscribe((value) => {
            if (!this.form.valid) return;
            this.setValue(
                `${value.minute || '*'} ${value.hour || '*'} ${
                    value.day || '*'
                } ${value.month || '*'} ${value.day_of_week || '*'}`,
            );
        });
    }

    public setValue(value: string): void {
        this.cron_string = value;
        if (this._onChange) this._onChange(value);
    }

    public writeValue(value: string): void {
        if (!value) return;
        this.cron_string = value;
        const parts = value.split(' ');
        this.form.setValue({
            minute: parts[0] || '*',
            hour: parts[1] || '*',
            day: parts[2] || '*',
            month: parts[3] || '*',
            day_of_week: parts[4] || '*',
        });
    }

    public preventInvalidCharacters(event: KeyboardEvent): void {
        console.log('Key:', event.key);
        if (!VALID_INPUT.includes(event.key)) event.preventDefault();
    }
}
