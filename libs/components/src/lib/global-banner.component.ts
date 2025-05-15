import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { nextValueFrom, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

export interface BannerDetails {
    id: string;
    type?: 'info' | 'warn' | 'error';
    content: string;
}

@Component({
    selector: 'global-banner',
    template: `
        <div
            class="flex w-full items-center space-x-4 p-4 print:hidden"
            [class.bg-info]="
                (banner | async).type === 'info' || !(banner | async).type
            "
            [class.text-info-content]="
                (banner | async).type === 'info' || !(banner | async).type
            "
            [class.bg-warning]="(banner | async).type === 'warn'"
            [class.text-warning-content]="(banner | async).type === 'warn'"
            [class.bg-error]="(banner | async).type === 'error'"
            [class.text-error-content]="(banner | async).type === 'error'"
            *ngIf="!(has_been_closed | async) && (banner | async)"
        >
            <div class="flex-1">
                {{ (banner | async)?.content || (banner | async)?.message }}
            </div>
            <button icon matRipple (click)="close()">
                <icon>close</icon>
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
    imports: [CommonModule],
})
export class GlobalBannerComponent {
    private _change = new BehaviorSubject(0);
    public readonly banner = this._org.active_building.pipe(
        debounceTime(500),
        map(() => this._settings.get('app.banner')),
        shareReplay(1),
    );
    public readonly has_been_closed = combineLatest([
        this.banner,
        this._change,
    ]).pipe(
        debounceTime(500),
        map(([banner]) => {
            return (
                (!banner?.content && !banner?.message) ||
                localStorage.getItem('PLACE.last_banner') === banner.id
            );
        }),
        shareReplay(1),
    );

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}

    public async close() {
        const banner = await nextValueFrom(this.banner);
        localStorage.setItem('PLACE.last_banner', banner?.id || '');
        this._change.next(Date.now());
    }
}
