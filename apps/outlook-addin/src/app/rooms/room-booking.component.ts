import { Component, DOCUMENT, OnInit, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { currentUser } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { FeaturesFilterService } from './features-filter.service';

@Component({
    selector: 'room-booking',
    template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto min-h-full w-160 max-w-full border-x pt-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Room</h2>
                </header>
                @if (form(); as form) {
                    <form [formGroup]="form" class="divide-base-200 divide-y">
                        <section class="px-4 py-2">
                            <div class="my-2 flex space-x-4">
                                <div
                                    class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                >
                                    1
                                </div>
                                <div class="text-lg font-medium">Details</div>
                            </div>
                            <div class="flex flex-col sm:flex-row sm:space-x-2">
                                <div class="w-full sm:flex-1">
                                    <label>Add Title<span>*</span></label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            placeholder="e.g Team meeting"
                                            formControlName="title"
                                        />
                                    </mat-form-field>
                                </div>
                                <div class="w-full sm:flex-1">
                                    <label>Date<span>*</span></label>
                                    <a-date-field
                                        [from]="min_date"
                                        formControlName="date"
                                    ></a-date-field>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row sm:space-x-2">
                                <div class="w-full sm:flex-1">
                                    <label class="mb-1 text-sm font-bold">
                                        Start Time<span>*</span>
                                    </label>
                                    <a-time-field
                                        [ngModel]="form.value.date"
                                        (ngModelChange)="
                                            form.patchValue({ date: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                </div>
                                <div class="w-full sm:flex-1">
                                    <label class="mb-1 text-sm font-bold">
                                        End Time<span>*</span>
                                    </label>
                                    <a-duration-field
                                        [time]="form.get('date')?.value"
                                        [max]="10 * 60"
                                        [min]="60"
                                        [step]="60"
                                        formControlName="duration"
                                    ></a-duration-field>
                                </div>
                            </div>
                        </section>
                        <section class="px-4 py-2">
                            <div class="my-2 flex space-x-4">
                                <div
                                    class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                >
                                    2
                                </div>
                                <div class="text-lg font-medium">Attendees</div>
                            </div>
                            <div class="flex flex-col">
                                <label> Add Attendees </label>
                                <a-user-list-field
                                    formControlName="attendees"
                                    [custom_template]="true"
                                    (download)="downloadTemplate()"
                                ></a-user-list-field>
                            </div>
                        </section>
                        <section
                            class="bg-base-100 sticky bottom-0 flex flex-col items-center space-y-2 px-4 py-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                        >
                            <button
                                btn
                                matRipple
                                type="submit"
                                (click)="findSpace()"
                                class="w-full sm:flex-1"
                            >
                                Find room
                            </button>
                            <button
                                btn
                                matRipple
                                (click)="clearForm()"
                                class="inverse w-full sm:flex-1"
                            >
                                Clear form
                            </button>
                        </section>
                    </form>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        UserListFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class RoomBookingComponent implements OnInit {
    private _document = inject<Document>(DOCUMENT);
    private router = inject(Router);
    private _state = inject(EventFormService);
    private _featuresFilterService = inject(FeaturesFilterService);

    public show_spaces = false;
    public show_people = false;

    min_date = Date.now();
    public readonly form = signal(this._state.form);

    public readonly clearForm = () => {
        this._state.clearForm();
    };

    ngOnInit(): void {
        this._state.newForm();
        this.form.set(this._state.form);
        this._featuresFilterService.clearFilter();
    }

    async findSpace() {
        const form = this.form() || this._state.form;
        if (form && !this.form()) this.form.set(form);
        if (!form) return;
        form.markAllAsTouched();
        if (!form.value.host) form.patchValue({ host: currentUser()?.email });
        if (!form.valid) return;
        await this._state.storeForm();
        this.router.navigate(['/schedule/view']);
    }

    downloadTemplate() {
        window.open('assets/template.csv');
    }
}
