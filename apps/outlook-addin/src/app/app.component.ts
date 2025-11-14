import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import {
    AsyncHandler,
    current_user,
    currentUser,
    firstTruthyValueFrom,
    LocaleService,
    log,
    OrganisationService,
    setAppName,
    setDefaultCreator,
    setNotifyOutlet,
    SettingsService,
    setTranslationService,
    setupCache,
    setupPlace,
    UploadsService,
} from '@placeos/common';
import { invalidateToken, isMock, setToken, token } from '@placeos/ts-client';
import { setInternalUserDomain } from '@placeos/users';
import { first } from 'rxjs/operators';

declare let Office: any;
declare let OfficeRuntime: any;

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
        <global-loading />
    `,
    styles: [``],
    standalone: false,
})
export class AppComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _cache = inject(SwUpdate);
    private _snackbar = inject(MatSnackBar);
    private _locales = inject(LocaleService);
    private _uploads = inject(UploadsService);

    public readonly title = 'outlook-addin';

    public async ngOnInit() {
        console.info(`Initialising application...`);
        window.history.replaceState = (data: null, unused: null) => {};
        window.history.pushState = (data: null, unused: null) => {};
        setTranslationService(this._locales);

        setNotifyOutlet(this._snackbar);
        console.info(`Waiting for application settings...`);
        await firstTruthyValueFrom(this._settings.initialised);
        log('Outlook', `Waiting for library initialisation...`);
        await Office.onReady();
        log('Outlook', `Initialising auth...`);
        await this._initialiseAuth();
        log('Outlook', `Checking existing auth...`);
        if (token()) return this._finishInitialise();
        console.info(`No existing auth...`);
        try {
            log('Outlook', `Checking for token...`);
            this.timeout(
                'error',
                () => {
                    throw 'Unable to get office token...';
                },
                2000,
            );
            const get_token = Office?.auth?.getAccessToken();
            const tkn = await (get_token || Promise.resolve());
            this.clearTimeout('error');
            if (!tkn) throw 'Unable to get office token...';
            log('Outlook', `Loaded office token. ${tkn}`);
            sessionStorage.setItem('OFFICE.token', tkn);
            await this._initialiseAuth(false);
            this._finishInitialise();
        } catch (e) {
            console.info(JSON.stringify(e));
            if (!Office?.context?.auth) {
                log('Outlook', `Error office API not loaded.`);
                await this._initialiseAuth(false);
            } else {
                log('Outlook', `Authenticating through Outlook...`);
                await this._authenticateGraphAPI();
            }
        }
        if (this._settings.get('app.has_uploads')) this._uploads.init();
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
            this._settings.get('app.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`,
        );
    }

    private async _authenticateGraphAPIWithDialog() {
        log('Outlook', `Authenticating...`);
        this.timeout('office_auth', () => {
            const path = `${location.origin}${location.pathname}#ms-auth=true`;
            console.info(
                `Opening office authentication dialog with URL: ${path}`,
            );
            Office.context.ui.displayDialogAsync(
                path,
                { height: 60, width: 30 },
                (result: any) => {
                    log('Outlook', `Authenticating with dialog...`);
                    const dialog = result.value;
                    dialog.addEventHandler(
                        Office.EventType.DialogMessageReceived,
                        (token: string) => {
                            if (token) setToken(token);
                            this._finishInitialise();
                            dialog.close();
                        },
                    );
                },
            );
        });
        console.info(`URL: ${window.location.href}`);
        if (
            window.location.href.includes('ms-auth=true') ||
            sessionStorage.getItem('ms-auth')
        ) {
            sessionStorage.setItem('ms-auth', 'true');
            log('Outlook', `Authenticating with dialog...`);
            this.clearTimeout('office_auth');
            await this._initialiseAuth(false);
            if (!token()) return;
            Office.context.ui.messageParent(token() || '');
        }
    }

    private _authenticateGraphAPI() {
        if (!Office.context.auth) {
            if (Office.context.ui)
                return this._authenticateGraphAPIWithDialog();
            else
                return this.timeout('retry_graph_auth', () =>
                    this._authenticateGraphAPI(),
                );
        }
        return Office.context.auth
            ?.getAccessTokenAsync()
            .then((result: any) => {
                if (result.status === 'succeeded') {
                    // Use the token to call your backend or Microsoft Graph
                    const token = result.value;
                    log('Outlook', 'SSO token acquired successfully');
                    if (token) setToken(token);
                    this._finishInitialise();
                } else {
                    // Handle errors or fallback to dialog authentication
                    log(
                        'Outlook',
                        'SSO failed: ' + result.error.message,
                        undefined,
                        'error',
                    );
                    return this._authenticateGraphAPIWithDialog(); // Your fallback method if SSO fails
                }
            });
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) return;
        invalidateToken();
        location.reload();
    }
}
