import { Routes } from '@angular/router';
import { EmergencyContactsComponent } from './emergency-contacts.component';
import { StaffComponent } from './staff.component';

export const ROUTES: Routes = [
    { path: '', component: StaffComponent, title: 'Staff' },
    {
        path: 'emergency-contacts',
        component: EmergencyContactsComponent,
        title: 'Emergency Contacts',
    },
];
