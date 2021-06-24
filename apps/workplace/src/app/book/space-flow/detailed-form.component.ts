import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'detailed-book-space-form',
    template: `
        <form *ngIf="form" [formGroup]="form">
            <section class="mb-4 border-b border-gray-300">
                <div
                    class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                >
                    <div class="flex flex-col flex-1 w-full sm:w-1/3">
                        <label>Date</label>
                        <a-date-field formControlName="date">
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                    <div class="flex flex-col flex-1 w-full sm:w-1/3">
                        <label>Start Time</label>
                        <a-time-field formControlName="date"></a-time-field>
                    </div>
                    <div class="flex flex-col flex-1 w-full sm:w-1/3">
                        <label>End Time</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                        >
                    </a-duration-field>
                    </div>
                </div>
            </section>
            <section class="mb-4 border-b border-gray-300">
                <div
                    class="flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                >
                    <label>Attendees</label>
                    <a-user-list-field
                        formControlName="attendees"
                    ></a-user-list-field>
                </div>
            </section>
            <section class="mb-4 border-b border-gray-300">
                <div
                    class="w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                >
                    <div class="flex flex-col">
                        <label>Meeting Subject <span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="title"
                                placeholder="Meeting title"
                            />
                            <mat-error>Meeting Subject is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col resize-y">
                        <label>Notes</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                formControlName="body"
                                placeholder="Add meeting notes here..."
                            ></textarea>
                        </mat-form-field>
                    </div>
                </div>
            </section>
        </form>
    `,
    styles: [``],
})
export class DetailBookSpaceFormComponent {
    @Input() public form: FormGroup;
}
