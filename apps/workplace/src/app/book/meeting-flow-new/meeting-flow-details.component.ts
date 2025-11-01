import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';

@Component({
    selector: 'meeting-flow-details',
    template: `
        <div
            class="flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
        >
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content p-4 text-2xl font-medium"
            >
                <icon>info</icon>
                <div>Meeting Details</div>
            </div>
            <div class="flex flex-col p-4" [formGroup]="form()">
                <label class="uppercase"
                    >Meeting Title <span required>*</span></label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        formControlName="title"
                        placeholder="Meeting title"
                    />
                </mat-form-field>
                <div
                    class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <div class="flex-1">
                        <label for="date" class="uppercase">Date</label>
                        <date-field name="date" formControlName="date" />
                    </div>
                    <div class="flex-1">
                        <label for="time" class="uppercase">Time</label>
                        <time-field
                            name="time"
                            [ngModel]="form().getRawValue().date"
                            (ngModelChange)="
                                form().patchValue({ date: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </div>
                    <div class="flex-1">
                        <label for="duration" class="uppercase">Duration</label>
                        <duration-field
                            name="duration"
                            formControlName="duration"
                        />
                    </div>
                </div>
            </div>
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content p-4 text-2xl font-medium"
            >
                <icon>info</icon>
                <div>Room Size</div>
            </div>
            <div class="-mx-1 flex flex-wrap p-4">
                <button
                    btn
                    matRipple
                    class="m-1 min-w-40 flex-1"
                    [class.inverse]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <div>1-2 people</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="m-1 min-w-40 flex-1"
                    [class.inverse]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon>group</icon>
                        <div>3-4 people</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="m-1 min-w-40 flex-1"
                    [class.inverse]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon>groups</icon>
                        <div>5-8 people</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="m-1 min-w-40 flex-1"
                    [class.inverse]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon>groups</icon>
                        <div>9+ people</div>
                    </div>
                </button>
            </div>
            <div class="flex justify-end p-4">
                <button btn matRipple class="">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">search</icon>
                        <div class="flex-1 pr-4">Search available rooms</div>
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
    imports: [
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class MeetingFlowDetailsComponent {
    private _event_form = inject(EventFormService);

    public readonly form = signal(this._event_form.form);
}
