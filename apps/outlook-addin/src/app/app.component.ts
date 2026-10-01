import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    AsyncHandler,
    current_user,
    failInitialisation,
    firstTruthyValueFrom,
    lazySnackbar,
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
    tokenExpiry,
    UploadsService,
    userSignal,
    withTimeout,
} from '@placeos/common';
import { GlobalLoadingComponent } from '@placeos/components';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';
import { mocksInit } from '@placeos/mocks';
import { invalidateToken, isMock, setToken, token } from '@placeos/ts-client';
import { setInternalUserDomain } from '@placeos/users';

import { acquireNaaToken, naaClientId } from './outlook-auth';

/** Longest wait for a Microsoft prompt or the sign-in dialog */
const SIGN_IN_TIMEOUT_MS = 2 * 60 * 1000;

@Component({
    selector: 'app-root',
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        }

        <router-outlet />
        <global-loading />
    `,
    styles: [``],
    imports: [
        SettingsDebugPanelLauncherComponent,
        RouterOutlet,
        GlobalLoadingComponent,
    ],
})
export class AppComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _cache = inject(SwUpdate);
    private _snackbar = lazySnackbar();
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
    private _mocks_registered = false;
    /** Read before startup, so later URL changes cannot drop it */
    private _naa_client_id = naaClientId();

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
        let host: Office.HostType | null = null;
        try {
            const info = await withTimeout(
                Office.onReady(),
                30_000,
                'Microsoft Office did not become ready.',
            );
            host = info.host;
        } catch (error) {
            console.error(error);
            failInitialisation(
                'The Outlook add-in could not start. Close and reopen it, then try again.',
            );
            return;
        }
        if (this._isAuthDialog()) return this._completeAuthDialog();
        log('Outlook', `Initialising auth...`);
        if (!(await this._initialiseAuth())) return;
        if (!token()) {
            if (host === Office.HostType.Outlook) {
                if (!(await this._signInWithOutlook())) return;
            } else {
                // A browser outside Outlook. Use the normal PlaceOS login.
                log('Outlook', `Not in Outlook, using PlaceOS login...`);
                if (!(await this._initialiseAuth(false))) return;
            }
        }
        await this._finishInitialise();
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
        // Same checks as `setupPlace`. Production builds replace the mocks
        // library with an empty one.
        const mock_enabled =
            settings.mock ||
            (!location.href.includes('mock=false') &&
                (location.href.includes('mock=true') ||
                    localStorage.getItem('mock') === 'true'));
        if (mock_enabled && !this._mocks_registered) {
            this._mocks_registered = true;
            mocksInit();
        }
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

    /**
     * Sign in from the task pane in Outlook. Uses nested app authentication
     * when the manifest has a client ID and Outlook supports it. Otherwise,
     * or when it fails, uses the PlaceOS sign-in dialog.
     */
    private async _signInWithOutlook(): Promise<boolean> {
        log('Outlook', `Signing in through Outlook...`);
        const sso_token = await withTimeout(
            acquireNaaToken(this._naa_client_id),
            SIGN_IN_TIMEOUT_MS,
            'Microsoft single sign-on timed out.',
        ).catch((error) => {
            log('Outlook', 'Single sign-on failed.', error, 'warn');
            return '';
        });
        if (sso_token) {
            setToken(sso_token, tokenExpiry(sso_token));
            return true;
        }
        return this._signInWithDialog();
    }

    /**
     * Open the app in an Office dialog to sign in to PlaceOS. The dialog
     * sends the PlaceOS token back. Resolves to false when sign in failed.
     */
    private _signInWithDialog(): Promise<boolean> {
        log('Outlook', `Opening sign-in dialog...`);
        const url = `${location.origin}${location.pathname}#ms-auth=true`;
        return new Promise<boolean>((resolve) => {
            let dialog: Office.Dialog | undefined;
            let done = false;
            const finish = (place_token: string, error = '') => {
                if (done) return;
                done = true;
                this.clearTimeout('dialog_sign_in');
                dialog?.close();
                if (place_token) setToken(place_token);
                else failInitialisation(error);
                resolve(!!place_token);
            };
            this.timeout(
                'dialog_sign_in',
                () =>
                    finish(
                        '',
                        'Microsoft sign in did not finish. Close the sign-in window, then try again.',
                    ),
                SIGN_IN_TIMEOUT_MS,
            );
            Office.context.ui.displayDialogAsync(
                url,
                { height: 60, width: 30 },
                (result) => {
                    if (result.status !== Office.AsyncResultStatus.Succeeded) {
                        finish(
                            '',
                            'The Microsoft sign-in window could not open. Allow pop-ups for Outlook, then try again.',
                        );
                        return;
                    }
                    dialog = result.value;
                    dialog.addEventHandler(
                        Office.EventType.DialogMessageReceived,
                        (event) =>
                            finish(
                                'message' in event ? event.message : '',
                                'Microsoft sign in did not return a token. Try again.',
                            ),
                    );
                    // The user closed the dialog.
                    dialog.addEventHandler(
                        Office.EventType.DialogEventReceived,
                        () =>
                            finish(
                                '',
                                'The sign-in window closed before sign in finished. Try again.',
                            ),
                    );
                },
            );
        });
    }

    /** True when this window is the sign-in dialog opened by the task pane. */
    private _isAuthDialog() {
        return (
            location.href.includes('ms-auth=true') ||
            !!sessionStorage.getItem('ms-auth')
        );
    }

    /**
     * Sign in to PlaceOS inside the dialog, then send the token to the task
     * pane. The task pane cannot share the dialog's storage or cookies.
     */
    private async _completeAuthDialog() {
        // Keep the flag, the login redirect can drop the URL hash.
        sessionStorage.setItem('ms-auth', 'true');
        log('Outlook', `Signing in from dialog...`);
        // Redirects to the PlaceOS login page when there is no session.
        if (!(await this._initialiseAuth(false))) return;
        if (!token()) return;
        sessionStorage.removeItem('ms-auth');
        Office.context.ui.messageParent(token());
    }

    private onInitError() {
        if (isMock() || this._current_user()?.is_logged_in) return;
        invalidateToken();
        failInitialisation(
            'The Outlook add-in could not load the current user. Check the connection, then try again.',
        );
    }
}
