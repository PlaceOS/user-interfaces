import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AssetsModule } from '@placeos/assets';
import { SharedCateringModule } from '@placeos/catering';
import { SharedExploreModule } from '@placeos/explore';
import { FormFieldsModule } from '@placeos/form-fields';

import { MatSelectModule } from '@angular/material/select';
import { SharedSpacesModule } from '@placeos/spaces';
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './components/shared.module';
import { DeskBookingComponent } from './desks/desk-booking.component';
import { DeskBookingFormComponent } from './desks/desk-form.component';
import { DeskBookingSuccessComponent } from './desks/desk-success.component';
import { MeetingBookingComponent } from './meetings/meeting-booking.component';
import { MeetingBookingFormComponent } from './meetings/meeting-form.component';
import { MeetingBookingSuccessComponent } from './meetings/meeting-success.component';
import { BookModule } from './rooms/book.module';

@NgModule({
    declarations: [
        AppComponent,
        DeskBookingComponent,
        DeskBookingFormComponent,
        DeskBookingSuccessComponent,
        MeetingBookingComponent,
        MeetingBookingFormComponent,
        MeetingBookingSuccessComponent,
        MeetingFlowConfirmComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BookModule,
        SharedComponentModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSnackBarModule,
        MatSelectModule,
        AssetsModule,
        FormFieldsModule,
        ReactiveFormsModule,
        SharedCateringModule,
        SharedExploreModule,
        SharedSpacesModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [SpacePipe, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
