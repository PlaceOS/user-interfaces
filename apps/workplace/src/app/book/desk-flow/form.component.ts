import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';
import { addDays, addMinutes, roundToNearestMinutes } from 'date-fns';
import setHours from 'date-fns/setHours';
import { first } from 'rxjs/operators';

@Component({
    selector: 'desk-flow-form',
    template: `
        <section quick class="text-white">
            <div class="w-[640px] max-w-[calc(100%-2rem)] mx-auto pb-2">
                <h2 class="text-xl uppercase font-medium mb-2 mt-4">
                    Quick Book Desk
                </h2>
                <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-2">
                    <mat-form-field
                        class="sm:flex-2 h-[3.25rem]"
                        overlay
                        appearance="outline"
                    >
                        <mat-select
                            name="time"
                            [(ngModel)]="time"
                            placeholder="Now"
                        >
                            <mat-option
                                *ngFor="let item of quick_times"
                                [value]="item.value"
                            >
                                {{ item.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="sm:flex-2 h-[3.25rem]"
                        overlay
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [(ngModel)]="level"
                            placeholder="Any Level"
                        >
                            <mat-option
                                *ngFor="let item of levels"
                                [value]="item.id"
                            >
                                {{ item.display_name || item.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        class="sm:flex-1 h-[2.75rem] mt-1 mb-2"
                        mat-button
                        (click)="quickBook()"
                    >
                        <div class="flex items-center justify-center">
                            <app-icon class="text-xl">search</app-icon>
                            <span class="ml-2 mx-4">Find Desk</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
        <section class="bg-gray-300">
            <div class="w-[640px] max-w-[calc(100%-2rem)] mx-auto">
                <h2 class="text-xl uppercase font-medium my-4">OR</h2>
            </div>
        </section>
        <section class="flex-1 min-h-[50%]">
            <h2
                class="text-xl uppercase font-medium mb-2 mt-4 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                {{ is_edit ? 'Edit' : 'Detailed' }} Booking
            </h2>
            <detailed-book-desks-form [form]="form"></detailed-book-desks-form>
            <div class="mb-4 border-b border-gray-300 w-full"></div>
            <div
                class="flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
            >
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem] inverse"
                    mat-button
                    (click)="clearForm()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">clear</app-icon>
                        <span class="ml-2 mx-4">{{
                            is_edit ? 'Cancel Edit' : 'Clear Form'
                        }}</span>
                    </div>
                </button>
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                    mat-button
                    (click)="findDesk()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">search</app-icon>
                        <span class="ml-2 mx-4">{{
                            is_edit ? 'Update Desk' : 'Find Desk'
                        }}</span>
                    </div>
                </button>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                overflow: auto;
            }

            [quick] {
                background-color: #007ac8;
            }
        `,
    ],
})
export class DeskFlowFormComponent implements OnInit {
    public time = 0;
    public level = '';

    public readonly quick_times = [
        { name: 'Now', value: 0 },
        {
            name: 'Tomorrow',
            value: setHours(addDays(new Date(), 1), 9).valueOf(),
        },
    ];

    public levels = [];

    public get is_edit() {
        return !!this.form?.get('id')?.value;
    }

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this.time = 0;
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    constructor(
        private _state: BookingFormService,
        private _router: Router,
        private _org: OrganisationService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _));
        await this._org.active_levels.pipe(first((_) => _?.length > 0));
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
    }

    public quickBook() {
        this.form.patchValue({
            date: (this.time < 24 * 60
                ? addMinutes(
                      roundToNearestMinutes(new Date(), { nearestTo: 5 }),
                      this.time
                  )
                : setHours(addDays(new Date(), 1), 8)
            ).valueOf(),
            title: 'Ad-hoc Desk Booking',
        });
        this.findDesk();
    }

    public findDesk() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._router.navigate(['/book', 'desks', 'map']);
    }
}
