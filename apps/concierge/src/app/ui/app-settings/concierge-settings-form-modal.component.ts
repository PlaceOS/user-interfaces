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
                class="sticky top-0 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium">
                    Concierge Settings - {{ zone.display_name }}
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
                    <section
                        general
                        class="bg-base-100 rounded space-y-2"
                    ></section>
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
            section {
                background-color: hsla(217, 91%, 60%, 0.04);
            }

            settings-toggle {
                width: calc(50% - 1rem);
                margin: 0.5rem;
            }
        `,
    ],
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
