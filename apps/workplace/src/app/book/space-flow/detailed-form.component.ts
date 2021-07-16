import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CateringOrder, CateringStateService } from '@placeos/catering';

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
                <div class="w-[640px] max-w-[calc(100%-2rem)] mx-auto">
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
                    <div class="flex flex-col mb-4">
                        <label>Catering</label>
                        <an-action-field (onAction)="editCatering()">
                            <div
                                class="opacity-40"
                                *ngIf="!form?.value.catering?.length"
                            >
                                Add catering
                            </div>
                            <div
                                class="flex items-center"
                                *ngIf="form?.value.catering?.length"
                            >
                                <div class="flex-1 w-1/2">
                                    {{ form?.value.catering[0].item_count }}
                                    item(s)
                                </div>
                                <div class="text-xs opacity-60 px-4">
                                    {{
                                        form?.value.catering[0].total_cost / 100
                                            | currency
                                    }}
                                </div>
                            </div>
                        </an-action-field>
                    </div>
                </div>
            </section>
        </form>
    `,
    styles: [``],
})
export class DetailBookSpaceFormComponent {
    @Input() public form: FormGroup;

    public readonly editCatering = async () =>
        this.form.patchValue({
            catering: [
                await this._catering.manageCateringOrder(
                    (this.form.value.catering
                        ? this.form.value.catering[0]
                        : null) || new CateringOrder()
                ),
            ],
        });

    constructor(private _catering: CateringStateService) {}
}
