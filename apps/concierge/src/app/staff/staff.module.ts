import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EmergencyContactsComponent } from './emergency-contacts.component';
import { StaffComponent } from './staff.component';

const ROUTES: Route[] = [
    { path: '', component: StaffComponent },
    {
        path: 'emergency-contacts',
        redirectTo: '/settings-management',
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [],
    imports: [
        StaffComponent,
        EmergencyContactsComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class StaffModule {}
