import { Component, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, generateQRCode, SettingsService } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    LevelPipe,
    PrintableComponent,
    SafePipe,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    POIManagementService,
    PointOfInterest,
} from './poi-management.service';

interface QR_Codes {
    public: { link: string; image: string };
    private: { link: string; image: string };
}

@Component({
    selector: 'poi-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-3xl text-sm"
                [data]="features()"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'level_id',
                        name: 'RESOURCE.LEVEL' | translate,
                        content: level_template,
                        size: '12rem',
                        sortable: false,
                    },
                    {
                        key: 'location',
                        name: 'COMMON.LOCATION' | translate,
                        size: '10rem',
                    },
                    {
                        key: 'can_search',
                        name: 'APP.CONCIERGE.POI_SEARCHABLE' | translate,
                        size: '7rem',
                        content: bool_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '9.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ (row.level_id | level)?.display_name || 'Unknown' }}
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            @if (data) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex w-full justify-end space-x-2 px-4 py-2">
                <div [matTooltip]="'APP.CONCIERGE.POI_PRIVATE_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [data]="{ qr: qr_codes()[row.id]?.private, item: row }"
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                </div>
                <div [matTooltip]="'APP.CONCIERGE.POI_PUBLIC_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [disabled]="!row.short_link_id"
                        [data]="{ qr: qr_codes()[row.id]?.public, item: row }"
                        [content]="qr_menu"
                        (click)="loadPublicQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                </div>
                <ng-template #qr_menu let-qr="qr" let-item="item">
                    <div class="bg-base-100 rounded-sm py-2 shadow-sm">
                        <div class="" printable [content]="print_content">
                            <ng-template #print_content>
                                <a
                                    [href]="qr?.link | safe: 'url'"
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                                >
                                    <img
                                        class="mx-auto w-48"
                                        [src]="qr?.image | safe: 'resource'"
                                    />
                                </a>
                                <div
                                    class="bg-base-200 mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm p-2 text-center font-mono text-sm"
                                >
                                    {{ item.name || item.id }}
                                </div>
                            </ng-template>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.POI_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button icon matRipple [matMenuTriggerFor]="menu" aria-label="More options">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="preview(row)">
                        <div class="flex items-center space-x-2">
                            <icon>preview</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_PREVIEW' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        SimpleTableComponent,
        MatMenuModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        PrintableComponent,
        LevelPipe,
        CustomTooltipComponent,
        MatTooltipModule,
        SafePipe,
    ],
})
export class POIListComponent extends AsyncHandler {
    private _manager = inject(POIManagementService);
    private _settings = inject(SettingsService);

    public readonly features = toSignal(this._manager.filtered_features, {
        initialValue: [],
    });
    public readonly qr_codes = signal<Record<string, QR_Codes>>({});

    public readonly edit = (region) =>
        this._manager.editPointOfInterest(region);
    public readonly remove = (region) =>
        this._manager.removePointOfInterest(region);
    public readonly preview = (poi) =>
        this._manager.previewPointOfInterest(poi);

    public get kiosk_url() {
        const path = this._settings.get('app.kiosk_url_path') || '/map-kiosk';
        return `${window.location.origin}${path}`;
    }

    constructor() {
        super();
        effect(() => {
            for (const item of this.features()) {
                const existing_codes = untracked(
                    () => this.qr_codes()[item.id],
                );
                if (existing_codes) continue;
                const qr_private = this.loadQrCode(item);
                const qr_public = this.loadPublicQrCode(item);
                this.qr_codes.update((mapping) => ({
                    ...mapping,
                    [item.id]: {
                        private: qr_private,
                        public: qr_public,
                    },
                }));
            }
        });
    }

    public loadQrCode(item: PointOfInterest) {
        const location =
            typeof item.location === 'string'
                ? item.location
                : item.location.join(',');
        const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(
            item.level_id,
        )}&locate=${encodeURIComponent(location)}`;
        return { link, image: generateQRCode(link) };
    }

    public loadPublicQrCode(item: PointOfInterest) {
        const link = `${location.origin}/r/${item.short_link_id.split('-')[1]}`;
        return { link, image: generateQRCode(link) };
    }

    public print() {
        window.print();
    }
}
