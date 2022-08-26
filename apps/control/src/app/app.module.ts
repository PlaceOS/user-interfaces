import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { UIModule } from './ui/ui.module';
import { BootstrapComponent } from './bootstrap.component';
import { ControlMainViewComponent } from './main-view.component';
import { TopbarHeaderComponent } from './topbar-header.component';
import { ControlPageViewComponent } from './page-view.component';
import { ControlStatusBarComponent } from './status-bar.component';
import { ControlAdvancedViewComponent } from './advanced-view.component';

import { ControlVideoCallViewComponent } from './video-call/video-call-view.component';
import { VideoCallPageComponent } from './video-call/video-call-page.component';

import { ControlTabbedViewComponent } from './tabbed-view/tabbed-view.component';
import { TabOutletComponent } from './tabbed-view/tab-outlet.component';
import { DeviceOutputListComponent } from './tabbed-view/output-list.component';
import { DeviceOutputListItemComponent } from './tabbed-view/output-list-item.component';

import * as Sentry from '@sentry/angular';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';

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
        TabOutletComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        UIModule,
        MatSliderModule,
        PaymentsModule,
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
