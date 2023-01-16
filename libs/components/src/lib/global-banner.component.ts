import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';

export interface BannerDetails {
    id: string;
    type?: 'info' | 'warn' | 'error';
    content: string;
}

@Component({
    selector: 'global-banner',
    template: `
        <div
            class="flex items-center w-full text-white p-4 space-x-4"
            [class.bg-blue-600]="banner.type === 'info' || !banner.type"
            [class.bg-pending]="banner.type === 'warn'"
            [class.bg-error]="banner.type === 'error'"
            *ngIf="!has_viewed"
        >
            <div class="flex-1">{{ banner?.content }}</div>
            <button icon (click)="close()">
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
})
export class GlobalBannerComponent {
    public get has_viewed() {
        return (
            !this.banner?.content ||
            localStorage.getItem('PLACE.last_banner') === this.banner.id
        );
    }

    public get banner(): BannerDetails {
        return this._settings.get('app.general.banner');
    }

    constructor(private _settings: SettingsService) {}

    public close() {
        localStorage.setItem('PLACE.last_banner', this.banner?.id || '');
    }
}
