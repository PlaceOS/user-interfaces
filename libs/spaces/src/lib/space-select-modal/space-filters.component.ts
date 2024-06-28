import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {
    flatten,
    MapsPeopleService,
    SettingsService,
    unique,
} from '@placeos/common';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Building } from 'libs/organisation/src/lib/building.class';
import { SpacesService } from '../spaces.service';
import { Region } from '@placeos/organisation';

@Component({
    selector: `space-filters`,
    template: `
        <div class="flex items-center border-b border-base-200 pb-2 sm:hidden">
            <div class="flex-1 pl-2">
                <button
                    icon
                    matRipple
                    name="close-space-filters"
                    *ngIf="can_close"
                    (click)="close()"
                >
                    <app-icon>keyboard_arrow_left</app-icon>
                </button>
            </div>
            <h3 class="font-medium flex-2 text-center" i18n>Space Filters</h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="max-h-[65vh] p-2 overflow-y-auto overflow-x-hidden divide-y divide-base-200 w-full max-w-[100vw]"
            [formGroup]="form"
        >
            <section details>
                <h2 class="text-lg font-medium mb-1" i18n>Details</h2>
                <div class="flex-1 min-w-[8rem] flex flex-col">
                    <label for="location" i18n>Location</label>
                    <mat-form-field
                        appearance="outline"
                        class="w-full"
                        *ngIf="use_region && (regions | async)?.length"
                    >
                        <mat-select
                            name="region"
                            [ngModel]="region"
                            (ngModelChange)="setRegion($event)"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Any Region"
                            i18n-placeholder
                        >
                            <mat-option
                                *ngFor="let reg of regions | async"
                                [value]="reg"
                            >
                                {{ reg.display_name || reg.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        appearance="outline"
                        class="w-full"
                        *ngIf="!use_region && (buildings | async)?.length > 1"
                    >
                        <mat-select
                            name="building"
                            [ngModel]="building | async"
                            (ngModelChange)="setBuilding($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="
                                (building | async)?.display_name ||
                                (building | async)?.name
                            "
                        >
                            <mat-option
                                *ngFor="let bld of buildings | async"
                                [value]="bld"
                            >
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        appearance="outline"
                        class="w-full"
                        *ngIf="!hide_levels"
                    >
                        <mat-select
                            name="location"
                            [ngModel]="(options | async)?.zone_ids"
                            (ngModelChange)="setOptions({ zone_ids: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Any Level"
                            i18n-placeholder
                            [multiple]="true"
                        >
                            <mat-option
                                *ngFor="let lvl of levels | async"
                                [value]="lvl.id"
                            >
                                <div class="flex flex-col-reverse">
                                    <div
                                        class="opacity-30 text-xs"
                                        *ngIf="use_region"
                                    >
                                        {{
                                            (lvl.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                    <div>
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex items-center flex-wrap sm:space-x-2">
                    <div class="flex-1 min-w-[8rem]">
                        <label for="date" i18n>Date<span>*</span></label>
                        <a-date-field
                            name="date"
                            [ngModel]="form.getRawValue().date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            i18n
                            [to]="end_date"
                            [short]="true"
                        >
                            {{ 'FORM.DATE_ERROR' | translate }}
                        </a-date-field>
                    </div>
                    <div class="flex-1 min-w-[8rem] relative" *ngIf="multiday">
                        <label for="date">
                            {{ 'FORM.END_DATE' | translate }}<span>*</span>
                        </label>
                        <a-date-field
                            name="date"
                            [ngModel]="form.getRawValue().date_end"
                            (ngModelChange)="
                                form.patchValue({ date_end: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [from]="start_date"
                            [to]="end_date"
                            [short]="true"
                        >
                            {{ 'FORM.DATE_ERROR' | translate }}
                        </a-date-field>
                    </div>
                </div>
                <!-- All Day -->
                <div *ngIf="allow_all_day" class="flex justify-end -mt-2 mb-2">
                    <mat-checkbox formControlName="all_day" i18n>
                        All Day
                    </mat-checkbox>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="!form.value.all_day"
                >
                    <div class="flex-1 w-1/3">
                        <label for="start-time" i18n>
                            Start Time<span>*</span>
                        </label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.getRawValue().date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [use_24hr]="use_24hr"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3" *ngIf="multiday">
                        <label for="end-time">
                            {{ 'FORM.END_TIME' | translate }}<span>*</span>
                        </label>
                        <a-time-field
                            name="end-time"
                            [ngModel]="form.value.date_end"
                            (ngModelChange)="
                                form.patchValue({ date_end: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [from]="form?.getRawValue()?.date"
                            [use_24hr]="use_24hr"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3" *ngIf="!multiday">
                        <label for="end-time">
                            {{ 'FORM.END_TIME' | translate }}<span>*</span>
                        </label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form?.getRawValue()?.date"
                            [max]="max_duration"
                            [use_24hr]="use_24hr"
                        ></a-duration-field>
                    </div>
                </div>
            </section>
            <section
                favs
                class="space-y-2 pb-4"
                *ngIf="!viewing_map || !(using_mapspeople | async)"
            >
                <h2 class="text-lg font-medium" i18n>
                    {{ 'COMMON.FAVOURITES' | translate }}
                </h2>
                <div class="flex items-center">
                    <div for="fav" class="flex-1 w-1/2" i18n>
                        {{ 'ROOMS.SHOW_FAVOURITES' | translate }}
                    </div>
                    <mat-checkbox
                        name="fav"
                        [ngModel]="(options | async)?.show_fav"
                        (ngModelChange)="setOptions({ show_fav: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </mat-checkbox>
                </div>
            </section>
            <section
                features
                class="space-y-2"
                *ngIf="
                    (features | async)?.length &&
                    (!viewing_map || !(using_mapspeople | async))
                "
            >
                <h2 class="text-lg font-medium" i18n>Facilities</h2>
                <ng-container *ngFor="let feat of features | async">
                    <div
                        class="flex items-center"
                        *ngIf="!hide_features.includes(feat)"
                    >
                        <div for="feat" class="flex-1 w-1/2">
                            {{ feature_display[feat] || feat }}
                        </div>
                        <mat-checkbox
                            name="feat"
                            [ngModel]="
                                (options | async)?.features?.includes(feat)
                            "
                            (ngModelChange)="toggleFeature(feat, $event)"
                            [ngModelOptions]="{ standalone: true }"
                        ></mat-checkbox>
                    </div>
                </ng-container>
            </section>
        </form>
        <div
            class="px-2 pt-2 w-full border-t border-base-200"
            *ngIf="can_close"
        >
            <button
                btn
                matRipple
                class="w-full"
                name="apply-space-filters"
                (click)="close()"
                i18n
            >
                Apply Filters
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 100vw;
            }
        `,
    ],
})
export class SpaceFiltersComponent {
    @Input() public multiday: boolean;
    @Input() public hide_levels: boolean;
    @Input() public viewing_map: boolean;
    public can_close = false;
    public readonly options = this._event_form.options;

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;

    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            const viewable_levels = level_list.filter(
                (lvl) => !lvl.tags.includes('parking')
            );
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || '')
            );
        })
    );

    public readonly regions = this._org.region_list;

    public readonly using_mapspeople = this._mapspeople.available$;

    public readonly features = combineLatest([
        this._spaces.features,
        this._event_form.available_spaces,
    ]).pipe(
        map(([features, spaces]) =>
            unique(features.concat(flatten(spaces.map((_) => _.features))))
        )
    );

    public get allow_all_day() {
        return !!this._settings.get('app.events.allow_all_day');
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._event_form.setOptions(o);

    public get bld() {
        return this._org.building;
    }

    public get region() {
        return this._org.region;
    }

    public get form() {
        return this._event_form.form;
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get feature_display() {
        return this._settings.get('app.events.feature_decriptions') || {};
    }

    public get hide_features() {
        return this._settings.get('app.events.hide_features') || [];
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get start_date() {
        return startOfDay(this.form.getRawValue().date).valueOf();
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.events.allowed_future_days') || 180
            )
        );
    }

    constructor(
        @Optional()
        private _bsheet_ref: MatBottomSheetRef<SpaceFiltersComponent>,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _mapspeople: MapsPeopleService
    ) {
        this.can_close = !!this._bsheet_ref;
    }

    public setBuilding(bld: Building) {
        this._org.building = bld;
    }

    public setRegion(region: Region) {
        this._org.region = region;
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = await this.options.pipe(take(1)).toPromise();
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this.setOptions({ features: new_list });
    }
}
