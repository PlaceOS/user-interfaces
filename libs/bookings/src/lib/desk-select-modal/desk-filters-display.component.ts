import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AsyncHandler, SettingsService } from '@placeos/common';

import { endOfDay } from 'date-fns';
import { BookingFormService } from '../booking-form.service';
import { DeskFiltersComponent } from './desk-filters.component';

@Component({
    selector: 'desk-filters-display',
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
            class="flex flex-row items-center space-x-2 p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="edit-desk-filters"
                class="w-1/2 flex-1"
                (click)="editFilter()"
            >
                {{ 'COMMON.FILTERS' | translate }}
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-desk-map"
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view !== 'map'"
                    (click)="view = 'map'; viewChange.emit(view)"
                >
                    {{ 'COMMON.MAP' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="view-desk-list"
                    class="rounded-l-none rounded-r"
                    [class.inverse]="view !== 'list'"
                    (click)="view = 'list'; viewChange.emit(view)"
                >
                    {{ 'COMMON.LIST' | translate }}
                </button>
            </div>
        </section>
        <section
            filters
            class="flex w-[35rem] max-w-full flex-wrap items-center p-2 sm:max-w-[35rem]"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                <ng-container *ngIf="!all_day">
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                </ng-container>
                <ng-container *ngIf="all_day">
                    {{ 'COMMON.ALL_DAY' | translate }}
                </ng-container>
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
                    name="remove-desk-filter"
                    class="-mr-4"
                    (click)="setFeature(feat, false)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div filter-item *ngIf="(options | async)?.show_fav">
                <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                <button
                    icon
                    matRipple
                    name="remove-desk-favs-filter"
                    class="-mr-4"
                    (click)="setOptions({ show_fav: false })"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
        </section>
    `,
    standalone: false,
})
export class DeskFiltersDisplayComponent extends AsyncHandler {
    @Input() public view: 'map' | 'list' = 'list';
    @Output() public viewChange = new EventEmitter<'map' | 'list'>();
    public readonly options = this._state.options;
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    public get all_day() {
        return this._state.form.value.all_day;
    }

    public get start() {
        return this._state.form.value.date;
    }

    public get end() {
        const { date, duration, all_day } = this._state.form.value;
        if (all_day) return endOfDay(date);
        return date + duration * 60 * 1000;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public readonly editFilter = () => this._bsheet.open(DeskFiltersComponent);

    constructor(
        private _bsheet: MatBottomSheet,
        private _state: BookingFormService,
        private _settings: SettingsService,
    ) {
        super();
    }
}
