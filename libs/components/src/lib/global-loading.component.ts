import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    AsyncHandler,
    autoConfirmNativeDomain,
    getLoadingMessage,
    initialisationComplete,
    initialisationFailure,
    nativeDomainError,
    needsNativeDomain,
    PlaceOS_Service,
    retryInitialisation,
} from '@placeos/common';
import { authority, isOnline } from '@placeos/ts-client';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NativeDomainOverlayComponent } from './native-domain-overlay.component';
import { ServiceWorkerUpdateCardComponent } from './service-worker-update-card.component';
import { TranslatePipe } from './translate.pipe';

/** Local storage key for the last gradient, so a reload has no colour change */
const GRADIENT_CACHE_KEY = 'PLACEOS.loading_gradient';
/** Hex, named and functional CSS colours. No `url()` or other CSS values */
const CSS_COLOUR =
    /^(#[0-9a-f]{3,8}|[a-z]+|(rgba?|hsla?|oklch|oklab)\([\w\s.,%/-]+\))$/i;

/**
 * CSS gradient for a list of two or more CSS colours.
 * Returns an empty string when the list is not valid.
 */
export function loadingGradient(colours: unknown): string {
    if (!Array.isArray(colours) || colours.length < 2) return '';
    const valid = colours.every(
        (colour) =>
            typeof colour === 'string' && CSS_COLOUR.test(colour.trim()),
    );
    return valid ? `linear-gradient(to right, ${colours.join(', ')})` : '';
}

/**
 * Shows the native domain form when the app needs a domain. Only native apps
 * without a domain need it, so its Material form fields load on demand. The
 * defer block lives here so `GlobalLoadingComponent` stays easy to mock.
 */
@Component({
    selector: 'native-domain-overlay-loader',
    template: `
        @if (show()) {
            @defer (on immediate) {
                <native-domain-overlay
                    [serverError]="domain_error()"
                    [autoAccept]="auto_confirm()"
                    (domainSet)="onDomainSet()"
                ></native-domain-overlay>
            }
        }
    `,
    imports: [NativeDomainOverlayComponent],
})
export class NativeDomainOverlayLoaderComponent {
    private _placeos = inject(PlaceOS_Service);

    public readonly show = needsNativeDomain();
    public readonly domain_error = nativeDomainError();
    public readonly auto_confirm = autoConfirmNativeDomain();

    public onDomainSet(): void {
        this._placeos.onNativeDomainSet();
    }
}

@Component({
    selector: 'global-loading',
    template: `
        <native-domain-overlay-loader />
        @if (connection_checked() && !online()) {
            <div
                class="bg-error fixed top-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs text-white shadow-sm"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (loading() || initialisation_error()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex flex-col items-center justify-end space-y-2 p-4"
                [style.background-image]="gradient() || null"
            >
                @if (initialisation_error()) {
                    <div
                        class="border-base-300 bg-base-100 w-[24rem] max-w-[calc(100vw-2rem)] rounded-lg border p-4 text-center text-xs shadow-sm"
                    >
                        <p initialisation-error>
                            {{ initialisation_error() }}
                        </p>
                        <button
                            type="button"
                            class="bg-primary text-primary-content mt-3 rounded px-4 py-2"
                            (click)="retry()"
                        >
                            Try again
                        </button>
                    </div>
                } @else {
                    <div
                        class="border-base-300 bg-base-100 w-[24rem] max-w-[calc(100vw-2rem)] rounded-lg border p-2 text-center text-xs shadow-sm"
                    >
                        <p class="text-center font-mono">{{ message() }}</p>
                    </div>
                    <div
                        class="border-base-300 w-[24rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-full border shadow-sm"
                    >
                        <mat-progress-bar
                            mode="indeterminate"
                            class="scale-150 rounded-sm"
                        ></mat-progress-bar>
                    </div>
                }
            </div>
        }
        <placeos-service-worker-update-card />
    `,
    styles: [
        `
            :host {
                pointer-events: none;
            }

            [loader] {
                background-image: linear-gradient(
                    to right,
                    #0d47a1 0%,
                    #2196f3 100%
                );
            }
        `,
    ],
    imports: [
        MatProgressBarModule,
        NativeDomainOverlayLoaderComponent,
        ServiceWorkerUpdateCardComponent,
        TranslatePipe,
    ],
})
export class GlobalLoadingComponent extends AsyncHandler implements OnInit {
    public readonly online = signal(true);
    public readonly connection_checked = signal(false);
    public readonly message = getLoadingMessage();
    public readonly initialisation_error = initialisationFailure();
    public readonly initialisation_complete = initialisationComplete();
    public readonly loading = computed(() => !this.initialisation_complete());
    /**
     * Background of the loading screen, from the `loading_gradient` list of
     * colours in the domain config. Empty for the default gradient.
     */
    public readonly gradient = signal(
        localStorage.getItem(GRADIENT_CACHE_KEY) || '',
    );

    public retry(): void {
        retryInitialisation();
    }

    public ngOnInit() {
        const update_online = () => {
            this.online.set(isOnline());
            if (this.online()) {
                this.connection_checked.set(true);
                this.clearTimeout('initial-connection');
            }
        };
        // The client reports offline while the first authority request is pending.
        this.timeout(
            'initial-connection',
            () => {
                update_online();
                this.connection_checked.set(true);
            },
            5000,
        );
        // Settings load after this screen shows, so the colours come from
        // the domain. Keep the last known gradient until the domain loads.
        const update_gradient = () => {
            const domain = authority();
            if (!domain) return;
            const gradient = loadingGradient(domain.config?.loading_gradient);
            if (gradient === this.gradient()) return;
            this.gradient.set(gradient);
            localStorage.setItem(GRADIENT_CACHE_KEY, gradient);
        };
        update_online();
        update_gradient();
        this.interval(
            'online',
            () => {
                update_online();
                update_gradient();
            },
            1000,
        );
    }
}
