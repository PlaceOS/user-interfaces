import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { currentUser, notifySuccess, SettingsService } from '@placeos/common';
import { VERSION } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { DEFAULT_SETTINGS } from 'apps/visitor-kiosk/src/environments/settings';

@Component({
    selector: 'visitor-kiosk-settings-form-modal',
    template: `
        <div class="w-screen h-screen bg-base-100 flex flex-col overflow-auto">
            <header
                class="sticky top-0 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium">
                    Visitor Kiosk Settings -
                    {{ zone.display_name || zone.name }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                class="h-1/2 flex-1 p-4 space-y-8 z-0 max-w-[640px] w-full mx-auto"
            >
                <form
                    [formGroup]="form"
                    class="flex flex-col space-y-8"
                    *ngIf="!loading; else load_state"
                >
                    <section general class="bg-base-100 rounded space-y-2">
                        <div>
                            <label for="logo_light">Light Mode Logo</label>
                            <div class="flex items-center space-x-2 mb-4">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full no-subscript"
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
                                        form.patchValue({ logo_light: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></upload-button>
                            </div>
                        </div>
                        <div>
                            <label for="logo_dark">Dark Mode Logo</label>
                            <div class="flex items-center space-x-2 mb-4">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full no-subscript"
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
                                        form.patchValue({ logo_dark: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></upload-button>
                            </div>
                        </div>
                        <div>
                            <label for="welcome-background">
                                Welcome Background
                            </label>
                            <div class="flex items-center space-x-2 mb-4">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full no-subscript"
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
                        <div class="flex items-center flex-wrap -mx-2">
                            <settings-toggle
                                name="Enable Induction"
                                formControlName="induction_enabled"
                            ></settings-toggle>
                            <settings-toggle
                                *ngIf="form.value.induction_enabled"
                                name="Induction after Confirm Details"
                                formControlName="induction_after_details"
                            ></settings-toggle>
                            <settings-toggle
                                name="Allow Self Registration"
                                formControlName="allow_self_registration"
                            ></settings-toggle>
                            <settings-toggle
                                name="Allow Printing Label"
                                formControlName="allow_printing_label"
                            ></settings-toggle>
                        </div>
                    </section>
                    <section
                        explore
                        class="relative border border-base-300 rounded px-4 pb-2 pt-4"
                        formGroupName="explore"
                    >
                        <h3
                            class="absolute top-0 left-4 -translate-y-1/2 rounded px-2 py-1 font-medium bg-base-100"
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
                                    <mat-option value="devices"
                                        >Devices</mat-option
                                    >
                                    <mat-option value="desks">Desks</mat-option>
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
                                    <mat-option value="zones">Zones</mat-option>
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
                        <div
                            class="relative border border-base-300 rounded p-4"
                            *ngIf="form.value.explore?.show_legend"
                        >
                            <h3
                                class="absolute top-0 left-4 -translate-y-1/2 rounded px-2 py-1 font-medium bg-base-100"
                            >
                                Legend
                            </h3>
                            <div
                                class="flex items-center space-x-4 mb-4"
                                *ngFor="
                                    let item of form.value.explore.legend || [];
                                    let i = index
                                "
                            >
                                <div class="w-3/4 flex-1">
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full no-subscript"
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
                                    class="w-12 flex items-center justify-center"
                                    matTooltip="Legend Color"
                                >
                                    <input
                                        type="color"
                                        class="h-11 rounded-lg border border-base-content"
                                        [(ngModel)]="item[1]"
                                        [ngModelOptions]="{ standalone: true }"
                                    />
                                </div>
                                <button
                                    icon
                                    matRipple
                                    class="border border-error text-error rounded h-12 w-12"
                                    (click)="removeLegend(i)"
                                >
                                    <app-icon>delete</app-icon>
                                </button>
                            </div>
                            <button
                                btn
                                matRipple
                                class="w-full"
                                (click)="addLegend()"
                            >
                                Add Legend Item
                            </button>
                        </div>
                        <div class="flex items-center flex-wrap -mx-2">
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
                <div class="h-16 w-full"></div>
            </main>
            <footer
                class="fixed bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded flex items-center justify-end"
                *ngIf="!loading"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <div
                class="w-full flex-1 h-1/2 flex flex-col items-center justify-center p-12"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center">{{ loading }}</p>
            </div>
        </ng-template>
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
    public loading = '';
    public existing_settings: Record<string, any> = {};
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

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { zone: PlaceZone },
        private _dialog_ref: MatDialogRef<VisitorKioskSettingsFormModalComponent>,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading = 'Loading existing settings...';
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
        this.loading = '';
    }

    public async save() {
        this.loading = 'Saving settings...';
        const zone = this._data.zone;
        const form_value = this.form.getRawValue();
        const new_settings = {};
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
        await updateMetadata(zone.id, {
            name: `${this.settings_key}`,
            details: new_settings,
            description: `[${VERSION.hash}|C] Visitor-kiosk Application Settings`,
        })
            .toPromise()
            .catch((e) => {
                console.error(e);
                this.loading = '';
                throw e;
            });
        this.loading = '';
        notifySuccess('Sucessfully saved visitor kiosk app settings');
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
        return showMetadata(id, this.settings_key)
            .pipe(map((m) => m.details as Record<string, any>))
            .toPromise();
    }
}
