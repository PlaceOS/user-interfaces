import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

import {
    AsyncHandler,
    currentUser,
    failInitialisation,
    firstTruthyValueFrom,
    initialisationFailure,
    initSentry,
    lazySnackbar,
    log,
    markInitialisationComplete,
    OrganisationService,
    retryInitialisation,
    setAppName,
    setNotifyOutlet,
    SettingsService,
    setupCache,
    setupPlace,
} from '@placeos/common';
import { setInternalUserDomain } from '@placeos/users';

import { Router, RouterOutlet } from '@angular/router';
import {
    GlobalBannerComponent,
    ServiceWorkerUpdateCardComponent,
} from '@placeos/components';

import { SpacesService } from '@placeos/events';

import * as MOCKS from '@placeos/mocks';
import { PlaceAuthority, token } from '@placeos/ts-client';
@Component({
    selector: 'app-root',
    imports: [
        SettingsDebugPanelLauncherComponent,
        RouterOutlet,
        GlobalBannerComponent,
        ServiceWorkerUpdateCardComponent,
    ],
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        }

        <global-banner />
        @if (initialisation_error()) {
            <div
                class="bg-base-200 fixed inset-0 z-9998 grid place-items-center p-4"
            >
                <div class="bg-base-100 max-w-md rounded-lg p-6 text-center">
                    <p>{{ initialisation_error() }}</p>
                    <button
                        type="button"
                        class="bg-primary text-primary-content mt-4 rounded px-4 py-2"
                        (click)="retry()"
                    >
                        Try again
                    </button>
                </div>
            </div>
        } @else {
            <div class="relative h-1/2 w-full flex-1">
                <router-outlet></router-outlet>
            </div>
        }
        <placeos-service-worker-update-card />
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
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _spaces = inject(SpacesService);
    private _cache = inject(SwUpdate);
    private _snackbar = lazySnackbar();
    private _clipboard = inject(Clipboard);
    public readonly initialisation_error = initialisationFailure();

    public retry(): void {
        retryInitialisation();
    }

    public async ngOnInit() {
        log('APP', 'MOCKS:', MOCKS);
        setNotifyOutlet(this._snackbar);
        // Listen for service worker events before any async setup so update
        // notifications emitted during initialisation are not missed.
        setupCache(this._cache);
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 10_000);
        let authority: PlaceAuthority;
        try {
            const response = await fetch('/auth/authority', {
                signal: controller.signal,
            }).finally(() => clearTimeout(timer));
            if (!response.ok) {
                throw new Error(`Authority request failed: ${response.status}`);
            }
            authority = await response.json();
        } catch (error) {
            console.error(error);
            failInitialisation(
                'Enrolment could not connect to the server. Check the connection, then try again.',
            );
            return;
        }
        /** Wait for settings to initialise */
        await firstTruthyValueFrom(this._settings.initialised);
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        /** Wait for authentication details to load */
        try {
            await setupPlace(settings);
        } catch (error) {
            console.error(error);
            failInitialisation(
                'Enrolment could not authenticate. Check the connection, then try again.',
            );
            return;
        }
        setupCache(this._cache, this._settings.get('service_worker') || {});
        setInternalUserDomain(
            this._settings.get('app.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`,
        );
        this._settings.setOverrides([authority.config?.enrolment || {}]);
        this.timeout('init_uploads', async () => {
            // Loaded on demand to keep the upload library out of the initial bundle
            const {
                initialiseUploadService,
                Amazon,
                Azure,
                Google,
                OpenStack,
            } = await import('@placeos/cloud-uploads');
            initialiseUploadService({
                auto_start: true,
                token: token(),
                endpoint: '/api/engine/v2/uploads',
                worker_url: 'assets/md5_worker.js',
                providers: [Amazon, Azure, Google, OpenStack] as any,
            });
        });

        void initSentry(
            this._settings.get('app.sentry_dsn'),
            this._router,
            0.2,
        );
        markInitialisationComplete();
    }
}
