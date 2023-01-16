import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    currentUser,
    getInvalidFields,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { addDays, addMinutes, roundToNearestMinutes, setHours } from 'date-fns';

@Component({
    selector: 'space-flow-form',
    template: `
        <section form class="flex-1 min-h-[50%]">
            <h2
                class="text-xl uppercase font-medium mb-2 mt-4 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                {{ is_edit ? 'Edit' : 'Detailed' }} Space Booking
            </h2>
            <detailed-book-space-form
                [form]="form"
                [options]="options | async"
                (optionsChange)="setOptions($event)"
                [features]="features | async"
            ></detailed-book-space-form>
            <div
                class="flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
            >
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem] inverse"
                    btn
                    matRipple
                    clear
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
                    btn
                    matRipple
                    find-space
                    (click)="findSpace()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">search</app-icon>
                        <span class="ml-2 mx-4">{{
                            is_edit ? 'Update Spaces' : 'Find Space'
                        }}</span>
                    </div>
                </button>
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                    btn
                    matRipple
                    standalone
                    *ngIf="is_edit || allow_standalone_bookings"
                    (click)="confirmBooking()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">event_available</app-icon>
                        <span class="ml-2 mx-4">{{
                            is_edit ? 'Confirm changes' : 'Book without Space'
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
        { name: 'Any Capacity', value: 0 },
        { name: 'Small (1 - 4)', value: 1 },
        { name: 'Medium (5 - 12)', value: 5 },
        { name: 'Large (13 - 32)', value: 13 },
        { name: 'Huge (32+)', value: 33 },
    ];

    public readonly options = this._state.options;
    public readonly features = this._state.features;
    public readonly setOptions = (o) => this._state.setOptions(o);

    public get is_edit() {
        return !!this.form?.value?.id;
    }

    public get form() {
        return this._state.form;
    }

    public get allow_standalone_bookings() {
        return this._settings.get('app.events.allow_standalone_bookings');
    }

    public readonly clearForm = () => {
        this.time = this.capacity = 0;
        this._state.clearForm();
    };

    constructor(
        private _state: EventFormService,
        private _settings: SettingsService,
        private _router: Router
    ) {}

    public quickBook() {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
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
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        this._router.navigate(['/book', 'spaces', 'find']);
    }

    public confirmBooking() {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        this.form.markAllAsTouched();
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        this._router.navigate(['/book', 'spaces', 'confirm']);
    }
}
