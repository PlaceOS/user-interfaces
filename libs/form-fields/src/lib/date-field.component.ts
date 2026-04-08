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
import { MatRippleModule } from '@angular/material/core';
import {
    getTimeInTimezone,
    getTimezoneOffsetString,
    markUserDateChange,
    setTimeInTimezone,
} from '@placeos/common';
import { addYears, endOfDay, startOfDay } from 'date-fns';
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
    selector: 'a-date-field,date-field',
    template: `
        <div class="flex items-center gap-1">
            <button
                type="button"
                class="border-neutral flex h-12 w-full flex-1 items-center justify-between rounded-sm border"
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
                        @if (date() !== null && date() !== undefined) {
                            {{ date() | date: date_format }}
                        } @else {
                            <span class="opacity-30">{{
                                'FORM.DATE_EMPTY' | translate
                            }}</span>
                        }
                    </div>
                    @if (
                        timezone() &&
                        tz &&
                        date() !== null &&
                        date() !== undefined
                    ) {
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
                <div
                    class="flex h-10 w-10 items-center justify-center text-2xl"
                >
                    <icon>today</icon>
                </div>
            </button>
            @if (clear()) {
                <button
                    type="button"
                    icon
                    matRipple
                    class="border-error text-error flex h-12 w-12 items-center justify-center rounded-sm border"
                    (click)="clearValue($event)"
                    [attr.aria-label]="'Clear date'"
                    [disabled]="
                        date() === null || date() === undefined || disabled()
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </div>
        <div class="error text-error h-5 p-1 text-xs">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-[18rem] rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from.valueOf()"
                    [to]="until.valueOf()"
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
        MatRippleModule,
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
    public readonly clear = input<boolean>(false);
    /** Currently selected date */
    public readonly date = signal<number | null>(null);

    public readonly now = Date.now();

    /** Form control on change handler */
    private _onChange: (_: number | null) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number | null) => void;
    private _control?: NgControl;

    public get date_format() {
        return this.short() ? 'MMM d, yyyy' : 'MMMM d, yyyy';
    }

    public get time_format() {
        return this.use_24hr() ? 'HH : mm' : 'h : mm a';
    }

    private _date_pipe = new DatePipe('en');

    public get start_of_day() {
        const start = startOfDay(this.date() || Date.now()).valueOf();
        const format = `MMM d, ${this.time_format}${this.range() === 1 ? ' (z)' : ''}`;
        return this._date_pipe.transform(start, format, this.tz);
    }

    public get end_of_day() {
        const end = endOfDay(this.date() || Date.now()).valueOf();
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
        return this.from_date()
            ? new Date(this.from_date())
            : startOfDay(new Date());
    }
    /** Current date value */
    public get until(): Date {
        return this.to_date()
            ? new Date(this.to_date())
            : addYears(endOfDay(new Date()), 1);
    }

    public ngOnInit() {
        this._control = this._injector.get(NgControl);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        // Keep the existing wall-clock time in the selected timezone.
        const timezone = this.timezone() || undefined;
        const { hours, minutes } = getTimeInTimezone(
            this.date() || Date.now(),
            timezone,
        );
        let new_date = setTimeInTimezone(new_value, hours, minutes, timezone);
        // Check that new date is before from
        if (new_date < this.from.valueOf()) {
            new_date = this.from.valueOf();
        }
        this.date.set(new_date);
        markUserDateChange();
        if (this._onChange) this._onChange(new_date);
        this._tooltip()?.close();
    }

    public clearValue(event?: Event) {
        event?.stopPropagation();
        this.date.set(null);
        markUserDateChange();
        if (this._onTouch) this._onTouch(null);
        if (this._onChange) this._onChange(null);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number | null) {
        this.date.set(value ?? null);
        this._tooltip()?.close();
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number | null) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number | null) => void): void {
        this._onTouch = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }
}
