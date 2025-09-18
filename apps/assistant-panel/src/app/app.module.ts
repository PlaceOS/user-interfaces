import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as Sentry from '@sentry/angular';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap.component';
import { PanelViewComponent } from './panel-view.component';

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatRippleModule,
    MatAutocompleteModule,
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
        ...MAT_MODULES,
        GlobalLoadingComponent,
        GlobalBannerComponent,
        IconComponent,
        TranslatePipe,
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

        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class AppModule {
    constructor() {
        console.log('Production:', !!environment.production);
    }
}
