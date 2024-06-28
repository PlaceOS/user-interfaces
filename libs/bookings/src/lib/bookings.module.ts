import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { ComponentsModule } from 'libs/components/src/lib/components.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { SharedEventsModule } from 'libs/events/src/lib/events.module';
import { SharedSpacesModule } from 'libs/spaces/src/lib/spaces.module';
import { SharedUsersModule } from 'libs/users/src/lib/users.module';

import { BookingCardComponent } from './booking-card.component';
import { BookingDetailsModalComponent } from './booking-details-modal.component';

import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';
import { DeskDetailsComponent } from './desk-select-modal/desk-details.component';
import { DeskFiltersDisplayComponent } from './desk-select-modal/desk-filters-display.component';
import { DeskFiltersComponent } from './desk-select-modal/desk-filters.component';
import { DeskListComponent } from './desk-select-modal/desk-list.component';
import { DeskMapComponent } from './desk-select-modal/desk-map.component';
import { DeskSelectModalComponent } from './desk-select-modal/desk-select-modal.component';
import { InviteVisitorFormComponent } from './invite-visitor-form.component';
import { ParkingSpaceDetailsComponent } from './parking-select-modal/parking-details.component';
import { ParkingSpaceFiltersDisplayComponent } from './parking-select-modal/parking-filters-display.component';
import { ParkingSpaceFiltersComponent } from './parking-select-modal/parking-filters.component';
import { ParkingSpaceListComponent } from './parking-select-modal/parking-list.component';
import { ParkingSpaceLocationPinComponent } from './parking-select-modal/parking-location-pin.component';
import { ParkingSpaceSelectMapComponent } from './parking-select-modal/parking-map.component';
import { ParkingSpaceSelectModalComponent } from './parking-select-modal/parking-select-modal.component';
import { ParkingSpaceListFieldComponent } from './parking-space-list-field.component';
import { DeskListFieldComponent } from './desk-list-field.component';
import { BookingLinkModalComponent } from './booking-link-modal.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { LockerGridComponent } from './locker-grid.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LockerSelectModalComponent } from './locker-select-modal/locker-select-modal.component';
import { LockerListFieldComponent } from './locker-list-field.component';
import { LockerFiltersComponent } from './locker-select-modal/locker-filters.component';
import { LockerFiltersDisplayComponent } from './locker-select-modal/locker-filters-display.component';
import { LockerBankListComponent } from './locker-select-modal/locker-bank-list.component';
import { LockerMapComponent } from './locker-select-modal/locker-map.component';
import { DeskSettingsModalComponent } from './desk-settings-modal.component';
import { GroupEventDetailsModalComponent } from './group-event-details-modal.component';
import { GroupEventCardComponent } from './group-event-card.component';

const COMPONENTS = [
    DeskQuestionsModalComponent,
    DeskConfirmModalComponent,
    InviteVisitorFormComponent,
    BookingDetailsModalComponent,
    BookingCardComponent,
    BookingLinkModalComponent,

    ParkingSpaceSelectModalComponent,
    ParkingSpaceFiltersComponent,
    ParkingSpaceFiltersDisplayComponent,
    ParkingSpaceListComponent,
    ParkingSpaceLocationPinComponent,
    ParkingSpaceSelectMapComponent,
    ParkingSpaceDetailsComponent,
    ParkingSpaceListFieldComponent,

    DeskSelectModalComponent,
    DeskDetailsComponent,
    DeskFiltersComponent,
    DeskFiltersDisplayComponent,
    DeskListComponent,
    DeskMapComponent,
    DeskListFieldComponent,
    DeskSettingsModalComponent,

    LockerGridComponent,
    LockerListFieldComponent,
    LockerSelectModalComponent,
    LockerFiltersComponent,
    LockerFiltersDisplayComponent,
    LockerBankListComponent,
    LockerMapComponent,

    GroupEventDetailsModalComponent,
    GroupEventCardComponent,
];
@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        FormFieldsModule,
        ComponentsModule,
        MatRippleModule,
        MatTooltipModule,
        SharedSpacesModule,
        SharedEventsModule,
        SharedUsersModule,
    ],
    providers: [ReactiveFormsModule],
    exports: [...COMPONENTS],
})
export class SharedBookingsModule {}
