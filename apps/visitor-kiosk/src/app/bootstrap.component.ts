import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    isPublicMode,
    OrganisationService,
    SettingsService,
    VERSION,
} from '@placeos/common';
import {
    clearKioskLocation,
    hasKioskLocation,
    KioskLocation,
    KioskLocationPickerComponent,
    saveKioskLocation,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { PageHeadingDirective } from './components/page-heading.directive';

/**
 * Setup screen that picks the location the visitor kiosk shows.
 * `?level=` saves that level at once, `?clear=true` removes the saved
 * setup, `?osk=` turns the on-screen keyboard on or off and
 * `?action=preferences` opens the check-in preferences.
 */
@Component({
    selector: '[bootstrap]',
    template: `
        <div class="bg-base-200 absolute inset-0 z-0">
            <div
                form
                class="border-base-300 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <h1 pageHeading>
                        {{ 'APP.VISITOR_KIOSK.APP' | translate }}
                    </h1>
                    <div class="relative overflow-hidden rounded-sm px-2 py-1">
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-10"
                        ></div>
                        <div class="relative z-10 font-mono text-sm uppercase">
                            {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                        </div>
                    </div>
                </header>
                <kiosk-location-picker (submitted)="bootstrapKiosk($event)" />
            </div>
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-70">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-70">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Setup is disabled while this kiosk is in public
                            mode.
                        </p>
                    </div>
                </div>
            }
        </div>
    `,
    imports: [
        PageHeadingDirective,
        DatePipe,
        KioskLocationPickerComponent,
        TranslatePipe,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _startup_action = '';
    private _last_query_params = '';

    public get version() {
        return VERSION;
    }

    public readonly is_public_mode = isPublicMode;

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        // Emits the current params at once, then on each later change
        this.subscription(
            'query_params',
            this._route.queryParamMap.subscribe(() => this.handleQueryParams()),
        );
        this.checkBootstrap();
    }

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public bootstrapKiosk(kiosk: KioskLocation) {
        saveKioskLocation(kiosk);
        this.navigateToStartupRoute();
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        if (this._startup_action === 'preferences') {
            this.navigateToStartupRoute();
            return;
        }
        if (hasKioskLocation()) {
            this._router.navigate(this.getStartupRoute());
        }
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
    }

    private getStartupRoute() {
        if (this._startup_action === 'preferences') {
            return ['/checkin', 'preferences'];
        }
        const path = this._settings.get('app.default_route') || 'welcome';
        const route = path.split('/');
        route[0] = `/${route[0]}`;
        return route;
    }

    private navigateToStartupRoute() {
        const route = this.getStartupRoute();
        if (route[0] === '/checkin' && route[1] === 'preferences') {
            this._router.navigate(route, {
                queryParams: this.getMergedQueryParamsFromUrl(),
            });
            return;
        }
        this._router.navigate(route);
    }

    private handleQueryParams() {
        const query_params = this.getMergedQueryParamsFromUrl();
        const query_key = JSON.stringify(query_params);
        if (query_key === this._last_query_params) return;
        this._last_query_params = query_key;
        this._startup_action = query_params.action?.trim().toLowerCase() || '';
        if (query_params.osk !== undefined) {
            const osk_enabled = query_params.osk === 'true';
            localStorage.setItem('OSK.enabled', `${osk_enabled}`);
        }
        if (query_params.clear === 'true') clearKioskLocation();
        if (query_params.level) {
            const level = this._org.levelWithID([query_params.level]);
            if (level) {
                this.bootstrapKiosk({
                    building: null,
                    level,
                    orientation: null,
                    location: null,
                });
            }
        }
    }

    private getMergedQueryParamsFromUrl() {
        const query_params: Record<string, string> = {};
        try {
            const parsed_url = new URL(
                window.location.href,
                window.location.origin,
            );
            parsed_url.searchParams.forEach((value, key) => {
                query_params[key] = value;
            });
            const hash_route = parsed_url.hash?.replace(/^#/, '') || '';
            const hash_query = hash_route.includes('?')
                ? hash_route.split('?')[1]
                : '';
            new URLSearchParams(hash_query).forEach((value, key) => {
                query_params[key] = value;
            });
        } catch {
            /* Ignore invalid URL and fallback to route params only */
        }
        this._route.snapshot.queryParamMap.keys.forEach((key) => {
            const value = this._route.snapshot.queryParamMap.get(key);
            if (value !== null) {
                query_params[key] = value;
            }
        });
        return query_params;
    }
}
