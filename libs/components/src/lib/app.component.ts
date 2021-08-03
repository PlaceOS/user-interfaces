import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { Integrations } from '@sentry/tracing';
import { first } from 'rxjs/operators';
import {
    clientId,
    invalidateToken,
    isMock,
    refreshToken,
    token,
} from '@placeos/ts-client';

import {
    BaseClass,
    current_user,
    currentUser,
    HotkeysService,
    notifySuccess,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
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
        <router-outlet></router-outlet>
        <global-loading></global-loading>
    `,
    styles: [``],
})
export class AppComponent extends BaseClass implements OnInit {
    constructor(
        private _tracing: Sentry.TraceService,
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _spaces: SpacesService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _hotkey: HotkeysService,
        private _clipboard: Clipboard
    ) {
        super();
    }

    public async ngOnInit() {
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
            localStorage.setItem(
                'mock',
                `${localStorage.getItem('mock') !== 'true'}`
            );
            location.reload();
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyC'], () => {
            this._clipboard.copy(`${token()}|${refreshToken()}`);
            notifySuccess('Successfully copied token.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyV'], () => {
            navigator.clipboard?.readText().then((tkn) => {
                const parts = tkn.split('|');
                const id = clientId();
                localStorage.setItem(`${id}_access_token`, `${parts[0]}`);
                localStorage.setItem(`${id}_refresh_token`, `${parts[1]}`);
                localStorage.setItem(
                    `${id}_expires_at`,
                    `${addHours(new Date(), 6).valueOf()}`
                );
                notifySuccess('Successfully pasted token.');
                setTimeout(() => location.reload(), 2000);
            });
        });
        setNotifyOutlet(this._snackbar);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 15 * 1000);
        await current_user.pipe(first((_) => !!_)).toPromise();
        this.clearTimeout('wait_for_user');
        setDefaultCreator(currentUser());
        setInternalUserDomain(
            this._settings.get('app.general.internal_user_domain') ||
                currentUser()?.email?.split('@')[1]
        );
        initSentry(this._settings.get('app.sentry_dsn'));
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) return;
        console.error('Error initialising user.');
        invalidateToken();
        location.reload();
    }
}
