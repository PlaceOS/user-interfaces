import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { LocaleService } from '@placeos/common';
import * as Sentry from '@sentry/angular';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MediaDurationPipe } from 'libs/components/src/lib/media-duration.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
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
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule,
        IconComponent,
        GlobalLoadingComponent,
        GlobalBannerComponent,
        TranslatePipe,
        MediaDurationPipe,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
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

        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
