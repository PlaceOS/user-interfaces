import { Component, computed, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SettingsService } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { endOfDay } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingFormService } from '../booking-form.service';

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
                margin: 0.25rem;
                background-color: var(--base-100);
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
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start() | date: 'mediumDate' }}</div>
            <div filter-item time>
                @if (!all_day()) {
                    {{ start() | date: time_format() }} &mdash;
                    {{ end() | date: time_format() }}
                }
                @if (all_day()) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            @for (feat of options()?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-desk-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon class="text-base">close</icon>
                    </button>
                </div>
            }
            @if (options()?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-desk-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon class="text-base">close</icon>
                    </button>
                </div>
            }
        </section>
    `,
    imports: [CommonModule, IconComponent, TranslatePipe, MatRippleModule],
})
export class DeskFiltersDisplayComponent {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);

    public readonly view = input<'map' | 'list'>('list');
    public readonly viewChange = output<'map' | 'list'>();
    public readonly options = toSignal(this._state.options, {
        initialValue: {} as any,
    });
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);
    private readonly _form_value = toSignal(this._state.form.valueChanges, {
        initialValue: this._state.form.value,
    });

    public readonly all_day = computed(() => this._form_value().all_day);

    public readonly start = computed(() => this._form_value().date);

    public readonly end = computed(() => {
        const { date, duration, all_day } = this._form_value();
        if (all_day) return endOfDay(date);
        return date + duration * 60 * 1000;
    });

    public readonly time_format = this._settings.time_format_signal;
}
