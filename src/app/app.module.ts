import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from 'src/app/app.component';
import { environment } from '../environments/environment';
import { SharedUIModule } from './ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        RouterModule.forRoot([]),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        SharedUIModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
