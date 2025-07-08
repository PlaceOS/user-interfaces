import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    currentUser,
    notifySuccess,
    SettingsService,
    VERSION,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { DEFAULT_SETTINGS } from 'apps/visitor-kiosk/src/environments/settings';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'visitor-kiosk-settings-form-modal',
    template: `
        <div class="flex h-screen w-screen flex-col overflow-auto bg-base-100">
            <header
                class="sticky top-0 z-10 mx-auto my-2 w-full max-w-[640px] rounded border-none bg-base-200 px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    Visitor Kiosk Settings -
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
                    <form [formGroup]="form" class="flex flex-col space-y-8">
                        <section general class="space-y-2 rounded bg-base-100">
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
                                <label for="default-route"
                                    >Welcome Message</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
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
                                    name="Enable Induction"
                                    formControlName="induction_enabled"
                                ></settings-toggle>
                                @if (form.value.induction_enabled) {
                                    <settings-toggle
                                        name="Induction after Confirm Details"
                                        formControlName="induction_after_details"
                                    ></settings-toggle>
                                }
                                <settings-toggle
                                    name="Allow Self Registration"
                                    formControlName="allow_self_registration"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Allow setting visitor pass number"
                                    formControlName="allow_pass_number"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Allow Printing Label"
                                    formControlName="allow_printing_label"
                                ></settings-toggle>
                            </div>
                        </section>
                        <section
                            explore
                            class="relative rounded border border-base-300 px-4 pb-2 pt-4"
                            formGroupName="explore"
                        >
                            <h3
                                class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 font-medium"
                            >
                                PlaceOS Maps
                            </h3>
                            <div>
                                <label for="disable"> Disabled Features </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="disable"
                                        formControlName="disable"
                                        placeholder="No disabled features"
                                        multiple
                                    >
                                        <mat-option value="devices"
                                            >Devices</mat-option
                                        >
                                        <mat-option value="desks"
                                            >Desks</mat-option
                                        >
                                        <mat-option value="lockers">
                                            Lockers
                                        </mat-option>
                                        <mat-option value="parking">
                                            parking
                                        </mat-option>
                                        <mat-option value="spaces">
                                            Rooms
                                        </mat-option>
                                        <mat-option value="spaces-presence">
                                            Room Presence
                                        </mat-option>
                                        <mat-option value="zones"
                                            >Zones</mat-option
                                        >
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1">
                                    <label for="disable-actions">
                                        Disabled Feature Actions
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="disable-actions"
                                            formControlName="disable_actions"
                                            placeholder="No disabled actions"
                                            multiple
                                        >
                                            <mat-option value="devices"
                                                >Devices</mat-option
                                            >
                                            <mat-option value="desks"
                                                >Desks</mat-option
                                            >
                                            <mat-option value="lockers">
                                                Lockers
                                            </mat-option>
                                            <mat-option value="parking">
                                                parking
                                            </mat-option>
                                            <mat-option value="spaces">
                                                Rooms
                                            </mat-option>
                                            <mat-option value="spaces-presence">
                                                Room Presence
                                            </mat-option>
                                            <mat-option value="zones"
                                                >Zones</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex-1">
                                    <label for="available-period">
                                        Disabled Feature Labels
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="disable-labels"
                                            formControlName="disable_labels"
                                            placeholder="No disabled labels"
                                            multiple
                                        >
                                            <mat-option value="devices"
                                                >Devices</mat-option
                                            >
                                            <mat-option value="desks"
                                                >Desks</mat-option
                                            >
                                            <mat-option value="lockers">
                                                Lockers
                                            </mat-option>
                                            <mat-option value="parking">
                                                parking
                                            </mat-option>
                                            <mat-option value="spaces">
                                                Rooms
                                            </mat-option>
                                            <mat-option value="spaces-presence">
                                                Room Presence
                                            </mat-option>
                                            <mat-option value="zones"
                                                >Zones</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1">
                                    <label for="disable-features">
                                        Disabled Feature Displays
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="disable-features"
                                            formControlName="disable_features"
                                            placeholder="No disabled displays"
                                            multiple
                                        >
                                            <mat-option value="devices"
                                                >Devices</mat-option
                                            >
                                            <mat-option value="desks"
                                                >Desks</mat-option
                                            >
                                            <mat-option value="lockers">
                                                Lockers
                                            </mat-option>
                                            <mat-option value="parking">
                                                parking
                                            </mat-option>
                                            <mat-option value="spaces">
                                                Rooms
                                            </mat-option>
                                            <mat-option value="spaces-presence">
                                                Room Presence
                                            </mat-option>
                                            <mat-option value="zones"
                                                >Zones</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex-1">
                                    <label for="disable-styles">
                                        Disabled Feature Styles
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="disable-styles"
                                            formControlName="disable_styles"
                                            placeholder="No disabled styles"
                                            multiple
                                        >
                                            <mat-option value="devices"
                                                >Devices</mat-option
                                            >
                                            <mat-option value="desks"
                                                >Desks</mat-option
                                            >
                                            <mat-option value="lockers">
                                                Lockers
                                            </mat-option>
                                            <mat-option value="parking">
                                                parking
                                            </mat-option>
                                            <mat-option value="spaces">
                                                Rooms
                                            </mat-option>
                                            <mat-option value="spaces-presence">
                                                Room Presence
                                            </mat-option>
                                            <mat-option value="zones"
                                                >Zones</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                            @if (form.value.explore?.show_legend) {
                                <div
                                    class="relative rounded border border-base-300 p-4"
                                >
                                    <h3
                                        class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 font-medium"
                                    >
                                        Legend
                                    </h3>
                                    @for (
                                        item of form.value.explore?.legend ||
                                            [];
                                        track item;
                                        let i = $index
                                    ) {
                                        <div
                                            class="mb-4 flex items-center space-x-4"
                                        >
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
                                                    class="h-11 rounded-lg border border-base-content"
                                                    [(ngModel)]="item[1]"
                                                    [ngModelOptions]="{
                                                        standalone: true,
                                                    }"
                                                />
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                class="h-12 w-12 rounded border border-error text-error"
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
                                    name="Hide device fields"
                                    formControlName="hide_device_fields"
                                    info="Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Show Legend"
                                    formControlName="show_legend"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Hide Zones"
                                    formControlName="hide_zones"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Show Booking QR Code"
                                    formControlName="show_booking_qr"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Use defined polygons for zones"
                                    formControlName="use_zone_polygons"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Show labels for zones"
                                    formControlName="show_zone_labels"
                                ></settings-toggle>
                                <settings-toggle
                                    name="Show zone sensor info"
                                    formControlName="show_zone_sensor_info"
                                ></settings-toggle>
                            </div>
                        </section>
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
    standalone: false,
})
export class VisitorKioskSettingsFormModalComponent {
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
        allow_pass_number: new FormControl(false),
        allow_printing_label: new FormControl(false),
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
                new_settings[key] =
                    this.existing_settings[key] || form_value[key];
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
        await lastValueFrom(
            updateMetadata(zone.id, {
                name: `${this.settings_key}`,
                details: new_settings,
                description: `[${VERSION.hash}|C] Visitor-kiosk Application Settings`,
            }),
        ).catch((e) => {
            console.error(e);
            this.loading.set('');
            throw e;
        });
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

    private _getMetadata(id) {
        return lastValueFrom(
            showMetadata(id, this.settings_key).pipe(
                map((m) => m.details as Record<string, any>),
            ),
        );
    }
}
