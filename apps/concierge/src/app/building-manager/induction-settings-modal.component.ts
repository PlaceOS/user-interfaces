import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SettingsService, notifyError, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    querySettings,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';

@Component({
    selector: 'induction-settings-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-gray-300 p-4"
        >
            <h3 class="text-xl font-medium">Induction Settings</h3>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon class="text-2xl">close</app-icon>
            </button>
        </header>
        <main
            class="p-4 flex flex-col space-y-2"
            *ngIf="!loading; else load_state"
        >
            <mat-form-field
                appearance="outline"
                class="w-[36rem] max-w-[80vw] h-[50vh]"
            >
                <textarea
                    matInput
                    [(ngModel)]="induction_details"
                    placeholder="Induction Details"
                    class="w-[34rem] max-w-[calc(80vw-2rem)] h-[calc(50vh-2rem)] resize-none"
                ></textarea>
            </mat-form-field>
            <mat-checkbox [(ngModel)]="is_enabled">
                Enable Induction for Building
            </mat-checkbox>
        </main>
        <footer class="px-4 pb-4 flex justify-end" *ngIf="!loading">
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center p-32 space-y-2"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class InductionSettingsModalComponent {
    public loading = '';
    public induction_details: string = '';
    public is_enabled: boolean = false;
    public settings: Record<string, any> = {};

    constructor(
        @Inject(MAT_DIALOG_DATA) private _zone_id: string,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog_ref: MatDialogRef<InductionSettingsModalComponent>
    ) {}

    public ngOnInit() {
        if (!this._zone_id) return;
        this.loadSettings();
    }

    public async loadSettings() {
        this.loading = 'Loading induction settings for building...';
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        this.settings = {};
        const [bld_metadata, org_metadata, org_settings] = await Promise.all([
            await showMetadata(this._zone_id, visitor_kiosk_app).toPromise(),
            await showMetadata(
                this._org.organisation.id,
                visitor_kiosk_app
            ).toPromise(),
            await showMetadata(
                this._org.organisation.id,
                'settings'
            ).toPromise(),
        ]);
        this.settings = {
            ...org_settings.details,
            ...org_metadata.details,
            ...bld_metadata.details,
        };
        this.induction_details = this.settings.induction_details || '';
        this.is_enabled = this.settings.induction_enabled ?? false;
        this.loading = '';
    }

    public async save() {
        this.loading = 'Saving induction settings...';
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        this._dialog_ref.disableClose = true;
        const metadata = await showMetadata(
            this._zone_id,
            visitor_kiosk_app
        ).toPromise();
        const new_metadata = {
            ...metadata.details,
            induction_details: this.induction_details,
            induction_enabled: this.is_enabled,
        };
        const result = await updateMetadata(this._zone_id, {
            name: metadata.name || visitor_kiosk_app,
            description: metadata.description || '',
            details: new_metadata,
        })
            .toPromise()
            .catch((err) => {
                console.error(err);
                notifyError('Error saving induction settings');
            });
        this.loading = '';
        if (result) {
            notifySuccess('Successfully saved induction settings');
            this._dialog_ref.close();
        }
    }
}
