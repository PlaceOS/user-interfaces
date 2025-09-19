import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    AsyncHandler,
    getInvalidFields,
    notifyError,
    notifySuccess,
    UploadsService,
} from '@placeos/common';
import {
    addSettings,
    EncryptionLevel,
    PlaceSettings,
    PlaceZone,
    querySettings,
    updateSettings,
} from '@placeos/ts-client';
import { lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent, SettingsToggleComponent } from '@placeos/components';
import { validateURL } from '@placeos/events';
import { DurationFieldComponent } from '@placeos/form-fields';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

@Component({
    selector: `booking-panel-settings-modal`,
    template: `
        <div class="flex h-screen w-screen flex-col overflow-auto bg-base-100">
            <header
                class="sticky top-0 z-10 mx-auto my-2 w-full max-w-[640px] rounded border-none bg-base-200 px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    Booking Panel Settings -
                    {{ zone.display_name || zone.name }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-full max-w-[640px] flex-1 space-y-8 p-4"
            >
                @if (!loading()) {
                    <form [formGroup]="form" class="flex flex-col space-y-4">
                        <div
                            class="relative mb-4 flex flex-col rounded border border-base-300 p-2"
                        >
                            <h4
                                class="absolute left-8 top-0 -translate-y-1/2 bg-base-100 p-2 text-sm"
                            >
                                Booking Settings
                            </h4>
                            <div class="-mx-2 flex flex-wrap items-center">
                                <settings-toggle
                                    name="Disable booking"
                                    formControlName="disable_book_now"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Hide booking host options"
                                    formControlName="disable_book_now_host"
                                ></settings-toggle>
                            </div>
                            <div class="flex space-x-4">
                                <div class="h-20 flex-1">
                                    <label for="min-duration"
                                        >Minimum Booking Duration</label
                                    >
                                    <a-duration-field
                                        name="min-duration"
                                        formControlName="min_duration"
                                        [min]="0"
                                        [step]="
                                            form.value.max_duration > 60
                                                ? 15
                                                : 5
                                        "
                                        [max]="form.value.max_duration"
                                    ></a-duration-field>
                                </div>
                                <div class="h-20 flex-1">
                                    <label for="max-duration"
                                        >Maximum Booking Duration</label
                                    >
                                    <a-duration-field
                                        name="max-duration"
                                        formControlName="max_duration"
                                        [min]="
                                            form.value.min_duration +
                                            15 -
                                            (form.value.min_duration % 15)
                                        "
                                        [step]="15"
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
                                <label for="pending_period"
                                    >Cancel not checked-in meetings after</label
                                >
                                <a-duration-field
                                    name="pending_period"
                                    formControlName="pending_period"
                                    [min]="0"
                                    [step]="5"
                                    [max]="60"
                                ></a-duration-field>
                            </div>
                        </div>
                        <div class="-mx-2 flex flex-wrap items-center">
                            <settings-toggle
                                name="Disable auto-ending bookings"
                                formControlName="disable_end_meeting"
                                info="Disable ending the current booking early when sensors
don't detect presence in room after a period of time"
                            ></settings-toggle>
                            <settings-toggle
                                name="Show button to end booking early"
                                formControlName="enable_end_meeting_button"
                            ></settings-toggle>
                            <settings-toggle
                                name="Hide Meeting Details"
                                formControlName="hide_meeting_details"
                                info="When enabled only shows the time of the current meeting"
                            ></settings-toggle>
                            <settings-toggle
                                name="Hide Meeting Title"
                                formControlName="hide_meeting_title"
                                info="When enabled only shows the time and host of the current meeting"
                            ></settings-toggle>
                            <settings-toggle
                                name="Show Booking QR Code"
                                formControlName="show_qr_code"
                            ></settings-toggle>
                        </div>
                        <div class="mb-2">
                            <label for="custom-qr-url"
                                >Custom QR Code URL</label
                            >
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
                                    Custom QR Code URL will replace the default
                                    Booking QR Code
                                </mat-hint>
                            </mat-form-field>
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
                                        [disabled]="uploading()"
                                        class="h-12 w-12 rounded bg-secondary text-secondary-content"
                                    >
                                        <icon>cloud_upload</icon>
                                        <input
                                            type="file"
                                            class="absolute inset-0 opacity-0"
                                            (change)="
                                                uploadImage(
                                                    $event,
                                                    'room_image'
                                                )
                                            "
                                        />
                                    </button>
                                </div>
                            </div>
                            <div class="flex-1">
                                <label for="offline-image"
                                    >Offline Image URL</label
                                >
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
                                        [disabled]="uploading()"
                                        class="relative h-12 w-12 rounded bg-secondary text-secondary-content"
                                    >
                                        <icon>cloud_upload</icon>
                                        <input
                                            type="file"
                                            class="absolute inset-0 opacity-0"
                                            (change)="
                                                uploadImage(
                                                    $event,
                                                    'offline_image'
                                                )
                                            "
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                } @else {
                    <div
                        class="flex h-1/2 w-full flex-1 flex-col items-center justify-center p-12"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p class="text-center">{{ loading() }}</p>
                    </div>
                }
                <div class="h-16 w-full"></div>
            </main>
            @if (!loading()) {
                <footer
                    class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </footer>
            }
        </div>
    `,
    styles: [
        `
            settings-toggle {
                width: calc(50% - 1rem);
                margin: 0.5rem;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        IconComponent,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        SettingsToggleComponent,
        DurationFieldComponent,
        MatDialogModule,
        ReactiveFormsModule,
    ],
})
export class BookingPanelSettingsModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _uploads = inject(UploadsService);
    private _data = inject<{
        zone: PlaceZone;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<BookingPanelSettingsModalComponent>>(MatDialogRef);

    public loading = signal('');
    public uploading = signal(0);
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
        pending_period: new FormControl(15),
        room_image: new FormControl('', validateURL),
        offline_image: new FormControl('', validateURL),
    });

    private _defaults: Record<string, any> = {};

    public async ngOnInit() {
        if (!this.zone?.id) {
            notifyError(
                'Opened booking panel settings modal with invalid zone',
            );
            return;
        }
        this.subscription(
            'max_duration',
            this.form.controls.max_duration.valueChanges.subscribe(
                (max_duration) => {
                    if (max_duration <= 60) return;
                    this.form.patchValue({
                        min_duration: Math.max(
                            15,
                            Math.floor(this.form.value.min_duration / 15) * 15,
                        ),
                    });
                },
            ),
        );
        this._defaults = { ...this.form.getRawValue() };
        this.loading.set('Loading existing panel settings...');
        const settings = await lastValueFrom(
            querySettings({ parent_id: this.zone.id }).pipe(
                catchError(() => of({ data: [] as PlaceSettings[] })),
                map((_) => _.data),
            ),
        );
        const unencrypted_settings = settings.find(
            (block) => block.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted_settings) {
            this.loading.set('');
            return;
        }
        this.loading.set('Processing found panel settings...');
        const setting_value =
            parseYaml(unencrypted_settings.settings_string) || {};
        this.form.patchValue(setting_value);
        this.loading.set('');
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
        this._uploads.uploadFileWithProgress(file).subscribe({
            next: (s) => {
                this.uploading.set(s.progress);
                if (s.link) {
                    this.uploading.set(0);
                    field.setValue(s.link);
                }
            },
            error: () => {
                notifyError('Failed to upload image. Try again later');
                this.uploading.set(0);
            },
        });
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
        this.loading.set('Loading existing booking panel settings...');
        const settings = await lastValueFrom(
            querySettings({ parent_id: this.zone.id }).pipe(
                catchError(() => of({ data: [] as PlaceSettings[] })),
                map((_) => _.data),
            ),
        );
        let unencrypted_settings = settings.find(
            (block) => block.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted_settings)
            unencrypted_settings = new PlaceSettings({
                encryption_level: EncryptionLevel.None,
            });
        const setting_value =
            parseYaml(unencrypted_settings.settings_string) || {};
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
            parent_id: this._data.zone.id,
            settings_string: stringifyYaml(new_settings_blob),
        };
        this.loading.set('Saving changes to booking panel settings...');
        const update = unencrypted_settings.id
            ? updateSettings(unencrypted_settings.id, new_setting)
            : addSettings(new_setting);
        await lastValueFrom(update).catch((e) => {
            this._dialog_ref.disableClose = false;
            this.loading.set('');
            notifyError('Error saving changes to booking panel settings');
            throw e;
        });
        this._dialog_ref.close();
        notifySuccess(
            `Successfully updated booking panel settings for "${this.zone.display_name}"`,
        );
    }
}
