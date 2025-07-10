import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Route, Router, RouterModule } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { EnrolmentErrorComponent } from './enrolment-error.component';
import { EnrolmentEventDetailsComponent } from './enrolment-event-details.component';
import { EnrolmentGuestConfirmComponent } from './enrolment-guest-confirm.component';
import { EnrolmentComponent } from './enrolment.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as Sentry from '@sentry/angular';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

const ROUTES: Route[] = [
    { path: '', component: EnrolmentComponent },
    { path: ':view', component: EnrolmentComponent },
    { path: '**', redirectTo: '' },
];

const STANADALONE_COMPONENTS = [
    GlobalBannerComponent,
    IconComponent,
    TranslatePipe,
    AuthenticatedImageDirective,
];

const MAT_MODULES = [
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
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
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ...MAT_MODULES,
        ...STANADALONE_COMPONENTS,
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
