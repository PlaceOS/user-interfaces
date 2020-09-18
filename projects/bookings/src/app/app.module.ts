import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import './mocks';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedUIModule } from 'src/app/ui/ui.module';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BookingPanelComponent } from './panel/panel.component';
import { PanelTimelineComponent } from './panel/timeline/timeline.component';
import { PanelSpaceDetailsComponent } from './panel/space-details/space-details.component';
import { PanelBookingActionsComponent } from './panel/booking-actions/booking-actions.component';
import { PanelCustomActionsComponent } from './panel/custom-actions/custom-actions.component';
import { BookingPanelArrayComponent } from './panel-array/panel-array.component';
import { BookingPanelSelectComponent } from './panel-select/panel-select.component';

const MAT_MODULES: any[] = [
    MatAutocompleteModule,
];

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        BookingPanelComponent,
        PanelTimelineComponent,
        PanelSpaceDetailsComponent,
        PanelBookingActionsComponent,
        PanelCustomActionsComponent,
        BookingPanelArrayComponent,
        BookingPanelSelectComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSnackBarModule,
        SharedOverlaysModule,
        SharedUIModule,
        ...MAT_MODULES,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('Production:', !!environment.production);
    }
}
