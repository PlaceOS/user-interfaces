import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    SettingsService,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'induction-settings-modal',
    template: `
        <header
            class="m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.INDUCTION_HEADER' | translate }}
            </h3>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="flex flex-col space-y-2 px-4">
                <settings-toggle
                    [(ngModel)]="is_enabled"
                    [name]="'APP.CONCIERGE.INDUCTION_ENABLE' | translate"
                ></settings-toggle>
                <mat-form-field
                    appearance="outline"
                    class="h-[50vh] w-[36rem] max-w-[80vw]"
                >
                    <textarea
                        matInput
                        [(ngModel)]="induction_details"
                        [placeholder]="
                            'APP.CONCIERGE.INDUCTION_DETAILS' | translate
                        "
                        class="h-[calc(50vh-2rem)] w-[34rem] max-w-[calc(80vw-2rem)] resize-none"
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
        @if (!loading) {
            <footer
                class="mt-2 flex justify-end border-t border-base-200 px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        }
    `,
    styles: [``],
    standalone: false,
})
export class InductionSettingsModalComponent implements OnInit {
    public loading = '';
    public induction_details = '';
    public is_enabled = false;
    public settings: Record<string, any> = {};

    constructor(
        @Inject(MAT_DIALOG_DATA) private _zone_id: string,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog_ref: MatDialogRef<InductionSettingsModalComponent>,
    ) {}

    public ngOnInit() {
        if (!this._zone_id) return;
        this.loadSettings();
    }

    public async loadSettings() {
        this.loading = i18n('APP.CONCIERGE.INDUCTION_LOADING');
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        this.settings = {};
        const [bld_metadata, org_metadata, org_settings] = await Promise.all([
            await showMetadata(this._zone_id, visitor_kiosk_app).toPromise(),
            await showMetadata(
                this._org.organisation.id,
                visitor_kiosk_app,
            ).toPromise(),
            await showMetadata(
                this._org.organisation.id,
                'settings',
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
        this.loading = i18n('APP.CONCIERGE.INDUCTION_SAVING');
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        const concierge_app =
            this._settings.get('app.concierge_app') || 'concierge_app';
        this._dialog_ref.disableClose = true;
        const metadata = await showMetadata(
            this._zone_id,
            visitor_kiosk_app,
        ).toPromise();
        const con_metadata = await showMetadata(
            this._zone_id,
            concierge_app,
        ).toPromise();
        const visitor_metadata = {
            ...metadata.details,
            induction_details: this.induction_details,
            induction_enabled: this.is_enabled,
        };
        const concierge_metadata = {
            ...metadata.details,
            induction_details: this.induction_details,
            induction_enabled: this.is_enabled,
        };
        const result = await updateMetadata(this._zone_id, {
            name: metadata.name || visitor_kiosk_app,
            description: metadata.description || '',
            details: visitor_metadata,
        })
            .toPromise()
            .catch((err) => {
                console.error(err);
                notifyError(
                    i18n('APP.CONCIERGE.INDUCTION_ERROR', { error: err }),
                );
            });
        const result2 = await updateMetadata(this._zone_id, {
            name: con_metadata.name || concierge_app,
            description: con_metadata.description || '',
            details: concierge_metadata,
        })
            .toPromise()
            .catch((err) => {
                console.error(err);
                notifyError(
                    i18n('APP.CONCIERGE.INDUCTION_ERROR', { error: err }),
                );
            });
        this.loading = '';
        if (result) {
            notifySuccess(i18n('APP.CONCIERGE.INDUCTION_SUCCESS'));
            this._dialog_ref.close();
        }
    }
}
