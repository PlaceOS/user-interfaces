import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    currentUser,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
    VERSION,
} from '@placeos/common';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { DEFAULT_SETTINGS } from 'apps/visitor-kiosk/src/environments/settings';
import {
    EXPLORE_FEATURE_OPTIONS,
    MAX_DURATION_MINI_OPTIONS,
} from './settings-option.constants';
import { UploadButtonComponent } from './upload-button.component';

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
            <form [formGroup]="form" class="flex flex-col space-y-8">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    name="logo_light"
                                    formControlName="logo_light"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    form.patchValue({
                                        logo_light: $event,
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    name="logo_dark"
                                    formControlName="logo_dark"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    form.patchValue({
                                        logo_dark: $event,
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="welcome-background">
                            Welcome Background
                        </label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    name="welcome-background"
                                    formControlName="welcome_background"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    form.patchValue({
                                        welcome_background: $event,
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="default-route">Welcome Message</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                name="welcome-message"
                                formControlName="welcome_message"
                                placeholder="Welcome to PlaceOS Self Service Kiosk"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Enable Induction"
                            formControlName="induction_enabled"
                        ></settings-toggle>
                        @if (form.value.induction_enabled) {
                            <settings-toggle
                                label="Induction after Confirm Details"
                                formControlName="induction_after_details"
                            ></settings-toggle>
                        }
                        <settings-toggle
                            label="Allow Self Registration"
                            formControlName="allow_self_registration"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow setting visitor pass number"
                            formControlName="allow_pass_number"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Printing Label"
                            formControlName="allow_printing_label"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Visitor Photo"
                            formControlName="allow_user_photo"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Registration Time Options"
                            formControlName="allow_registration_time_options"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Beverages"
                            formControlName="allow_beverages"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Explore Map option"
                            formControlName="hide_explore"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Building Image"
                            formControlName="hide_building_image"
                        ></settings-toggle>
                    </div>
                    <div>
                        <label for="standalone-visitor-location">
                            Standalone Visitor Location
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="standalone-visitor-location"
                                formControlName="standalone_visitor_location"
                                placeholder="zone-system-id"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="checked-in-template">
                            Checked In Template
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                name="checked-in-template"
                                formControlName="checked_in_template"
                                placeholder="Welcome &gt;visitor_name&lt;"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div
                        class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                        formGroupName="visitor_label_size"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Visitor Label Size
                        </h3>
                        <div class="grid gap-4 md:grid-cols-3">
                            <div>
                                <label for="label-width">Width (mm)</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        name="label-width"
                                        formControlName="width"
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label for="label-height">Height (mm)</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        name="label-height"
                                        formControlName="height"
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label for="label-scale">Scale</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        name="label-scale"
                                        formControlName="scale"
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    explore
                    class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    formGroupName="explore"
                >
                    <h3
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                    >
                        PlaceOS Maps
                    </h3>
                    <div>
                        <label for="disable"> Disabled Features </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="disable"
                                formControlName="disable"
                                placeholder="No disabled features"
                                multiple
                            >
                                @for (opt of EXPLORE_FEATURE; track opt.value) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex-1">
                            <label for="disable-actions">
                                Disabled Feature Actions
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="disable-actions"
                                    formControlName="disable_actions"
                                    placeholder="No disabled actions"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label for="available-period">
                                Disabled Feature Labels
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="disable-labels"
                                    formControlName="disable_labels"
                                    placeholder="No disabled labels"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex-1">
                            <label for="disable-features">
                                Disabled Feature Displays
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="disable-features"
                                    formControlName="disable_features"
                                    placeholder="No disabled displays"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label for="disable-styles">
                                Disabled Feature Styles
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="disable-styles"
                                    formControlName="disable_styles"
                                    placeholder="No disabled styles"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    @if (form.value.explore?.show_legend) {
                        <div
                            class="border-base-300 relative rounded-sm border p-4"
                        >
                            <h3
                                class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                            >
                                Legend
                            </h3>
                            @for (
                                item of form.value.explore?.legend || [];
                                track item;
                                let i = $index
                            ) {
                                <div class="mb-4 flex items-center space-x-4">
                                    <div class="w-3/4 flex-1">
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <input
                                                matInput
                                                placeholder="Legend Key"
                                                [(ngModel)]="item[0]"
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                            />
                                        </mat-form-field>
                                    </div>
                                    <div
                                        class="flex w-12 items-center justify-center"
                                        matTooltip="Legend Color"
                                    >
                                        <input
                                            type="color"
                                            class="border-base-content h-11 rounded-lg border"
                                            [(ngModel)]="item[1]"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        />
                                    </div>
                                    <button
                                        icon
                                        matRipple
                                        class="border-error text-error h-12 w-12 rounded-sm border"
                                        (click)="removeLegend(i)"
                                    >
                                        <icon>delete</icon>
                                    </button>
                                </div>
                            }
                            <button
                                btn
                                matRipple
                                class="w-full"
                                (click)="addLegend()"
                            >
                                Add Legend Item
                            </button>
                        </div>
                    }
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Hide device fields"
                            formControlName="hide_device_fields"
                            info="Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show Legend"
                            formControlName="show_legend"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Zones"
                            formControlName="hide_zones"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show Booking QR Code"
                            formControlName="show_booking_qr"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use defined polygons for zones"
                            formControlName="use_zone_polygons"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show labels for zones"
                            formControlName="show_zone_labels"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show zone sensor info"
                            formControlName="show_zone_sensor_info"
                        ></settings-toggle>
                    </div>
                </section>
                <section
                    booking
                    class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    formGroupName="visitors"
                >
                    <h3
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                    >
                        Visitor Booking Rules
                    </h3>
                    <div>
                        <label for="max-duration">Max Duration</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="max-duration"
                                formControlName="max_duration"
                            >
                                @for (
                                    opt of MAX_DURATION_MINI;
                                    track opt.value
                                ) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Allow all day bookings"
                            formControlName="allow_all_day"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        MatProgressSpinnerModule,
        SettingsToggleComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        UploadButtonComponent,
        ReactiveFormsModule,
        FormsModule,
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

    public existing_settings: Record<string, any> = {};
    public old_settings: Record<string, any> = {};
    public readonly loading = signal('');
    public readonly zone = this._data.zone;
    public readonly MAX_DURATION_MINI = MAX_DURATION_MINI_OPTIONS;
    public readonly EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    public readonly settings_key =
        this._settings.get('app.visitor_kiosk_metadata_key') ||
        'visitor-kiosk_app';

    public readonly form = new FormGroup({
        logo_light: new FormControl(''),
        logo_dark: new FormControl(''),
        default_route: new FormControl(''),
        welcome_background: new FormControl(''),
        welcome_message: new FormControl(''),
        induction_enabled: new FormControl(false),
        induction_details: new FormControl(''),
        induction_after_details: new FormControl(false),
        allow_self_registration: new FormControl(false),
        allow_registration_time_options: new FormControl(false),
        allow_pass_number: new FormControl(false),
        allow_printing_label: new FormControl(false),
        allow_user_photo: new FormControl(false),
        allow_beverages: new FormControl(false),
        hide_explore: new FormControl(false),
        hide_building_image: new FormControl(false),
        checked_in_template: new FormControl(''),
        standalone_visitor_location: new FormControl(''),
        visitor_label_size: new FormGroup({
            width: new FormControl(25),
            height: new FormControl(15),
            scale: new FormControl(4),
        }),
        visitors: new FormGroup({
            allow_all_day: new FormControl(false),
            max_duration: new FormControl(180),
        }),
        explore: new FormGroup({
            hide_device_fields: new FormControl(false),
            show_legend: new FormControl(false),
            hide_zones: new FormControl(false),
            legend: new FormControl<[string, string][]>([]),
            colors: new FormControl<Record<string, string>>({}),
            show_booking_qr: new FormControl(false),
            disable: new FormControl<string[]>([]),
            disable_actions: new FormControl<string[]>([]),
            disable_labels: new FormControl<string[]>([]),
            disable_features: new FormControl<string[]>([]),
            disable_styles: new FormControl<string[]>([]),
            use_zone_polygons: new FormControl(false),
            area_count_key: new FormControl('count'),
            show_zone_labels: new FormControl(false),
            show_zone_sensor_info: new FormControl(false),
        }),
    });

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading.set('Loading existing settings...');
        this.form.patchValue(DEFAULT_SETTINGS.app);
        const org_id = this._org.organisation.id;
        const org_metadata = await this._getMetadata(org_id);
        const parent_metadata =
            org_id !== zone.parent_id
                ? await this._getMetadata(zone.parent_id)
                : {};
        const metadata = await this._getMetadata(zone.id);
        this.existing_settings = {
            ...DEFAULT_SETTINGS.app,
            ...org_metadata,
            ...parent_metadata,
        };
        this.form.patchValue(org_metadata || {});
        this.form.patchValue(parent_metadata || {});
        this.form.patchValue(metadata || {});
        this.old_settings = metadata;
        this.loading.set('');
    }

    public addLegend() {
        const explore = this.form.value.explore;
        const legend = explore.legend || [];
        if (legend) legend.push(['', '']);
        this.form.get('explore')?.get('legend')?.setValue(legend);
    }

    public removeLegend(index: number) {
        const explore = this.form.value.explore;
        const legend = explore.legend || [];
        if (legend.length > index) legend.splice(index, 1);
        this.form.get('explore')?.get('legend')?.setValue(legend);
    }

    public async save() {
        this.loading.set('Saving settings...');
        const zone = this._data.zone;
        const form_value = this.form.getRawValue();
        const new_settings = { ...this.old_settings };
        for (const key in form_value) {
            if (form_value[key] instanceof Array) {
                new_settings[key] = form_value[key];
            } else if (form_value[key] instanceof Object) {
                new_settings[key] = {
                    ...(this.existing_settings[key] || {}),
                    ...form_value[key],
                };
            } else {
                new_settings[key] = form_value[key];
            }
        }
        for (const key in new_settings) {
            if (
                !this._isValid(new_settings[key], this.existing_settings[key])
            ) {
                delete new_settings[key];
            } else if (
                new_settings[key] instanceof Object &&
                !(new_settings[key] instanceof Array) &&
                this.existing_settings[key]
            ) {
                for (const sub_key in new_settings[key]) {
                    if (
                        !this._isValid(
                            new_settings[key][sub_key],
                            this.existing_settings[key][sub_key],
                        )
                    ) {
                        delete new_settings[key][sub_key];
                    }
                }
            }
        }
        const user = currentUser();
        (new_settings as any).edited_by = {
            id: user.id,
            name: user.name,
            email: user.email,
            domain: location.hostname,
            role: user.groups.includes('placeos_admin')
                ? 'Admin'
                : user.groups.includes('placeos_support')
                  ? 'Support'
                  : 'User',
        };
        try {
            await updateMetadata(zone.id, {
                name: `${this.settings_key}`,
                details: new_settings,
                description: `[${VERSION.hash}|C] Visitor-kiosk Application Settings`,
            });
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

    private _isValid<T>(new_value: T, existing_value: T) {
        return (
            new_value !== '' &&
            new_value !== undefined &&
            new_value !== null &&
            JSON.stringify(new_value) !== JSON.stringify(existing_value)
        );
    }

    private async _getMetadata(id) {
        const metadata: any = await showMetadata(id, this.settings_key);
        return metadata.details as Record<string, any>;
    }
}
