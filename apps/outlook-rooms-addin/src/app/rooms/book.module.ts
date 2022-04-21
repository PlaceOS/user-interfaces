import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
    MatNativeDateModule,
    NativeDateModule,
    MAT_DATE_FORMATS,
} from '@angular/material/core';

import { RoomBookingComponent } from '../rooms/room-booking.component';
import { RoomConfirmComponent } from '../rooms/room-confirm/room-confirm.component';
import { FindSpaceComponent } from '../rooms/find-space/find-space.component';
import { FindSpaceItemComponent } from './find-space-item/find-space-item.component';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedComponentModule } from '../components/shared.module';
import { ComponentsModule } from '@placeos/components';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FilterSpaceComponent } from './filter-space/filter-space.component';
import { EventFormService } from '@placeos/events';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { RoomTileComponent } from './room-tile/room-tile.component';

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
