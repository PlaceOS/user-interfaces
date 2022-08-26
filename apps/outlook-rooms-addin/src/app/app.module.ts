import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './rooms/book.module';
import { SharedComponentModule } from '../app/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';

@NgModule({
    declarations: [AppComponent],
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

        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [SpacePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
