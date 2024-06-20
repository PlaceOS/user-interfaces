import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'a-booking-form-modal',
    template: `
        <div class="booking-form" [formGroup]="form">
            <div *ngIf="first_form">
                <div>
                    <label i18n>
                        <strong>Meeting Subject:<span>*</span></strong>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="title"
                            placeholder="Enter here"
                            formControlName="title"
                        />
                    </mat-form-field>
                </div>
                <div *ngIf="form.controls.organiser">
                    <label for="organiser" i18n>
                        <strong>Host:<span>*</span></strong>
                    </label>
                    <a-user-search-field
                        name="organiser"
                        formControlName="organiser"
                        class="mb-4"
                    ></a-user-search-field>
                </div>
                <div>
                    <label for="start-time" i18n>
                        <strong>Time:<span>*</span></strong>
                    </label>
                    <a-time-field
                        name="start-time"
                        formControlName="date"
                    ></a-time-field>
                </div>
                <div style="margin-top: 1.5em;">
                    <label for="duration" i18n>
                        <strong>Duration:<span>*</span></strong>
                    </label>
                    <a-duration-field
                        name="duration"
                        formControlName="duration"
                    ></a-duration-field>
                </div>
            </div>
            <div [hidden]="first_form">
                <input
                    *ngIf="form.controls.notes"
                    class="notes"
                    matInput
                    name="notes"
                    placeholder="Add notes here..."
                    formControlName="notes"
                />
                <div *ngIf="form.controls.head_count">
                    <label for="organiser" i18n>
                        <strong>Estimated Headcount:<span>*</span></strong>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="headcount"
                            placeholder="Expected attendees here.."
                            formControlName="head_count"
                        />
                    </mat-form-field>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .field {
                display: flex;
                flex-wrap: wrap;
            }

            .notes {
                padding-bottom: 150px;
                width: 100%;
                background-color: lightgrey;
                border: solid 1px rgba(black, 0.5);
                margin-bottom: 50px;
            }

            mat-form-field {
                width: 100%;
            }
        `,
    ],
})
export class BookingFormModalComponent extends AsyncHandler {
    @Input() public first_form: boolean;
    @Input() public form: FormGroup;
}
