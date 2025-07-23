import { CommonModule, DatePipe } from '@angular/common';
import {
    Component,
    forwardRef,
    inject,
    Injector,
    input,
    model,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
    NgControl,
} from '@angular/forms';
import { getTimezoneOffsetString } from '@placeos/common';
import { addYears, endOfDay, set, startOfDay } from 'date-fns';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateCalendarComponent } from './date-calendar.component';

export enum TimezoneDiffRange {
    Both,
    Start,
    End,
}

@Component({
    selector: 'a-date-field',
    template: `
        <button
            class="flex h-12 w-full items-center justify-between rounded border border-neutral"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
        >
            <div
                class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
            >
                <div class="text-base font-normal">
                    @if (date()) {
                        {{ date() | date: date_format }}
                    } @else {
                        <span class="opacity-30">{{
                            'FORM.DATE_EMPTY' | translate
                        }}</span>
                    }
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        @if (range() !== 2) {
                            <span>{{ start_of_day }}</span>
                        }
                        @if (range() === 0) {
                            <span> - </span>
                        }
                        @if (range() !== 1) {
                            <span>{{ end_of_day }}</span>
                        }
                    </div>
                }
            </div>
            <div class="flex h-10 w-10 items-center justify-center text-2xl">
                <icon>today</icon>
            </div>
        </button>
        <div class="error h-5 p-1 text-xs text-error">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18rem] rounded bg-base-100 px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host.no-subscript > .error {
                display: none;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true,
        },
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateCalendarComponent,
        IconComponent,
        CustomTooltipComponent,
        TranslatePipe,
    ],
})
export class DateFieldComponent
    extends AsyncHandler
    implements OnInit, ControlValueAccessor
{
    private _injector = inject(Injector);

    /** Earliest date available the user is allowed to pick */
    public readonly from_date = input<number>(
        startOfDay(Date.now()).valueOf(),
        { alias: 'from' },
    );
    /** Latest date available the user is allowed to pick */
    public readonly to_date = input<number>(undefined, { alias: 'to' });
    /** Index of the day to start the week on when displaying the calendar */
    public readonly week_start = input<number>(0);
    public readonly use_24hr = input(false);
    /** Whether form control is disabled */
    public readonly disabled = model<boolean>(undefined);
    public readonly short = input(false);
    public readonly timezone = input<string>('');
    public readonly range = input<TimezoneDiffRange>(TimezoneDiffRange.Both);
    /** Currently selected date */
    public readonly date = signal(Date.now());

    public readonly now = Date.now();

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;
    private _control?: NgControl;

    public get date_format() {
        return this.short() ? 'MMM d, yyyy' : 'MMMM d, yyyy';
    }

    public get time_format() {
        return this.use_24hr() ? 'HH : mm' : 'h : mm a';
    }

    private _date_pipe = new DatePipe('en');

    public get start_of_day() {
        const start = startOfDay(this.date()).valueOf();
        const format = `MMM d, ${this.time_format}${this.range() === 1 ? ' (z)' : ''}`;
        return this._date_pipe.transform(start, format, this.tz);
    }

    public get end_of_day() {
        const end = endOfDay(this.date()).valueOf();
        const format = `MMM d, ${this.time_format}${this.range() === 1 ? ' (z)' : ''}`;
        return this._date_pipe.transform(end, format, this.tz);
    }

    public get has_error(): boolean {
        return this._control?.invalid && this._control?.touched;
    }

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public get tz() {
        const tz = this.timezone();
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    }

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    constructor() {
        super();
    }

    /** First allowed date on the calendar */
    public get from(): Date {
        return new Date(this.from_date()) || startOfDay(new Date());
    }
    /** Current date value */
    public get until(): Date {
        return new Date(this.to_date()) || addYears(endOfDay(new Date()), 1);
    }

    public ngOnInit() {
        this._control = this._injector.get(NgControl);
        this.date.set(Date.now());
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        // Keep hours and minutes of the old date
        const old_date = new Date(this.date() || Date.now());
        let new_date = set(new_value, {
            hours: old_date.getHours(),
            minutes: old_date.getMinutes(),
        }).valueOf();
        // Check that new date is before from
        if (new_date < this.from.valueOf()) {
            new_date = this.from.valueOf();
        }
        this.date.set(new_date);
        if (this._onChange) this._onChange(new_date);
        this._tooltip()?.close();
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date.set(value);
        this._tooltip()?.close();
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }
}
