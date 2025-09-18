import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { LocaleService } from '@placeos/common';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ServiceWorkerModule } from '@angular/service-worker';

import { registerLocaleData } from '@angular/common';

import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { VisitorRegistrationComponent } from './visitor-registration.component';
import { WelcomeComponent } from './welcome.component';

import * as Sentry from '@sentry/angular';

import { IconComponent, TranslatePipe } from '@placeos/components';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {
    AuthenticatedImageDirective,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    SanitizePipe,
} from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import { AppComponent } from './app.component';
import { TopbarHeaderComponent } from './components/topbar-header.component';

const MAT_MODULES = [
    MatProgressSpinner,
    MatRippleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
];

const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,
    IconComponent,
    TranslatePipe,
    SanitizePipe,
    AuthenticatedImageDirective,
    UserSearchFieldComponent,
];

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        WelcomeComponent,
        VisitorRegistrationComponent,
        TopbarHeaderComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        FormsModule,
        ReactiveFormsModule,
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
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
