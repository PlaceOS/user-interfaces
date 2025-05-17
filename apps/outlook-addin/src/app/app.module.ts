import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';
import { AssetListFieldComponent } from 'libs/assets/src/lib/asset-list-field.component';
import { DeskListFieldComponent } from 'libs/bookings/src/lib/desk-list-field.component';
import { CateringListFieldComponent } from 'libs/catering/src/lib/catering-list-field.component';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { HostSelectFieldComponent } from 'libs/form-fields/src/lib/host-select-field.component';
import { RichTextInputComponent } from 'libs/form-fields/src/lib/rich-text-input.component';
import { SpaceListFieldComponent } from 'libs/form-fields/src/lib/space-list-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

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
    providers: [SpacePipe, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
