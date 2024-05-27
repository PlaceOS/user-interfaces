import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { UnauthorisedComponent } from '@placeos/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { UIModule } from './ui/ui.module';

import * as Sentry from '@sentry/angular';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({ declarations: [AppComponent, UnauthorisedComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        UIModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        })], providers: [
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA],
            },
        },
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
            provide: APP_INITIALIZER,
            useFactory: () => () => { },
            deps: [Sentry.TraceService],
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
