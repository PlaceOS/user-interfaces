import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { PlaceOSService } from './data/placeos.service';
import { StoreService } from './data/store.service';

async function initialisePlaceOS() {
    const placeos = inject(PlaceOSService);
    const store = inject(StoreService);
    await placeos.init();
    if (placeos.mode() !== 'domain') return;
    // Kiosks only display existing floors and reload often
    if (window.location.hash.startsWith('#/kiosk')) return;

    // Zone import can take a while on large deployments. It must not hold
    // Angular bootstrap open because the editor can render without it. The
    // projects page shows its progress through `store.placeos_sync`.
    void store.syncFromPlaceOS();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(initialisePlaceOS),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
};
