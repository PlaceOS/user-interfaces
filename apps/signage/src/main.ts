import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { resetBootRetries, scheduleBootRetry } from './app/watchdog';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

// The recovery watchdog starts inside the application, so a failed start is
// retried here or the display stays blank until someone power-cycles it.
bootstrapApplication(AppComponent, appConfig)
    .then(() => resetBootRetries())
    .catch((err) => {
        console.error(err);
        scheduleBootRetry();
    });
