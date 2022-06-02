import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CateringOrder, CateringStateService } from '@placeos/catering';
import { SettingsService } from '@placeos/common';

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
                        <a-time-field
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex flex-col flex-1 w-full sm:w-1/3">
                        <label>End Time</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="max_duration"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </section>
            <section class="mb-4 border-b border-gray-300">
                <div
                    class="flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                    *ngIf="can_book_for_others"
                >
                    <label>Host</label>
                    <a-user-search-field
                        formControlName="organiser"
                    ></a-user-search-field>
                </div>
                <div
                    class="flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-2"
                >
                    <label>Attendees</label>
                    <a-user-list-field
                        [hideActions]="hide_actions"
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
                    <div class="flex flex-col resize-y mb-4">
                        <label>Notes</label>
                        <rich-text-input
                            formControlName="body"
                            placeholder="Add meeting notes here..."
                        ></rich-text-input>
                    </div>
                    <div class="flex flex-col mb-4" *ngIf="has_catering">
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

    public get has_catering() {
        return !!this._settings.get('app.events.has_catering');
    }

    public get hide_actions() {
        return !!this._settings.get('app.events.hide_user_actions');
    }

    public get can_book_for_others() {
        return this._settings.get('app.events.can_book_for_others');
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 4 * 60;
    }

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

    constructor(
        private _catering: CateringStateService,
        private _settings: SettingsService
    ) {}
}
