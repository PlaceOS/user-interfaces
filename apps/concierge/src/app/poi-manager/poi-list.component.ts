import { Component } from '@angular/core';
import {
    POIManagementService,
    PointOfInterest,
} from './poi-management.service';
import { SettingsService } from '@placeos/common';
import { generateQRCode } from 'libs/common/src/lib/qr-code';

@Component({
    selector: 'poi-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[48rem] text-sm"
                [data]="features"
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
            <div
                *ngIf="data"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex w-full justify-end space-x-2 px-4 py-2">
                <div [matTooltip]="'APP.CONCIERGE.POI_PRIVATE_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        (click)="loadQrCode(row)"
                    >
                        <app-icon>qr_code</app-icon>
                    </button>
                </div>
                <div [matTooltip]="'APP.CONCIERGE.POI_PUBLIC_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [disabled]="!row.short_link_id"
                        [content]="qr_menu"
                        (click)="loadPublicQrCode(row)"
                    >
                        <app-icon>qr_code</app-icon>
                    </button>
                </div>
                <ng-template #qr_menu>
                    <div class="rounded bg-base-100 py-2 shadow">
                        <div class="" printable>
                            <a
                                [href]="row.qr_link | safe: 'url'"
                                target="_blank"
                                ref="noopener noreferrer"
                                class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                            >
                                <img class="w-48" [src]="row.qr_code" />
                            </a>
                            <div
                                class="mx-4 mt-2 w-[calc(100%-2rem)] rounded bg-base-200 p-2 text-center font-mono text-sm"
                            >
                                {{ row.name || row.id }}
                            </div>
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
                <button btn icon matRipple [matMenuTriggerFor]="menu">
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon>edit</app-icon>
                            <span>{{
                                'APP.CONCIERGE.POI_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="text-red-500 flex items-center space-x-2">
                            <app-icon class="text-error">delete</app-icon>
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
    standalone: false,
})
export class POIListComponent {
    public readonly features = this._manager.filtered_features;

    public readonly edit = (region) =>
        this._manager.editPointOfInterest(region);
    public readonly remove = (region) =>
        this._manager.removePointOfInterest(region);

    public get kiosk_url() {
        const path = this._settings.get('app.kiosk_url_path') || '/map-kiosk';
        return `${window.location.origin}${path}`;
    }

    constructor(
        private _manager: POIManagementService,
        private _settings: SettingsService,
    ) {}

    public loadQrCode(item: PointOfInterest) {
        const location =
            typeof item.location === 'string'
                ? item.location
                : item.location.join(',');
        const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(
            item.level_id,
        )}&locate=${encodeURIComponent(location)}`;
        item.qr_link = link;
        item.qr_code = generateQRCode(link);
    }

    public loadPublicQrCode(item: PointOfInterest) {
        const link = `${location.origin}/r/${item.short_link_id.split('-')[1]}`;
        item.qr_link = link;
        item.qr_code = generateQRCode(link);
    }

    public print() {
        window.print();
    }
}
