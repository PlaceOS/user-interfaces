import {
    Component,
    effect,
    forwardRef,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { form, FormField, pattern } from '@angular/forms/signals';

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
            class="border-base-300 focus-within:border-base-content focus-within:outline-base-content mb-1 flex w-full items-center space-x-2 rounded-sm border focus-within:outline-4"
            role="group"
            aria-label="CRON expression fields"
        >
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                aria-label="CRON minute field"
                [formField]="form.minute"
                (keydown)="preventInvalidCharacters($event)"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                aria-label="CRON hour field"
                [formField]="form.hour"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                aria-label="CRON day of month field"
                [formField]="form.day"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                aria-label="CRON month field"
                [formField]="form.month"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                aria-label="CRON day of week field"
                [formField]="form.day_of_week"
            />
        </div>
        <div class="text-error text-xs" [class.opacity-0]="form().valid()">
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
    imports: [FormField],
})
export class CronInputFieldComponent implements ControlValueAccessor {
    public cron_string: string;
    public readonly model = signal({
        minute: '*',
        hour: '*',
        day: '*',
        month: '*',
        day_of_week: '*',
    });
    public readonly form = form(this.model, (p) => {
        pattern(
            p.minute,
            new RegExp(
                `^${listPattern(
                    '(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)',
                )}$`,
            ),
        );
        pattern(
            p.hour,
            new RegExp(
                `^${listPattern(
                    '(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)',
                )}$`,
            ),
        );
        pattern(
            p.day,
            new RegExp(
                `^${listPattern(
                    '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]d|3[01]))?(?:/\\d{1,2})?)',
                )}$`,
            ),
        );
        pattern(
            p.month,
            new RegExp(
                `^${listPattern(
                    '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)',
                )}$`,
            ),
        );
        pattern(
            p.day_of_week,
            new RegExp(
                `^${listPattern(
                    '(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)',
                )}$`,
            ),
        );
    });
    private readonly _form_change = effect(() => this.updateValueFromForm());

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    private _onChange: (_: string) => void;
    private _onTouch: (_: string) => void;

    public updateValueFromForm(): void {
        const value = this.model();
        if (!this.form().valid()) return;
        this.setValue(
            `${value.minute || '*'} ${value.hour || '*'} ${
                value.day || '*'
            } ${value.month || '*'} ${value.day_of_week || '*'}`,
        );
    }

    public setValue(value: string): void {
        this.cron_string = value;
        if (this._onChange) this._onChange(value);
    }

    public writeValue(value: string): void {
        if (!value) return;
        this.cron_string = value;
        const parts = value.split(' ');
        this.model.set({
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
