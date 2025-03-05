import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from '../../../../libs/components/src/lib/app.component';
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

import { AssetsModule } from '@placeos/assets';
import { SharedExploreModule } from '@placeos/explore';
import { PaymentsModule } from '@placeos/payments';
import * as Sentry from '@sentry/angular';
import { TVControlsComponent } from './tabbed-view/tv-controls.component';

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
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        UIModule,
        MatSliderModule,
        PaymentsModule,
        AssetsModule,
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
