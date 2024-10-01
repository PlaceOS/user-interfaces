import {
    Component,
    forwardRef,
    Injector,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NgControl,
} from '@angular/forms';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { addYears, endOfDay, set, startOfDay } from 'date-fns';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { getTimezoneOffsetString } from '@placeos/common';

export enum TimezoneDiffRange {
    Both,
    Start,
    End,
}

@Component({
    selector: 'a-date-field',
    template: `
        <button
            class="flex items-center justify-between border border-neutral rounded h-12 w-full"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled"
            [class.opacity-30]="disabled"
            matRipple
        >
            <div
                class="flex flex-col px-4 py-2 flex-1 truncate w-1/2 text-left leading-tight"
            >
                <div class="font-normal text-base">
                    @if (date) {
                        {{ date | date: date_format }}
                    } @else {
                        <span class="opacity-30">No Date Selected</span>
                    }
                </div>
                <div class="text-xs opacity-30 truncate" *ngIf="timezone">
                    <span *ngIf="range !== 2">
                        {{
                            start_of_day
                                | date
                                    : 'MMM d, ' +
                                          time_format +
                                          (range === 1 ? ' (z)' : '')
                                    : tz
                        }}
                    </span>
                    <span *ngIf="range === 0"> - </span>
                    <span *ngIf="range !== 1">
                        {{
                            end_of_day
                                | date: 'MMM d, ' + time_format + ' (z)' : tz
                        }}
                    </span>
                </div>
            </div>
            <div class="h-10 w-10 flex items-center justify-center text-2xl">
                <app-icon>today</app-icon>
            </div>
        </button>
        <div class="error h-5 p-1 text-xs text-error">
            <span *ngIf="has_error"><ng-content></ng-content></span>
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18rem] rounded bg-base-100 px-2 py-4">
                <date-calendar
                    [ngModel]="date || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true,
        },
    ],
})
export class DateFieldComponent
    extends AsyncHandler
    implements OnInit, ControlValueAccessor
{
    /** Earliest date available the user is allowed to pick */
    @Input('from') public from_date: number = startOfDay(Date.now()).valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public to_date: number;
    /** Index of the day to start the week on when displaying the calendar */
    @Input() public week_start: number = 0;
    @Input() public use_24hr = false;
    /** Whether form control is disabled */
    @Input() public disabled: boolean;
    @Input() public short = false;
    @Input() public timezone: string = '';
    @Input() public range: TimezoneDiffRange = TimezoneDiffRange.Both;
    /** Currently selected date */
    public date: number;

    public readonly now = Date.now();

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;
    private _control?: NgControl;

    public get date_format() {
        return this.short ? 'MMM d, yyyy' : 'MMMM d, yyyy';
    }

    public get time_format() {
        return this.use_24hr ? 'HH : mm' : 'h : mm a';
    }

    public get start_of_day() {
        return startOfDay(this.date).valueOf();
    }

    public get end_of_day() {
        return endOfDay(this.date).valueOf();
    }

    public get has_error(): boolean {
        return this._control?.invalid && this._control?.touched;
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz);
    }

    @ViewChild(CustomTooltipComponent) private _tooltip: CustomTooltipComponent;

    constructor(private _injector: Injector) {
        super();
    }

    /** First allowed date on the calendar */
    public get from(): Date {
        return new Date(this.from_date) || startOfDay(new Date());
    }
    /** Current date value */
    public get until(): Date {
        return new Date(this.to_date) || addYears(endOfDay(new Date()), 1);
    }

    public ngOnInit() {
        this._control = this._injector.get(NgControl);
        this.date = Date.now();
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        // Keep hours and minutes of the old date
        const old_date = new Date(this.date);
        let new_date = set(new_value, {
            hours: old_date.getHours(),
            minutes: old_date.getMinutes(),
        }).valueOf();
        // Check that new date is before from
        if (new_date < this.from.valueOf()) {
            new_date = this.from.valueOf();
        }
        this.date = new_date;
        if (this._onChange) {
            this._onChange(new_date);
        }
        this._tooltip?.close();
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = value;
        this._tooltip?.close();
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
        this.disabled = disabled;
    }
}
