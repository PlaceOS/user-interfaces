import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/new-event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

@Component({
    selector: `new-space-filters-display`,
    template: `
        <section
            filters
            class="sticky -top-1 z-20 -mx-1 !mb-4 flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded border border-base-300 bg-base-100 p-1 !pr-10 sm:!pr-1"
        >
            @if ((options | async)?.features?.length > 1) {
                <button
                    btn
                    matRipple
                    name="clear-space-filters"
                    class="mb-2 mr-2 min-h-[2rem]"
                    (click)="removeAllFeatures()"
                >
                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                </button>
            }
            @if (location) {
                <div filter-item zone>
                    {{ location }}
                </div>
            }
            <div filter-item date>
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                @if (!all_day) {
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                }
                @if (all_day) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            <div filter-item count>
                {{
                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                        | translate: { count: (options | async)?.capacity || 2 }
                }}
            </div>
            @for (feat of (options | async)?.features; track feat) {
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
                margin: 0.25rem;
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
    imports: [CommonModule, MatRippleModule, TranslatePipe],
})
export class NewSpaceFiltersDisplayComponent
    extends AsyncHandler
    implements OnInit
{
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly view = input<'map' | 'list'>('list');
    public readonly viewChange = output<'map' | 'list'>();
    public readonly options = this._event_form.options$;
    public location = '';

    public get all_day() {
        return this._event_form.form.value.all_day;
    }

    public get start() {
        return this._event_form.form.value.date;
    }

    public get end() {
        const { date, duration } = this._event_form.form.value;
        return date + duration * 60 * 1000;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor() {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'opts',
            this.options.subscribe(({ zones }) => this._updateLocation(zones)),
        );
    }

    public async removeFeature(feat: string) {
        const { features } = this._event_form.filters || {};
        this._event_form.setFilters({
            features: (features || []).filter((_) => _ !== feat),
        });
    }

    public async removeAllFeatures() {
        this._event_form.setFilters({ features: [] });
    }

    private _updateLocation(zone_ids: string[] = []) {
        const level = this._org.levelWithID(zone_ids);
        const item = level || this._org.building;
        this.location = item?.display_name || item?.name || '';
    }
}
