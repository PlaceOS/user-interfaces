import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedCateringModule } from '@placeos/catering';
import { ComponentsModule } from '@placeos/components';

import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CateringTopbarComponent } from './catering-topbar.component';
import { CateringComponent } from './catering.component';

import { MatRippleModule } from '@angular/material/core';
import { AssetsModule } from '@placeos/assets';
import { SharedExploreModule } from '@placeos/explore';
import { SharedSpacesModule } from '@placeos/spaces';
import * as Sentry from '@sentry/angular';

import { FormFieldsModule } from '@placeos/form-fields';
import { DateOptionsComponent } from 'apps/concierge/src/app/ui/date-options.component';

@NgModule({
    declarations: [
        AppComponent,
        CateringComponent,
        CateringTopbarComponent,
        DateOptionsComponent,
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
        MatTabsModule,
        MatChipsModule,
        SharedCateringModule,
        ComponentsModule,
        SharedSpacesModule,
        SharedExploreModule,
        FormFieldsModule,
        MatRippleModule,
        AssetsModule,
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
