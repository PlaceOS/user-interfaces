import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setPublicMode } from '@placeos/common';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

setPublicMode(new URLSearchParams(location.search).has('public'));

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
