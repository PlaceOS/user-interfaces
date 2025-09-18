import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Route, RouterModule } from '@angular/router';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { BookingConfirmedComponent } from './booking-confirmed.component';
import { FilterSpaceComponent } from './filter-space.component';
import { FindSpaceItemComponent } from './find-space-item.component';
import { FindSpaceComponent } from './find-space.component';
import { RoomBookingComponent } from './room-booking.component';
import { RoomConfirmComponent } from './room-confirm.component';
import { RoomDetailsComponent } from './room-details.component';
import { RoomTileComponent } from './room-tile.component';
import { UpcomingBookingsComponent } from './upcoming-bookings.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingCardComponent } from '@placeos/bookings';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EventCardComponent } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    SpaceListFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';

const ROUTES: Route[] = [
    {
        path: 'find',
        component: FindSpaceComponent,
    },
];

const MAT_MODULES = [
    MatBottomSheetModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
];

const STANDALONE_COMPONENTS = [
    IconComponent,
    TranslatePipe,
    DateFieldComponent,
    TimeFieldComponent,
    DurationFieldComponent,
    UserSearchFieldComponent,
    UserListFieldComponent,
    SpaceListFieldComponent,

    EventCardComponent,
    BookingCardComponent,
];

@NgModule({
    declarations: [
        RoomBookingComponent,
        RoomConfirmComponent,
        FindSpaceComponent,
        FindSpaceItemComponent,
        FilterSpaceComponent,
        BookingConfirmedComponent,
        RoomTileComponent,
        RoomDetailsComponent,
        UpcomingBookingsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        NativeDateModule,
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
    ],
})
export class BookModule {}
