import { Component, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserForm, UserFormValue } from './user.utilities';

@Component({
    selector: 'user-form',
    template: `
        @if (form()) {
            <form user-form class="w-full">
                @if (form().name) {
                    <div class="flex w-full flex-col">
                        <label for="name" [class.error]="hasError('name')">
                            Name<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="Name"
                                [formField]="form().name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().email) {
                    <div class="flex w-full flex-col">
                        <label for="email" [class.error]="hasError('email')">
                            Email<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="Email Address"
                                [formField]="form().email"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().organisation) {
                    <div class="flex w-full flex-col">
                        <label
                            for="org"
                            [class.error]="hasError('organisation')"
                        >
                            {{ 'COMMON.ORGANISATION' | translate
                            }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="e.g. Conteso"
                                [formField]="form().organisation"
                            />
                            <mat-error>
                                {{ 'COMMON.ORGANISATION' | translate }} is
                                required
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().phone) {
                    <div class="flex w-full flex-col">
                        <label for="phone" [class.error]="hasError('phone')">
                            Phone:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="tel"
                                placeholder="Phone"
                                [formField]="form().phone"
                            />
                            <mat-error>Phone format is invalid</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().assistance_required) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            color="primary"
                            [formField]="form().assistance_required"
                        >
                            Assistance required
                        </mat-checkbox>
                    </div>
                }
                @if (form().visit_expected) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            color="primary"
                            [formField]="form().visit_expected"
                        >
                            Visit expected
                        </mat-checkbox>
                    </div>
                }
            </form>
        }
    `,
    styles: [
        `
            :host,
            mat-form-field {
                width: 100%;
            }
        `,
    ],
    imports: [
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FormField,
        TranslatePipe,
    ],
})
export class UserFormComponent {
    /** Signal-forms field tree used for editing the user */
    public readonly form = input<UserForm>(undefined);

    public hasError(name: keyof UserFormValue) {
        const field = this.form()?.[name];
        return !!field && field().invalid() && field().touched();
    }
}
