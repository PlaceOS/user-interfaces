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

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() => inject(PlaceOSService).init()),
        provideAnimations(),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
};
