import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { DEFAULT_SETTINGS } from 'apps/concierge/src/environments/settings';

@Component({
    selector: 'concierge-settings-form-modal',
    template: `
        <div class="w-screen h-screen bg-base-100 flex flex-col overflow-auto">
            <header
                class="sticky top-0 p-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium">
                    Concierge Settings - {{ zone.display_name }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main class="flex-1 h-1/2 p-2 space-y-2 z-0 max-w-[640px] w-full">
                <form [formGroup]="form" class=""></form>
            </main>
            <footer
                class="sticky top-0 p-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded"
            >
                <button btn matRipple class="">Save</button>
            </footer>
        </div>
    `,
    styles: [``],
})
export class ConciergeSettingsFormModalComponent {
    public loading = '';
    public existing_settings: Record<string, any> = {};
    public readonly zone = this._data.zone;
    public readonly settings_key =
        this._settings.get('app.concierge_metadata_key') || 'concierge_app';

    public readonly form = new FormGroup({
        features: new FormGroup([]),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { zone: PlaceZone },
        private _dialog_ref: MatDialogRef<ConciergeSettingsFormModalComponent>,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading = 'Loading existing settings...';
        this.form.patchValue(DEFAULT_SETTINGS.app as any);
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
        const new_settings = { ...this.form.value };
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
            description: 'Concierge Application Settings',
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
