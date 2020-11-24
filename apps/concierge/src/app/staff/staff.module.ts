import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { StaffComponent } from './staff.component';
import { StaffTopbarComponent } from './staff-topbar.component';
import { StaffListingComponent } from './staff-listing.component';
import { StaffDetailsComponent } from './staff-details.component';
import { UIModule } from '../ui/ui.module';

const ROUTES: Route[] = [{ path: '', component: StaffComponent }];

export const COMPONENTS: Type<any>[] = [
    StaffComponent,
    StaffTopbarComponent,
    StaffListingComponent,
    StaffDetailsComponent,
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
