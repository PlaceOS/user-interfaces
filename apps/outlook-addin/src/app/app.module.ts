import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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

import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssetListFieldComponent } from '@placeos/assets';
import { DeskListFieldComponent } from '@placeos/bookings';
import { CateringListFieldComponent } from '@placeos/catering';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RichTextInputComponent,
    SpaceListFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';

const MAT_MODULES = [
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
];

const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,
    IconComponent,
    TranslatePipe,
    MeetingFlowConfirmComponent,
    SpacePipe,

    DateFieldComponent,
    TimeFieldComponent,
    DurationFieldComponent,
    UserSearchFieldComponent,
    UserListFieldComponent,
    HostSelectFieldComponent,
    SpaceListFieldComponent,
    DeskListFieldComponent,
    CateringListFieldComponent,
    AssetListFieldComponent,
    RichTextInputComponent,
];

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        DeskBookingComponent,
        DeskBookingFormComponent,
        DeskBookingSuccessComponent,
        MeetingBookingComponent,
        MeetingBookingFormComponent,
        MeetingBookingSuccessComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        BookModule,
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [
        provideZonelessChangeDetection(),
        SpacePipe,
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class AppModule {}
