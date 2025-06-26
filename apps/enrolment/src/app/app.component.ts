import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import {
    Amazon,
    Azure,
    Google,
    initialiseUploadService,
    OpenStack,
} from '@placeos/cloud-uploads';
import { first } from 'rxjs/operators';

import {
    AsyncHandler,
    currentUser,
    log,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { setInternalUserDomain } from 'libs/users/src/lib/user.utilities';

import { SpacesService } from 'libs/spaces/src/lib/spaces.service';

import * as MOCKS from '@placeos/mocks';
import { PlaceAuthority, token } from '@placeos/ts-client';
import * as Sentry from '@sentry/angular';

export function initSentry(dsn: string, sample_rate: number = 0.2) {
    if (!dsn) return;
    Sentry.init({
        dsn,
        tracesSampleRate: sample_rate,
    });
}

@Component({
    selector: 'app-root',
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class AppComponent extends AsyncHandler implements OnInit {
    constructor(
        private _tracing: Sentry.TraceService,
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _spaces: SpacesService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _clipboard: Clipboard,
    ) {
        super();
    }

    public async ngOnInit() {
        log('APP', 'MOCKS:', MOCKS);
        setNotifyOutlet(this._snackbar);
        const authority: PlaceAuthority = await (
            await fetch('/auth/authority')
        ).json();
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        /** Wait for authentication details to load */
        await setupPlace(settings);
        setupCache(this._cache);
        setInternalUserDomain(
            this._settings.get('app.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`,
        );
        this._settings.overrides = [authority.config?.enrolment || {}];
        this.timeout('init_uploads', () => {
            initialiseUploadService({
                auto_start: true,
                token: token(),
                endpoint: '/api/engine/v2/uploads',
                worker_url: 'assets/md5_worker.js',
                providers: [Amazon, Azure, Google, OpenStack] as any,
            });
        });

        initSentry(this._settings.get('app.sentry_dsn'));
    }
}
