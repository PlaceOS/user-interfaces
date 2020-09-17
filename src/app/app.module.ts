import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from 'src/app/app.component';
import { environment } from '../environments/environment';
import { SharedUIModule } from './ui/ui.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        SharedUIModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
