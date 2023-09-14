import {
    Component,
    forwardRef,
    Injector,
    Input,
    OnInit,
    Optional,
    ViewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NgControl,
} from '@angular/forms';
import { CustomTooltipComponent } from '@placeos/components';
import { addYears, endOfDay, format, set, startOfDay } from 'date-fns';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';

@Component({
    selector: 'a-date-field',
    template: `
        <div
            class=" flex items-center justify-between border border-black/30 hover:border-black rounded h-12"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [class.pointer-events-none]="disabled"
            [class.opacity-30]="disabled"
        >
            <p class="px-4 py-2 flex-1">{{ date | date: 'mediumDate' }}</p>
            <button btn icon matRipple>
                <app-icon>today</app-icon>
            </button>
        </div>
        <div class="error h-5 p-1 text-xs text-error">
            <span *ngIf="false"><ng-content></ng-content></span>
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18rem] rounded bg-white px-2 py-4">
                <date-calendar
                    [ngModel]="date"
                    [from]="from"
                    [to]="to"
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
    @Input('from') public _from: number = startOfDay(Date.now()).valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public _to: number;
    /** Index of the day to start the week on when displaying the calendar */
    @Input() public week_start: number = 0;
    /** Whether form control is disabled */
    @Input() public disabled: boolean;
    /** Currently selected date */
    public date: number;

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;
    private _control?: NgControl;

    public get has_error(): boolean {
        return this._control?.invalid && this._control?.touched;
    }

    @ViewChild(CustomTooltipComponent) private _tooltip: CustomTooltipComponent;

    constructor(private _injector: Injector) {
        super();
    }

    /** First allowed date on the calendar */
    public get from(): Date {
        return new Date(this._from) || startOfDay(new Date());
    }
    /** Current date value */
    public get until(): Date {
        return new Date(this._to) || addYears(endOfDay(new Date()), 1);
    }
    /** Display value for the current date */
    public get date_string(): string {
        return format(new Date(this.date), 'DD MMM YYYY');
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
        this.date = value || Date.now();
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
