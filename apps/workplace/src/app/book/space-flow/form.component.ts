import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventStateService } from '@placeos/events';
import { addDays, addMinutes, roundToNearestMinutes, setHours } from 'date-fns';

@Component({
    selector: 'space-flow-form',
    template: `
        <section quick class="text-white">
            <div class="w-[640px] max-w-[calc(100%-2rem)] mx-auto pb-2">
                <h2 class="text-xl uppercase font-medium mb-2 mt-4">
                    Quick Book
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
                            [(ngModel)]="capacity"
                            name="capacity"
                            placeholder="Any Capacity"
                        >
                            <mat-option
                                *ngFor="let item of quick_capacities"
                                [value]="item.value"
                            >
                                {{ item.name }}
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
                            <span class="ml-2 mx-4">Find Space</span>
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
                Detailed Booking
            </h2>
            <detailed-book-space-form [form]="form"></detailed-book-space-form>
            <div
                class="flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
            >
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem] inverse"
                    mat-button
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">clear</app-icon>
                        <span class="ml-2 mx-4">Clear Form</span>
                    </div>
                </button>
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                    mat-button
                    (click)="findSpace()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">search</app-icon>
                        <span class="ml-2 mx-4">Find Space</span>
                    </div>
                </button>
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                    mat-button
                    (click)="confirmBooking()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">event_available</app-icon>
                        <span class="ml-2 mx-4">Book without Space</span>
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
export class SpaceFlowFormComponent {
    public time = 0;
    public capacity = 0;

    public readonly quick_times = [
        { name: 'Now', value: 0 },
        { name: 'Later Today', value: 120 },
        {
            name: 'Tomorrow',
            value: setHours(addDays(new Date(), 1), 9).valueOf(),
        },
    ];

    public readonly quick_capacities = [
        { name: 'Small (1 - 4)', value: 1 },
        { name: 'Medium (5 - 12)', value: 5 },
        { name: 'Large (13 - 32)', value: 13 },
        { name: 'Huge (32+)', value: 33 },
    ];

    public get form() {
        return this._state.form;
    }

    constructor(private _state: EventStateService, private _router: Router) {}

    public quickBook() {
        this.form.patchValue({
            date: (this.time < 24 * 60
                ? addMinutes(
                      roundToNearestMinutes(new Date(), { nearestTo: 5 }),
                      this.time
                  )
                : setHours(addDays(new Date(), 1), 8)
            ).valueOf(),
            title: 'Ad-hoc Meeting',
        });
        this._state.setOptions({ capacity: this.capacity });
        this._router.navigate(['/book', 'spaces', 'find']);
    }

    public findSpace() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._router.navigate(['/book', 'spaces', 'find']);
    }

    public confirmBooking() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._router.navigate(['/book', 'spaces', 'confirm']);
    }
}
