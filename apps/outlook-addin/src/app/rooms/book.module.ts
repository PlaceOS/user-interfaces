import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';

import { RoomBookingComponent } from './room-booking.component';
import { RoomConfirmComponent } from './room-confirm/room-confirm.component';
import { FindSpaceComponent } from './find-space/find-space.component';
import { FindSpaceItemComponent } from './find-space-item/find-space-item.component';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedComponentModule } from '../components/shared.module';
import { ComponentsModule } from '@placeos/components';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FilterSpaceComponent } from './filter-space/filter-space.component';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { RoomTileComponent } from './room-tile/room-tile.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
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
