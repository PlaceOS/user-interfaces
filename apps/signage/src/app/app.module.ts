import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import { LocaleService } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import * as Sentry from '@sentry/angular';

import { AppComponent } from './app.component';
import { MediaPlayerComponent } from './media-player.component';
import { SignagePanelComponent } from './signage.component';

const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,

    BootstrapComponent,
    SignagePanelComponent,
    MediaPlayerComponent,
];

registerLocaleData(localeFr);
registerLocaleData(localeAr);
registerLocaleData(localeJa);
registerLocaleData(localeZh);
registerLocaleData(localeEs);
registerLocaleData(localeIt);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ...STANDALONE_COMPONENTS,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [
        provideZonelessChangeDetection(),
        {
            provide: ErrorHandler,
            useValue: Sentry.createErrorHandler({
                showDialog: false,
            }),
        },
        {
            provide: Sentry.TraceService,
            deps: [Router],
        },

        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
