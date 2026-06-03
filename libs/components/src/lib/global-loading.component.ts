import { Component, inject, OnInit, signal } from '@angular/core';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    getLoadingMessage,
    nativeDomainError,
    needsNativeDomain,
    OrganisationService,
    PlaceOS_Service,
    SettingsService,
} from '@placeos/common';
import { authority, isOnline, token } from '@placeos/ts-client';

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
                (domainSet)="onDomainSet()"
            ></native-domain-overlay>
        }
        @if (!online()) {
            <div
                class="bg-error fixed top-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs text-white shadow-sm"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (loading()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex flex-col items-center justify-end space-y-2 p-4"
            >
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
    private _org = inject(OrganisationService);
    private _placeos = inject(PlaceOS_Service);
    private _settings = inject(SettingsService);

    public loading = signal(true);
    public readonly online = signal(true);
    public readonly message = getLoadingMessage();
    public readonly show_domain_overlay = needsNativeDomain();
    public readonly domain_error = nativeDomainError();

    public onDomainSet(): void {
        this._placeos.onNativeDomainSet();
    }

    public async ngOnInit() {
        this.loading.set(true);
        await firstTruthyValueFrom(this._org.initialised);
        await firstTruthyValueFrom(this._settings.initialised);
        this.online.set(isOnline());
        this.interval(
            'has_token',
            () => {
                this.online.set(isOnline());
                if (!authority() || !token()) return;
                this.loading.set(false);
                this.online.set(isOnline());
                this.clearInterval('has_token');
            },
            1000,
        );
    }
}
