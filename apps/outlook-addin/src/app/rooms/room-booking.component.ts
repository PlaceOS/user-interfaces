import { Component, DOCUMENT, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { currentUser } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { FeaturesFilterService } from './features-filter.service';

@Component({
    selector: 'room-booking',
    template: `
        <div class="absolute inset-0 overflow-auto bg-base-200">
            <div
                class="mx-auto min-h-full w-[40rem] max-w-full border-x border-base-300 bg-base-100 pt-2"
            >
                <header
                    class="sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Room</h2>
                </header>
                @if (form) {
                    <form [formGroup]="form" class="divide-y divide-base-200">
                        <section class="px-4 py-2">
                            <div class="my-2 flex space-x-4">
                                <div
                                    class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
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
                                    class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
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
                            class="sticky bottom-0 flex flex-col items-center space-y-2 bg-base-100 px-4 py-2 sm:flex-row sm:space-x-2 sm:space-y-0"
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
    standalone: false,
})
export class RoomBookingComponent implements OnInit {
    private _document = inject<Document>(DOCUMENT);
    private router = inject(Router);
    private _state = inject(EventFormService);
    private _featuresFilterService = inject(FeaturesFilterService);

    public show_spaces = false;
    public show_people = false;

    min_date: Date = new Date();

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this._state.clearForm();
    };

    ngOnInit(): void {
        this._state.newForm();
        this._featuresFilterService.clearFilter();
    }

    async findSpace() {
        this.form.markAllAsTouched();
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid) return;
        await this._state.storeForm();
        this.router.navigate(['/schedule/view']);
    }

    downloadTemplate() {
        window.open('assets/template.csv');
    }
}
