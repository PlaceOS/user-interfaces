import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    addDays,
    addMinutes,
    differenceInMinutes,
    endOfDay,
    startOfDay,
} from 'date-fns';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { AssetStateService } from '../asset-state.service';

@Component({
    selector: 'asset-filters',
    template: `
        <div class="mb-2 mt-3 px-4" [class.sm:hidden]="!search()">
            <mat-form-field appearance="outline" class="h-14 w-full">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    [ngModel]="search_value | async"
                    (ngModelChange)="setSearch($event)"
                    [placeholder]="'BOOKINGS.ASSETS_SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        @if (!search()) {
            <h3 class="hidden px-2 py-2 font-medium sm:block">
                {{ 'COMMON.OPTIONS' | translate }}
            </h3>
        }
        @if (!search()) {
            <div class="flex flex-col px-2">
                <mat-checkbox
                    [ngModel]="at_time()"
                    (ngModelChange)="
                        at_timeChange.emit($event); at_time.set($event)
                    "
                    [matTooltip]="exact_tooltip"
                >
                    {{ 'BOOKINGS.ASSETS_DELIVER_TOGGLE' | translate }}
                </mat-checkbox>
                @if (day_options.length > 1) {
                    <label>{{
                        'BOOKINGS.ASSETS_DELIVER_DATE' | translate
                    }}</label>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript mb-4 w-full"
                    >
                        <mat-select
                            [ngModel]="offset_day()"
                            (ngModelChange)="
                                offset_dayChange.emit($event);
                                offset_day.set($event)
                            "
                        >
                            @for (day of day_options; track day) {
                                <mat-option [value]="day.id">
                                    {{ day.value | date: 'mediumDate' }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <label>{{ 'BOOKINGS.ASSETS_DELIVER_TIME' | translate }}</label>
                <a-duration-field
                    [ngModel]="offset()"
                    (ngModelChange)="
                        offsetChange.emit($event); offset.set($event)
                    "
                    [time]="
                        offset_day() > 0
                            ? start_of_date
                            : (options | async)?.date
                    "
                    [step]="step_interval"
                    [min]="min_offset"
                    [max]="max_offset - 1"
                    [use_24hr]="use_24hr"
                ></a-duration-field>
            </div>
        }
        @if (!search()) {
            <h3 class="hidden px-2 py-4 font-medium sm:block">Catergories</h3>
        }
        <div
            class="flex flex-col px-2"
            [class.sm:hidden]="search()"
            [class.sm:pt-1]="!search()"
        >
            @for (item of categories | async; track item) {
                <mat-checkbox
                    [attr.name]="item"
                    [ngModel]="(category | async) === item.id"
                    (ngModelChange)="toggleCategory(item.id)"
                >
                    {{ item.name }}
                </mat-checkbox>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                min-width: 16rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
        TranslatePipe,
        DurationFieldComponent,
        MatTooltipModule,
    ],
})
export class AssetFiltersComponent extends AsyncHandler {
    private _state = inject(AssetStateService);
    private _settings = inject(SettingsService);

    public readonly search = input(false);

    public readonly at_time = input(false);
    public readonly at_timeChange = output<boolean>();
    public readonly offset = input(0);
    public readonly offsetChange = output<number>();
    public readonly offset_day = input(0);
    public readonly offset_dayChange = output<number>();

    private _min_offset = 0;
    private _max_offset = 60;

    public readonly search_value = this._state.search;
    public readonly category = this._state.category;
    public readonly categories = this._state.category_list;
    public readonly options = this._state.options;

    public readonly exact_tooltip =
        'Deliver at exactly specified time. \nNote that changes to the booking will not be \nreflected in the order if this is set.';

    public get start_of_date() {
        return startOfDay(
            addDays(this._state.getOptions().date, this.offset_day()),
        ).valueOf();
    }

    public get min_offset() {
        return this.offset_day() > 0 ? 0 : this._min_offset;
    }

    public get step_interval() {
        return this._settings.get('app.assets.step_interval') || 5;
    }

    public get max_offset() {
        const end = Math.min(
            endOfDay(
                addDays(this._state.getOptions().date, this.offset_day()),
            ).valueOf(),
            addMinutes(
                this._state.getOptions().date,
                this._state.getOptions().duration,
            ).valueOf(),
        );
        const diff = differenceInMinutes(end, this._state.getOptions().date);
        return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset));
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public day_options = [];

    public readonly setSearch = (s) => this._state.setSearch(s);
    public readonly toggleCategory = (c) => this._state.toggleCategory(c);

    constructor() {
        super();
    }

    public ngOnInit() {
        this._min_offset = Math.max(
            this._settings.get('app.assets.min_offset'),
            0,
        );
        this.subscription(
            'filters',
            this._state.options.subscribe(() => {
                this._max_offset = Math.max(
                    15,
                    (this._state.getOptions().duration || 60) -
                        this._settings.get('app.assets.end_offset'),
                );
                this._updateDayOptions();
            }),
        );
        this._updateDayOptions();
    }

    private _updateDayOptions() {
        const { date, duration } = this._state.getOptions();
        if (duration <= 24 * 60) return (this.day_options = []);
        let day = startOfDay(date);
        let count = 0;
        const end = endOfDay(addMinutes(date, duration)).valueOf();
        const options = [];
        while (day.valueOf() <= end) {
            options.push({ id: count, value: day.valueOf() });
            day = addDays(day, 1);
            count++;
        }
        this.day_options = options;
    }
}
