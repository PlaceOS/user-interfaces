import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { take } from 'rxjs/operators';
import { SpaceFiltersComponent } from './space-filters.component';

@Component({
    selector: `space-filters-display`,
    template: `
        <section actions class="sm:hidden space-x-2 flex items-center p-2">
            <button
                btn
                matRipple
                name="edit-space-filters"
                class="flex-1 w-1/2"
                (click)="editFilters()"
                i18n
            >
                Filters
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-space-map"
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
                    name="view-space-list"
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
            <button
                btn
                matRipple
                name="clear-space-filters"
                class="min-h-[2rem] mb-2 mr-2"
                *ngIf="(options | async)?.features?.length > 1"
                (click)="removeAllFeatures()"
            >
                Clear Filters
            </button>
            <div
                filter-item
                zone
                class="dark:border-base-200-500"
                *ngIf="location"
            >
                {{ location }}
            </div>
            <div filter-item date class="dark:border-base-200-500">
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time class="dark:border-base-200-500">
                <ng-container *ngIf="!all_day">
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                </ng-container>
                <ng-container *ngIf="all_day">All Day</ng-container>
            </div>
            <div filter-item count class="dark:border-base-200-500" i18n>
                Min. {{ (options | async)?.capacity || 2 }} People
            </div>
            <div filter-item *ngFor="let feat of (options | async)?.features">
                <p class="truncate">{{ feat }}</p>
                <button
                    icon
                    matRipple
                    name="remove-space-filter"
                    class="-mr-4"
                    (click)="removeFeature(feat)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
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
})
export class SpaceFiltersDisplayComponent extends AsyncHandler {
    @Input() public view: 'map' | 'list' = 'list';
    @Output() public viewChange = new EventEmitter<'map' | 'list'>();
    public readonly options = this._event_form.options;
    public location: string = '';

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

    public readonly editFilters = () =>
        this._bsheet.open(SpaceFiltersComponent);

    constructor(
        private _bsheet: MatBottomSheet,
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'opts',
            this.options.subscribe(({ zone_ids }) =>
                this._updateLocation(zone_ids)
            )
        );
    }

    public async removeFeature(feat: string) {
        const value = await this._event_form.options.pipe(take(1)).toPromise();
        this._event_form.setOptions({
            ...value,
            features: (value.features || []).filter((_) => _ !== feat),
        });
    }

    public async removeAllFeatures() {
        const value = await this._event_form.options.pipe(take(1)).toPromise();
        this._event_form.setOptions({
            ...value,
            features: [],
        });
    }

    private _updateLocation(zone_ids: string[] = []) {
        const level = this._org.levelWithID(zone_ids);
        const item = level || this._org.building;
        this.location = item?.display_name || item?.name || '';
    }
}
