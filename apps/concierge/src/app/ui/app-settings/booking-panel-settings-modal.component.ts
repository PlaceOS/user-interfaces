import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    Injector,
    OnInit,
    signal,
} from '@angular/core';
import { form, FormField, validate } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AsyncHandler,
    getInvalidSignalFields,
    notifyError,
    notifySuccess,
    onFieldChange,
    UploadsService,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { isValidUrl } from '@placeos/events';
import { DurationFieldComponent } from '@placeos/form-fields';
import {
    addSettings,
    EncryptionLevel,
    PlaceSettings,
    PlaceZone,
    querySettings,
    updateSettings,
} from '@placeos/ts-client';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

@Component({
    selector: `booking-panel-settings-modal`,
    template: `
        <fullscreen-modal-shell
            [heading]="
                'Booking Panel Settings - ' +
                (zone.display_name || zone.name || 'Organisation')
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-4">
                <div
                    class="border-base-300 relative mb-4 flex flex-col rounded-sm border p-2"
                >
                    <h4
                        class="bg-base-100 absolute top-0 left-8 -translate-y-1/2 p-2 text-sm"
                    >
                        Booking Settings
                    </h4>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Disable booking"
                            [formField]="form.disable_book_now"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide booking host options"
                            [formField]="form.disable_book_now_host"
                        ></settings-toggle>
                    </div>
                    <div class="flex space-x-4">
                        <div class="h-20 flex-1">
                            <label for="min-duration"
                                >Minimum Booking Duration</label
                            >
                            <a-duration-field
                                [formField]="form.min_duration"
                                [min]="0"
                                [step]="model().max_duration > 60 ? 15 : 5"
                                [max]="model().max_duration"
                            ></a-duration-field>
                        </div>
                        <div class="h-20 flex-1">
                            <label for="max-duration"
                                >Maximum Booking Duration</label
                            >
                            <a-duration-field
                                [formField]="form.max_duration"
                                [min]="
                                    model().min_duration +
                                    15 -
                                    (model().min_duration % 15)
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
                            [formField]="form.pending_before"
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
                            [formField]="form.pending_period"
                            [min]="0"
                            [step]="5"
                            [max]="60"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="-mx-2 flex flex-wrap items-center">
                    <settings-toggle
                        label="Disable auto-ending bookings"
                        [formField]="form.disable_end_meeting"
                        info="Disable ending the current booking early when sensors
don't detect presence in room after a period of time"
                    ></settings-toggle>
                    <settings-toggle
                        label="Show button to end booking early"
                        [formField]="form.enable_end_meeting_button"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide Meeting Details"
                        [formField]="form.hide_meeting_details"
                        info="When enabled only shows the time of the current meeting"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide Meeting Title"
                        [formField]="form.hide_meeting_title"
                        info="When enabled only shows the time and host of the current meeting"
                    ></settings-toggle>
                    <settings-toggle
                        label="Show Booking QR Code"
                        [formField]="form.show_qr_code"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide QR helper text"
                        [formField]="form.hide_qr_text"
                    ></settings-toggle>
                </div>
                <div class="mb-2">
                    <label for="custom-qr-url">Custom QR Code URL</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            placeholder="/workplace/#/book/room/?room_id=sys-123456"
                            [formField]="form.custom_qr_url"
                        />
                        <mat-error>
                            Custom QR Code URL must be a valid URL
                        </mat-error>
                        <mat-hint>
                            Custom QR Code URL will replace the default Booking
                            QR Code
                        </mat-hint>
                    </mat-form-field>
                </div>
                <div class="mb-2">
                    <label for="custom-qr-color">Custom QR Color</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            placeholder="#4A2C89"
                            [formField]="form.custom_qr_color"
                        />
                    </mat-form-field>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="control-ui">Control UI URL</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.control_ui"
                                placeholder="https://control.example.com/..."
                            />
                            <mat-error
                                >Control UI must be a valid URL</mat-error
                            >
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="catering-ui">Catering UI URL</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.catering_ui"
                                placeholder="https://catering.example.com/..."
                            />
                            <mat-error>
                                Catering UI must be a valid URL
                            </mat-error>
                        </mat-form-field>
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
                                    placeholder="/assets/images/room_test1.png"
                                    [formField]="form.room_image"
                                />
                                <mat-error>
                                    Room Image must be a valid URL
                                </mat-error>
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                [disabled]="uploading()"
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            >
                                <icon>cloud_upload</icon>
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
                                    placeholder="/assets/images/offline1.png"
                                    [formField]="form.offline_image"
                                />
                                <mat-error>
                                    Offline Image must be a valid URL
                                </mat-error>
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                [disabled]="uploading()"
                                class="bg-secondary text-secondary-content relative h-12 w-12 rounded-sm"
                            >
                                <icon>cloud_upload</icon>
                                <input
                                    type="file"
                                    class="absolute inset-0 opacity-0"
                                    (change)="
                                        uploadImage($event, 'offline_image')
                                    "
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            settings-toggle {
                width: calc(50% - 1rem);
                margin: 0.5rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        MatRippleModule,
        IconComponent,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        SettingsToggleComponent,
        DurationFieldComponent,
        MatDialogModule,
        FormField,
    ],
})
export class BookingPanelSettingsModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _injector = inject(Injector);
    private _uploads = inject(UploadsService);
    private _data = inject<{
        zone: PlaceZone;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<BookingPanelSettingsModalComponent>>(MatDialogRef);

    public loading = signal('');
    public uploading = signal(0);
    public readonly zone = this._data.zone;

    public readonly model = signal({
        control_ui: '' as string,
        catering_ui: '' as string,
        custom_qr_url: '' as string,
        custom_qr_color: '' as string,
        show_qr_code: true as boolean,
        hide_qr_text: false as boolean,
        disable_book_now: false as boolean,
        disable_book_now_host: true as boolean,
        disable_end_meeting: false as boolean,
        enable_end_meeting_button: false as boolean,
        hide_meeting_details: false as boolean,
        hide_meeting_title: false as boolean,
        min_duration: 15 as number,
        max_duration: 60 as number,
        pending_before: 5 as number,
        pending_period: 15 as number,
        room_image: '' as string,
        offline_image: '' as string,
    });

    public readonly form = form(this.model, (p) => {
        validate(p.control_ui, ({ value }) =>
            isValidUrl(value()) ? undefined : { kind: 'url' },
        );
        validate(p.catering_ui, ({ value }) =>
            isValidUrl(value()) ? undefined : { kind: 'url' },
        );
        validate(p.custom_qr_url, ({ value }) =>
            isValidUrl(value()) ? undefined : { kind: 'url' },
        );
        validate(p.room_image, ({ value }) =>
            isValidUrl(value()) ? undefined : { kind: 'url' },
        );
        validate(p.offline_image, ({ value }) =>
            isValidUrl(value()) ? undefined : { kind: 'url' },
        );
    });

    private _defaults: Record<string, any> = {};

    public async ngOnInit() {
        if (!this.zone?.id) {
            notifyError(
                'Opened booking panel settings modal with invalid zone',
            );
            return;
        }
        onFieldChange(
            this.model,
            (m) => m.max_duration,
            (max_duration) => {
                if (max_duration <= 60) return;
                this.model.update((m) => ({
                    ...m,
                    min_duration: Math.max(
                        15,
                        Math.floor(m.min_duration / 15) * 15,
                    ),
                }));
            },
            this._injector,
        );
        this._defaults = { ...this.model() };
        this.loading.set('Loading existing panel settings...');
        let settings: PlaceSettings[] = [];
        try {
            const response = await querySettings({ parent_id: this.zone.id });
            settings = response?.data || [];
        } catch {}
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
        this.model.update((m) => ({ ...m, ...setting_value }));
        this.loading.set('');
    }

    public uploadImage(event: Event, link_field: string) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const file = files[0];
        if (!file.type.includes('image')) {
            return notifyError('File is not an image');
        }
        const upload = this._uploads.uploadFileWithProgress(file);
        const effect_ref = effect(
            () => {
                const s = upload();
                this.uploading.set(s.progress);
                if (s.error) {
                    notifyError('Failed to upload image. Try again later');
                    this.uploading.set(0);
                    effect_ref.destroy();
                    return;
                }
                if (s.link) {
                    this.uploading.set(0);
                    this.model.update((m) => ({
                        ...m,
                        [link_field]: s.link,
                    }));
                    effect_ref.destroy();
                }
            },
            { injector: this._injector },
        );
    }

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidSignalFields(
                    this.form,
                    this.model,
                ).join(', ')}]`,
            );
        }
        const form_value = this.model();
        this._dialog_ref.disableClose = true;
        this.loading.set('Loading existing booking panel settings...');
        let settings: PlaceSettings[] = [];
        try {
            const response = await querySettings({ parent_id: this.zone.id });
            settings = response?.data || [];
        } catch {}
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
        try {
            await update;
        } catch (e) {
            this._dialog_ref.disableClose = false;
            this.loading.set('');
            notifyError('Error saving changes to booking panel settings');
            throw e;
        }
        this._dialog_ref.close();
        notifySuccess(
            `Successfully updated booking panel settings for "${this.zone.display_name}"`,
        );
    }
}
