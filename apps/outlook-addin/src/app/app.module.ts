import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeskBookingComponent } from './desks/desk-booking.component';
import { DeskBookingFormComponent } from './desks/desk-form.component';
import { DeskBookingSuccessComponent } from './desks/desk-success.component';
import { MeetingBookingComponent } from './meetings/meeting-booking.component';
import { MeetingBookingFormComponent } from './meetings/meeting-form.component';
import { MeetingBookingSuccessComponent } from './meetings/meeting-success.component';
import { NotFoundComponent } from './not-found.component';
import { BookModule } from './rooms/book.module';

import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';

const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,

    NotFoundComponent,

    DeskBookingComponent,
    DeskBookingFormComponent,
    DeskBookingSuccessComponent,

    MeetingFlowConfirmComponent,
    MeetingBookingComponent,
    MeetingBookingFormComponent,
    MeetingBookingSuccessComponent,
];

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BookModule,
        ...STANDALONE_COMPONENTS,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class AppModule {}
