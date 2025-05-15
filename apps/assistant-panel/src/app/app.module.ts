import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ComponentsModule } from 'libs/components/src/lib/components.module';

import * as Sentry from '@sentry/angular';

import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

import { BootstrapComponent } from './bootstrap.component';
import { PanelViewComponent } from './panel-view.component';

import { SharedExploreModule } from '@placeos/explore';

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
