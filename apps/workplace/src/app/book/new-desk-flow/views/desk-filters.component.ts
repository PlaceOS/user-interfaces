import { Component, Optional } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { BookingFormService } from "@placeos/bookings";
import { SettingsService } from "@placeos/common";
import { OrganisationService } from "@placeos/organisation";
import { addDays, endOfDay } from "date-fns";

@Component({
    selector:'desk-filters',
    styles:[`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 100vw;
        }
    `],
    template:`
        <div class="flex rounded-t-md items-center border-b border-gray-200 pb-2">
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
            <h3 class="font-medium flex-2 text-center">Space Filters</h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="max-h-[65vh] p-2 overflow-y-auto overflow-x-hidden divide-y divide-gray-200 w-full max-w-[100vw]"
            [formGroup]="form"
        >
            <section details>
                <h2 class="text-lg font-medium">Details</h2>
<!-- Building -->
                <div *ngIf="(buildings | async)?.length > 1" 
                    class="flex-1 min-w-[256px] flex flex-col">
                    <label>Building</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
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
                <div *ngIf="(levels | async)?.length > 1"
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
                </div>
<!-- Date -->
                <div class="flex-1 min-w-[256px]">
                    <label>Date</label>
                    <a-date-field [to]="book_until" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
<!-- Start End -->
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label>Start Time</label>
                        <a-time-field
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label>End Time</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="12 * 60"
                            [min]="60"
                            [step]="60"
                            [disabled]="form.value.all_day"
                        >
                        </a-duration-field>
                        <mat-checkbox
                            formControlName="all_day"
                            *ngIf="allow_all_day"
                            class="absolute top-0 right-0"
                        >
                            All Day
                        </mat-checkbox>
                    </div>
                </div>
            </section>

            <section class="space-y-2" features>
                <h2 class="text-lg font-medium">Type</h2>
                <div *ngFor="let feat of features | async" class="flex items-center flex-wrap space-x-2">
                    <div for="feat" class="flex-1 w-1/2">{{ feat }}</div>
                    <mat-checkbox
                        [ngModel]="((options | async)?.features || []).includes(feat)"
                        (ngModelChange)="setFeature(feat, $event)"
                        [ngModelOptions]="{standalone: true}"
                    ></mat-checkbox>
                </div>
            </section>
        </form>
        <div
            class="px-2 py-2 w-full border-t border-gray-200"
            *ngIf="can_close"
        >
            <button mat-button close class="w-full" (click)="close()">
                Apply Filters
            </button>
        </div>
    `
})
export class DeskFiltersComponent{
    public can_close = false;
    public readonly options = this._state.options;
    public readonly features = this._state.features;
    public readonly buildings = this._org.building_list;
    public readonly levels = this._org.active_levels;
    public readonly form = this._state.form;

    public get building(){ return this._org.building; }
    public set building(bld){this._org.building = bld; }

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

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
    ){
        this.can_close = !!this._bsheet_ref;
    }
}