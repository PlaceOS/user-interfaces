import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { Integrations } from '@sentry/tracing';
import { first } from 'rxjs/operators';

import {
    BaseClass,
    currentUser,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
    log,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { setInternalUserDomain } from 'libs/users/src/lib/user.utilities';

import { SpacesService } from 'libs/spaces/src/lib/spaces.service';
import { setDefaultCreator } from 'libs/events/src/lib/event.class';
import { addHours } from 'date-fns';

import * as Sentry from '@sentry/angular';
import * as MOCKS from '@placeos/mocks';

export function initSentry(dsn: string, sample_rate: number = 0.2) {
    if (!dsn) return;
    Sentry.init({
        dsn,
        integrations: [
            new Integrations.BrowserTracing({
                tracingOrigins: ['localhost', location.origin],
                routingInstrumentation: Sentry.routingInstrumentation,
            }),
        ],
        tracesSampleRate: sample_rate,
    });
}

@Component({
    selector: 'app-root',
    template: `
        <global-banner></global-banner>
        <div class="flex-1 w-full relative h-1/2">
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
})
export class AppComponent extends BaseClass implements OnInit {
    constructor(
        private _tracing: Sentry.TraceService,
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _spaces: SpacesService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _clipboard: Clipboard
    ) {
        super();
    }

    public async ngOnInit() {
        log('APP', 'MOCKS:', MOCKS);
        setNotifyOutlet(this._snackbar);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        /** Wait for authentication details to load */
        await setupPlace(settings)
        setupCache(this._cache);
        setInternalUserDomain(
            this._settings.get('app.general.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`
        );
        initSentry(this._settings.get('app.sentry_dsn'));
    }
}
