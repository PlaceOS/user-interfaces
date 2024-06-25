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
                class="min-w-[40rem] block text-sm"
                [data]="features"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'Name' },
                    {
                        key: 'level_id',
                        name: 'Level',
                        content: level_template,
                        size: '12rem',
                        sortable: false
                    },
                    { key: 'location', name: 'Location', size: '10rem' },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '9.5rem',
                        sortable: false
                    }
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="w-full h-12"></div>
        </div>
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ (row.level_id | level)?.display_name || 'Unknown' }}
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2 px-4 py-2 mx-auto">
                <div matTooltip="Private QR Code">
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
                <div matTooltip="Public QR Code">
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
                    <div class="bg-base-100 py-2 shadow rounded">
                        <div class="" printable>
                            <a
                                [href]="row.qr_link | safe: 'url'"
                                target="_blank"
                                ref="noopener noreferrer"
                                class="block p-2 mx-4 my-2 rounded-lg border border-base-200 bg-base-100"
                            >
                                <img class="w-48" [src]="row.qr_code" />
                            </a>
                            <div
                                class="w-[calc(100%-2rem)] text-center mt-2 font-mono text-sm bg-base-200 rounded p-2 mx-4"
                            >
                                {{ row.name || row.id }}
                            </div>
                        </div>
                        <button
                            btn
                            matRipple
                            class="w-[calc(100%-2rem)] mx-4 my-2"
                            (click)="print()"
                        >
                            Print QR Code
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
                            <span>Edit Point of Interest</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <app-icon class="text-error">delete</app-icon>
                            <span>Delete Point of Interest</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
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
        private _settings: SettingsService
    ) {}

    public loadQrCode(item: PointOfInterest) {
        const location =
            typeof item.location === 'string'
                ? item.location
                : item.location.join(',');
        const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(
            item.level_id
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
