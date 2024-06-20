import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ComponentsModule, UnauthorisedComponent } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';
import { FormFieldsModule } from '@placeos/form-fields';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import * as Sentry from '@sentry/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';
import { SharedBookingsModule } from '@placeos/bookings';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { BootstrapComponent } from './bootstrap.component';
import { ExploreComponent } from './explore.component';
import { ExploreLevelSelectComponent } from './explore-level-select.component';
import { ExploreMapStackComponent } from './explore-map-stack.component';
import { FooterMenuComponent } from './footer-menu.component';
import { DeskBookingComponent } from './desk-booking.component';
import { AccessibilityControlsComponent } from './accessibility-controls.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent,
        BootstrapComponent,
        ExploreComponent,
        ExploreLevelSelectComponent,
        ExploreMapStackComponent,
        DeskBookingComponent,
        FooterMenuComponent,
        AccessibilityControlsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        ComponentsModule,
        FormFieldsModule,
        SharedExploreModule,
        SharedBookingsModule,
        PaymentsModule,
        AssetsModule,
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
