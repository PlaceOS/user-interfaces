import { Component, inject, input, output } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { endOfDay } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingFormService } from '../booking-form.service';

@Component({
    selector: 'new-locker-filters-display',
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
                margin: 0.25rem;
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
            filters
            class="sticky -top-1 z-20 -mx-1 !mb-4 flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded border border-base-300 bg-base-100 p-1 !pr-10 sm:!pr-1"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            @for (feat of (options | async)?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-locker-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_accessible) {
                <div filter-item>
                    <span>{{ 'COMMON.ACCESSIBLE_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-accessible-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_accessible: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `,
    imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule],
})
export class NewLockerFiltersDisplayComponent extends AsyncHandler {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);

    public readonly view = input<'map' | 'list'>('list');
    public readonly viewChange = output<'map' | 'list'>();
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

    public get time_format() {
        return this._settings.time_format;
    }

    constructor() {
        super();
    }
}
