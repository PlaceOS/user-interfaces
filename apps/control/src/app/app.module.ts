import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { UIModule } from './ui/ui.module';
import { BootstrapComponent } from './bootstrap.component';
import { ControlMainViewComponent } from './main-view.component';
import { TopbarHeaderComponent } from './topbar-header.component';

import '@user-interfaces/mocks';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        ControlMainViewComponent,
        TopbarHeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        UIModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
