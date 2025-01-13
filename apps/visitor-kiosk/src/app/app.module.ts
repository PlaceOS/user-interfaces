import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ErrorHandler,
    NgModule,
    inject,
    provideAppInitializer,
} from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
import { VisitorRegistrationComponent } from './visitor-registration.component';
import { FormFieldsModule } from '../../../../libs/form-fields/src/lib/form-fields.module';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        WelcomeComponent,
        VisitorRegistrationComponent,
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
        ComponentsModule,
        SharedSpacesModule,
        SharedComponentsModule,
        SharedBookingsModule,
        PaymentsModule,
        AssetsModule,
        FormFieldsModule,
        ReactiveFormsModule,
        FormFieldsModule,
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

        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class AppModule {}
