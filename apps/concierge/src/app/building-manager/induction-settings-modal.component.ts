import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    OrganisationService,
    SettingsService,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'induction-settings-modal',
    template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.INDUCTION_HEADER' | translate }}
            </h3>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="flex flex-col space-y-2 px-4">
                <settings-toggle
                    [(ngModel)]="is_enabled"
                    [name]="'APP.CONCIERGE.INDUCTION_ENABLE' | translate"
                ></settings-toggle>
                <mat-form-field
                    appearance="outline"
                    class="h-[50vh] w-xl max-w-[80vw]"
                >
                    <textarea
                        matInput
                        [(ngModel)]="induction_details"
                        [placeholder]="
                            'APP.CONCIERGE.INDUCTION_DETAILS' | translate
                        "
                        class="h-[calc(50vh-2rem)] w-136 max-w-[calc(80vw-2rem)] resize-none"
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 mt-2 flex justify-end border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        SettingsToggleComponent,
        FormsModule,
    ],
})
export class InductionSettingsModalComponent implements OnInit {
    private _zone_id = inject(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog_ref =
        inject<MatDialogRef<InductionSettingsModalComponent>>(MatDialogRef);

    public readonly loading = signal('');
    public readonly induction_details = signal('');
    public readonly is_enabled = signal(false);
    public readonly settings = signal<Record<string, any>>({});

    public ngOnInit() {
        if (!this._zone_id) return;
        this.loadSettings();
    }

    public async loadSettings() {
        this.loading.set(i18n('APP.CONCIERGE.INDUCTION_LOADING'));
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        const [bld_metadata, org_metadata, org_settings] = await Promise.all([
            await lastValueFrom(showMetadata(this._zone_id, visitor_kiosk_app)),
            await lastValueFrom(
                showMetadata(this._org.organisation.id, visitor_kiosk_app),
            ),
            await lastValueFrom(
                showMetadata(this._org.organisation.id, 'settings'),
            ),
        ]);
        const settings: Record<string, any> = {
            ...org_settings.details,
            ...org_metadata.details,
            ...bld_metadata.details,
        };
        this.settings.set(settings);
        this.induction_details.set(settings.induction_details || '');
        this.is_enabled.set(settings.induction_enabled ?? false);
        this.loading.set('');
    }

    public async save() {
        this.loading.set(i18n('APP.CONCIERGE.INDUCTION_SAVING'));
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        const concierge_app =
            this._settings.get('app.concierge_app') || 'concierge_app';
        this._dialog_ref.disableClose = true;
        const metadata = await lastValueFrom(
            showMetadata(this._zone_id, visitor_kiosk_app),
        );
        const con_metadata = await lastValueFrom(
            showMetadata(this._zone_id, concierge_app),
        );
        const visitor_metadata = {
            ...metadata.details,
            induction_details: this.induction_details(),
            induction_enabled: this.is_enabled(),
        };
        const concierge_metadata = {
            ...con_metadata.details,
            induction_details: this.induction_details(),
            induction_enabled: this.is_enabled(),
        };
        const result_visitor = await lastValueFrom(
            updateMetadata(this._zone_id, {
                name: metadata.name || visitor_kiosk_app,
                description: metadata.description || '',
                details: visitor_metadata,
            }),
        ).catch((err) => {
            console.error(err);
            notifyError(i18n('APP.CONCIERGE.INDUCTION_ERROR', { error: err }));
        });
        const result_concierge = await lastValueFrom(
            updateMetadata(this._zone_id, {
                name: con_metadata.name || concierge_app,
                description: con_metadata.description || '',
                details: concierge_metadata,
            }),
        ).catch((err) => {
            console.error(err);
            notifyError(i18n('APP.CONCIERGE.INDUCTION_ERROR', { error: err }));
        });
        this.loading.set('');
        if (result_visitor) {
            notifySuccess(i18n('APP.CONCIERGE.INDUCTION_SUCCESS'));
            this._dialog_ref.close();
        }
    }
}
