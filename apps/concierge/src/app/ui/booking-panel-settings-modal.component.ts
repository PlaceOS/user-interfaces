import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    getInvalidFields,
    notifyError,
    notifySuccess,
    uploadFile,
} from '@placeos/common';
import {
    addSettings,
    EncryptionLevel,
    PlaceSettings,
    PlaceZone,
    querySettings,
    updateSettings,
} from '@placeos/ts-client';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import * as yaml from 'js-yaml';
import { validateURL } from '@placeos/spaces';

@Component({
    selector: `booking-panel-settings-modal`,
    template: `
        <header class="flex items-center justify-between space-x-4 py-0 px-2">
            <h3 class="text-lg font-medium py-4 px-2">
                Edit Booking Panel Settings -
                {{ zone?.display_name || zone?.name }}
            </h3>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="p-4 max-h-[65vh] overflow-auto"
            *ngIf="!loading; else load_state"
            [formGroup]="form"
        >
            <div
                class="relative flex flex-col p-2 border border-base-300 rounded mb-4"
            >
                <h4
                    class="absolute top-0 left-8 -translate-y-1/2 bg-base-100 text-sm p-2"
                >
                    Booking Settings
                </h4>
                <div class="flex items-center space-x-4">
                    <div class="flex-1">
                        <mat-checkbox formControlName="disable_book_now">
                            Disable booking
                        </mat-checkbox>
                    </div>
                    <div class="flex-1">
                        <mat-checkbox formControlName="disable_book_now_host">
                            Disallow selecting a booking host
                        </mat-checkbox>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1 h-20">
                        <label for="min-duration"
                            >Minimum Booking Duration</label
                        >
                        <a-duration-field
                            name="min-duration"
                            formControlName="min_duration"
                            [min]="0"
                            [step]="5"
                            [max]="form.value.max_duration"
                        ></a-duration-field>
                    </div>
                    <div class="flex-1 h-20">
                        <label for="max-duration"
                            >Maximum Booking Duration</label
                        >
                        <a-duration-field
                            name="max-duration"
                            formControlName="max_duration"
                            [min]="form.value.min_duration"
                            [step]="5"
                            [max]="480"
                        ></a-duration-field>
                    </div>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label for="pending_before"
                        >Allow check-in before meeting</label
                    >
                    <a-duration-field
                        name="pending_before"
                        formControlName="pending_before"
                        [min]="0"
                        [step]="5"
                        [max]="60"
                    ></a-duration-field>
                </div>
                <div class="flex-1">
                    <label for="pending_after"
                        >Cancel meetings when not checked-in after</label
                    >
                    <a-duration-field
                        name="pending_after"
                        formControlName="pending_after"
                        [min]="0"
                        [step]="5"
                        [max]="60"
                    ></a-duration-field>
                </div>
            </div>
            <div class="">
                <mat-checkbox formControlName="show_qr_code">
                    Show Booking QR Code
                </mat-checkbox>
            </div>
            <div class="mb-2">
                <label for="custom-qr-url">Custom QR Code URL</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="custom-qr-url"
                        placeholder="/workplace/#/book/room/?room_id=sys-123456"
                        formControlName="custom_qr_url"
                    />
                    <mat-error>
                        Custom QR Code URL must be a valid URL
                    </mat-error>
                    <mat-hint>
                        Custom QR Code URL will replace the default Booking QR
                        Code
                    </mat-hint>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex-1">
                    <mat-checkbox formControlName="disable_end_meeting">
                        <div class="flex item-center">
                            <div>Disable auto-ending of current booking</div>
                            <app-icon
                                matTooltip="Disable ending the current booking early when sensors
don't detect presence in room after a period of time"
                            >
                                info
                            </app-icon>
                        </div>
                    </mat-checkbox>
                </div>
                <div class="flex-1">
                    <mat-checkbox formControlName="enable_end_meeting_button">
                        Show button to end current booking
                    </mat-checkbox>
                </div>
            </div>
            <div class="flex items-center space-x-4 mb-4">
                <div class="flex-1">
                    <mat-checkbox formControlName="hide_meeting_details">
                        <div class="flex item-center">
                            <div>Hide Meeting Details</div>
                            <app-icon
                                matTooltip="When enabled only shows the time of the current meeting"
                            >
                                info
                            </app-icon>
                        </div>
                    </mat-checkbox>
                </div>
                <div class="flex-1">
                    <mat-checkbox formControlName="hide_meeting_title">
                        <div class="flex item-center">
                            <div>Hide Meeting Title</div>
                            <app-icon
                                matTooltip="When enabled only shows the time and host of the current meeting"
                            >
                                info
                            </app-icon>
                        </div>
                    </mat-checkbox>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label for="room-image">Room Image URL</label>
                    <div class="flex space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="w-1/2 flex-1"
                        >
                            <input
                                matInput
                                name="room-image"
                                placeholder="/assets/images/room_test1.png"
                                formControlName="room_image"
                            />
                            <mat-error>
                                Room Image must be a valid URL
                            </mat-error>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            [disabled]="uploading"
                            class="bg-secondary text-secondary-content rounded h-12 w-12"
                        >
                            <app-icon>cloud_upload</app-icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="uploadImage($event, 'room_image')"
                            />
                        </button>
                    </div>
                </div>
                <div class="flex-1">
                    <label for="offline-image">Offline Image URL</label>
                    <div class="flex space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="w-1/2 flex-1"
                        >
                            <input
                                matInput
                                name="offline-image"
                                placeholder="/assets/images/offline1.png"
                                formControlName="offline_image"
                            />
                            <mat-error>
                                Offline Image must be a valid URL
                            </mat-error>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            [disabled]="uploading"
                            class="relative bg-secondary text-secondary-content rounded h-12 w-12"
                        >
                            <app-icon>cloud_upload</app-icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="uploadImage($event, 'offline_image')"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label for="control-ui">Control Interface URL</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="control-ui"
                            placeholder="/control/#/tabbed/sys-123456"
                            formControlName="control_ui"
                        />
                        <mat-error
                            >Control Interface must be a valid URL</mat-error
                        >
                    </mat-form-field>
                </div>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="flex items-center justify-end p-4 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center px-4 py-2 min-h-[12rem] space-y-4"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center">{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class BookingPanelSettingsModalComponent {
    public loading = '';
    public uploading = 0;
    public readonly zone = this._data.zone;
    public readonly form = new FormGroup({
        control_ui: new FormControl('', validateURL),
        catering_ui: new FormControl('', validateURL),
        custom_qr_url: new FormControl('', validateURL),
        custom_qr_color: new FormControl(''),
        show_qr_code: new FormControl(true),
        disable_book_now: new FormControl(false),
        disable_book_now_host: new FormControl(true),
        disable_end_meeting: new FormControl(false),
        enable_end_meeting_button: new FormControl(false),
        hide_meeting_details: new FormControl(false),
        hide_meeting_title: new FormControl(false),
        min_duration: new FormControl(15),
        max_duration: new FormControl(60),
        pending_before: new FormControl(5),
        pending_after: new FormControl(15),
        room_image: new FormControl('', validateURL),
        offline_image: new FormControl('', validateURL),
    });

    private _defaults: Record<string, any> = {};

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { zone: PlaceZone },
        private _dialog_ref: MatDialogRef<BookingPanelSettingsModalComponent>,
    ) {}

    public async ngOnInit() {
        if (!this.zone?.id) {
            notifyError(
                'Opened booking panel settings modal with invalid zone',
            );
            return;
        }
        this._defaults = { ...this.form.getRawValue() };
        this.loading = 'Loading existing panel settings...';
        const settings = await querySettings({ parent_id: this.zone.id })
            .pipe(
                catchError(() => of({ data: [] as PlaceSettings[] })),
                map((_) => _.data),
            )
            .toPromise();
        const unencrypted_settings = settings.find(
            (block) => block.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted_settings) {
            this.loading = '';
            return;
        }
        this.loading = 'Processing found panel settings...';
        const setting_value =
            yaml.load(unencrypted_settings.settings_string) || {};
        this.form.patchValue(setting_value);
        this.loading = '';
    }

    public uploadImage(event: Event, link_field: string) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const file = files[0];
        const field = this.form.get(link_field);
        if (!field) return;
        if (!file.type.includes('image')) {
            return notifyError('File is not an image');
        }
        uploadFile(file).subscribe(
            (s) => {
                this.uploading = s.progress;
                if (s.link) {
                    this.uploading = 0;
                    field.setValue(s.link);
                }
            },
            () => {
                notifyError('Failed to upload image. Try again later');
                this.uploading = 0;
            },
        );
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(this.form)}]`,
            );
        }
        const form_value = this.form.getRawValue();
        this._dialog_ref.disableClose = true;
        this.loading = 'Loading existing booking panel settings...';
        const settings = await querySettings({ parent_id: this.zone.id })
            .pipe(
                catchError(() => of({ data: [] as PlaceSettings[] })),
                map((_) => _.data),
            )
            .toPromise();
        let unencrypted_settings = settings.find(
            (block) => block.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted_settings)
            unencrypted_settings = new PlaceSettings({
                encryption_level: EncryptionLevel.None,
            });
        const setting_value =
            yaml.load(unencrypted_settings.settings_string) || {};
        const new_settings_blob = {
            ...setting_value,
            ...form_value,
        };
        // Remove default values from settings
        // for (const key in this._defaults) {
        //     if (this._defaults[key] === new_settings_blob[key]) {
        //         delete new_settings_blob[key];
        //     }
        // }
        const new_setting = {
            ...unencrypted_settings,
            settings_string: yaml.dump(new_settings_blob),
        };
        this.loading = 'Saving changes to booking panel settings...';
        const update = unencrypted_settings.id
            ? updateSettings(unencrypted_settings.id, new_setting)
            : addSettings(new_setting);
        await update.toPromise().catch((e) => {
            this._dialog_ref.disableClose = false;
            this.loading = '';
            notifyError('Error saving changes to booking panel settings');
            throw e;
        });
        this._dialog_ref.close();
        notifySuccess(
            `Successfully updated booking panel settings for "${this.zone.display_name}"`,
        );
    }
}
