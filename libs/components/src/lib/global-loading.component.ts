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
import { isOnline } from '@placeos/ts-client';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NativeDomainOverlayComponent } from './native-domain-overlay.component';
import { ServiceWorkerUpdateCardComponent } from './service-worker-update-card.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'global-loading',
    template: `
        @if (show_domain_overlay()) {
            <native-domain-overlay
                [serverError]="domain_error()"
                [autoAccept]="auto_confirm()"
                (domainSet)="onDomainSet()"
            ></native-domain-overlay>
        }
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
        NativeDomainOverlayComponent,
        ServiceWorkerUpdateCardComponent,
        TranslatePipe,
    ],
})
export class GlobalLoadingComponent extends AsyncHandler implements OnInit {
    private _placeos = inject(PlaceOS_Service);

    public readonly online = signal(true);
    public readonly connection_checked = signal(false);
    public readonly message = getLoadingMessage();
    public readonly show_domain_overlay = needsNativeDomain();
    public readonly domain_error = nativeDomainError();
    public readonly auto_confirm = autoConfirmNativeDomain();
    public readonly initialisation_error = initialisationFailure();
    public readonly initialisation_complete = initialisationComplete();
    public readonly loading = computed(() => !this.initialisation_complete());

    public retry(): void {
        retryInitialisation();
    }

    public onDomainSet(): void {
        this._placeos.onNativeDomainSet();
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
        update_online();
        this.interval('online', update_online, 1000);
    }
}
