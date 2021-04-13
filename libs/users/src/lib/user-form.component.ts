import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'user-form',
    template: `
        <div class="user form" *ngIf="form">
            <form [formGroup]="form">
                <div class="field" *ngIf="form.controls.name">
                    <label
                        for="name"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                    >
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            placeholder="Name"
                            formControlName="name"
                        />
                        <mat-error>Name is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.email">
                    <label
                        for="email"
                        [class.error]="
                            form.controls.email.invalid &&
                            form.controls.email.touched
                        "
                    >
                        Email<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="email"
                            placeholder="Email Address"
                            formControlName="email"
                        />
                        <mat-error>A valid email is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.organisation">
                    <label
                        for="organisation"
                        [class.error]="
                            form.controls.organisation.invalid &&
                            form.controls.organisation.touched
                        "
                    >
                        Organisation<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="organisation"
                            placeholder="Organisation"
                            formControlName="organisation"
                        />
                        <mat-error>Organisation is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.phone">
                    <label
                        for="phone"
                        [class.error]="
                            form.controls.phone.invalid &&
                            form.controls.phone.touched
                        "
                        >Phone:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="phone"
                            placeholder="Phone"
                            formControlName="phone"
                        />
                        <mat-error>Phone format is invalid</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.assistance_required">
                    <mat-checkbox
                        color="primary"
                        formControlName="assistance_required"
                        >Assistance required</mat-checkbox
                    >
                </div>
                <div class="field" *ngIf="form.controls.visit_expected">
                    <mat-checkbox
                        color="primary"
                        formControlName="visit_expected"
                        >Visit expected</mat-checkbox
                    >
                </div>
            </form>
        </div>
    `,
    styles: [
        `
            .field {
                display: flex;
                flex-wrap: wrap;
            }

            mat-form-field {
                width: 100%;
            }
        `,
    ],
})
export class UserFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
}
