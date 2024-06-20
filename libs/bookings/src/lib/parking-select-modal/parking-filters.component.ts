import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { map, take } from 'rxjs/operators';
import { BookingFormService } from '../booking-form.service';

@Component({
    selector: `parking-space-filters`,
    template: `
        <div class="flex items-center border-b border-base-200 pb-2 sm:hidden">
            <div class="flex-1 pl-2">
                <button
                    icon
                    matRipple
                    close
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
                <h2 class="text-lg font-medium" i18n>Details</h2>
                <div class="flex-1 min-w-[256px] flex flex-col">
                    <label for="location" i18n>Location</label>
                    <ng-container *ngIf="!use_region">
                        <mat-form-field
                            appearance="outline"
                            class="w-full"
                            *ngIf="(buildings | async)?.length > 1"
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
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Any Level"
                                i18n-placeholder
                            >
                                <mat-option
                                    *ngFor="let lvl of levels | async"
                                    [value]="lvl.id"
                                >
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </ng-container>
                    <ng-container *ngIf="use_region">
                        <mat-form-field
                            appearance="outline"
                            class="w-full"
                            *ngIf="(regions | async)?.length"
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
                            *ngIf="!hide_levels"
                        >
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zone_id"
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Any Level"
                                i18n-placeholder
                            >
                                <mat-option [value]="">Any Level</mat-option>
                                <mat-optgroup
                                    *ngFor="let bld of region_levels | async"
                                    [label]="bld.name"
                                >
                                    <mat-option
                                        [value]="level.id"
                                        *ngFor="let level of bld.levels"
                                    >
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                </mat-optgroup>
                            </mat-select>
                        </mat-form-field>
                    </ng-container>
                </div>
                <div class="flex-1 min-w-[256px]">
                    <label for="date" i18n>Date<span>*</span></label>
                    <a-date-field name="date" formControlName="date" i18n>
                        Date and time must be in the future
                    </a-date-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="start-time" i18n
                            >Start Time<span>*</span></label
                        >
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [use_24hr]="use_24hr"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label for="end-time" i18n
                            >End Time<span>*</span></label
                        >
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form?.value?.date"
                            [max]="max_duration"
                            [use_24hr]="use_24hr"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </section>
            <section favs class="space-y-2 pb-4">
                <h2 class="text-lg font-medium" i18n>Favourites</h2>
                <div class="flex items-center">
                    <div for="fav" class="flex-1 w-1/2" i18n>
                        Only show favourite spaces
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
                *ngIf="(features | async)?.length"
            >
                <h2 class="text-lg font-medium" i18n>Facilities</h2>
                <div
                    class="flex items-center"
                    *ngFor="let feat of features | async"
                >
                    <div for="feat" class="flex-1 w-1/2">{{ feat }}</div>
                    <mat-checkbox
                        name="feat"
                        [ngModel]="(options | async)?.features?.includes(feat)"
                        (ngModelChange)="toggleFeature(feat, $event)"
                        [ngModelOptions]="{ standalone: true }"
                    ></mat-checkbox>
                </div>
            </section>
        </form>
        <div
            class="px-2 pt-2 w-full border-t border-base-200"
            *ngIf="can_close"
        >
            <button btn matRipple close class="w-full" (click)="close()" i18n>
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
export class ParkingSpaceFiltersComponent {
    @Input() public hide_levels: boolean;

    public can_close = false;
    public readonly options = this._form.options;

    public readonly levels = this._org.active_levels.pipe(
        map((l) => {
            for (const lvl of l) {
                const bld = this._org.buildings.find(
                    (_) => _.id === lvl.parent_id
                );
                (lvl as any).bld = bld?.display_name || bld?.name || '';
            }
            return l.filter((_) => _.tags.includes('parking'));
        })
    );
    public readonly buildings = this._org.active_buildings;
    public readonly regions = this._org.region_list;
    public readonly region_levels = this._org.active_region.pipe(
        map((_) => {
            const region_buildings = this._org.buildings.filter(
                (b) => !_ || b.parent_id === _.id
            );
            const region_levels = region_buildings.map((b) => ({
                id: b.id,
                name: b.display_name || b.name,
                levels: this._org.levels.filter(
                    (l) => l.parent_id === b.id && l.tags.includes('parking')
                ),
            }));
            return region_levels.filter((_) => _.levels.length);
        })
    );
    public readonly features = this._form.features;

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._form.setOptions(o);

    public get bld() {
        return this._org.building;
    }

    public get form() {
        return this._form.form;
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        @Optional()
        private _bsheet_ref: MatBottomSheetRef<ParkingSpaceFiltersComponent>,
        private _settings: SettingsService,
        private _form: BookingFormService,
        private _org: OrganisationService
    ) {
        this.can_close = !!this._bsheet_ref;
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = await this.options.pipe(take(1)).toPromise();
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this.setOptions({ features: new_list });
    }
}
