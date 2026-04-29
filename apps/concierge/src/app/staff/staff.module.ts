import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EmergencyContactsComponent } from './emergency-contacts.component';
import { StaffComponent } from './staff.component';

const ROUTES: Route[] = [
    { path: '', component: StaffComponent, title: 'Staff' },
    {
        path: 'emergency-contacts',
        component: EmergencyContactsComponent,
        title: 'Emergency Contacts',
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
