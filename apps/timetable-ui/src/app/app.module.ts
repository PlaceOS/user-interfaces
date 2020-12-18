import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as Sentry from '@sentry/angular';
import '@user-interfaces/mocks';

import { environment } from '../environments/environment';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimelinePositionPipe } from './pipes/timeline-position.pipe';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PanelComponent } from './panel/panel.component';
import { PanelClockComponent } from './panel/clock/clock.component';
import { PanelEventsComponent } from './panel/events/events.component';
import { PanelHeaderComponent } from './panel/header/header.component';
import { PanelTimelineComponent } from './panel/timeline/timeline.component';
import { PanelProgressComponent } from './panel/progress/progress.component';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        PanelComponent,
        PanelClockComponent,
        PanelEventsComponent,
        PanelHeaderComponent,
        PanelProgressComponent,
        PanelTimelineComponent,
        TimelinePositionPipe,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
