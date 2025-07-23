import { Component, inject, OnInit, signal } from '@angular/core';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    SettingsService,
} from '@placeos/common';
import { authority, isOnline, token } from '@placeos/ts-client';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'global-loading',
    template: `
        @if (!online()) {
            <div
                class="fixed bottom-2 left-1/2 z-[9999] -translate-x-1/2 rounded-3xl bg-error px-4 py-2 text-xs text-white shadow"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (loading()) {
            <div
                loader
                class="pointer-events-auto fixed inset-0 z-[9998] flex items-center justify-center bg-base-100"
            >
                <mat-spinner [diameter]="64"></mat-spinner>
            </div>
        }
    `,
    styles: [
        `
            :host {
                pointer-events: none;
            }

            :host > [loader] {
                z-index: 997;
                background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0H0v36h36V0zM15.126 2H2v13.126c.367.094.714.24 1.032.428L15.554 3.032c-.188-.318-.334-.665-.428-1.032zM18 4.874V18H4.874c-.094-.367-.24-.714-.428-1.032L16.968 4.446c.318.188.665.334 1.032.428zM22.874 2h11.712L20 16.586V4.874c1.406-.362 2.512-1.468 2.874-2.874zm10.252 18H20v13.126c.367.094.714.24 1.032.428l12.522-12.522c-.188-.318-.334-.665-.428-1.032zM36 22.874V36H22.874c-.094-.367-.24-.714-.428-1.032l12.522-12.522c.318.188.665.334 1.032.428zm0-7.748V3.414L21.414 18h11.712c.362-1.406 1.468-2.512 2.874-2.874zm-18 18V21.414L3.414 36h11.712c.362-1.406 1.468-2.512 2.874-2.874zM4.874 20h11.712L2 34.586V22.874c1.406-.362 2.512-1.468 2.874-2.874z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
            }
        `,
    ],
    imports: [MatProgressSpinnerModule, TranslatePipe],
})
export class GlobalLoadingComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public loading = signal(true);
    public readonly online = signal(true);

    public async ngOnInit() {
        this.loading.set(true);
        await firstTruthyValueFrom(this._org.initialised);
        await firstTruthyValueFrom(this._settings.initialised);
        this.online.set(isOnline());
        this.interval(
            'has_token',
            () => {
                this.online.set(isOnline());
                if (!authority() || !token()) return;
                this.loading.set(false);
                this.online.set(isOnline());
                this.clearInterval('has_token');
            },
            1000,
        );
    }
}
