import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetStateService } from '../asset-state.service';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    addDays,
    addMinutes,
    differenceInMinutes,
    endOfDay,
    startOfDay,
} from 'date-fns';

@Component({
    selector: 'asset-filters',
    template: `
        <div class="px-4 mt-3 mb-2" [class.sm:hidden]="!search">
            <mat-form-field appearance="outline" class="w-full h-14">
                <app-icon matPrefix class="text-xl">search</app-icon>
                <input
                    matInput
                    [ngModel]="search_value | async"
                    (ngModelChange)="setSearch($event)"
                    placeholder="Search menu..."
                />
            </mat-form-field>
        </div>
        <h3 class="hidden sm:block font-medium px-2 py-2" *ngIf="!search" i18n>
            Options
        </h3>
        <div class="flex flex-col px-2" *ngIf="!search">
            <mat-checkbox
                [(ngModel)]="at_time"
                (ngModelChange)="at_timeChange.next($event)"
                [matTooltip]="exact_tooltip"
            >
                Exact Time
            </mat-checkbox>
            <ng-container *ngIf="day_options.length > 1">
                <label>Deliver Date:</label>
                <mat-form-field
                    appearance="outline"
                    class="w-full no-subscript mb-4"
                >
                    <mat-select
                        [(ngModel)]="offset_day"
                        (ngModelChange)="offset_dayChange.next($event)"
                    >
                        <mat-option
                            *ngFor="let day of day_options"
                            [value]="day.id"
                        >
                            {{ day.value | date: 'mediumDate' }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </ng-container>
            <label>Deliver After:</label>
            <a-duration-field
                [(ngModel)]="offset"
                (ngModelChange)="offsetChange.next($event)"
                [time]="
                    offset_day > 0 ? start_of_date : (options | async)?.date
                "
                [step]="step_interval"
                [min]="min_offset"
                [max]="max_offset - 1"
                [use_24hr]="use_24hr"
            ></a-duration-field>
        </div>
        <h3 class="hidden sm:block font-medium px-2 py-4" *ngIf="!search" i18n>
            Catergories
        </h3>
        <div
            class="flex flex-col px-2"
            [class.sm:hidden]="search"
            [class.sm:pt-1]="!search"
        >
            <mat-checkbox
                *ngFor="let item of categories | async"
                [attr.name]="item"
                [ngModel]="(category | async) === item.id"
                (ngModelChange)="toggleCategory(item.id)"
            >
                {{ item.name }}
            </mat-checkbox>
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
})
export class AssetFiltersComponent extends AsyncHandler {
    @Input() public search = false;

    @Input() public at_time = false;
    @Output() public at_timeChange = new EventEmitter<boolean>();
    @Input() public offset = 0;
    @Output() public offsetChange = new EventEmitter<number>();
    @Input() public offset_day = 0;
    @Output() public offset_dayChange = new EventEmitter<number>();

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
            addDays(this._state.getOptions().date, this.offset_day)
        ).valueOf();
    }

    public get min_offset() {
        return this.offset_day > 0 ? 0 : this._min_offset;
    }

    public get step_interval() {
        return this._settings.get('app.assets.step_interval') || 5;
    }

    public get max_offset() {
        const end = Math.min(
            endOfDay(
                addDays(this._state.getOptions().date, this.offset_day)
            ).valueOf(),
            addMinutes(
                this._state.getOptions().date,
                this._state.getOptions().duration
            ).valueOf()
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

    constructor(
        private _state: AssetStateService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this._min_offset = Math.max(
            this._settings.get('app.assets.min_offset'),
            0
        );
        this.subscription(
            'filters',
            this._state.options.subscribe(() => {
                this._max_offset = Math.max(
                    15,
                    (this._state.getOptions().duration || 60) -
                        this._settings.get('app.assets.end_offset')
                );
                this._updateDayOptions();
            })
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
