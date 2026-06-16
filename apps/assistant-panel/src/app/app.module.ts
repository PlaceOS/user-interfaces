import {
    provideHttpClient,
    withInterceptorsFromDi,
    withXhr,
} from '@angular/common/http';
import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import * as Sentry from '@sentry/angular';

import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    UnauthorisedComponent,
} from '@placeos/components';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap.component';
import { PanelViewComponent } from './panel-view.component';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        ChatComponent,
        GlobalLoadingComponent,
        GlobalBannerComponent,
        UnauthorisedComponent,
        BootstrapComponent,
        PanelViewComponent,
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

        provideHttpClient(withXhr(), withInterceptorsFromDi()),
    ],
})
export class AppModule {
    constructor() {
        console.log('Production:', !!environment.production);
    }
}
