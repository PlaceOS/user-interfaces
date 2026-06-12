import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import {
    AuthorisedUserGuard,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    UnauthorisedComponent,
} from '@placeos/components';

import { environment } from '../environments/environment';
import { SpaceEventDetailsComponent } from './space-event-details.component';
import { SpaceTimetableComponent } from './space-timetable.component';
import { AppTimetableComponent } from './timetable.component';

import * as Sentry from '@sentry/angular';
import { AppComponent } from './app.component';

const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,
    UnauthorisedComponent,
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        AppTimetableComponent,
        SpaceTimetableComponent,
        SpaceEventDetailsComponent,
        ...STANDALONE_COMPONENTS,
        RouterModule.forRoot(
            [
                { path: 'unauthorised', component: UnauthorisedComponent },
                {
                    path: '',
                    component: AppTimetableComponent,
                    canActivate: [AuthorisedUserGuard],
                },
                { path: '**', redirectTo: '' },
            ],
            { useHash: true },
        ),
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
