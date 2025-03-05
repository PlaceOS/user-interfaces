import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Route, RouterModule } from '@angular/router';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ComponentsModule } from '@placeos/components';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedComponentModule } from '../components/shared.module';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { FilterSpaceComponent } from './filter-space/filter-space.component';
import { FindSpaceItemComponent } from './find-space-item/find-space-item.component';
import { FindSpaceComponent } from './find-space/find-space.component';
import { RoomBookingComponent } from './room-booking.component';
import { RoomConfirmComponent } from './room-confirm/room-confirm.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomTileComponent } from './room-tile/room-tile.component';
import { UpcomingBookingsComponent } from './upcoming-bookings/upcoming-bookings.component';

const ROUTES: Route[] = [
    {
        path: 'find',
        component: FindSpaceComponent,
    },
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
        SharedComponentModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        NativeDateModule,
        FormFieldsModule,
        MatBottomSheetModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        ComponentsModule,
    ],
})
export class BookModule {}
