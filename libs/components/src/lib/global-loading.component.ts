import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { authority, isOnline, token } from '@placeos/ts-client';
import { AsyncHandler, SettingsService } from '@placeos/common';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

@Component({
    selector: 'global-loading',
    template: `
        <div
            *ngIf="!online"
            class="fixed bottom-2 left-1/2 -translate-x-1/2 shadow rounded-3xl px-4 py-2 bg-error text-white text-xs"
        >
            Unable to reach server... Some features may not work.
        </div>
        <div
            *ngIf="loading"
            loader
            class="fixed inset-0 flex items-center justify-center pointer-events-auto bg-base-100"
        >
            <mat-spinner [diameter]="64"></mat-spinner>
        </div>
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
})
export class GlobalLoadingComponent extends AsyncHandler implements OnInit {
    public loading: boolean;

    public get online() {
        return isOnline();
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        this.loading = true;
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        this.interval(
            'has_token',
            () => {
                if (!authority() || !token()) return;
                this.loading = false;
                this.clearInterval('has_token');
            },
            1000
        );
    }
}
