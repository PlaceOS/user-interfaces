import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';

import { ComponentsModule, UnauthorisedComponent } from '@placeos/components';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { BootstrapComponent } from './bootstrap.component';

import * as Sentry from '@sentry/angular';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SignagePanelComponent } from './signage.component';
import { PaymentsModule } from 'libs/payments/src/lib/payments.module';
import { SharedSpacesModule } from '@placeos/spaces';
import { SharedExploreModule } from '@placeos/explore';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent,
        BootstrapComponent,
        SignagePanelComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        SharedSpacesModule,
        ComponentsModule,
        SharedExploreModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
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
            useFactory: () => () => {},
            deps: [Sentry.TraceService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
