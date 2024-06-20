import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AsyncHandler, SettingsService } from '@placeos/common';

import { LockerFiltersComponent } from './locker-filters.component';
import { BookingFormService } from '../booking-form.service';
import { endOfDay } from 'date-fns';

@Component({
    selector: 'locker-filters-display',
    styles: [
        `
            [filter-item] {
                display: flex;
                align-items: center;
                padding: 0 1rem;
                height: 2rem;
                font-size: 0.875rem;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 1.25rem;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
            }

            [filter-item]:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            [filter-item] > * + * {
                margin-left: 0.5rem;
            }
        `,
    ],
    template: `
        <section
            actions
            class="sm:hidden space-x-2 flex flex-row items-center p-2"
        >
            <button
                btn
                matRipple
                name="edit-locker-filters"
                class="flex-1 w-1/2"
                (click)="editFilter()"
                i18n
            >
                Filters
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-locker-map"
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view !== 'map'"
                    (click)="view = 'map'; viewChange.emit(view)"
                    i18n
                >
                    Map
                </button>
                <button
                    btn
                    matRipple
                    name="view-locker-list"
                    class="rounded-r rounded-l-none"
                    [class.inverse]="view !== 'list'"
                    (click)="view = 'list'; viewChange.emit(view)"
                    i18n
                >
                    List
                </button>
            </div>
        </section>
        <section
            filters
            class="flex items-center flex-wrap p-2 w-[35rem] max-w-full sm:max-w-[35rem]"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            <div
                filter-item
                features
                *ngFor="let feat of (options | async)?.features || []"
            >
                <p>{{ feat }}</p>
                <button
                    icon
                    matRipple
                    name="remove-locker-filter"
                    class="-mr-4"
                    (click)="setFeature(feat, false)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div filter-item *ngIf="(options | async)?.show_fav">
                <span i18n>Favourites Only</span>
                <button
                    icon
                    matRipple
                    name="remove-locker-favs-filter"
                    class="-mr-4"
                    (click)="setOptions({ show_fav: false })"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
        </section>
    `,
})
export class LockerFiltersDisplayComponent extends AsyncHandler {
    @Input() public view: 'map' | 'list' = 'list';
    @Output() public viewChange = new EventEmitter<'map' | 'list'>();
    public readonly options = this._state.options;
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    public get start() {
        return this._state.form.value.date;
    }

    public get end() {
        const { date, duration, all_day } = this._state.form.value;
        if (all_day) return endOfDay(date);
        return date + duration * 60 * 1000;
    }

    public readonly editFilter = () =>
        this._bsheet.open(LockerFiltersComponent);

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _bsheet: MatBottomSheet,
        private _state: BookingFormService,
        private _settings: SettingsService
    ) {
        super();
    }
}
