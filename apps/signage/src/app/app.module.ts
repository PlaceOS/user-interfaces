import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    inject,
    provideAppInitializer,
} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

import { ComponentsModule } from '@placeos/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { BootstrapComponent } from './bootstrap.component';

import * as Sentry from '@sentry/angular';
import { SignagePanelComponent } from './signage.component';
import { PaymentsModule } from 'libs/payments/src/lib/payments.module';
import { SharedSpacesModule } from '@placeos/spaces';
import { SharedExploreModule } from '@placeos/explore';
import { MediaPlayerComponent } from './media-player.component';
import { LocaleService } from '@placeos/common';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        SignagePanelComponent,
        MediaPlayerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        SharedSpacesModule,
        ComponentsModule,
        SharedExploreModule,
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

        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
