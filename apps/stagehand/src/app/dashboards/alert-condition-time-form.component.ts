import {
    Component,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler, i18n, Identity, TIMEZONES_IANA } from '@placeos/common';
import { TriggerTimeConditionType } from '@placeos/ts-client';
import { format, setDay, setMonth } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { CronInputFieldComponent } from './cron-input-field.component';

type CronPeriod =
    | 'minute'
    | 'hour'
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'custom';

/**
 * Calculate the position counter for the given number e.g `1st`, `2nd`, `3rd`, `4th`...
 * @param num Number to caculate position for
 */
export function numberToPosition(num: number): string {
    const mod_ten = num % 10;
    if (num > 10 && num < 20) {
        return `${num}th`;
    } else if (mod_ten === 1) {
        return `${num}st`;
    } else if (mod_ten === 2) {
        return `${num}nd`;
    } else if (mod_ten === 3) {
        return `${num}rd`;
    }
    return `${num}th`;
}

@Component({
    selector: 'alert-condition-time-form',
    template: `
        @if (form()) {
            <div class="alert-condition form time">
                <div class="mb-4 flex flex-col">
                    <settings-toggle
                        [label]="'TRIGGERS.TIME_SCHEDULE' | translate"
                        [(ngModel)]="is_cron"
                        (ngModelChange)="toggleCRON($event)"
                        [ngModelOptions]="{ standalone: true }"
                    ></settings-toggle>
                </div>
                @if (is_cron()) {
                    <div class="flex flex-col">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <icon matPrefix class="text-2xl">search</icon>
                            <input
                                matInput
                                [formField]="form().timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                                (input)="
                                    updateTimezoneList(
                                        $any($event.target).value
                                    )
                                "
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of timezones(); track tz) {
                                <mat-option [value]="tz">{{ tz }}</mat-option>
                            }
                            @if (!timezones().length) {
                                <mat-option [disabled]="true">{{
                                    'COMMON.TIMEZONE_EMPTY' | translate
                                }}</mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                }
                @if (!is_cron()) {
                    <div class="flex space-x-4">
                        @if (form().time) {
                            <div class="flex flex-1 flex-col">
                                <label for="type"
                                    >{{ 'FORM.DATE' | translate }}
                                </label>
                                <a-date-field
                                    name="date"
                                    [formField]="form().time"
                                ></a-date-field>
                            </div>
                        }
                        @if (form().time) {
                            <div class="flex flex-1 flex-col">
                                <label for="type"
                                    >{{ 'COMMON.TIME' | translate }}
                                </label>
                                <a-time-field
                                    name="date"
                                    [formField]="form().time"
                                ></a-time-field>
                            </div>
                        }
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="type"
                            >{{ 'TRIGGERS.TIME_REPEAT' | translate }}:
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                [(ngModel)]="cron_period"
                                (ngModelChange)="updateCronString()"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (period of repeat_period(); track period) {
                                    <mat-option [value]="period.id">
                                        {{ period.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    @if (cron_period() !== 'custom') {
                        <div class="flex space-x-4">
                            @if (cron_period() === 'year') {
                                <div class="flex w-2/5 flex-1 flex-col">
                                    <label for="month"
                                        >{{
                                            'TRIGGERS.TIME_MONTH_OF_YEAR'
                                                | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="month"
                                            [(ngModel)]="cron_month"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                month of months_of_year();
                                                track month;
                                                let i = $index
                                            ) {
                                                <mat-option [value]="i + 1">
                                                    {{ month }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            @if (
                                cron_period() === 'month' ||
                                cron_period() === 'year'
                            ) {
                                <div class="flex w-2/5 flex-1 flex-col">
                                    <label for="day"
                                        >{{
                                            'TRIGGERS.TIME_DAY_OF_MONTH'
                                                | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="day"
                                            [(ngModel)]="cron_date"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                period of days_of_month;
                                                track period
                                            ) {
                                                <mat-option [value]="period.id">
                                                    {{ period.name }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                        @if (cron_period() === 'week') {
                            <div class="flex flex-col">
                                <label for="weekday">
                                    {{
                                        'TRIGGERS.TIME_DAY_OF_WEEK' | translate
                                    }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        name="weekday"
                                        [(ngModel)]="cron_day"
                                        (ngModelChange)="updateCronString()"
                                        [ngModelOptions]="{ standalone: true }"
                                    >
                                        @for (
                                            weekday of days_of_week();
                                            track weekday;
                                            let i = $index
                                        ) {
                                            <mat-option [value]="i">
                                                {{ weekday }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        <div class="flex items-center space-x-4">
                            @if (
                                cron_period() !== 'minute' &&
                                cron_period() !== 'hour'
                            ) {
                                <div class="flex w-2/5 flex-1 flex-col">
                                    <label for="hour">{{
                                        'TRIGGERS.TIME_HOUR_OF_DAY' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="hour"
                                            [(ngModel)]="cron_hour"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            <mat-select-trigger>
                                                {{ pad(cron_hour()) }}:<span
                                                    class="stagehand-muted"
                                                    >00</span
                                                >
                                            </mat-select-trigger>
                                            @for (
                                                hour of hours_in_day;
                                                track hour
                                            ) {
                                                <mat-option [value]="+hour">
                                                    {{ pad(hour) }}:<span
                                                        class="stagehand-muted"
                                                        >00</span
                                                    >
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            @if (cron_period() !== 'minute') {
                                <div class="flex w-2/5 flex-1 flex-col">
                                    <label for="minute">{{
                                        'TRIGGERS.TIME_MINUTE_OF_HOUR'
                                            | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="minute"
                                            [(ngModel)]="cron_minute"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            <mat-select-trigger>
                                                <span class="stagehand-muted">{{
                                                    pad(cron_hour())
                                                }}</span
                                                >:{{ pad(cron_minute()) }}
                                            </mat-select-trigger>
                                            @for (
                                                minute of minutes_in_hour;
                                                track minute
                                            ) {
                                                <mat-option [value]="+minute">
                                                    <span
                                                        class="stagehand-muted"
                                                        >{{
                                                            pad(cron_hour())
                                                        }}</span
                                                    >:{{ pad(minute) }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                    } @else {
                        <cron-input-field
                            [(ngModel)]="cron_string"
                            (ngModelChange)="saveCRON($event)"
                            [ngModelOptions]="{
                                standalone: true,
                            }"
                        ></cron-input-field>
                    }
                }
            </div>
        }
    `,
    styles: [],
    imports: [
        FormsModule,
        CronInputFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        DateFieldComponent,
        TimeFieldComponent,
        MatAutocompleteModule,
        SettingsToggleComponent,
        MatInputModule,
        FormField,
        TranslatePipe,
        IconComponent,
    ],
})
export class AlertConditionTimeFormComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    /** Group of form fields used for creating the system */
    public readonly form = input<any>(undefined);
    /** List of available periods for scheduled repetition */
    public readonly repeat_period = signal<Identity[]>([]);
    /** Whether condition is a cron(recurring) job */
    public readonly is_cron = signal(false);
    /** The period which the user selects the recurrence */
    public readonly cron_period = signal<CronPeriod>('minute');

    public readonly minutes_in_hour = new Array(12)
        .fill(0)
        .map((_, idx) => idx * 5);
    public readonly hours_in_day = new Array(24).fill(0).map((_, idx) => idx);
    public readonly days_of_week = signal<string[]>([]);
    public readonly days_of_month: Identity[] = Array(31)
        .fill(0)
        .map((_, index) => ({
            id: index + 1,
            name: `${numberToPosition(index + 1)}`,
        }));
    public readonly months_of_year = signal<string[]>([]);
    public readonly cron_string = signal('');
    /** Minute of the hour to recurr on */
    public readonly cron_minute = signal(0);
    /** Hour of the day to recurr on */
    public readonly cron_hour = signal(0);
    /** Hour of the day to recurr on */
    public cron_hour_period = 'AM';
    /** Hour of the day to recurr on */
    public readonly cron_day = signal(0);
    /** Hour of the day to recurr on */
    public readonly cron_date = signal(1);
    /** Hour of the day to recurr on */
    public readonly cron_month = signal(1);

    public readonly timezones = signal<string[]>([]);

    public pad(str: any, digits = 2) {
        return `${str}`.padStart(digits, '0');
    }

    public ngOnInit() {
        this.repeat_period.set([
            { id: 'minute', name: i18n('COMMON.MINUTE') },
            { id: 'hour', name: i18n('COMMON.HOUR') },
            { id: 'day', name: i18n('COMMON.DAY') },
            { id: 'week', name: i18n('COMMON.WEEK') },
            { id: 'month', name: i18n('COMMON.MONTH') },
            { id: 'year', name: i18n('COMMON.YEAR') },
            { id: 'custom', name: i18n('COMMON.CRON_CUSTOM') },
        ]);
        this.days_of_week.set(
            new Array(7)
                .fill(0)
                .map((_, index) =>
                    i18n(
                        `COMMON.${format(
                            setDay(Date.now(), index),
                            'EEEE',
                        ).toUpperCase()}`,
                    ),
                ),
        );
        this.months_of_year.set(
            Array(12)
                .fill(0)
                .map((_, index) =>
                    i18n(
                        `COMMON.${format(
                            setMonth(Date.now(), index),
                            'MMMM',
                        ).toUpperCase()}`,
                    ),
                ),
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const form = this.form();
        if (changes.form && form) {
            this.is_cron.set(
                form.time_type().value() === TriggerTimeConditionType.CRON,
            );
            if (this.is_cron()) {
                this.loadCronTab(form.cron().value());
            }
            this.updateTimezoneList(form.timezone().value());
        }
    }

    public updateTimezoneList(tz: string) {
        const tz_lower = (tz || '').toLowerCase();
        this.timezones.set(
            TIMEZONES_IANA.filter((_) => _.toLowerCase().includes(tz_lower)),
        );
    }

    public toggleCRON(is_cron: boolean) {
        this.form().cron().value.set('');
        this.form()
            .time_type()
            .value.set(
                is_cron
                    ? TriggerTimeConditionType.CRON
                    : TriggerTimeConditionType.AT,
            );
        this.updateCronString();
    }

    public saveCRON(cron_str: string) {
        this.timeout(
            'save_cron',
            () => this.form().cron().value.set(cron_str),
            1000,
        );
    }

    /**
     * Update the output CRON string for the selected periods
     */
    public updateCronString() {
        const form = this.form();
        if (form && form.cron) {
            const hour = this.cron_hour();
            const minute = this.cron_minute() % 60;
            const day_of_week = this.cron_day();
            const day_of_month = this.cron_date();
            const month = this.cron_month();
            let cron_str = '* * * * *';
            switch (this.cron_period()) {
                case 'minute':
                    cron_str = minute ? `*/${minute} * * * *` : '* * * * *';
                    break;
                case 'hour':
                    cron_str = hour
                        ? `${minute} */${hour} * * *`
                        : `${minute} * * * *`;
                    break;
                case 'day':
                    cron_str = `${minute} ${hour} * * *`;
                    break;
                case 'week':
                    cron_str = `${minute} ${hour} * * ${day_of_week}`;
                    break;
                case 'month':
                    cron_str = `${minute} ${hour} ${day_of_month} * *`;
                    break;
                case 'year':
                    cron_str = `${minute} ${hour} ${day_of_month} ${month} *`;
                    break;
            }
            form.cron().value.set(cron_str);
        }
    }

    private loadCronTab(cron_tab: string): void {
        this.cron_string.set(cron_tab);
        const cron_string = this.cron_string();
        if (
            cron_string.includes('-') ||
            cron_string.includes('/') ||
            cron_string.includes(',')
        ) {
            this.cron_period.set('custom');
            return;
        }
        const [minute, hour, day, month, weekday] = cron_tab.split(' ');
        this.cron_minute.set(+minute || 0);
        this.cron_hour.set(+hour || 0);
        this.cron_day.set(+weekday || 0);
        this.cron_date.set(+hour || 1);
        this.cron_month.set(+month || 1);
        this.cron_period.set('minute');
        if (month !== '*') {
            this.cron_period.set('month');
        } else if (weekday !== '*') {
            this.cron_period.set('week');
        } else if (day !== '*') {
            this.cron_period.set('day');
        } else if (hour !== '*') {
            this.cron_period.set('hour');
        }
        this.cron_hour_period = this.cron_hour() > 12 ? 'PM' : 'AM';
    }
}
