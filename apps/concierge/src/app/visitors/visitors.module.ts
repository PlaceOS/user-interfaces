import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { VisitorsComponent } from './visitors.component';
import { VisitorsTopbarComponent } from './visitors-topbar.component';
import { GuestListingComponent } from './guest-listing.component';
import { NewVisitorsComponent } from './new-visitors.component';
import { InviteVisitorModalComponent } from './invite-visitor-modal.component';
import { SharedBookingsModule } from '@placeos/bookings';
import { VisitorInductionModalComponent } from './visitor-induction-modal.component';

const ROUTES: Route[] = [
    { path: '', component: VisitorsComponent },
    { path: 'new', component: NewVisitorsComponent },
];

@NgModule({
    declarations: [
        NewVisitorsComponent,
        VisitorsComponent,
        VisitorsTopbarComponent,
        GuestListingComponent,
        InviteVisitorModalComponent,
        VisitorInductionModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedBookingsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class VisitorsModule {}

/**
zone_ids: zone-EmWVhHG3Bhz
period_start: 1604926800
period_end: 1605013199

period_start: 1605013200
period_end: 1605099599
zones: zone-EmWVhHG3Bhz

*/
