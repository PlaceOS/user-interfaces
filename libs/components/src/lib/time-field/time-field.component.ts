import {
    Component,
    forwardRef,
    Input,
    ViewChild,
    OnInit,
    SimpleChanges,
    OnChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { BaseClass, Identity, timeFormatString } from '@user-interfaces/common';

import * as dayjs from 'dayjs';

@Component({
    selector: 'a-time-field',
    templateUrl: './time-field.component.html',
    styleUrls: ['./time-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimeFieldComponent),
            multi: true,
        },
    ],
})
export class TimeFieldComponent
    extends BaseClass
    implements OnInit, OnChanges, ControlValueAccessor {
    /** Time step between each allowed time option */
    @Input() public step: number = 15;
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Whether past times are allowed */
    @Input() public no_past_times: boolean = true;
    /** String representing the currently set time */
    public date: number = dayjs().valueOf();
    /** String representing the currently set time */
    public time: string = dayjs().format('HH:mm');
    /** Available time blocks for the selected date */
    public _time_options: Identity[];
    /** Whether select field should be shown */
    public show_select: boolean;
    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /** Select field for selecting the time */
    @ViewChild('select') private select_field: MatSelect;

    public ngOnInit(): void {
        this.show_select = true;
        this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
        this.timeout('hide', () => (this.show_select = false));
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.no_past_times || changes.step) {
            this._time_options = this.generateAvailableTimes(
                this.date,
                !this.no_past_times,
                this.step
            );
        }
    }

    /** Available time blocks for the selected date */
    public get time_options() {
        const time = (this.time || '00:00').split(':');
        const date = dayjs(this.date)
            .hour(+time[0])
            .minute(+time[1]);
        if (
            date.minute() % 15 !== 0 &&
            !this._time_options.find((time) => time.id === date.format('HH:mm'))
        ) {
            this._time_options.push({
                name: `${date.format(timeFormatString())}`,
                id: date.format('HH:mm'),
            });
            this._time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
        }
        return this._time_options;
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        this.time = new_value;
        if (this._onChange) {
            const time = (this.time || '00:00').split(':');
            const date = dayjs(this.date)
                .hour(+time[0])
                .minute(+time[1])
                .startOf('m');
            this._onChange(date.valueOf());
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = value;
        let date = dayjs(this.date).startOf('m');
        date = date.minute(Math.ceil(date.minute() / 5) * 5);
        this.time = date.format('HH:mm');
        this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    /**
     * Show select field for time options
     */
    public showSelect() {
        this.show_select = true;
        this.timeout('on_shown', () => {
            if (this.select_field) {
                this.select_field.focus();
                this.select_field.open();
                this.subscription(
                    'listen_close',
                    this.select_field.openedChange.subscribe((state) => {
                        if (!state) {
                            this.show_select = false;
                        }
                    })
                );
            }
        });
    }

    /**
     * Generate a list of time options for the given date
     * @param datestamp Date to generate options for
     * @param show_past Whether past times should be options
     */
    private generateAvailableTimes(
        datestamp: number,
        show_past: boolean,
        step: number = 15
    ): Identity[] {
        const now = dayjs();
        let date = dayjs(datestamp);
        const blocks = [];
        if (show_past || date.isAfter(now, 'd')) {
            date = date.startOf('d');
        } else if (date.isAfter(now, 'm')) {
            date = now;
        }
        date = date.minute(Math.ceil(date.minute() / step) * step);
        const end = date.endOf('d');
        // Add options for the rest of the day
        while (date.isBefore(end, 'm')) {
            blocks.push({
                name: `${date.format(timeFormatString())}`,
                id: date.format('HH:mm'),
            });
            date = date.add(step, 'm');
        }
        return blocks;
    }
}
