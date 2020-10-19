import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';

import '@user-interfaces/mocks';

import { AppComponent } from '../../../../libs/components/src/lib/app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedContentModule } from './ui/shared.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { WelcomeComponent } from './welcome.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, BootstrapComponent, WelcomeComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        FormsModule,
        SharedOverlaysModule,
        SharedContentModule,
    ],
    providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }],
    bootstrap: [AppComponent],
})
export class AppModule {}
