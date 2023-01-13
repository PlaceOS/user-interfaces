import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
    currentUser,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';

@Component({
    selector: 'support-ticket-modal',
    template: `
        <header class="flex items-center justify-between">
            <h2 i18n>Raise a support ticket</h2>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="w-[32rem] max-w-[100vw]" *ngIf="!loading; else load_state">
            <form class="p-2" [formGroup]="form">
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col flex-1">
                        <label i18n>Name<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="Name"
                                formControlName="name"
                            />
                            <mat-error i18n>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col flex-1">
                        <label i18n>Email<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="Email"
                                formControlName="email"
                            />
                            <mat-error i18n>Email is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label i18n>Location</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            placeholder="Location"
                            formControlName="location"
                        >
                            <mat-option
                                *ngFor="let bld of buildings | async"
                                [value]="bld.display_name || bld.name"
                            >
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div>
                    <label class="mb-4" i18n
                        >Issue Description<span>*</span></label
                    >
                    <rich-text-input
                        placeholder="Issue Description"
                        formControlName="description"
                    ></rich-text-input>
                    <mat-error class="text-xs my-2" *ngIf="desc_error" i18n>
                        Description is required
                    </mat-error>
                </div>
            </form>
            <div class="italic text-center text-xs mb-2" i18n>
                Completing this form will raise an incident in your support
                management platform
            </div>
        </main>
        <footer
            class="p-2 border-t border-gray-200 flex items-center justify-center"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-32" (click)="submit()" i18n>
                Submit
            </button>
        </footer>
        <ng-template #load_state>
            <main
                class="w-[32rem] min-h-[24rem] max-w-[100vw] flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Sending support ticket...</p>
            </main>
        </ng-template>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }
        `,
    ],
})
export class SupportTicketModalComponent {
    public loading = false;
    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        location: new FormControl(''),
        description: new FormControl('', [Validators.required]),
    });

    public get desc_error() {
        return (
            !this.form.controls.description.valid &&
            this.form.controls.description.touched
        );
    }

    public get support_email() {
        return this._settings.get('app.support_email') || 'support@place.tech';
    }

    public readonly buildings = this._org.building_list;

    constructor(
        private _dialog_ref: MatDialogRef<SupportTicketModalComponent>,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        const user = currentUser();
        if (user) {
            this.form.patchValue({
                name: user.name,
                email: user.email,
            });
        }
        if (this._org.building) {
            this.form.patchValue({
                location:
                    this._org.building.display_name || this._org.building.name,
            });
        }
    }

    public async submit() {
        this.loading = true;
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            const stmp_system = this._org.binding('smtp');
            if (!stmp_system) {
                return notifyError(
                    'Mailing system not configured for application.'
                );
            }
            const mod = getModule(stmp_system, 'Mailer');
            const { name, email, location, description } = this.form.value;
            await mod.execute('send_mail', [
                this.support_email,
                `Support Ticket from Workplace Application`,
                `${name}\n\n${location}\n\n${description}`,
                null,
                [],
                [],
                [],
                [],
                `${email}`,
            ]);
            this._dialog_ref.close();
            this.loading = false;
            notifySuccess('Successfully submitted support ticket');
        }
    }
}
