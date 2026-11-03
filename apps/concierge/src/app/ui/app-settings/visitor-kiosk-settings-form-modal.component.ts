import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { PlaceZone } from '@placeos/ts-client';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    FullscreenModalShellComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { DEFAULT_SETTINGS } from 'apps/visitor-kiosk/src/environments/settings';
import { errorText } from '../modal-actions';
import {
    applyAppSettings,
    appMetadataKey,
    AppSettings,
    AppSettingsLayers,
    loadLayeredAppSettings,
    saveAppSettings,
} from './app-settings.utilities';
import {
    EXPLORE_FEATURE_OPTIONS,
    MAX_DURATION_MINI_OPTIONS,
} from './settings-option.constants';
import { SettingsSelectComponent } from './settings-select.component';
import { UploadButtonComponent } from './upload-button.component';

/** Device tooltip fields that `explore.hide_device_fields` can hide */
const DEVICE_FIELD_OPTIONS = [
    { value: 'mac', label: 'MAC Address' },
    { value: 'manufacturer', label: 'Manufacturer' },
    { value: 'os', label: 'Operating System' },
    { value: 'ssid', label: 'SSID' },
    { value: 'username', label: 'Username' },
    { value: 'user', label: 'User Type' },
];

@Component({
    selector: 'visitor-kiosk-settings-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                'Visitor Kiosk Settings - ' +
                (zone.display_name || zone.name || 'Organisation')
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-logo_light"
                            >Light Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="visitor-kiosk-settings-form-modal-logo_light"
                                    matInput
                                    [formField]="form.logo_light"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_light: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="visitor-kiosk-settings-form-modal-logo_dark"
                            >Dark Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="visitor-kiosk-settings-form-modal-logo_dark"
                                    matInput
                                    [formField]="form.logo_dark"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_dark: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-welcome-background"
                        >
                            Welcome Background
                        </label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="visitor-kiosk-settings-form-modal-welcome-background"
                                    matInput
                                    [formField]="form.welcome_background"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        welcome_background: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-default-route"
                            >Welcome Message</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                id="visitor-kiosk-settings-form-modal-default-route"
                                matInput
                                [formField]="form.welcome_message"
                                placeholder="Welcome to PlaceOS Self Service Kiosk"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Enable Induction"
                            [formField]="form.induction_enabled"
                        ></settings-toggle>
                        @if (model().induction_enabled) {
                            <settings-toggle
                                label="Induction after Confirm Details"
                                [formField]="form.induction_after_details"
                            ></settings-toggle>
                        }
                        <settings-toggle
                            label="Allow Self Registration"
                            [formField]="form.allow_self_registration"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow setting visitor pass number"
                            [formField]="form.allow_pass_number"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Printing Label"
                            [formField]="form.allow_printing_label"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Visitor Photo"
                            [formField]="form.allow_user_photo"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Registration Time Options"
                            [formField]="form.allow_registration_time_options"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Beverages"
                            [formField]="form.allow_beverages"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Explore Map option"
                            [formField]="form.hide_explore"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Building Image"
                            [formField]="form.hide_building_image"
                        ></settings-toggle>
                    </div>
                    @if (model().induction_enabled) {
                        <div>
                            <label
                                for="visitor-kiosk-settings-form-modal-induction-details"
                            >
                                Induction Details
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <textarea
                                    id="visitor-kiosk-settings-form-modal-induction-details"
                                    matInput
                                    [formField]="form.induction_details"
                                    placeholder="Site rules for visitors to accept"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-standalone-visitor-location"
                        >
                            Standalone Visitor Location
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="visitor-kiosk-settings-form-modal-standalone-visitor-location"
                                matInput
                                [formField]="form.standalone_visitor_location"
                                placeholder="zone-system-id"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-checked-in-template"
                        >
                            Checked In Template
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                id="visitor-kiosk-settings-form-modal-checked-in-template"
                                matInput
                                [formField]="form.checked_in_template"
                                placeholder="Welcome &gt;visitor_name&lt;"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div
                        class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Visitor Label Size
                        </h3>
                        <div class="grid gap-4 md:grid-cols-3">
                            <div>
                                <label
                                    for="visitor-kiosk-settings-form-modal-label-width"
                                    >Width (em)</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="visitor-kiosk-settings-form-modal-label-width"
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.width
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label
                                    for="visitor-kiosk-settings-form-modal-label-height"
                                    >Height (em)</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="visitor-kiosk-settings-form-modal-label-height"
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.height
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label
                                    for="visitor-kiosk-settings-form-modal-label-scale"
                                    >Font Size (mm)</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="visitor-kiosk-settings-form-modal-label-scale"
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.scale
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    explore
                    class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                >
                    <h3
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                    >
                        PlaceOS Maps
                    </h3>
                    <settings-select
                        field_id="visitor-kiosk-settings-form-modal-disable"
                        label="Disabled Features"
                        [field]="form.explore.disable"
                        [options]="EXPLORE_FEATURE"
                        placeholder="No disabled features"
                        multiple
                    />
                    <div class="flex items-center space-x-4">
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-disable-actions"
                            label="Disabled Feature Actions"
                            [field]="form.explore.disable_actions"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled actions"
                            multiple
                        />
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-available-period"
                            label="Disabled Feature Labels"
                            [field]="form.explore.disable_labels"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled labels"
                            multiple
                        />
                    </div>
                    <div class="flex items-center space-x-4">
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-disable-features"
                            label="Disabled Feature Displays"
                            [field]="form.explore.disable_features"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled displays"
                            multiple
                        />
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-disable-styles"
                            label="Disabled Feature Styles"
                            [field]="form.explore.disable_styles"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled styles"
                            multiple
                        />
                    </div>
                    <settings-select
                        field_id="visitor-kiosk-settings-form-modal-hide-device-fields"
                        label="Hidden Device Fields"
                        [field]="form.explore.hide_device_fields"
                        [options]="DEVICE_FIELDS"
                        placeholder="No hidden fields"
                        multiple
                    />
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Show Legend"
                            [formField]="form.explore.show_legend"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show Booking QR Code"
                            [formField]="form.explore.show_booking_qr"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use defined polygons for zones"
                            [formField]="form.explore.use_zone_polygons"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show labels for zones"
                            [formField]="form.explore.show_zone_labels"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show zone sensor info"
                            [formField]="form.explore.show_zone_sensor_info"
                        ></settings-toggle>
                    </div>
                </section>
                <section
                    booking
                    class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                >
                    <h3
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                    >
                        Visitor Booking Rules
                    </h3>
                    <settings-select
                        field_id="visitor-kiosk-settings-form-modal-max-duration"
                        label="Max Duration"
                        [field]="form.visitors.max_duration"
                        [options]="MAX_DURATION_MINI"
                    />
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Allow all day bookings"
                            [formField]="form.visitors.allow_all_day"
                        ></settings-toggle>
                    </div>
                </section>
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
    imports: [
        FullscreenModalShellComponent,
        MatDialogModule,
        MatProgressSpinnerModule,
        SettingsToggleComponent,
        MatFormFieldModule,
        MatInputModule,
        UploadButtonComponent,
        FormField,
        FormsModule,
        SettingsSelectComponent,
    ],
})
export class VisitorKioskSettingsFormModalComponent implements OnInit {
    private _data = inject<{
        zone: PlaceZone;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<VisitorKioskSettingsFormModalComponent>>(
            MatDialogRef,
        );
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private _layers: AppSettingsLayers = { inherited: {}, stored: {} };
    /** Form values right after loading, used to find user changes on save. */
    private _initial: AppSettings = {};
    public readonly loading = signal('');
    public readonly zone = this._data.zone;
    public readonly MAX_DURATION_MINI = MAX_DURATION_MINI_OPTIONS;
    public readonly EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    public readonly DEVICE_FIELDS = DEVICE_FIELD_OPTIONS;
    public readonly settings_key = appMetadataKey(
        this._settings,
        'visitor-kiosk',
    );

    public readonly model = signal({
        logo_light: 'assets/logo-light.svg',
        logo_dark: 'assets/logo-dark.svg',
        default_route: 'welcome',
        welcome_background: 'assets/img/skyline.webp',
        welcome_message: '',
        induction_enabled: false,
        induction_details: '',
        induction_after_details: false,
        allow_self_registration: true,
        allow_registration_time_options: false,
        allow_pass_number: false,
        allow_printing_label: true,
        allow_user_photo: true,
        allow_beverages: false,
        hide_explore: false,
        hide_building_image: false,
        checked_in_template: '',
        standalone_visitor_location: '',
        visitor_label_size: {
            width: 25,
            height: 15,
            scale: 4,
        },
        visitors: {
            allow_all_day: false,
            max_duration: 180,
        },
        explore: {
            hide_device_fields: [] as string[],
            show_legend: true,
            colors: {} as Record<string, string>,
            show_booking_qr: false,
            disable: [] as string[],
            disable_actions: [] as string[],
            disable_labels: [] as string[],
            disable_features: [] as string[],
            disable_styles: [] as string[],
            use_zone_polygons: false,
            area_count_key: 'count',
            show_zone_labels: false,
            show_zone_sensor_info: false,
        },
    });

    public readonly form = form(this.model);

    public async ngOnInit() {
        this.loading.set('Loading existing settings...');
        try {
            this._layers = await loadLayeredAppSettings(
                this.zone,
                this._org.organisation.id,
                this.settings_key,
                DEFAULT_SETTINGS.app,
            );
            const { inherited, stored } = this._layers;
            this._patchModel(inherited);
            this._patchModel(stored);
            this._initial = this.model();
        } catch (e) {
            // Saving defaults over settings that failed to load would lose
            // them, so close instead.
            notifyError(`Failed to load existing settings. ${errorText(e)}`);
            this._dialog_ref.close();
        } finally {
            this.loading.set('');
        }
    }

    private _patchModel(value: Record<string, unknown>) {
        this.model.update((model) => {
            const next = applyAppSettings(model, value);
            // Older versions of this form saved `hide_device_fields` as a boolean
            if (Array.isArray(next.explore.hide_device_fields)) return next;
            return {
                ...next,
                explore: { ...next.explore, hide_device_fields: [] },
            };
        });
    }

    public async save() {
        this.loading.set('Saving settings...');
        try {
            await saveAppSettings(
                this.zone.id,
                this.settings_key,
                'Visitor-kiosk',
                this._layers,
                this._initial,
                this.model(),
            );
        } catch (e) {
            console.error(e);
            this.loading.set('');
            notifyError(
                `Failed to save settings: ${e.message || e.error || e}`,
            );
            throw e;
        }
        this.loading.set('');
        notifySuccess('Successfully saved visitor kiosk app settings');
        this._dialog_ref.close();
    }
}
