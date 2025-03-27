import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    SettingsService,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    EncryptionLevel,
    PlaceSettings,
    addSettings,
    querySettings,
    showMetadata,
    updateMetadata,
    updateSettings,
} from '@placeos/ts-client';
import * as yaml from 'js-yaml';
import { map } from 'rxjs/operators';

@Component({
    selector: 'auto-release-modal',
    template: `
        <header
            class="m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.AUTO_RELEASE_HEADER' | translate }}
            </h3>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon class="text-2xl">close</app-icon>
            </button>
        </header>
        <main class="w-[32rem] px-4" *ngIf="!loading; else load_state">
            <div class="flex space-x-2">
                <div class="flex-1">
                    <label>
                        {{ 'APP.CONCIERGE.AUTO_RELEASE_NOTIFY' | translate }}
                    </label>
                    <a-duration-field
                        [min]="-15"
                        [max]="60"
                        [step]="5"
                        [(ngModel)]="settings.time_before"
                    ></a-duration-field>
                </div>
                <div class="flex-1">
                    <label>{{
                        'APP.CONCIERGE.AUTO_RELEASE_CANCEL' | translate
                    }}</label>
                    <a-duration-field
                        [min]="0"
                        [max]="60"
                        [step]="5"
                        [(ngModel)]="settings.time_after"
                    ></a-duration-field>
                </div>
            </div>
            <label>{{ 'APP.CONCIERGE.AUTO_RELEASE_TYPES' | translate }}</label>
            <mat-form-field appearance="outline" class="w-full">
                <mat-select
                    multiple
                    [(ngModel)]="settings.resources"
                    [placeholder]="
                        'APP.CONCIERGE.AUTO_RELEASE_TYPES' | translate
                    "
                >
                    <!-- <mat-option value="room">
                        Rooms
                    </mat-option> -->
                    <mat-option value="desk">
                        {{ 'RESOURCE.DESKS' | translate }}
                    </mat-option>
                    <mat-option value="visitor">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </mat-option>
                    <mat-option value="parking">
                        {{ 'RESOURCE.PARKING' | translate }}
                    </mat-option>
                    <mat-option value="lockers">
                        {{ 'RESOURCE.LOCKERS' | translate }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            @for (name of types; track name) {
                @if (settings.resources.includes(name)) {
                    <div
                        class="mb-4 space-y-4 rounded-lg border border-base-200"
                    >
                        <settings-toggle
                            [name]="
                                'APP.CONCIERGE.AUTO_RELEASE_' +
                                    name.toUpperCase() | translate
                            "
                            [ngModel]="settings.custom?.includes(name)"
                            (ngModelChange)="toggleCustom(name, $event)"
                        ></settings-toggle>
                        <div
                            class="flex h-14 space-x-2 px-2"
                            *ngIf="settings.custom?.includes(name)"
                        >
                            <a-duration-field
                                [min]="-15"
                                [max]="60"
                                [step]="5"
                                [(ngModel)]="settings[name + '_time_before']"
                            ></a-duration-field>
                            <a-duration-field
                                [min]="0"
                                [max]="60"
                                [step]="5"
                                [(ngModel)]="settings[name + '_time_after']"
                            ></a-duration-field>
                        </div>
                    </div>
                }
            }
        </main>
        <footer
            class="flex justify-end border-t border-base-200 px-4 py-2"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-32" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class AutoReleaseSettingsModalComponent implements OnInit {
    public readonly types = ['desk', 'parking', 'locker', 'visitor'];
    public loading = '';
    public readonly id = this._id;
    public settings: Record<string, any> = {
        custom: [],
    };

    constructor(
        @Inject(MAT_DIALOG_DATA) private _id: string,
        private _dialog_ref: MatDialogRef<AutoReleaseSettingsModalComponent>,
        private _settings: SettingsService,
    ) {}

    public ngOnInit() {
        ''.toUpperCase;
        this.loadSettings(this.id);
    }

    public toggleCustom(name: string, state = true) {
        if (!this.settings.custom) this.settings.custom = [];
        this.settings.custom = this.settings.custom.filter((_) => _ != name);
        if (state) {
            this.settings.custom.push(name);
            this.settings[name + '_time_before'] = this.settings.time_before;
            this.settings[name + '_time_after'] = this.settings.time_after;
        } else {
            delete this.settings[name + '_time_before'];
            delete this.settings[name + '_time_after'];
        }
    }

    public async loadSettings(id: string) {
        this.loading = i18n('APP.CONCIERGE.AUTO_RELEASE_LOADING');
        this.settings = { custom: [] };
        const settings = await nextValueFrom(
            querySettings({ parent_id: id }).pipe(map((_) => _.data)),
        );
        const unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted) return;
        try {
            this.settings =
                yaml.load(unencrypted.settings_string)?.auto_release || {};
        } catch {}
        if (!this.settings.custom) this.settings.custom = [];
        for (const name of this.types) {
            const key = name + '_time_before';
            if (key in this.settings) this.settings.custom.push(name);
        }
        this.loading = '';
    }

    public async save() {
        this.loading = i18n('APP.CONCIERGE.AUTO_RELEASE_SAVING');
        const settings = await querySettings({ parent_id: this.id })
            .pipe(map((_) => _.data))
            .toPromise();
        let unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted) {
            unencrypted = new PlaceSettings({
                parent_id: this.id,
                encryption_level: EncryptionLevel.None,
                settings_string: '',
            });
        }
        const new_settings = { ...this.settings };
        delete new_settings.custom;
        let old_settings = {};
        try {
            old_settings = yaml.load(unencrypted.settings_string) || {};
        } catch {}
        (unencrypted as any).settings_string = yaml.dump({
            ...old_settings,
            auto_release: new_settings,
        });
        const on_error = (e) => {
            notifyError(i18n('APP.CONCIERGE.AUTO_RELEASE_ERROR', { error: e }));
            throw e;
        };
        unencrypted.id
            ? await updateSettings(unencrypted.id, unencrypted)
                  .toPromise()
                  .catch(on_error)
            : await addSettings(unencrypted).toPromise().catch(on_error);

        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const metadata = await showMetadata(this.id, metadata_key).toPromise();
        const details: any = metadata.details || {};
        details.auto_release = new_settings;
        await nextValueFrom(
            updateMetadata(this.id, {
                name: metadata_key,
                details,
                description: '',
            }),
        ).catch(on_error);
        notifySuccess(i18n('APP.CONCIERGE.AUTO_RELEASE_SUCCESS'));
        this.loading = '';
        this._dialog_ref.close();
    }
}
