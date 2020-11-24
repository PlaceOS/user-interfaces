import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import '@user-interfaces/mocks';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from '@user-interfaces/components';
import { UnauthorisedComponent } from '@user-interfaces/components';

import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BookingPanelComponent } from './panel/panel.component';
import { PanelTimelineComponent } from './panel/timeline/timeline.component';
import { PanelSpaceDetailsComponent } from './panel/space-details/space-details.component';
import { PanelBookingActionsComponent } from './panel/booking-actions/booking-actions.component';
import { PanelCustomActionsComponent } from './panel/custom-actions/custom-actions.component';
import { BookingPanelArrayComponent } from './panel-array/panel-array.component';
import { BookingPanelSelectComponent } from './panel-select/panel-select.component';

import * as Sentry from "@sentry/angular";

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
];

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent,
        BootstrapComponent,
        BookingPanelComponent,
        PanelTimelineComponent,
        PanelSpaceDetailsComponent,
        PanelBookingActionsComponent,
        PanelCustomActionsComponent,
        BookingPanelArrayComponent,
        BookingPanelSelectComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSnackBarModule,
        SharedOverlaysModule,
        ComponentsModule,
        ...MAT_MODULES,
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
export class AppModule {
    constructor() {
        console.log('Production:', !!environment.production);
    }
}
