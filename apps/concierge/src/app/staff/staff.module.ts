import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { StaffComponent } from './staff.component';
import { StaffTopbarComponent } from './staff-topbar.component';
import { StaffListingComponent } from './staff-listing.component';
import { StaffDetailsComponent } from './staff-details.component';
import { UIModule } from '../ui/ui.module';
import { NewStaffComponent } from './new-staff.component';
import { EmergencyContactsComponent } from './emergency-contacts.component';
import { EmergencyContactModalComponent } from './emergency-contact-modal.component';
import { RoleManagementModalComponent } from './role-management-modal.component';

const ROUTES: Route[] = [
    { path: '', component: StaffComponent },
    { path: 'new', component: NewStaffComponent },
    { path: 'emergency-contacts', component: EmergencyContactsComponent },
];

export const COMPONENTS: Type<any>[] = [
    NewStaffComponent,
    StaffComponent,
    StaffTopbarComponent,
    StaffListingComponent,
    StaffDetailsComponent,
    EmergencyContactsComponent,
    EmergencyContactModalComponent,
    RoleManagementModalComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class StaffModule {}
