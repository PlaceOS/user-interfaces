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

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { LocaleService } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import * as Sentry from '@sentry/angular';

import { AppComponent } from './app.component';
import { MediaControlsComponent } from './media-controls.component';
import { MediaPlayerComponent } from './media-player.component';
import { PlaylistDisplayComponent } from './playlist-display.component';
import { SignagePanelComponent } from './signage.component';
import { TimeControlsComponent } from './time-controls.component';

const STANDALONE_COMPONENTS = [
    MediaControlsComponent,
    TimeControlsComponent,
    PlaylistDisplayComponent,

    IconComponent,
    GlobalLoadingComponent,
    GlobalBannerComponent,
    TranslatePipe,
    MediaDurationPipe,
];

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
        ...STANDALONE_COMPONENTS,
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
