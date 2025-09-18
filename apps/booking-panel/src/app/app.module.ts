import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';

import { MatRippleModule } from '@angular/material/core';
import * as Sentry from '@sentry/angular';
import { BootstrapComponent } from './bootstrap.component';
import { AppCheckinModule } from './checkin/checkin.module';
import { EventPanelComponent } from './event-panel.component';
import { AppPanelViewModule } from './new-panel/panel-view.module';

import { LocaleService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    SafePipe,
    TranslatePipe,
} from '@placeos/components';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import { MatDialogModule } from '@angular/material/dialog';
import { SanitizePipe } from '@placeos/components';
import { AppComponent } from './app.component';

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDialogModule,
];

const STANDALONE_COMPONENTS = [
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    AuthenticatedImageDirective,
    TranslatePipe,
    SafePipe,
    SanitizePipe,
];

@NgModule({
    declarations: [AppComponent, BootstrapComponent, EventPanelComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        SharedOverlaysModule,
        AppPanelViewModule,
        AppCheckinModule,
        ...MAT_MODULES,
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
})
export class AppModule {
    constructor() {
        registerLocaleData(localeFr);
        registerLocaleData(localeAr);
        registerLocaleData(localeJa);
        registerLocaleData(localeZh);
        registerLocaleData(localeEs);
        registerLocaleData(localeIt);
    }
}
