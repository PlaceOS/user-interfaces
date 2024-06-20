import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    AsyncHandler,
    SettingsService,
    createShortURL,
    getInvalidFields,
    notifyError,
    randomString,
    updateShortURL,
} from '@placeos/common';
import { OrganisationService, Building } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { PointOfInterest } from './poi-management.service';
import { take } from 'rxjs/operators';
import { SelectPOIMapModalComponent } from './select-poi-map-modal.component';

@Component({
    selector: 'poi-modal',
    template: `
        <header>
            <h2>{{ form.value.id ? 'Edit' : 'Add' }} Point Of Interest</h2>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] overflow-y-auto overflow-x-hidden p-4"
            *ngIf="!loading; else load_state"
        >
            <form
                system
                class="flex flex-col w-[28rem] max-w-[calc(100vw-4rem)]"
                *ngIf="form"
                [formGroup]="form"
            >
                <div class="flex flex-col" *ngIf="form.controls.name">
                    <label for="name" i18n="@@nameLabel">
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            placeholder="Name"
                            i18n-placeholder="@@namePlaceholder"
                            formControlName="name"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="flex flex-col"
                    *ngIf="(building_list | async)?.length > 1"
                >
                    <label for="name" i18n="@@nameLabel">
                        Building<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [(ngModel)]="building"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Select Building"
                        >
                            <mat-option
                                *ngFor="let bld of building_list | async"
                                [value]="bld"
                            >
                                {{ bld.display_name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.level_id">
                    <label for="name" i18n="@@nameLabel">
                        Level<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            formControlName="level_id"
                            placeholder="Select Level"
                        >
                            <mat-option
                                *ngFor="let level of level_list | async"
                                [value]="level.id"
                            >
                                {{ level.display_name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="name" i18n="@@nameLabel">
                        Location<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [(ngModel)]="location_type"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Location Type"
                        >
                            <mat-option value="map_id">Map ID</mat-option>
                            <mat-option value="coordinates"
                                >Coordinates</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                    <div
                        class="flex items-center space-x-2 pb-2"
                        *ngIf="location_type === 'map_id'"
                    >
                        <mat-form-field
                            class="no-subscript"
                            appearance="outline"
                        >
                            <input
                                matInput
                                name="location"
                                placeholder="Location"
                                i18n-placeholder="@@locationPlaceholder"
                                formControlName="location"
                            />
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            class="rounded border border-base-300 h-12 w-12"
                            (click)="selectPOIfromMap()"
                        >
                            <app-icon>place</app-icon>
                        </button>
                    </div>
                    <div
                        class="flex items-center space-x-2"
                        *ngIf="location_type === 'coordinates'"
                    >
                        <mat-form-field appearance="outline" class="flex-1">
                            <input
                                matInput
                                name="latitude"
                                [ngModel]="form.value.location[0]"
                                (ngModelChange)="
                                    form.patchValue({
                                        location: [
                                            $event,
                                            form.value.location[1]
                                        ]
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="flex-1">
                            <input
                                matInput
                                name="longitude"
                                [ngModel]="form.value.location[1]"
                                (ngModelChange)="
                                    form.patchValue({
                                        location: [
                                            form.value.location[0],
                                            $event
                                        ]
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                    </div>
                </div>
            </form>
        </main>
        <footer
            class="p-2 flex justify-end border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">Saving Point Of Interest...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class POIModalComponent extends AsyncHandler {
    public loading = false;
    public location_type =
        this._data?.location instanceof Array ? 'coordinates' : 'map_id';
    public readonly building_list = this._org.building_list;
    public readonly level_list = this._org.active_levels;

    public get building() {
        return this._org.building;
    }

    public set building(value: Building) {
        this._org.building = value;
    }

    public readonly form = new FormGroup({
        id: new FormControl(this._data?.id || ''),
        name: new FormControl(this._data?.name || '', [Validators.required]),
        level_id: new FormControl(this._data?.level_id || '', [
            Validators.required,
        ]),
        location: new FormControl(this._data?.location || '', [
            Validators.required,
        ]),
    });

    constructor(
        private _org: OrganisationService,
        @Inject(MAT_DIALOG_DATA) private _data: PointOfInterest | undefined,
        private _dialog_ref: MatDialogRef<POIModalComponent>,
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public async ngOnInit() {
        if (!this.form.value.level_id) {
            const levels = await this.level_list.pipe(take(1)).toPromise();
            if (levels.length) this.form.patchValue({ level_id: levels[0].id });
        }
    }

    public selectPOIfromMap() {
        const ref = this._dialog.open(SelectPOIMapModalComponent, {
            data: {
                ...this._data,
                ...this.form.getRawValue(),
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            this.form.patchValue({
                location: d,
                level_id: ref.componentInstance.level?.id,
            });
        });
    }

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
            );
        }
        const data: any = this.form.getRawValue();
        if (!data.id) data.id = `POI-${randomString(8)}`;
        data.short_link_id = this._data?.short_link_id;
        const path = this._settings.get('app.kiosk_url_path') || '/map-kiosk';
        const public_key = this._settings.get('app.short_url_public_key');
        const location =
            typeof data.location === 'string'
                ? data.location
                : data.location.join(',');
        let uri = `${path}/#/explore?level=${data.level_id}&locate=${location}&public=true`;
        if (public_key) uri += `&x-api-key=${public_key}`;
        if (!data.short_link_id) {
            const { id } = await createShortURL({
                name: data.name,
                description: `Point of Interest: ${data.name}`,
                uri: `${
                    window.location.origin
                }/auth/login?continue=${encodeURIComponent(uri)}`,
            } as any).toPromise();
            data.short_link_id = id;
        } else {
            await updateShortURL(data.short_link_id, {
                id: data.short_link_id,
                name: data.name,
                description: `Point of Interest: ${data.name}`,
                uri: `${
                    window.location.origin
                }/auth/login?continue=${encodeURIComponent(uri)}`,
            } as any).toPromise();
        }
        this.loading = true;
        const old_metadata = await showMetadata(
            this._org.organisation.id,
            'points-of-interest',
            {}
        ).toPromise();
        const metadata = old_metadata.details || {};
        if (!metadata[data.level_id]) metadata[data.level_id] = [];
        if (this._data?.id) {
            for (const lvl in metadata) {
                if (metadata[lvl])
                    metadata[lvl] = metadata[lvl].filter(
                        (_) => _.id !== data.id
                    );
            }
        }
        metadata[data.level_id] = [
            ...metadata[data.level_id].filter((_) => _.id !== data.id),
            data,
        ].sort((a, b) => a.name.localeCompare(b.name));
        const resp = await updateMetadata(this._org.organisation.id, {
            name: 'points-of-interest',
            details: metadata,
            description: 'Point of Interests for maps',
        })
            .toPromise()
            .catch((e) => notifyError(e));
        if ((resp as any).id) this._dialog_ref.close(resp);
        this.loading = false;
    }
}
