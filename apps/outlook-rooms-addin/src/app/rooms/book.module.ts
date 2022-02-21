import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { RoomBookingComponent } from '../rooms/room-booking.component';
import { RoomConfirmComponent } from '../rooms/room-confirm/room-confirm.component';
import { FindSpaceComponent } from '../rooms/find-space/find-space.component';
import { FindSpaceItemComponent } from './find-space-item/find-space-item.component';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedComponentModule } from '../components/shared.module';
import {
    MatNativeDateModule,
    NativeDateModule,
    MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const ROUTES: Route[] = [
    {
        path: '',
        component: RoomBookingComponent,
    },
];

@NgModule({
    declarations: [
        RoomBookingComponent,
        RoomConfirmComponent,
        FindSpaceComponent,
        FindSpaceItemComponent,
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
    ],
})
export class BookModule {}
