import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'user-form',
    template: `
        <form user-form *ngIf="form" [formGroup]="form">
            <div class="field" *ngIf="form.controls.name">
                <label for="name" [class.error]="hasError('name')">
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
                <label for="email" [class.error]="hasError('email')">
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
                <label for="org" [class.error]="hasError('organisation')">
                    Organisation<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="org"
                        placeholder="Organisation"
                        formControlName="organisation"
                    />
                    <mat-error>Organisation is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.phone">
                <label for="phone" [class.error]="hasError('phone')">
                    Phone:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        formControlName="phone"
                    />
                    <mat-error>Phone format is invalid</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.assistance_required">
                <mat-checkbox
                    name="assistance-required"
                    color="primary"
                    formControlName="assistance_required"
                >
                    Assistance required
                </mat-checkbox>
            </div>
            <div class="field" *ngIf="form.controls.visit_expected">
                <mat-checkbox
                    name="visit-expected"
                    color="primary"
                    formControlName="visit_expected"
                >
                    Visit expected
                </mat-checkbox>
            </div>
        </form>
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

    public hasError(name: string) {
        return (
            this.form.controls[name].invalid && this.form.controls[name].touched
        );
    }
}
