import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    Building,
    createShortURL,
    getInvalidFields,
    nextValueFrom,
    notifyError,
    OrganisationService,
    randomString,
    SettingsService,
    updateShortURL,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { ImageFieldComponent } from 'libs/form-fields/src/lib/image-field.component';
import { UploadButtonComponent } from '../ui/app-settings/upload-button.component';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';
import { PointOfInterest } from './poi-management.service';

@Component({
    selector: 'poi-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.POI_EDIT'
                    : 'APP.CONCIERGE.POI_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="loading ? ('APP.CONCIERGE.POI_SAVING' | translate) : ''"
        >
            <form [formGroup]="form">
                <image-field
                    class="!mb-4 block"
                    formControlName="image"
                ></image-field>
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label for="name">
                            {{ 'FORM.NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                [placeholder]="'FORM.NAME' | translate"
                                formControlName="name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if ((building_list | async)?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [(ngModel)]="building"
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Select Building"
                            >
                                @for (bld of building_list | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.level_id) {
                    <div class="flex flex-col">
                        <label for="level">
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="level_id"
                                placeholder="Select Level"
                            >
                                @for (
                                    level of level_list | async;
                                    track level
                                ) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="location">
                        {{ 'COMMON.LOCATION' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [(ngModel)]="location_type"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Location Type"
                        >
                            <mat-option value="map_id">{{
                                'EXPLORE.MAP_ID' | translate
                            }}</mat-option>
                            <mat-option value="coordinates">
                                {{ 'EXPLORE.COORDINATES' | translate }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (location_type === 'map_id') {
                        <div class="flex items-center space-x-2 pb-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <input
                                    matInput
                                    name="location"
                                    placeholder="Location"
                                    formControlName="location"
                                />
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded border border-secondary text-secondary"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
                                (click)="selectPOIfromMap()"
                            >
                                <icon>place</icon>
                            </button>
                        </div>
                    }
                    @if (location_type === 'coordinates') {
                        <div class="flex items-center space-x-2">
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="latitude"
                                    [ngModel]="form.value.location[0]"
                                    (ngModelChange)="
                                        form.patchValue({
                                            location: [
                                                $event,
                                                form.value.location[1],
                                            ],
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
                                                $event,
                                            ],
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex items-center space-x-4 pt-2">
                        <settings-toggle
                            class="flex-1"
                            [name]="'APP.CONCIERGE.POI_SEARCHABLE' | translate"
                            formControlName="can_search"
                        >
                        </settings-toggle>
                    </div>
                    <label for="media" class="mt-4">
                        {{ 'APP.CONCIERGE.POI_MEDIA' | translate }}
                    </label>
                    <div class="flex items-center space-x-2 pt-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <input
                                matInput
                                formControlName="media_url"
                                [placeholder]="
                                    'APP.CONCIERGE.POI_MEDIA_URL' | translate
                                "
                            />
                        </mat-form-field>
                        <upload-button
                            [ngModel]="form.value.media_url"
                            (ngModelChange)="
                                form.patchValue({ media_url: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [types]="['audio', 'video']"
                        ></upload-button>
                    </div>
                    <label for="extra-details" class="mt-4">
                        {{ 'APP.CONCIERGE.POI_DETAILS' | translate }}
                    </label>
                    <div class="space-y-2">
                        @for (value of extra_details; track $index) {
                            <div class="flex items-center space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        matInput
                                        [(ngModel)]="value[0]"
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Label"
                                    />
                                </mat-form-field>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        matInput
                                        [(ngModel)]="value[1]"
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Content"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <button
                        btn
                        matRipple
                        class="mb-4 mt-2 w-full"
                        (click)="extra_details.push(['', ''])"
                    >
                        Add Details Item
                    </button>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        FullscreenModalShellComponent,
        ReactiveFormsModule,
        ImageFieldComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        SettingsToggleComponent,
        MatSelectModule,
        UploadButtonComponent,
    ],
})
export class POIModalComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _data = inject<PointOfInterest | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref = inject<MatDialogRef<POIModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public loading = false;
    public location_type =
        this._data?.location instanceof Array ? 'coordinates' : 'map_id';
    public readonly building_list = this._org.building_list;
    public readonly level_list = this._org.active_levels;
    public readonly extra_details = this._data?.extra_details || [];

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
        can_search: new FormControl(this._data?.can_search ?? false),
        image: new FormControl(this._data?.image || ''),
        media_type: new FormControl(this._data?.media_type || 'audio'),
        media_url: new FormControl(this._data?.media_url || ''),
        extra_details: new FormControl(this._data?.extra_details || {}),
    });

    public async ngOnInit() {
        if (!this.form.value.level_id) {
            const levels = await nextValueFrom(this.level_list);
            if (levels.length) this.form.patchValue({ level_id: levels[0].id });
        }
    }

    public selectPOIfromMap() {
        const ref = this._dialog.open(SelectMapItemModalComponent, {
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
                    this.form,
                ).join(', ')}]`,
            );
        }
        this.form.patchValue({
            extra_details: this.extra_details.filter(
                ([key, value]) => key && value,
            ),
        });
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
            {},
        ).toPromise();
        const metadata = old_metadata.details || {};
        if (!metadata[data.level_id]) metadata[data.level_id] = [];
        if (this._data?.id) {
            for (const lvl in metadata) {
                if (metadata[lvl])
                    metadata[lvl] = metadata[lvl].filter(
                        (_) => _.id !== data.id,
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
