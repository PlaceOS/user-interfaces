import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { setPublicMode } from '@placeos/common';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

setPublicMode(new URLSearchParams(location.search).has('public'));

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
);
