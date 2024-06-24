import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { invalidateToken, isMock, setToken, token } from '@placeos/ts-client';
import {
    AsyncHandler,
    current_user,
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
import { setDefaultCreator } from 'libs/events/src/lib/event.class';

import * as MOCKS from '@placeos/mocks';

declare let Office: any;
declare let OfficeRuntime: any;

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
        <global-loading></global-loading>
        <debug-console></debug-console>
    `,
    styles: [``],
})
export class AppComponent extends AsyncHandler implements OnInit {
    title = 'outlook-addin';

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar
    ) {
        super();
    }

    public async ngOnInit() {
        console.info(`Initialising application...`);
        window.history.replaceState = (data: null, unused: null) => {};

        log('APP', 'MOCKS:', MOCKS);

        setNotifyOutlet(this._snackbar);
        console.info(`Waiting for application settings...`);
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        console.info(`Waiting for office library to initialise...`);
        await Office.onReady();
        console.info(`Initialising auth...`);
        await this._initialiseAuth();
        console.info(`Checking for existing auth...`);
        if (token()) return this._finishInitialise();
        console.info(`No existing auth...`);
        try {
            console.info(`Checking for office token...`);
            this.timeout(
                'error',
                () => {
                    throw 'Unable to get office token...';
                },
                2000
            );
            const get_token = Office?.auth?.getAccessToken();
            const tkn = await (get_token || Promise.resolve());
            this.clearTimeout('error');
            if (!tkn) throw 'Unable to get office token...';
            console.info(`Loaded office token. ${tkn}`);
            sessionStorage.setItem('OFFICE.token', tkn);
            await this._initialiseAuth(false);
            this._finishInitialise();
        } catch (e) {
            console.info(JSON.stringify(e));
            if (!Office?.context?.ui) {
                console.info(`Error office API not loaded.`);
                await this._initialiseAuth(false);
            } else {
                await this._authenticateWithOffice();
            }
        }
    }

    private async _initialiseAuth(local = true) {
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.local_login = local;
        settings.storage = 'local';
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        await setupPlace(settings).catch((_) => console.error(_));
    }

    private async _finishInitialise() {
        setupCache(this._cache);
        if (!this._settings.get('composer.local_login')) {
            this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        }
        await current_user.pipe(first((_) => !!_)).toPromise();
        this.clearTimeout('wait_for_user');
        setDefaultCreator(currentUser());
        setInternalUserDomain(
            this._settings.get('app.general.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`
        );
    }

    private async _authenticateWithOffice() {
        console.info(`Authenticating with office...`);
        this.timeout('office_auth', () => {
            const path = `${location.origin}${location.pathname}#ms-auth=true`;
            console.info(
                `Opening office authentication dialog with URL: ${path}`
            );
            Office.context.ui.displayDialogAsync(
                path,
                { height: 60, width: 30 },
                (result) => {
                    console.info(`Authenticated with office from dialog...`);
                    const dialog = result.value;
                    dialog.addEventHandler(
                        Office.EventType.DialogMessageReceived,
                        (token) => {
                            if (token) setToken(token);
                            this._finishInitialise();
                            dialog.close();
                        }
                    );
                }
            );
        });
        console.info(`URL: ${window.location.href}`);
        if (
            window.location.href.includes('ms-auth=true') ||
            sessionStorage.getItem('ms-auth')
        ) {
            sessionStorage.setItem('ms-auth', 'true');
            console.info(`Authenticating with office from a dialog...`);
            this.clearTimeout('office_auth');
            await this._initialiseAuth(false);
            if (!token()) return;
            Office.context.ui.messageParent(token() || '');
        }
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) return;
        invalidateToken();
        location.reload();
    }
}
