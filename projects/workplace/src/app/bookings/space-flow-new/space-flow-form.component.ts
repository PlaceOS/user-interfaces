import { Component } from '@angular/core';
import { addDays, addHours, addMinutes, roundToNearestMinutes } from 'date-fns';
import { SpaceFlowService } from './space-flow.service';

@Component({
    selector: 'space-flow-form',
    template: `
        <div name="heading" class="p-4 w-full">
            <h3 class="m-auto text-white uppercase width-tablet">How would you like to search?</h3>
        </div>
        <div name="quick" class="p-4 w-full">
            <h3 class="m-auto text-white uppercase width-tablet mb-2">Quick Search</h3>
            <form class="flex width-tablet m-auto space-x-2 items-center flex-wrap sm:space-x-0" [formGroup]="form | async">
                <mat-form-field class="flex-1 h-13" appearance="outline" bg="white">
                    <mat-select placeholder="Now" formControlName="date">
                        <mat-option *ngFor="let option of time_options" [value]="option.id">
                            {{ option.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field class="flex-1 h-13" appearance="outline" bg="white">
                    <mat-select
                        placeholder="Any Capacity"
                        [ngModel]="(filters | async)?.capacity"
                        (ngModelChange)="updateCapacity($event)"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-option *ngFor="let option of capacity_options" [value]="option.id">
                            {{ option.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <button mat-button style="margin-left: .5rem" class="h-12">Go -></button>
            </form>
        </div>
        <div name="divider" class="p-4 w-full bg-gray-200">
            <h3 class="m-auto uppercase width-tablet">Or</h3>
        </div>
        <form
            *ngIf="form | async"
            name="divider"
            class="w-full bg-white pb-2"
            (ngSubmit)="$event.preventDefault()"
            [formGroup]="form | async"
        >
            <h3 class="m-auto uppercase width-tablet pt-4">Detailed Booking</h3>
            <section class="mb-4">
                <div class="m-auto width-tablet flex flex-wrap space-x-2 sm:space-x-0">
                    <h4 class="w-full">Date &amp; Time</h4>
                    <div class="field flex flex-1 flex-wrap m-0">
                        <label for="date" class="w-full">Date</label>
                        <a-date-field formControlName="date" class="flex-1 mb-4"></a-date-field>
                    </div>
                    <div class="field flex flex-1 flex-wrap">
                        <label for="date" class="w-full">Start Time</label>
                        <a-time-field formControlName="date"></a-time-field>
                    </div>
                    <div class="field flex flex-1 flex-wrap">
                        <label for="date" class="w-full">End Time</label>
                        <a-duration-field
                            [time]="(form | async)?.controls.date?.value"
                            formControlName="duration"
                        ></a-duration-field>
                    </div>
                </div>
            </section>
            <section class="mb-4">
                <div class="m-auto width-tablet">
                    <h4>People</h4>
                    <div class="field flex flex-1 flex-wrap m-0">
                        <label for="date" class="w-full">Attendees</label>
                        <a-user-list-field
                            formControlName="attendees"
                            class="flex-1"
                        ></a-user-list-field>
                    </div>
                </div>
            </section>
            <section class="mb-4">
                <div class="m-auto width-tablet">
                    <h4>Details</h4>
                    <div class="field flex flex-1 flex-wrap m-0">
                        <label for="date" class="w-full">Meeting Subject</label>
                        <mat-form-field class="flex-1" appearance="outline">
                            <input
                                matInput
                                name="title"
                                placeholder="Meeting Title"
                                formControlName="title"
                            />
                            <mat-error>Title is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field flex flex-1 flex-wrap m-0">
                        <label for="date" class="w-full">Notes</label>
                        <mat-form-field
                            name="body"
                            class="flex-1"
                            appearance="outline"
                            *ngIf="!use_html; else html_editor"
                        >
                            <textarea
                                matInput
                                name="description"
                                placeholder="Add Meeting Notes here..."
                                formControlName="body"
                            ></textarea>
                        </mat-form-field>
                        <ng-template #html_editor>
                            <editor class="flex-1" formControlName="body"></editor>
                        </ng-template>
                    </div>
                </div>
            </section>
            <div class="m-auto width-tablet mb-2">
                <button mat-button class="inverse" type="button">Add Filter</button>
                <button mat-button style="margin-left: .5rem">Search</button>
            </div>
        </form>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: auto;
            }

            [name='heading'] {
                background-color: #00539f;
            }

            [name='quick'] {
                background-color: #007ac8;
            }

            section {
                border-bottom: 1px solid #ccc;
            }

            button {
                min-width: 10em;
            }

            .field {
                min-width: 12rem;
            }
        `,
    ],
})
export class SpaceFlowFormComponent {
    /** Form fields for event */
    public readonly form = this._service.form;
    /** Form filters for event */
    public readonly filters = this._service.filters;
    public readonly updateCapacity = (c: number) => this._service.updateFilters({ capacity: c });

    public readonly time_options = [
        { id: roundToNearestMinutes(addMinutes(new Date(), 2)).valueOf(), name: 'Now' },
        {
            id: addHours(roundToNearestMinutes(addMinutes(new Date(), 2)).valueOf(), 1),
            name: 'Later Today',
        },
        {
            id: addDays(roundToNearestMinutes(addMinutes(new Date(), 2)).valueOf(), 1),
            name: 'Tomorrow',
        },
    ];

    public readonly capacity_options = [
        { id: 0, name: 'Any Capacity' },
        { id: 4, name: 'Small(1 - 4)' },
        { id: 12, name: 'Medium(5 - 12)' },
        { id: 32, name: 'Large(13 - 32)' },
        { id: 999, name: 'Huge(32+)' },
    ];

    constructor(private _service: SpaceFlowService) {}
}
