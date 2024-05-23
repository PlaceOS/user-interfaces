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

export interface SupportRequestType {
    name: string;
    email: string;
}

@Component({
    selector: 'support-ticket-modal',
    template: `
        <header class="flex items-center justify-between">
            <h2 i18n>Raise a support ticket</h2>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="w-[32rem] max-w-[85vw]" *ngIf="!loading; else load_state">
            <form class="p-2" [formGroup]="form">
                <div class="flex items-center sm:space-x-2 flex-wrap">
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
                <div
                    class="flex flex-col"
                    *ngIf="support_request_types?.length"
                >
                    <label i18n>Issue Type</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            placeholder="Issue Type"
                            formControlName="issue_type"
                        >
                            <mat-option
                                *ngFor="let type of support_request_types"
                                [value]="type?.name || type"
                            >
                                {{ type.name || type }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div>
                    <label class="mb-4" i18n>
                        Issue Description<span>*</span>
                    </label>
                    <rich-text-input
                        placeholder="Issue Description"
                        formControlName="description"
                    ></rich-text-input>
                    <mat-error class="text-xs my-2" *ngIf="desc_error" i18n>
                        Description is required
                    </mat-error>
                </div>
                <div *ngIf="allow_images">
                    <label class="mb-4" i18n>Images</label>
                    <image-list-field
                        formControlName="images"
                    ></image-list-field>
                </div>
            </form>
            <div class="italic text-center text-xs mb-2" i18n>
                Completing this form will raise an incident in your support
                management platform
            </div>
        </main>
        <footer
            class="p-2 border-t border-base-200 flex items-center justify-center"
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
        issue_type: new FormControl(''),
        images: new FormControl([]),
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

    public get support_request_types(): SupportRequestType[] {
        return this._settings.get('app.support_issue_types') || [];
    }

    public get allow_images() {
        return this._settings.get('app.allow_support_ticket_images');
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
            const { name, email, location, description, images, issue_type } =
                this.form.value;
            const support_email =
                this.support_request_types.find(
                    (type) => type.name === issue_type
                )?.email || this.support_email;
            await mod.execute('send_mail', [
                support_email,
                `Support Ticket from Workplace Application${
                    issue_type ? ' - ' + issue_type : ''
                }`,
                `${name}\n${email}\n\n${location}\n\n${description.replace(
                    /<[^>]+>/g,
                    ''
                )}\n\n${images.join('\n')}`,
                `<p>${name}</p><p>${email}</p><p>${location}</p><p>${description}</p>${images.join(
                    '<br>'
                )}`,
                [],
                [],
                [],
                [],
                null,
                `${email}`,
            ]);
            this._dialog_ref.close();
            this.loading = false;
            notifySuccess('Successfully submitted support ticket');
        }
    }
}
