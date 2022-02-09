import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponentModule } from '../app/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomConfirmComponent } from './rooms/room-confirm/room-confirm.component';

@NgModule({
    declarations: [AppComponent, RoomConfirmComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedComponentModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
