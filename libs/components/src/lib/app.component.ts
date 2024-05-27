import { Component, OnInit, Optional, Renderer2 } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { first } from 'rxjs/operators';
import {
    apiKey,
    clientId,
    convertPairStringToMap,
    invalidateToken,
    isFixedDevice,
    isMock,
    refreshToken,
    setAPI_Key,
    token,
} from '@placeos/ts-client';
import { ActivatedRoute, Router } from '@angular/router';
import { addHours } from 'date-fns';

import {
    AsyncHandler,
    current_user,
    currentUser,
    HotkeysService,
    notifySuccess,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
    log,
    GoogleAnalyticsService,
    isMobileSafari,
    hasNewVersion,
} from '@placeos/common';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { setInternalUserDomain } from 'libs/users/src/lib/user.utilities';

import { setDefaultCreator } from 'libs/events/src/lib/event.class';

import * as Sentry from '@sentry/angular';
import { MOCKS } from '@placeos/mocks';
import {
    Amazon,
    Azure,
    Google,
    initialiseUploadService,
    OpenStack,
} from '@placeos/cloud-uploads';
import { setCustomHeaders } from '@placeos/svg-viewer';
import { TranslateService } from '@ngx-translate/core';

import { StylesManager } from 'survey-core';

//SurveyJS styling
StylesManager.applyTheme('modern');
const START_QUERY = location.search;

export function initSentry(dsn: string, sample_rate = 0.1) {
    if (!dsn) return;
    Sentry.init({
        dsn,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false,
            }),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
            'localhost',
            /^https:\/\/[a-zA-Z0-9_\-]*\.[a-zA-Z0-9]*\/api/,
            /^https:\/\/[a-zA-Z0-9_\-]*\.placeos\.run*\/api/,
        ],
        // Session Replay
        replaysSessionSampleRate: sample_rate, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

(window as any).global = window;

@Component({
    selector: 'app-root',
    template: `
        <global-banner></global-banner>
        <div class="flex-1 w-full relative h-1/2">
            <router-outlet></router-outlet>
        </div>
        <global-chat *ngIf="has_chat"></global-chat>
        <global-loading></global-loading>
        <debug-console *ngIf="debug"></debug-console>
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
export class AppComponent extends AsyncHandler implements OnInit {
    public get debug() {
        return (
            window.debug && this._settings.get('app.allow_debugging') === true
        );
    }

    public get has_chat() {
        return this._settings.get('app.chat.enabled');
    }

    constructor(
        private _analytics: GoogleAnalyticsService,
        private _settings: SettingsService,
        private _org: OrganisationService, // For init
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _hotkey: HotkeysService,
        private _clipboard: Clipboard,
        private _route: ActivatedRoute,
        private _router: Router,
        private _maps: MapsPeopleService,
        @Optional() private _translate: TranslateService
    ) {
        super();
    }

    public async ngOnInit() {
        log('APP', 'MOCKS:', MOCKS);
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
            localStorage.setItem(
                'mock',
                `${localStorage.getItem('mock') !== 'true'}`
            );
            location.reload();
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyD'], () => {
            this._settings.saveUserSetting(
                'dark_mode',
                !this._settings.get('dark_mode')
            );
            notifySuccess('Toggled dark mode.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyC'], () => {
            this._clipboard.copy(`${token()}|${refreshToken()}`);
            notifySuccess('Successfully copied token.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyV'], () => {
            navigator.clipboard
                ?.readText()
                .then((tkn) => this._pasteToken(tkn));
        });
        (window as any).pasteToken = (t) => this._pasteToken(t);
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('hide_nav'))
                localStorage.setItem('PlaceOS.hide_nav', 'true');
            if (params.has('lang')) {
                const locale = params.get('lang');
                this._translate?.use(locale);
                localStorage.setItem('PLACEOS.locale', locale);
            }
            if (params.has('x-api-key')) {
                setAPI_Key(params.get('x-api-key'));
            }
        });
        setNotifyOutlet(this._snackbar);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        /** Add query parameters if removed due to hash routing */
        if (START_QUERY) {
            const query = convertPairStringToMap(START_QUERY.substring(1));
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: query,
            });
        }
        /** Wait for authentication details to load */
        await setupPlace(settings).catch((_) => console.error(_));
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        setupCache(this._cache);
        if (!settings.local_login) {
            this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        }
        await current_user.pipe(first((_) => !!_)).toPromise();
        this.clearTimeout('wait_for_user');
        setDefaultCreator(currentUser());
        this._initLocale();
        setInternalUserDomain(
            this._settings.get('app.general.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`
        );
        this._initAnalytics();
        initSentry(this._settings.get('app.sentry_dsn'));
        try {
            const tkn = token();
            if (isMobileSafari()) {
                setCustomHeaders(
                    tkn === 'x-api-key'
                        ? { 'x-api-key': apiKey() }
                        : { Authorization: `Bearer ${tkn}` }
                );
            }
            if (this._settings.get('app.has_uploads')) {
                this.timeout('init_uploads', () => {
                    initialiseUploadService({
                        auto_start: true,
                        token: token(),
                        endpoint: '/api/engine/v2/uploads',
                        worker_url: 'assets/md5_worker.js',
                        providers: [Amazon, Azure, Google, OpenStack] as any,
                    });
                });
            }
            if (isFixedDevice()) {
                this.interval(
                    'auto-update-version',
                    () => this._checkReload(),
                    15 * 1000
                );
            }
        } catch {}
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) return;
        invalidateToken();
        location.reload();
    }

    private _initAnalytics() {
        const tracking_id = this._settings.get('app.analytics.tracking_id');
        if (!tracking_id) return;
        this._analytics.init(tracking_id);
        this._analytics.load(tracking_id);
        this._analytics.setUser(currentUser().id);
    }

    private _initLocale() {
        try {
            let locale = localStorage.getItem('PLACEOS.locale');
            const locales = this._settings.get('app.locales') || [];
            this._translate?.addLangs(locales.map((_) => _.id));
            if (locale) {
                this._translate?.use(locale);
            } else {
                const list = navigator.languages;
                for (const lang of list) {
                    locale = locales.find((_) => _.id === lang);
                    if (!locale)
                        locale = locales.find((_) => lang.includes(_.id));
                    if (locale) {
                        this._translate?.use(lang);
                        localStorage.setItem('PLACEOS.locale', lang);
                        break;
                    }
                }
            }
        } catch {}
    }

    private _pasteToken(tkn: string) {
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
    }

    private _checkReload() {
        if (!hasNewVersion()) return;
        location.reload();

        this.timeout(
            'reload',
            () => (location.href = `${location.origin}${location.pathname}`)
        );
    }
}
