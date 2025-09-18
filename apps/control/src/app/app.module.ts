import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from '../environments/environment';
import { ControlAdvancedViewComponent } from './advanced-view.component';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { ControlMainViewComponent } from './main-view.component';
import { ControlPageViewComponent } from './page-view.component';
import { ControlStatusBarComponent } from './status-bar.component';
import { TopbarHeaderComponent } from './topbar-header.component';
import { UIModule } from './ui/ui.module';

import { VideoCallPageComponent } from './video-call/video-call-page.component';
import { ControlVideoCallViewComponent } from './video-call/video-call-view.component';

import { DeviceOutputListItemComponent } from './tabbed-view/output-list-item.component';
import { DeviceOutputListComponent } from './tabbed-view/output-list.component';
import { TabOutletComponent } from './tabbed-view/tab-outlet.component';
import { ControlTabbedViewComponent } from './tabbed-view/tabbed-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Sentry from '@sentry/angular';
import { TVControlsComponent } from './tabbed-view/tv-controls.component';

import { MatMenuModule } from '@angular/material/menu';
import {
    AuthenticatedImageDirective,
    BindingDirective,
    CustomTooltipComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    SafePipe,
    TranslatePipe,
} from '@placeos/components';
import { AppComponent } from './app.component';

const STANDALONE_COMPONENTS = [
    AuthenticatedImageDirective,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    TranslatePipe,
    BindingDirective,
    SafePipe,
    CustomTooltipComponent,
];

const MAT_MODULES = [
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSliderModule,
];

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        ControlMainViewComponent,
        ControlVideoCallViewComponent,
        TopbarHeaderComponent,
        ControlPageViewComponent,
        ControlStatusBarComponent,
        ControlAdvancedViewComponent,
        VideoCallPageComponent,
        ControlTabbedViewComponent,
        DeviceOutputListComponent,
        DeviceOutputListItemComponent,
        TabOutletComponent,
        TVControlsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        ...MAT_MODULES,
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
