import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { FullscreenModalShellComponent } from '../../../components/src/lib/fullscreen-modal-shell.component';
import { ImageListFieldComponent } from './image-list-field.component';
import { RichTextInputComponent } from './rich-text-input.component';

export interface SupportRequestType {
    name: string;
    email: string;
}

@Component({
    selector: 'support-ticket-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="'Raise a support ticket'"
            [loading]="loading"
            [confirm_text]="'COMMON.SUBMIT' | translate"
            (confirm)="submit()"
        >
            <form [formGroup]="form">
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label
                            >{{ 'FORM.NAME' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'FORM.NAME' | translate"
                                formControlName="name"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label
                            >{{ 'FORM.EMAIL' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'FORM.EMAIL' | translate"
                                formControlName="email"
                            />
                            <mat-error>{{
                                'FORM.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label>{{ 'COMMON.SUPPORT_LOCATION' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [placeholder]="
                                'COMMON.SUPPORT_LOCATION' | translate
                            "
                            formControlName="location"
                        >
                            @for (bld of buildings | async; track bld) {
                                <mat-option
                                    [value]="bld.display_name || bld.name"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (support_request_types?.length) {
                    <div class="flex flex-col">
                        <label>{{ 'COMMON.SUPPORT_TYPE' | translate }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [placeholder]="
                                    'COMMON.SUPPORT_TYPE' | translate
                                "
                                formControlName="issue_type"
                            >
                                @for (
                                    type of support_request_types;
                                    track type
                                ) {
                                    <mat-option [value]="type?.name || type">
                                        {{ type.name || type }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="">
                    <label class="mb-4">
                        {{ 'COMMON.SUPPORT_DESCRIPTION' | translate }}
                        <span>*</span>
                    </label>
                    <rich-text-input
                        [placeholder]="'COMMON.SUPPORT_DESCRIPTION' | translate"
                        formControlName="description"
                    ></rich-text-input>
                    @if (desc_error) {
                        <mat-error class="my-2 text-xs">
                            {{
                                'COMMON.SUPPORT_DESCRIPTION_REQUIRED'
                                    | translate
                            }}
                        </mat-error>
                    }
                </div>
                @if (allow_images) {
                    <div class="pt-4">
                        <label class="mb-4">{{
                            'COMMON.SUPPORT_IMAGES' | translate
                        }}</label>
                        <image-list-field
                            formControlName="images"
                        ></image-list-field>
                    </div>
                }
            </form>
            <div class="mb-2 text-center text-xs italic">
                {{ 'COMMON.SUPPORT_MSG' | translate }}
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        RichTextInputComponent,
        ImageListFieldComponent,
        MatSelectModule,
        TranslatePipe,
        MatDialogModule,
        MatRippleModule,
        FullscreenModalShellComponent,
    ],
})
export class SupportTicketModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<SupportTicketModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

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
            const mod = this._org.module('smtp', 'Mailer');
            if (!mod) {
                return notifyError(i18n('COMMON.SUPPORT_NO_MAILER'));
            }
            const { name, email, location, description, images, issue_type } =
                this.form.value;
            const support_email =
                this.support_request_types.find(
                    (type) => type.name === issue_type,
                )?.email || this.support_email;
            const header = i18n('COMMON.SUPPORT_MAIL_HEADER', {
                issue_type: issue_type ? ' - ' + issue_type : '',
            });
            await mod.execute('send_mail', [
                support_email,
                header,
                `${name}\n${email}\n\n${location}\n\n${description.replace(
                    /<[^>]+>/g,
                    '',
                )}\n\n${images.join('\n')}`,
                `<p>${name}</p><p>${email}</p><p>${location}</p><p>${description}</p>${images.join(
                    '<br>',
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
            notifySuccess(i18n('COMMON.SUPPORT_SUCCESS'));
        }
    }
}
