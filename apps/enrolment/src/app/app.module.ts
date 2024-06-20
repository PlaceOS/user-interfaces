import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Route, Router, RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { FormFieldsModule } from '@placeos/form-fields';

import { AppComponent } from './app.component';
import { EnrolmentErrorComponent } from './enrolment-error.component';
import { EnrolmentEventDetailsComponent } from './enrolment-event-details.component';
import { EnrolmentGuestConfirmComponent } from './enrolment-guest-confirm.component';
import { EnrolmentComponent } from './enrolment.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import * as Sentry from '@sentry/angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';
import { SharedSpacesModule } from '@placeos/spaces';
import { SharedExploreModule } from '@placeos/explore';

const ROUTES: Route[] = [
    { path: '', component: EnrolmentComponent },
    { path: ':view', component: EnrolmentComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [
        AppComponent,
        EnrolmentComponent,
        EnrolmentEventDetailsComponent,
        EnrolmentGuestConfirmComponent,
        EnrolmentErrorComponent,
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        FormFieldsModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        PaymentsModule,
        AssetsModule,
        SharedSpacesModule,
        SharedExploreModule,
        RouterModule.forRoot(ROUTES, {
            initialNavigation: 'enabledBlocking',
            useHash: true,
        }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
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
