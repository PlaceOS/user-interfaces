import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedExploreModule } from '@placeos/explore';
import { UIModule } from '../ui/ui.module';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LockerBookingsComponent } from './locker-bookings.component';
import { LockersTopbarComponent } from './locker-topbar.component';

import { SharedBookingsModule } from 'libs/bookings/src/lib/bookings.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { LockerBankModalComponent } from './locker-bank-modal.component';
import { LockerBookingModalComponent } from './locker-booking-modal.component';
import { LockerListComponent } from './locker-list.component';
import { LockerModalComponent } from './locker-modal.component';
import { LockersComponent } from './lockers.component';
import { ViewLockerBankModalComponent } from './view-locker-bank-modal.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: LockersComponent,
        children: [
            { path: 'events', component: LockerBookingsComponent },
            { path: 'manage', component: LockerListComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
];

@NgModule({
    declarations: [
        LockersComponent,
        LockerBookingsComponent,
        LockersTopbarComponent,
        LockerListComponent,
        LockerModalComponent,
        LockerBookingModalComponent,
        LockerBankModalComponent,
        ViewLockerBankModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatTabsModule,
        ReactiveFormsModule,
        UIModule,
        SharedExploreModule,
        SharedBookingsModule,
        FormFieldsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class LockersModule {}
