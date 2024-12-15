import { Component } from '@angular/core';
import { UrlManagementService } from './url-management.service';
import { SettingsService, ShortURL, getShortUrlQRCode } from '@placeos/common';

@Component({
    selector: 'short-url-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="min-w-[64rem] block text-sm"
                [data]="features"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'uri',
                        name: 'APP.CONCIERGE.URLS_URI' | translate,
                        content: url_template,
                        size: '24rem',
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.URLS_USER_NAME' | translate,
                    },
                    {
                        key: 'description',
                        name: 'COMMON.DESCRIPTION' | translate,
                        content: desc_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '7rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="w-full h-12"></div>
        </div>
        <ng-template #url_template let-data="data">
            <a
                link
                [href]="data"
                class="p-4 break-words w-full overflow-hidden text-xs"
            >
                {{ data }}
            </a>
        </ng-template>
        <ng-template #desc_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                <span class="opacity-30" *ngIf="!data">
                    {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2 px-4 py-2 mx-auto">
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="qr_menu"
                    (click)="loadQrCode(row)"
                >
                    <app-icon>qr_code</app-icon>
                </button>
                <ng-template #qr_menu>
                    <div class="bg-base-100 py-2 shadow rounded">
                        <div class="" printable>
                            <a
                                [href]="row.uri | safe: 'url'"
                                target="_blank"
                                ref="noopener noreferrer"
                                class="block p-2 mx-4 my-2 rounded-lg border border-base-200 bg-base-100"
                            >
                                <img class="w-48 mx-auto" [src]="row.qr_code" />
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
                            {{ 'APP.CONCIERGE.URLS_PRINT_QR' | translate }}
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
                                'APP.CONCIERGE.URLS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <app-icon class="text-error">delete</app-icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class UrlListComponent {
    public readonly features = this._manager.filtered_urls;

    public readonly edit = (region) => this._manager.editURL(region);
    public readonly remove = (region) => this._manager.removeURL(region);

    public get kiosk_url() {
        const path = this._settings.get('app.kiosk_url_path') || '/map-kiosk';
        return `${window.location.origin}${path}`;
    }

    public async loadQrCode(item: ShortURL) {
        (item as any).qr_code = await getShortUrlQRCode(item.id);
    }

    constructor(
        private _manager: UrlManagementService,
        private _settings: SettingsService,
    ) {}
}
