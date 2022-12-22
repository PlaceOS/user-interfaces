import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';
import { SharedCateringModule } from '@placeos/catering';
import { FormFieldsModule } from '@placeos/form-fields';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './rooms/book.module';
import { SharedComponentModule } from './components/shared.module';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { DeskBookingComponent } from './desks/desk-booking.component';
import { DeskBookingFormComponent } from './desks/desk-form.component';
import { DeskBookingSuccessComponent } from './desks/desk-success.component';
import { MeetingBookingComponent } from './meetings/meeting-booking.component';
import { MeetingBookingFormComponent } from './meetings/meeting-form.component';
import { MeetingBookingSuccessComponent } from './meetings/meeting-success.component';
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';

@NgModule({
    declarations: [
        AppComponent,

        DeskBookingComponent,
        DeskBookingFormComponent,
        DeskBookingSuccessComponent,

        MeetingBookingComponent,
        MeetingBookingFormComponent,
        MeetingBookingSuccessComponent,
        MeetingFlowConfirmComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BookModule,
        SharedComponentModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatNativeDateModule,
        MatSnackBarModule,
        PaymentsModule,
        AssetsModule,
        FormFieldsModule,
        ReactiveFormsModule,
        SharedCateringModule,

        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [SpacePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
