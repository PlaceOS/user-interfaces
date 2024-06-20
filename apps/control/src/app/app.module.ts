import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { TVControlsComponent } from './tabbed-view/tv-controls.component';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedExploreModule } from '@placeos/explore';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
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
            provide: APP_INITIALIZER,
            useFactory: () => () => {},
            deps: [Sentry.TraceService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
