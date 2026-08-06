import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
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
        const buildings = await Promise.all(
            zones.map(async (zone) => ({
                zone,
                levels: await placeos.getZones('level', zone.id),
            })),
        );
        await store.syncPlaceOSZones(buildings);
    } catch (error) {
        console.warn('Failed to create projects from PlaceOS zones', error);
    }
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(initialisePlaceOS),
        provideAnimations(),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
};
