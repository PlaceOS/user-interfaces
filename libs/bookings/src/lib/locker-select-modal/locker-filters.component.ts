import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BookingFormService } from '../booking-form.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'locker-filters',
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
    template: `
        <div
            class="flex rounded-t-md items-center border-b border-base-200 pb-2 sm:hidden"
        >
            <div class="flex-1 pl-2">
                <button
                    icon
                    matRipple
                    name="close-locker-filters"
                    class="sm:hidden"
                    *ngIf="can_close"
                    (click)="close()"
                >
                    <app-icon>keyboard_arrow_left</app-icon>
                </button>
            </div>
            <h3 class="font-medium flex-2 text-center">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="max-h-[65vh] p-2 overflow-y-auto overflow-x-hidden divide-y divide-base-200 w-full"
            [formGroup]="form"
        >
            <section details>
                <h2 class="text-lg font-medium mb-1">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                <div
                    class="flex-1 min-w-[8rem] flex flex-col"
                    *ngIf="
                        !hide_levels &&
                        (!(use_region && (regions | async)?.length) ||
                            !(!use_region && (buildings | async)?.length > 1))
                    "
                >
                    <label for="location">
                        {{ 'BOOKINGS.LOCATION' | translate }}
                    </label>
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
                            [placeholder]="'COMMON.REGION_ANY' | translate"
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
                            [ngModel]="(options | async)?.zone_id"
                            (ngModelChange)="setOptions({ zone_id: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="'COMMON.LEVEL_ANY' | translate"
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

                <!-- Date -->
                <div class="flex-1 min-w-[256px]">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                <div *ngIf="allow_all_day" class="flex justify-end -mt-2 mb-2">
                    <mat-checkbox formControlName="all_day">
                        {{ 'COMMON.ALL_DAY' | translate }}
                    </mat-checkbox>
                </div>
                <!-- Start End -->
                <div
                    class="flex items-center space-x-2"
                    *ngIf="!form.value.all_day"
                >
                    <div class="flex-1 w-1/3">
                        <label>{{ 'FORM.TIME_START' | translate }}</label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [use_24hr]="use_24hr"
                            [disabled]="disable_start"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3" *ngIf="!hide_end">
                        <label>{{ 'FORM.TIME_END' | translate }}</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="10 * 60"
                            [min]="60"
                            [step]="60"
                            [use_24hr]="use_24hr"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </section>
            <section favs class="space-y-4 pb-4">
                <!-- <settings-toggle
                    [name]="'APP.WORKPLACE.FAVOURITES_SHOW' | translate"
                    [ngModel]="(options | async)?.show_fav"
                    (ngModelChange)="setOptions({ show_fav: $event })"
                    [ngModelOptions]="{ standalone: true }"
                ></settings-toggle> -->
                <settings-toggle
                    [name]="'BOOKINGS.LOCKER_ACCESSIBLE_SHOW' | translate"
                    [ngModel]="(options | async)?.show_accessible"
                    (ngModelChange)="setOptions({ show_accessible: $event })"
                    [ngModelOptions]="{ standalone: true }"
                ></settings-toggle>
            </section>
            <section
                class="space-y-2"
                features
                *ngIf="(features | async)?.length"
            >
                <h2 class="text-lg font-medium">
                    {{ 'COMMON.TYPE' | translate }}
                </h2>
                <div
                    *ngFor="let feat of features | async"
                    class="flex items-center flex-wrap space-x-2"
                >
                    <div for="feat" class="flex-1 w-1/2">{{ feat }}</div>
                    <mat-checkbox
                        [ngModel]="
                            ((options | async)?.features || []).includes(feat)
                        "
                        (ngModelChange)="setFeature(feat, $event)"
                        [ngModelOptions]="{ standalone: true }"
                    ></mat-checkbox>
                </div>
            </section>
        </form>
        <div
            class="px-2 py-2 w-full border-t border-base-200"
            *ngIf="can_close"
        >
            <button
                btn
                matRipple
                name="apply-locker-filters"
                class="w-full"
                (click)="close()"
            >
                {{ 'COMMON.APPLY' | translate }}
            </button>
        </div>
    `,
    standalone: false,
})
export class LockerFiltersComponent extends AsyncHandler implements OnInit {
    @Input() public hide_levels: boolean;

    public can_close = false;
    public readonly options = this._state.options;
    public readonly features = this._state.features;
    public readonly buildings = this._org.active_buildings;
    public readonly form = this._state.form;
    public readonly regions = this._org.region_list;

    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            return level_list.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
    );

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public get region() {
        return this._org.region;
    }
    public set region(reg) {
        this._org.region = reg;
    }

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);
    public readonly setLevel = (l) => {};

    public get disable_date() {
        return this._settings.get('app.lockers.disabled_date_select');
    }

    public get disable_start() {
        return this._settings.get('app.lockers.disabled_start_time');
    }

    public get hide_end() {
        return this._settings.get('app.lockers.hide_end_time');
    }

    public get only_duration() {
        return !!this._settings.get('app.lockers.only_duration');
    }

    public get allow_time_changes() {
        return !!this._settings.get('app.lockers.allow_time_changes');
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            !!this._settings.get('app.lockers.allow_all_day')
        );
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.lockers.available_period') || 90,
            ),
        );
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get use_region() {
        return this._settings.get('app.use_region');
    }

    constructor(
        @Optional()
        private _bsheet_ref: MatBottomSheetRef<LockerFiltersComponent>,
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {
        super();
        this.can_close = !!this._bsheet_ref;
    }

    public ngOnInit() {
        this.subscription(
            'bld',
            combineLatest([
                this._org.active_building,
                this.form.controls.duration.valueChanges,
            ]).subscribe(() => {
                this.timeout(
                    'disable',
                    () => {
                        if (this.only_duration) {
                            this.form.patchValue({ all_day: false });
                            this.form.controls.date.disable();
                        } else this.form.controls.date.enable();
                        if (this.disable_date) {
                            this.form.controls.date.disable();
                        }
                    },
                    50,
                );
            }),
        );
        this.timeout(
            'disable',
            () => {
                if (this.only_duration) {
                    this.form.patchValue({ all_day: false });
                    this.form.controls.date.disable();
                } else this.form.controls.date.enable();
                if (this.disable_date) {
                    this.form.controls.date.disable();
                }
            },
            50,
        );
    }
}
