import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PaymentsModule } from '@placeos/payments';
import { SharedExploreModule } from '@placeos/explore';
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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSelectModule } from '@angular/material/select';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({ declarations: [
        AppComponent,
        DeskBookingComponent,
        DeskBookingFormComponent,
        DeskBookingSuccessComponent,
        MeetingBookingComponent,
        MeetingBookingFormComponent,
        MeetingBookingSuccessComponent,
        MeetingFlowConfirmComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BookModule,
        SharedComponentModule,
        BrowserAnimationsModule,
        FormsModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatSelectModule,
        PaymentsModule,
        AssetsModule,
        FormFieldsModule,
        ReactiveFormsModule,
        SharedCateringModule,
        SharedExploreModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        })], providers: [SpacePipe, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
