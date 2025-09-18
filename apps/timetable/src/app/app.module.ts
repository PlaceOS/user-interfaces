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
    AuthenticatedImageDirective,
    BindingDirective,
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
} from '@placeos/components';

import { environment } from '../environments/environment';
import { SpaceEventDetailsComponent } from './space-event-details.component';
import { SpaceTimetableComponent } from './space-timetable.component';
import { AppTimetableComponent } from './timetable.component';

import * as Sentry from '@sentry/angular';
import { AppComponent } from './app.component';

const STANDALONE_COMPONENTS = [
    BindingDirective,
    AuthenticatedImageDirective,
    GlobalLoadingComponent,
    GlobalBannerComponent,
    ChatComponent,
    IconComponent,
];

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
        MatSnackBarModule,
        ...STANDALONE_COMPONENTS,
        RouterModule.forRoot(
            [
                { path: '', component: AppTimetableComponent },
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
