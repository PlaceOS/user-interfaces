import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule } from '@angular/material/core';

import '@user-interfaces/mocks';

import { UnauthorisedComponent } from '@user-interfaces/components';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedContentModule } from './ui/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        FormsModule,
        SharedOverlaysModule,
        SharedContentModule,
        MatNativeDateModule,
        MatSnackBarModule,
    ],
    providers: [
        { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'nevet'} }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
