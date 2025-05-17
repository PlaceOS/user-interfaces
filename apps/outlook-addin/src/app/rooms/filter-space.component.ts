import { Component, Inject, OnInit } from '@angular/core';

import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { Observable } from 'rxjs';
import { FeaturesFilterService } from './features-filter.service';

@Component({
    selector: '[filter-space]',
    template: `
        <div class="z-0 m-0 flex min-h-[800px] flex-1 flex-col overflow-y-auto">
            <form *ngIf="form" [formGroup]="form">
                <section
                    class="flex flex-col items-center border-b border-base-200 py-5"
                >
                    <div
                        class="flex w-[calc(100%-2rem)] max-w-[22.5rem] flex-col self-center"
                    >
                        <div class="flex flex-row items-center">
                            <button icon matRipple (click)="closeModal()">
                                <icon
                                    class="text-gray-700 flex items-center justify-center text-3xl"
                                    >close</icon
                                >
                            </button>

                            <span
                                class="ml-6 flex items-center text-xl font-bold"
                            >
                                Space Filters</span
                            >
                        </div>
                    </div>
                </section>
                <section
                    class="flex flex-col items-center border-b border-base-200"
                >
                    <div
                        class="flex w-[calc(100%-2rem)] max-w-[22.5rem] flex-col self-center"
                    >
                        <div class="my-2 text-lg">Details</div>

                        <div class="flex flex-col">
                            <label
                                class="text-gray-700 mb-1 text-sm font-bold"
                                *ngIf="(buildings | async)?.length > 1"
                            >
                                Location
                            </label>

                            <mat-form-field
                                overlay
                                buildings
                                class="w-full"
                                appearance="outline"
                                *ngIf="(buildings | async)?.length > 1"
                            >
                                <mat-select
                                    placeholder="Select Building..."
                                    [ngModel]="building | async"
                                    (ngModelChange)="setBuilding($event)"
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

                            <div class="flex flex-col">
                                <label
                                    class="text-gray-700 mb-1 text-sm font-bold"
                                >
                                    Date
                                </label>
                                <a-date-field
                                    [from]="minDate"
                                    formControlName="date"
                                ></a-date-field>

                                <div class="flex w-full flex-row space-x-2">
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label
                                            class="text-gray-700 mb-1 text-sm font-bold"
                                        >
                                            Start Time*
                                        </label>

                                        <a-time-field
                                            [ngModel]="form?.value.date"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    date: $event,
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></a-time-field>
                                    </div>
                                    <div
                                        class="ml-auto flex w-1/3 flex-1 flex-col"
                                    >
                                        <label
                                            class="text-gray-700 mb-1 text-sm font-bold"
                                        >
                                            End Time*
                                        </label>
                                        <a-duration-field
                                            [time]="form?.value.date"
                                            [max]="10 * 60"
                                            [min]="60"
                                            [step]="60"
                                            formControlName="duration"
                                        ></a-duration-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    class="flex flex-col items-center border-b border-base-200"
                >
                    <div
                        class="flex w-[calc(100%-2rem)] max-w-[22.5rem] flex-col self-center"
                    >
                        <div class="my-2 text-lg">Favourites</div>
                        <div class="mb-2 flex flex-row">
                            <span>Only show favourite rooms</span>
                            <mat-checkbox class="ml-auto"></mat-checkbox>
                        </div>
                    </div>
                </section>

                <section class="flex flex-col border-base-200">
                    <div class="mx-auto w-[calc(100%-2rem)] max-w-[22.5rem]">
                        <div class="my-2 text-lg">Facilities</div>

                        <div *ngFor="let feature of features$ | async">
                            <div class="mb-1 flex flex-row">
                                <span> {{ feature.name }}</span>
                                <mat-checkbox
                                    [(ngModel)]="feature.value"
                                    class="checkbox ml-auto"
                                    [ngModelOptions]="{ standalone: true }"
                                    (change)="getSelectedFeatures()"
                                ></mat-checkbox>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    class="top-box-shadow mt-5 flex flex-col items-center justify-center border-t border-base-200 py-3"
                >
                    <button
                        btn
                        matRipple
                        type="submit"
                        (click)="applyFilters()"
                        class="filter-button max-w-[calc(100% - 2rem)] mx-auto min-w-[300px] border-secondary bg-secondary text-center text-sm"
                    >
                        <span class="">Apply Filters</span>
                    </button>
                </section>
            </form>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class FilterSpaceComponent implements OnInit {
    readonly buildings = this._org.building_list;
    readonly building = this._org.active_building;
    minDate: Date = new Date();
    features$: Observable<Array<{}>>;

    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: { data },
        private _bottomsheetRef: MatBottomSheetRef<any>,
        private _featuresFilterService: FeaturesFilterService,
        private _state: EventFormService,
        private _org: OrganisationService,
    ) {}

    ngOnInit() {
        this.features$ = this._featuresFilterService.features$;
    }

    public get form() {
        return this._state.form;
    }

    applyFilters() {
        this._bottomsheetRef.dismiss(this.form);
        this._featuresFilterService.applyFilter();
    }

    getSelectedFeatures() {
        this._featuresFilterService.getSelectedFeatures();
    }

    closeModal() {
        this._bottomsheetRef.dismiss();
    }
}
