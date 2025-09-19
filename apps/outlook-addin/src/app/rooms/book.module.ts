import { NgModule } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { Route, RouterModule } from '@angular/router';

import { BookingConfirmedComponent } from './booking-confirmed.component';
import { FilterSpaceComponent } from './filter-space.component';
import { FindSpaceItemComponent } from './find-space-item.component';
import { FindSpaceComponent } from './find-space.component';
import { RoomBookingComponent } from './room-booking.component';
import { RoomConfirmComponent } from './room-confirm.component';
import { RoomDetailsComponent } from './room-details.component';
import { RoomTileComponent } from './room-tile.component';
import { UpcomingBookingsComponent } from './upcoming-bookings.component';

const ROUTES: Route[] = [
    {
        path: 'find',
        component: FindSpaceComponent,
    },
];

const STANDALONE_COMPONENTS = [
    RoomBookingComponent,
    RoomConfirmComponent,
    FindSpaceComponent,
    FindSpaceItemComponent,
    FilterSpaceComponent,
    BookingConfirmedComponent,
    RoomTileComponent,
    RoomDetailsComponent,
    UpcomingBookingsComponent,
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ROUTES),
        NativeDateModule,
        ...STANDALONE_COMPONENTS,
    ],
})
export class BookModule {}
