import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { ComponentsModule } from '@placeos/components';

import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';

import { LocaleService } from '@placeos/common';
import { SharedExploreModule } from '@placeos/explore';
import { PaymentsModule } from '@placeos/payments';
import { SharedSpacesModule } from '@placeos/spaces';
import * as Sentry from '@sentry/angular';
import { MediaPlayerComponent } from './media-player.component';
import { SignagePanelComponent } from './signage.component';

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
        PaymentsModule,
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
