import { CommonModule } from '@angular/common';
import { Component, computed, inject, model, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { OrganisationService, settingSignal } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/new-event-form.service';
import { map } from 'rxjs/operators';
import { SpaceFiltersComponent } from './space-filters.component';

@Component({
    selector: `space-filters-display`,
    template: `
        <section actions class="flex items-center space-x-2 p-2 sm:hidden">
            <button
                btn
                matRipple
                name="edit-space-filters"
                class="w-1/2 flex-1"
                (click)="editFilters()"
            >
                {{ 'COMMON.FILTERS' | translate }}
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-space-map"
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view() !== 'map'"
                    (click)="view.set('map'); viewChange.emit(view())"
                >
                    {{ 'COMMON.MAP' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="view-space-list"
                    class="rounded-l-none rounded-r"
                    [class.inverse]="view() !== 'list'"
                    (click)="view.set('list'); viewChange.emit(view())"
                >
                    {{ 'COMMON.LIST' | translate }}
                </button>
            </div>
        </section>
        <section
            filters
            class="flex w-140 max-w-full flex-wrap items-center p-2 sm:max-w-140"
        >
            @if (filters()?.features?.length > 1) {
                <button
                    btn
                    matRipple
                    name="clear-space-filters"
                    class="mr-2 mb-2 min-h-8"
                    (click)="removeAllFeatures()"
                >
                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                </button>
            }
            @if (location()) {
                <div filter-item zone>
                    {{ location() }}
                </div>
            }
            <div filter-item date>
                {{ start() | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                @if (!all_day()) {
                    {{ start() | date: time_format() }} &mdash;
                    {{ end() | date: time_format() }}
                }
                @if (all_day()) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            <div filter-item count>
                {{
                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                        | translate: { count: filters()?.capacity || 2 }
                }}
            </div>
            @for (feat of filters()?.features; track feat) {
                <div filter-item>
                    <p class="truncate">{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-space-filter"
                        class="-mr-4"
                        (click)="removeFeature(feat)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `,
    styles: [
        `
            [filter-item] {
                display: flex;
                align-items: center;
                padding: 0 1rem;
                min-height: 2rem;
                font-size: 0.875rem;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 1.25rem;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
                max-width: 100%;
                text-align: center;
            }

            [filter-item]:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            [filter-item] > * + * {
                margin-left: 0.5rem;
            }
        `,
    ],
    imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent],
})
export class SpaceFiltersDisplayComponent {
    private _bsheet = inject(MatBottomSheet);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    public readonly view = model<'map' | 'list'>('list');
    public readonly viewChange = output<'map' | 'list'>();
    public readonly filters = toSignal(this._event_form.filters$);

    public readonly location = toSignal(
        this._event_form.options$.pipe(
            map(({ zones }) => {
                const level = this._org.levelWithID(zones);
                const item = level || this._org.building;
                return item?.display_name || item?.name || '';
            }),
        ),
        { initialValue: '' },
    );

    public readonly all_day = computed(
        () => this._event_form.form.value.all_day,
    );

    public readonly start = computed(() => this._event_form.form.value.date);

    public readonly end = computed(() => {
        const { date, duration } = this._event_form.form.value;
        return date + duration * 60 * 1000;
    });

    private readonly _use_24_hour = settingSignal<boolean>(
        'use_24_hour_time',
        false,
    );
    public readonly time_format = computed(() =>
        this._use_24_hour() ? 'HH:mm' : 'h:mm a',
    );

    public readonly editFilters = () =>
        this._bsheet.open(SpaceFiltersComponent);

    public removeFeature(feat: string) {
        const { features } = this._event_form.filters || {};
        this._event_form.setFilters({
            features: (features || []).filter((_) => _ !== feat),
        });
    }

    public removeAllFeatures() {
        this._event_form.setFilters({ features: [] });
    }
}
