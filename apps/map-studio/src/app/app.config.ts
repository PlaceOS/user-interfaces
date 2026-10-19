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
import { PlaceOSService, PlaceOSZone } from './data/placeos.service';
import { StoreService } from './data/store.service';

/** Level requests in flight at once during zone sync */
const SYNC_CONCURRENCY = 6;

async function initialisePlaceOS() {
    const placeos = inject(PlaceOSService);
    const store = inject(StoreService);
    await placeos.init();
    if (placeos.mode() !== 'domain') return;
    // Kiosks only display existing floors and reload often
    if (window.location.hash.startsWith('#/kiosk')) return;

    // Zone import can take a while on large deployments. It must not hold
    // Angular bootstrap open because the editor can render without it.
    void syncPlaceOSZones(placeos, store);
}

async function syncPlaceOSZones(
    placeos: PlaceOSService,
    store: StoreService,
): Promise<void> {
    try {
        const organisation = await placeos.getActiveOrganisation();
        if (!organisation) return;
        const regions = await placeos.getZones('region', organisation.id);
        const building_lists = await Promise.all(
            [organisation, ...regions].map((parent) =>
                placeos.getZones('building', parent.id),
            ),
        );
        const zones_by_id = new Map(
            building_lists.flat().map((zone) => [zone.id, zone]),
        );
        const zones = [...zones_by_id.values()];
        const buildings: { zone: PlaceOSZone; levels: PlaceOSZone[] }[] = [];
        // A few buildings at a time, so large deployments do not flood the API
        for (let i = 0; i < zones.length; i += SYNC_CONCURRENCY) {
            buildings.push(
                ...(await Promise.all(
                    zones.slice(i, i + SYNC_CONCURRENCY).map(async (zone) => ({
                        zone,
                        levels: await placeos.getZones('level', zone.id),
                    })),
                )),
            );
        }
        await store.syncPlaceOSZones(buildings);
    } catch (error) {
        console.warn('Failed to create projects from PlaceOS zones', error);
    }
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
