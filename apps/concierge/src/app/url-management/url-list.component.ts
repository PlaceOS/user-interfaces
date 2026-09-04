import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsService, ShortURL } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    PrintableComponent,
    SafePipe,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { UrlManagementService } from './url-management.service';

@Component({
    selector: 'short-url-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-5xl text-sm"
                [data]="features()"
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
                        size: '6rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #url_template let-data="data">
            <a
                link
                [href]="data"
                class="w-full overflow-hidden p-4 text-xs wrap-break-word"
            >
                {{ data }}
            </a>
        </ng-template>
        <ng-template #desc_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.NO_DESCRIPTION' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex gap-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    customTooltip
                    [content]="qr_menu"
                    (click)="loadQrCode(row)"
                >
                    <icon>qr_code</icon>
                </button>
                <ng-template #qr_menu>
                    <div class="bg-base-100 rounded-sm py-2 shadow-sm">
                        <div class="" printable [content]="print_content">
                            <ng-template #print_content>
                                <a
                                    [href]="
                                        '/r/' + row.id.split('-')[1]
                                            | safe: 'url'
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                                >
                                    @if (qr_codes()[row.id]) {
                                        <img
                                            class="mx-auto w-48"
                                            [src]="
                                                qr_codes()[row.id] || ''
                                                    | safe: 'resource'
                                            "
                                        />
                                    }
                                </a>
                                <div
                                    class="bg-base-200 mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm p-2 text-center font-mono text-sm"
                                >
                                    {{ row.name || row.id }}
                                </div>
                            </ng-template>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.URLS_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button btn icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error">delete</icon>
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
    imports: [
        SimpleTableComponent,
        MatMenuModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        CustomTooltipComponent,
        SafePipe,
        PrintableComponent,
    ],
})
export class UrlListComponent {
    private _manager = inject(UrlManagementService);
    private _settings = inject(SettingsService);

    public readonly features = this._manager.url_list;
    public readonly qr_codes = this._manager.qr_codes;

    public readonly edit = (region) => this._manager.editURL(region);
    public readonly remove = (region) => this._manager.removeURL(region);
    public readonly loadQrCode = (item: ShortURL) =>
        this._manager.loadQrCode(item);

    public get kiosk_url() {
        const path = this._settings.get('app.kiosk_url_path') || '/map-kiosk';
        return `${window.location.origin}${path}`;
    }

    public print() {
        window.print();
    }
}
