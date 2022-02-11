import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAvailabilityComponent } from './dashboard-availability/dashboard-availability.component';
import { RoomBookingComponent } from '../rooms/room-booking.component';
import { RoomConfirmComponent } from '../rooms/room-confirm/room-confirm.component';
import { FormFieldsModule } from '@placeos/form-fields';

import { SharedComponentModule } from '../components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatNativeDateModule,
    NativeDateModule,
    MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

const DATE_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearLabel: 'MMM YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardAvailabilityComponent,
        RoomBookingComponent,
        RoomConfirmComponent,
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
    providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS }],
})
export class DashboardModule {}
