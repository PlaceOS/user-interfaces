import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    firstTruthyValueFrom,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { IconComponent } from './icon.component';

export interface BannerDetails {
    id: string;
    type?: 'info' | 'warn' | 'error';
    content: string;
    message?: string;
}

@Component({
    selector: 'global-banner',
    template: `
        @if (!has_been_closed() && banner()) {
            <div
                class="flex w-full items-center space-x-4 p-4 print:hidden"
                [class.bg-info]="banner().type === 'info' || !banner().type"
                [class.text-info-content]="
                    banner().type === 'info' || !banner().type
                "
                [class.bg-warning]="banner().type === 'warn'"
                [class.text-warning-content]="banner().type === 'warn'"
                [class.bg-error]="banner().type === 'error'"
                [class.text-error-content]="banner().type === 'error'"
            >
                <div class="flex-1">
                    {{ banner()?.content || banner()?.message }}
                </div>
                <button icon matRipple (click)="close()">
                    <icon>close</icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
    imports: [IconComponent],
})
export class GlobalBannerComponent implements OnInit {
    private _org = inject(OrganisationService);

    private _change = signal(0);
    public readonly is_setup = signal(false);
    public readonly banner = settingSignal<BannerDetails>('banner');
    public readonly has_been_closed = computed(() => {
        if (!this.is_setup()) return true;
        this._change();
        return (
            (!this.banner()?.content && !this.banner()?.message) ||
            localStorage.getItem('PLACE.last_banner') === this.banner().id
        );
    });

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        setTimeout(() => this.is_setup.set(true), 500);
    }

    public async close() {
        localStorage.setItem('PLACE.last_banner', this.banner()?.id || '');
        this._change.set(Date.now());
    }
}
