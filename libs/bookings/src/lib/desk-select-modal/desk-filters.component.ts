import { Component, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SettingsService } from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BookingFormService } from '../booking-form.service';

@Component({
    selector: 'desk-filters',
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
            class="flex rounded-t-md items-center border-b border-gray-200 dark:border-neutral-500 pb-2 sm:p-4"
        >
            <div class="flex-1 pl-2">
                <button
                    mat-icon-button
                    close
                    class="sm:hidden"
                    *ngIf="can_close"
                    (click)="close()"
                >
                    <app-icon>keyboard_arrow_left</app-icon>
                </button>
            </div>
            <h3 class="font-medium flex-2 text-center" i18n>Desk Filters</h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="max-h-[65vh] p-2 overflow-y-auto overflow-x-hidden divide-y divide-gray-200 w-full max-w-[100vw]"
            [formGroup]="form"
        >
            <section details>
                <h2 class="text-lg font-medium" i18n>Details</h2>
                <!-- Building -->
                <div
                    *ngIf="(buildings | async)?.length"
                    class="flex-1 min-w-[256px] flex flex-col"
                >
                    <label i18n>Building</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="building"
                            placeholder="Select building"
                            [(ngModel)]="building"
                            (ngModelChange)="
                                setOptions({
                                    zone_id: $event?.id
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option
                                *ngFor="let bld of buildings | async"
                                [value]="bld"
                            >
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <!-- level -->
                <!-- <div *ngIf="(levels | async)?.length > 1"
                    class="flex-1 min-w-[256px] flex flex-col">
                    <label>Level</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="Any Level"
                            ngModel
                            [disabled]="!building"
                            (ngModelChange)="
                                setOptions({
                                    zone_id: $event || building.id
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option
                                *ngFor="let lvl of levels | async"
                                [value]="lvl.id"
                            >
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div> -->

                <!-- Date -->
                <div class="flex-1 min-w-[256px]">
                    <label i18n>Date</label>
                    <a-date-field [to]="book_until" formControlName="date" i18n>
                        Date and time must be in the future
                    </a-date-field>
                </div>
                <!-- Start End -->
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label i18n>Start Time</label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label i18n>End Time</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="12 * 60"
                            [min]="60"
                            [step]="60"
                            [disabled]="form.value.all_day"
                        >
                        </a-duration-field>
                    </div>
                </div>
                <!-- All Day -->
                <div *ngIf="allow_all_day" class="flex justify-end -mt-2 mb-2">
                    <mat-checkbox formControlName="all_day" i18n>
                        All Day
                    </mat-checkbox>
                </div>
            </section>
            <section favs class="space-y-2 pb-4">
                <h2 class="text-lg font-medium" i18n>Favourites</h2>
                <div class="flex items-center">
                    <div for="fav" class="flex-1 w-1/2" i18n>
                        Only show favourite desks
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
                class="space-y-2"
                features
                *ngIf="(features | async)?.length"
            >
                <h2 class="text-lg font-medium" i18n>Type</h2>
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
            class="px-2 py-2 w-full border-t border-gray-200"
            *ngIf="can_close"
        >
            <button mat-button close class="w-full" (click)="close()" i18n>
                Apply Filters
            </button>
        </div>
    `,
})
export class DeskFiltersComponent {
    public can_close = false;
    public readonly options = this._state.options;
    public readonly features = this._state.features;
    public readonly buildings = this._org.building_list;
    public readonly levels = this._org.active_levels;
    public readonly form = this._state.form;

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);
    public readonly setLevel = (l) => {};

    public get allow_time_changes() {
        return !!this._settings.get('app.desks.allow_time_changes');
    }
    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            !!this._settings.get('app.desks.allow_all_day')
        );
    }

    public get book_until() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.desks.available_period') || 90
            )
        );
    }

    constructor(
        @Optional()
        private _bsheet_ref: MatBottomSheetRef<DeskFiltersComponent>,
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        this.can_close = !!this._bsheet_ref;
    }
}
