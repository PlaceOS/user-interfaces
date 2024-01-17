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
            class="flex items-center w-full p-4 space-x-4"
            [class.bg-info]="banner.type === 'info' || !banner.type"
            [class.text-info-content]="banner.type === 'info' || !banner.type"
            [class.bg-warning]="banner.type === 'warn'"
            [class.text-warning-content]="banner.type === 'warn'"
            [class.bg-error]="banner.type === 'error'"
            [class.text-error-content]="banner.type === 'error'"
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
