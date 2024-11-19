import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { SettingsService } from '@placeos/common';
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
                    Visitor Kiosk Settings - {{ zone.display_name }}
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
                                <button
                                    icon
                                    matRipple
                                    class="rounded bg-secondary text-secondary-content h-12 w-12"
                                >
                                    <app-icon>cloud_upload</app-icon>
                                </button>
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
                                <button
                                    icon
                                    matRipple
                                    class="rounded bg-secondary text-secondary-content h-12 w-12"
                                >
                                    <app-icon>cloud_upload</app-icon>
                                </button>
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
                                <button
                                    icon
                                    matRipple
                                    class="rounded bg-secondary text-secondary-content h-12 w-12"
                                >
                                    <app-icon>cloud_upload</app-icon>
                                </button>
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
                        <div>
                            <label for="default-route">Default Route</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="default-route"
                                    formControlName="default_route"
                                    placeholder="/welcome"
                                />
                                <mat-hint>
                                    Main page of the application
                                </mat-hint>
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
        induction_after_details: new FormControl(false),
        allow_self_registration: new FormControl(false),
        allow_printing_label: new FormControl(false),
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
        const new_settings = { ...this.existing_settings, ...this.form.value };
        for (const key in new_settings) {
            if (
                !this._isValid(new_settings[key], this.existing_settings[key])
            ) {
                delete new_settings[key];
            } else if (typeof new_settings[key] === 'object') {
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
        await updateMetadata(zone.id, {
            name: `${this.settings_key}`,
            details: new_settings,
            description: 'Visitor-kiosk Application Settings',
        })
            .toPromise()
            .catch((e) => {
                console.error(e);
                this.loading = '';
                throw e;
            });
        this.loading = '';
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
