import { Component, computed, inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    AsyncHandler,
    current_user,
    failInitialisation,
    firstTruthyValueFrom,
    LocaleService,
    log,
    markInitialisationComplete,
    OrganisationService,
    setAppName,
    setDefaultCreator,
    setNotifyOutlet,
    SettingsService,
    setTranslationService,
    setupCache,
    setupPlace,
    UploadsService,
    userSignal,
    withTimeout,
} from '@placeos/common';
import { GlobalLoadingComponent } from '@placeos/components';
import { invalidateToken, isMock, setToken, token } from '@placeos/ts-client';
import { setInternalUserDomain } from '@placeos/users';

declare let Office: any;
declare let OfficeRuntime: any;

interface OfficeAccessTokenResult {
    status: string;
    value?: string;
    error?: { message?: string };
}

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
        <global-loading />
    `,
    styles: [``],
    imports: [RouterOutlet, GlobalLoadingComponent],
})
export class AppComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _cache = inject(SwUpdate);
    private _snackbar = inject(MatSnackBar);
    private _locales = inject(LocaleService);
    private _uploads = inject(UploadsService);
    private _current_user = userSignal();
    private _internal_user_domain = computed(() => {
        const email = this._current_user()?.email || '';
        const domain = email.split('@')[1];
        return (
            this._settings.get('app.internal_user_domain') ||
            (domain ? `@${domain}` : '')
        );
    });

    public readonly title = 'outlook-addin';

    public async ngOnInit() {
        console.info(`Initialising application...`);
        window.history.replaceState = (data: null, unused: null) => {};
        window.history.pushState = (data: null, unused: null) => {};
        setTranslationService(this._locales);

        setNotifyOutlet(this._snackbar);
        // Listen for service worker events before any async setup so update
        // notifications emitted during initialisation are not missed.
        setupCache(this._cache);
        console.info(`Waiting for application settings...`);
        await firstTruthyValueFrom(this._settings.initialised);
        log('Outlook', `Waiting for library initialisation...`);
        try {
            await withTimeout(
                Office.onReady(),
                30_000,
                'Microsoft Office did not become ready.',
            );
        } catch (error) {
            console.error(error);
            failInitialisation(
                'The Outlook add-in could not start. Close and reopen it, then try again.',
            );
            return;
        }
        log('Outlook', `Initialising auth...`);
        if (!(await this._initialiseAuth())) return;
        log('Outlook', `Checking existing auth...`);
        if (token()) return this._finishInitialise();
        console.info(`No existing auth...`);
        try {
            log('Outlook', `Checking for token...`);
            const get_token = Office?.auth?.getAccessToken() as
                | Promise<string>
                | undefined;
            const tkn = await withTimeout<string | undefined>(
                get_token || Promise.resolve(undefined),
                10_000,
                'Unable to get Office token.',
            );
            if (!tkn) throw 'Unable to get office token...';
            log('Outlook', `Loaded office token. ${tkn}`);
            sessionStorage.setItem('OFFICE.token', tkn);
            if (!(await this._initialiseAuth(false))) return;
            this._finishInitialise();
        } catch (e) {
            console.info(JSON.stringify(e));
            if (!Office?.context?.auth) {
                log('Outlook', `Error office API not loaded.`);
                if (!(await this._initialiseAuth(false))) return;
                await this._finishInitialise();
            } else {
                log('Outlook', `Authenticating through Outlook...`);
                await this._authenticateGraphAPI();
            }
        }
        if (this._settings.get('app.has_uploads')) this._uploads.init();
    }

    private async _initialiseAuth(local = true): Promise<boolean> {
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.local_login = local;
        settings.storage = 'local';
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        try {
            await setupPlace(settings);
            return true;
        } catch (error) {
            console.error(error);
            failInitialisation(
                'The Outlook add-in could not authenticate. Check the connection, then try again.',
            );
            return false;
        }
    }

    private async _finishInitialise() {
        setupCache(this._cache, this._settings.get('service_worker') || {});
        try {
            await withTimeout(
                firstTruthyValueFrom(current_user),
                30_000,
                'Current user loading timed out.',
            );
        } catch (error) {
            console.error(error);
            this.onInitError();
            return;
        }
        setDefaultCreator(this._current_user());
        const internal_user_domain = this._internal_user_domain();
        if (internal_user_domain) setInternalUserDomain(internal_user_domain);
        markInitialisationComplete();
    }

    private async _authenticateGraphAPIWithDialog() {
        log('Outlook', `Authenticating...`);
        this.timeout(
            'office_auth_failure',
            () =>
                failInitialisation(
                    'Microsoft sign in did not finish. Close the sign-in window, then try again.',
                ),
            2 * 60 * 1000,
        );
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
                            this.clearTimeout('office_auth_failure');
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
            if (!(await this._initialiseAuth(false))) return;
            if (!token()) return;
            Office.context.ui.messageParent(token() || '');
        }
    }

    private async _authenticateGraphAPI(tries = 0): Promise<void> {
        if (!Office.context.auth) {
            if (Office.context.ui) {
                await this._authenticateGraphAPIWithDialog();
                return;
            }
            if (tries >= 10) {
                failInitialisation(
                    'Microsoft authentication is unavailable. Close and reopen the add-in, then try again.',
                );
                return;
            }
            await new Promise<void>((resolve) =>
                this.timeout('retry_graph_auth', () => resolve(), 300),
            );
            return this._authenticateGraphAPI(tries + 1);
        }
        try {
            const access_token =
                Office.context.auth.getAccessTokenAsync() as Promise<OfficeAccessTokenResult>;
            const result = await withTimeout(
                access_token,
                10_000,
                'Microsoft single sign-on timed out.',
            );
            if (result.status === 'succeeded') {
                // Use the token to call your backend or Microsoft Graph
                const token = result.value;
                log('Outlook', 'SSO token acquired successfully');
                if (token) setToken(token);
                await this._finishInitialise();
                return;
            }
            log(
                'Outlook',
                `SSO failed: ${result.error?.message || 'Unknown error'}`,
                undefined,
                'error',
            );
        } catch (error) {
            console.error(error);
        }
        if (Office.context.ui) {
            await this._authenticateGraphAPIWithDialog();
        } else {
            failInitialisation(
                'Microsoft sign in did not finish. Close and reopen the add-in, then try again.',
            );
        }
    }

    private onInitError() {
        if (isMock() || this._current_user()?.is_logged_in) return;
        invalidateToken();
        failInitialisation(
            'The Outlook add-in could not load the current user. Check the connection, then try again.',
        );
    }
}
