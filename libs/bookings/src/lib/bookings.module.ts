import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { ComponentsModule } from 'libs/components/src/lib/components.module';
import { SharedEventsModule } from 'libs/events/src/lib/events.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { SharedSpacesModule } from 'libs/spaces/src/lib/spaces.module';
import { SharedUsersModule } from 'libs/users/src/lib/users.module';

import { BookingCardComponent } from './booking-card.component';
import { BookingDetailsModalComponent } from './booking-details-modal.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BookingLinkModalComponent } from './booking-link-modal.component';
import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskListFieldComponent } from './desk-list-field.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';
import { DeskDetailsComponent } from './desk-select-modal/desk-details.component';
import { DeskFiltersDisplayComponent } from './desk-select-modal/desk-filters-display.component';
import { DeskFiltersComponent } from './desk-select-modal/desk-filters.component';
import { DeskListComponent } from './desk-select-modal/desk-list.component';
import { DeskMapComponent } from './desk-select-modal/desk-map.component';
import { DeskSelectModalComponent } from './desk-select-modal/desk-select-modal.component';
import { DeskSettingsModalComponent } from './desk-settings-modal.component';
import { InviteVisitorFormComponent } from './invite-visitor-form.component';
import { LockerGridComponent } from './locker-grid.component';
import { LockerListFieldComponent } from './locker-list-field.component';
import { LockerBankListComponent } from './locker-select-modal/locker-bank-list.component';
import { LockerFiltersDisplayComponent } from './locker-select-modal/locker-filters-display.component';
import { LockerFiltersComponent } from './locker-select-modal/locker-filters.component';
import { LockerMapComponent } from './locker-select-modal/locker-map.component';
import { LockerSelectModalComponent } from './locker-select-modal/locker-select-modal.component';
import { ParkingSpaceDetailsComponent } from './parking-select-modal/parking-details.component';
import { ParkingSpaceFiltersDisplayComponent } from './parking-select-modal/parking-filters-display.component';
import { ParkingSpaceFiltersComponent } from './parking-select-modal/parking-filters.component';
import { ParkingSpaceListComponent } from './parking-select-modal/parking-list.component';
import { ParkingSpaceLocationPinComponent } from './parking-select-modal/parking-location-pin.component';
import { ParkingSpaceMapComponent } from './parking-select-modal/parking-map.component';
import { ParkingSpaceSelectModalComponent } from './parking-select-modal/parking-select-modal.component';
import { ParkingSpaceListFieldComponent } from './parking-space-list-field.component';

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
    ParkingSpaceDetailsComponent,
    ParkingSpaceListFieldComponent,
    ParkingSpaceMapComponent,

    DeskSelectModalComponent,
    DeskDetailsComponent,
    DeskFiltersComponent,
    DeskFiltersDisplayComponent,
    DeskListComponent,
    DeskMapComponent,
    DeskListFieldComponent,
    DeskSettingsModalComponent,

    LockerListFieldComponent,
    LockerSelectModalComponent,
    LockerFiltersComponent,
    LockerFiltersDisplayComponent,
    LockerBankListComponent,
    LockerMapComponent,
];

const STANDALONE_COMPONENTS = [LockerGridComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
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
        ...STANDALONE_COMPONENTS,
    ],
    providers: [ReactiveFormsModule],
    exports: [...COMPONENTS, ...STANDALONE_COMPONENTS],
})
export class SharedBookingsModule {}
