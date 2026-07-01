import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    Building,
    createShortURL,
    getInvalidSignalFields,
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
                (model().id
                    ? 'APP.CONCIERGE.POI_EDIT'
                    : 'APP.CONCIERGE.POI_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading() ? ('APP.CONCIERGE.POI_SAVING' | translate) : ''
            "
        >
            <form>
                <image-field
                    class="mb-4! block"
                    [formField]="form.image"
                ></image-field>
                <div class="flex flex-col">
                    <label for="name">
                        {{ 'FORM.NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                    </mat-form-field>
                </div>
                @if (building_list().length > 1) {
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
                                @for (bld of building_list(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="level">
                        {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.level_id"
                            placeholder="Select Level"
                        >
                            @for (level of level_list(); track level) {
                                <mat-option [value]="level.id">
                                    {{ level.display_name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
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
                    @if (location_type() === 'map_id') {
                        <div class="flex items-center space-x-2 pb-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <input
                                    matInput
                                    placeholder="Location"
                                    [ngModel]="model().location"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            location: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
                                (click)="selectPOIfromMap()"
                            >
                                <icon>place</icon>
                            </button>
                        </div>
                    }
                    @if (location_type() === 'coordinates') {
                        <div class="flex items-center space-x-2">
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="latitude"
                                    [ngModel]="model().location[0]"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            location: [
                                                +$event,
                                                +m.location[1],
                                            ],
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="longitude"
                                    [ngModel]="model().location[1]"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            location: [
                                                +m.location[0],
                                                +$event,
                                            ],
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex items-center space-x-4 pt-2">
                        <settings-toggle
                            class="flex-1"
                            [label]="'APP.CONCIERGE.POI_SEARCHABLE' | translate"
                            [formField]="form.can_search"
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
                                [formField]="form.media_url"
                                [placeholder]="
                                    'APP.CONCIERGE.POI_MEDIA_URL' | translate
                                "
                            />
                        </mat-form-field>
                        <upload-button
                            [ngModel]="model().media_url"
                            (ngModelChange)="
                                model.update((m) => ({ ...m, media_url: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [types]="['audio', 'video']"
                        ></upload-button>
                    </div>
                    <label for="extra-details" class="mt-4">
                        {{ 'APP.CONCIERGE.POI_DETAILS' | translate }}
                    </label>
                    <div class="space-y-2">
                        @for (value of extra_details(); track $index) {
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
                        class="mt-2 mb-4 w-full"
                        (click)="extra_details.update((d) => [...d, ['', '']])"
                    >
                        Add Details Item
                    </button>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        FullscreenModalShellComponent,
        FormField,
        ImageFieldComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        SettingsToggleComponent,
        MatSelectModule,
        UploadButtonComponent,
        MatTooltipModule,
    ],
})
export class POIModalComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _data = inject<PointOfInterest | undefined>(MAT_DIALOG_DATA);
    private _dialog_ref = inject<MatDialogRef<POIModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly loading = signal(false);
    public readonly location_type = signal(
        this._data?.location instanceof Array ? 'coordinates' : 'map_id',
    );
    public readonly building_list = this._org.building_list;
    public readonly level_list = this._org.active_levels;
    public readonly extra_details = signal<any[]>(
        this._data?.extra_details || [],
    );

    public get building() {
        return this._org.building;
    }

    public set building(value: Building) {
        this._org.building = value;
    }

    public readonly model = signal({
        id: this._data?.id || '',
        name: this._data?.name || '',
        level_id: this._data?.level_id || '',
        location: (this._data?.location || '') as string | number[],
        can_search: (this._data?.can_search ?? false) as boolean,
        image: (this._data?.image || '') as string,
        media_type: (this._data?.media_type || 'audio') as string,
        media_url: (this._data?.media_url || '') as string,
        extra_details: (this._data?.extra_details || {}) as any,
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.level_id);
        required(p.location);
    });

    public async ngOnInit() {
        if (!this.model().level_id) {
            const levels = this._org.active_levels();
            if (levels.length)
                this.model.update((m) => ({ ...m, level_id: levels[0].id }));
        }
    }

    public selectPOIfromMap() {
        const ref = this._dialog.open(SelectMapItemModalComponent, {
            data: {
                ...this._data,
                ...this.model(),
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            this.model.update((m) => ({
                ...m,
                location: d,
                level_id: ref.componentInstance.level()?.id,
            }));
        });
    }

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidSignalFields(
                    this.form,
                    this.model,
                ).join(', ')}]`,
            );
        }
        this.model.update((m) => ({
            ...m,
            extra_details: this.extra_details().filter(
                ([key, value]) => key && value,
            ),
        }));
        const data: any = this.model();
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
            } as any);
            data.short_link_id = id;
        } else {
            await updateShortURL(data.short_link_id, {
                id: data.short_link_id,
                name: data.name,
                description: `Point of Interest: ${data.name}`,
                uri: `${
                    window.location.origin
                }/auth/login?continue=${encodeURIComponent(uri)}`,
            } as any);
        }
        this.loading.set(true);
        const old_metadata = await showMetadata(
            this._org.organisation.id,
            'points-of-interest',
        );
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
        }).catch((e) => notifyError(e));
        if ((resp as any).id) this._dialog_ref.close(resp);
        this.loading.set(false);
    }
}
