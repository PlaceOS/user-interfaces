import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from '../../../../libs/components/src/lib/app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { BootstrapComponent } from './bootstrap.component';
import { WelcomeComponent } from './welcome.component';
import { environment } from '../environments/environment';

import * as Sentry from '@sentry/angular';
import { ComponentsModule } from '@placeos/components';
import { SharedSpacesModule } from '@placeos/spaces';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';
import { SharedBookingsModule } from '@placeos/bookings';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({ declarations: [AppComponent, BootstrapComponent, WelcomeComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        FormsModule,
        ComponentsModule,
        SharedSpacesModule,
        SharedComponentsModule,
        SharedBookingsModule,
        PaymentsModule,
        AssetsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        })], providers: [
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
