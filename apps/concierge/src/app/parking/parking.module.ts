import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { UIModule } from '../ui/ui.module';

import { SharedBookingsModule } from 'libs/bookings/src/lib/bookings.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';

import { ParkingBookingModalComponent } from './parking-booking-modal.component';
import { ParkingBookingsListComponent } from './parking-bookings-list.component';
import { ParkingMapComponent } from './parking-map.component';
import { ParkingSpaceListComponent } from './parking-space-list.component';
import { ParkingSpaceModalComponent } from './parking-space-modal.component';
import { ParkingTopbarComponent } from './parking-topbar.component';
import { ParkingUserModalComponent } from './parking-user-modal.component';
import { ParkingUsersListComponent } from './parking-users-list.component';
import { ParkingComponent } from './parking.component';

const COMPONENTS = [
    ParkingComponent,
    ParkingBookingsListComponent,
    ParkingBookingModalComponent,
    ParkingSpaceListComponent,
    ParkingUsersListComponent,
    ParkingTopbarComponent,
    ParkingSpaceModalComponent,
    ParkingUserModalComponent,
    ParkingMapComponent,
];

const ROUTES: Route[] = [
    {
        path: '',
        component: ParkingComponent,
        children: [
            {
                path: 'events',
                children: [
                    { path: 'map', component: ParkingMapComponent },
                    { path: 'list', component: ParkingBookingsListComponent },
                    { path: '**', redirectTo: 'list' },
                ],
            },
            {
                path: 'manage',
                children: [
                    { path: 'users', component: ParkingUsersListComponent },
                    { path: 'map', component: ParkingMapComponent },
                    { path: 'spaces', component: ParkingSpaceListComponent },
                    { path: '**', redirectTo: 'spaces' },
                ],
            },
            { path: '**', redirectTo: 'events' },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        UIModule,
        FormsModule,
        ReactiveFormsModule,
        FormFieldsModule,
        MatTabsModule,
        MatProgressBarModule,
        SharedBookingsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppParkingModule {}
