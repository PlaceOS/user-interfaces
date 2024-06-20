import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsModule } from '@placeos/components';

import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { AppTimetableComponent } from './timetable.component';
import { SpaceTimetableComponent } from './space-timetable.component';
import { SpaceEventDetailsComponent } from './space-event-details.component';
import { environment } from '../environments/environment';

import * as Sentry from '@sentry/angular';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';
import { SharedExploreModule } from '@placeos/explore';

@NgModule({
    declarations: [
        AppComponent,
        AppTimetableComponent,
        SpaceTimetableComponent,
        SpaceEventDetailsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentsModule,
        MatSnackBarModule,
        PaymentsModule,
        AssetsModule,
        SharedExploreModule,
        RouterModule.forRoot(
            [
                { path: '', component: AppTimetableComponent },
                { path: '**', redirectTo: '' },
            ],
            { useHash: true }
        ),
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
