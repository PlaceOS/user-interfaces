import { SettingsService, notifySuccess } from '@placeos/common';
import {
    EncryptionLevel,
    PlaceSettings,
    addSettings,
    querySettings,
    showMetadata,
    updateMetadata,
    updateSettings,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import * as yaml from 'js-yaml';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'auto-release-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-gray-300 p-4"
        >
            <h3 class="text-xl font-medium">Auto-Release Settings</h3>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon class="text-2xl">close</app-icon>
            </button>
        </header>
        <main class="px-2 w-[20rem]" *ngIf="!loading; else load_state">
            <label>Notify Before Event</label>
            <a-duration-field
                [min]="0"
                [(ngModel)]="settings.time_before"
            ></a-duration-field>
            <label>Cancel Event After</label>
            <a-duration-field
                [min]="0"
                [(ngModel)]="settings.time_after"
            ></a-duration-field>
            <label>Event Types</label>
            <mat-form-field appearance="outline" class="w-full">
                <mat-select
                    multiple
                    [(ngModel)]="settings.resources"
                    placeholder="Set Event Types..."
                >
                    <!-- <mat-option value="room">
                        Rooms
                    </mat-option> -->
                    <mat-option value="desk"> Desks </mat-option>
                    <mat-option value="visitor"> Visitors </mat-option>
                    <mat-option value="parking"> Parking </mat-option>
                </mat-select>
            </mat-form-field>
        </main>
        <footer class="p-4 flex justify-end" *ngIf="!loading">
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
export class AutoReleaseSettingsModalComponent {
    public loading = '';
    public readonly id = this._id;
    public settings = {};

    constructor(
        @Inject(MAT_DIALOG_DATA) private _id: string,
        private _dialog_ref: MatDialogRef<AutoReleaseSettingsModalComponent>,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        this.loadSettings(this.id);
    }

    public async loadSettings(id: string) {
        this.loading = 'Loading auto-release settings for building...';
        this.settings = {};
        const settings = await querySettings({ parent_id: id })
            .pipe(map((_) => _.data))
            .toPromise();
        const unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None
        );
        if (!unencrypted) return;
        try {
            this.settings =
                yaml.load(unencrypted.settings_string)?.auto_release || {};
        } catch {}
        this.loading = '';
    }

    public async save() {
        this.loading = 'Saving changes to auto-release settings...';
        const settings = await querySettings({ parent_id: this.id })
            .pipe(map((_) => _.data))
            .toPromise();
        let unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None
        );
        if (!unencrypted) {
            unencrypted = new PlaceSettings({
                parent_id: this.id,
                encryption_level: EncryptionLevel.None,
                settings_string: '',
            });
        }
        let old_settings = {};
        try {
            old_settings = yaml.load(unencrypted.settings_string) || {};
        } catch {}
        (unencrypted as any).settings_string = yaml.dump({
            ...old_settings,
            auto_release: this.settings,
        });
        unencrypted.id
            ? await updateSettings(unencrypted.id, unencrypted).toPromise()
            : await addSettings(unencrypted).toPromise();

        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const metadata = await showMetadata(this.id, metadata_key).toPromise();
        const details: any = metadata.details || {};
        details.auto_release = this.settings;
        await updateMetadata(this.id, {
            name: metadata_key,
            details,
            description: '',
        }).toPromise();
        notifySuccess('Auto-release settings updated');
        this.loading = '';
        this._dialog_ref.close();
    }
}
