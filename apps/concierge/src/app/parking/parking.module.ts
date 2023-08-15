import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { FormFieldsModule } from '@placeos/form-fields';
import { UIModule } from '../ui/ui.module';

import { ParkingBookingsListComponent } from './parking-bookings-list.component';
import { ParkingSpaceListComponent } from './parking-space-list.component';
import { ParkingSpaceModalComponent } from './parking-space-modal.component';
import { ParkingTopbarComponent } from './parking-topbar.component';
import { ParkingComponent } from './parking.component';
import { NewParkingComponent } from './new-parking.component';
import { ParkingUsersListComponent } from './parking-users-list.component';

const COMPONENTS = [
    NewParkingComponent,
    ParkingComponent,
    ParkingBookingsListComponent,
    ParkingSpaceListComponent,
    ParkingUsersListComponent,
    ParkingTopbarComponent,
    ParkingSpaceModalComponent,
];

const ROUTES: Route[] = [
    {
        path: 'new',
        component: NewParkingComponent,
        children: [
            { path: 'events', component: ParkingBookingsListComponent },
            { path: 'users', component: ParkingUsersListComponent },
            { path: 'manage', component: ParkingSpaceListComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
    {
        path: '',
        component: ParkingComponent,
        children: [
            { path: 'events', component: ParkingBookingsListComponent },
            { path: 'users', component: ParkingUsersListComponent },
            { path: 'manage', component: ParkingSpaceListComponent },
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
        RouterModule.forChild(ROUTES),
    ],
})
export class AppParkingModule {}
