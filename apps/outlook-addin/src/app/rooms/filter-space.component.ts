import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { Observable } from 'rxjs';
import { FeaturesFilterService } from './features-filter.service';

@Component({
    selector: '[filter-space]',
    template: `
        <div class="z-0 m-0 flex min-h-[800px] flex-1 flex-col overflow-y-auto">
            @if (form) {
                <form [formGroup]="form">
                    <section
                        class="border-base-200 flex flex-col items-center border-b py-5"
                    >
                        <div
                            class="flex w-[calc(100%-2rem)] max-w-90 flex-col self-center"
                        >
                            <div class="flex flex-row items-center">
                                <button icon matRipple (click)="closeModal()">
                                    <icon
                                        class="flex items-center justify-center text-3xl text-gray-700"
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
                        class="border-base-200 flex flex-col items-center border-b"
                    >
                        <div
                            class="flex w-[calc(100%-2rem)] max-w-90 flex-col self-center"
                        >
                            <div class="my-2 text-lg">Details</div>
                            <div class="flex flex-col">
                                @if ((buildings | async)?.length > 1) {
                                    <label
                                        class="mb-1 text-sm font-bold text-gray-700"
                                    >
                                        Location
                                    </label>
                                }
                                @if ((buildings | async)?.length > 1) {
                                    <mat-form-field
                                        overlay
                                        buildings
                                        class="w-full"
                                        appearance="outline"
                                    >
                                        <mat-select
                                            placeholder="Select Building..."
                                            [ngModel]="building | async"
                                            (ngModelChange)="
                                                setBuilding($event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                bld of buildings | async;
                                                track bld
                                            ) {
                                                <mat-option [value]="bld">
                                                    {{
                                                        bld.display_name ||
                                                            bld.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                }
                                <div class="flex flex-col">
                                    <label
                                        class="mb-1 text-sm font-bold text-gray-700"
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
                                                class="mb-1 text-sm font-bold text-gray-700"
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
                                                class="mb-1 text-sm font-bold text-gray-700"
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
                        class="border-base-200 flex flex-col items-center border-b"
                    >
                        <div
                            class="flex w-[calc(100%-2rem)] max-w-90 flex-col self-center"
                        >
                            <div class="my-2 text-lg">Favourites</div>
                            <div class="mb-2 flex flex-row">
                                <span>Only show favourite rooms</span>
                                <mat-checkbox class="ml-auto"></mat-checkbox>
                            </div>
                        </div>
                    </section>
                    <section class="border-base-200 flex flex-col">
                        <div class="mx-auto w-[calc(100%-2rem)] max-w-90">
                            <div class="my-2 text-lg">Facilities</div>
                            @for (feature of features$ | async; track feature) {
                                <div>
                                    <div class="mb-1 flex flex-row">
                                        <span> {{ feature.name }}</span>
                                        <mat-checkbox
                                            [(ngModel)]="feature.value"
                                            class="checkbox ml-auto"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (change)="getSelectedFeatures()"
                                        ></mat-checkbox>
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                    <section
                        class="top-box-shadow border-base-200 mt-5 flex flex-col items-center justify-center border-t py-3"
                    >
                        <button
                            btn
                            matRipple
                            type="submit"
                            (click)="applyFilters()"
                            class="filter-button max-w-[calc(100% - 2rem)] border-secondary bg-secondary mx-auto min-w-[300px] text-center text-sm"
                        >
                            <span class="">Apply Filters</span>
                        </button>
                    </section>
                </form>
            }
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        IconComponent,
    ],
})
export class FilterSpaceComponent implements OnInit {
    data = inject<{
        data;
    }>(MAT_BOTTOM_SHEET_DATA);
    private _bottomsheetRef = inject<MatBottomSheetRef<any>>(MatBottomSheetRef);
    private _featuresFilterService = inject(FeaturesFilterService);
    private _state = inject(EventFormService);
    private _org = inject(OrganisationService);

    readonly buildings = this._org.building_list;
    readonly building = this._org.active_building;
    minDate = Date.now();
    features$: Observable<{ name: string; value: boolean }[]>;

    public readonly setBuilding = (b) => (this._org.building = b);

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
