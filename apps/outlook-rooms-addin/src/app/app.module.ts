import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './rooms/book.module';
import { SharedComponentModule } from '../app/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';
import { DeskBookingComponent } from './desks/desk-booking.component';
import { DeskBookingFormComponent } from './desks/desk-form.component';
import { DeskBookingSuccessComponent } from './desks/desk-success.component';
import { FormFieldsModule } from '@placeos/form-fields';

@NgModule({
    declarations: [
        AppComponent,

        DeskBookingComponent,
        DeskBookingFormComponent,
        DeskBookingSuccessComponent,
    ],
    imports: [
        BrowserModule,
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

        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [SpacePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
