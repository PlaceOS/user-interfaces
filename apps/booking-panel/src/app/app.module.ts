import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from '@placeos/components';
import { UnauthorisedComponent } from '@placeos/components';

import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';
import { AppComponent } from 'libs/components/src/lib/app.component';

import { BootstrapComponent } from './bootstrap.component';
import { BookingPanelComponent } from './panel/panel.component';
import { BookingPanelArrayComponent } from './panel-array.component';
import { BookingPanelSelectComponent } from './panel-select.component';
import { PanelTopbarComponent } from './panel/topbar.component';
import { PanelDetailsComponent } from './panel/panel-details.component';
import { PanelBookingListComponent } from './panel/panel-booking-list.component';

import * as Sentry from '@sentry/angular';
import { PanelStatusComponent } from './panel/panel-status.component';
import { MatRippleModule } from '@angular/material/core';
import { PanelTimelineComponent } from './panel/timeline.component';
import { AppPanelViewModule } from './new-panel/panel-view.module';
import { AppCheckinModule } from './checkin/checkin.module';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
        PanelTopbarComponent,
        PanelDetailsComponent,
        PanelStatusComponent,
        PanelBookingListComponent,
        PanelTimelineComponent,
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
        MatRippleModule,
        SharedOverlaysModule,
        AppPanelViewModule,
        AppCheckinModule,
        ComponentsModule,
        PaymentsModule,
        AssetsModule,
        ...MAT_MODULES,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
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
