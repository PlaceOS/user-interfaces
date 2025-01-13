import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ErrorHandler,
    NgModule,
    inject,
    provideAppInitializer,
} from '@angular/core';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

import { ComponentsModule } from 'libs/components/src/lib/components.module';

import * as Sentry from '@sentry/angular';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AppComponent } from 'libs/components/src/lib/app.component';

import { BootstrapComponent } from './bootstrap.component';
import { PanelViewComponent } from './panel-view.component';

import { SharedExploreModule } from '@placeos/explore';
import { PaymentsModule } from '@placeos/payments';

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatRippleModule,
];

@NgModule({
    declarations: [AppComponent, BootstrapComponent, PanelViewComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        ...MAT_MODULES,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        SharedExploreModule,
        PaymentsModule,
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

        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class AppModule {
    constructor() {
        console.log('Production:', !!environment.production);
    }
}
