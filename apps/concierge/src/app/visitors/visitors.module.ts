import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedBookingsModule } from '@placeos/bookings';
import { UserLabelComponent } from 'libs/users/src/lib/user-label.component';
import { GuestListingComponent } from './guest-listing.component';
import { InviteVisitorModalComponent } from './invite-visitor-modal.component';
import { VisitorInductionModalComponent } from './visitor-induction-modal.component';
import { VisitorNotesModalComponent } from './visitor-notes-modal.component';
import { VisitorsTopbarComponent } from './visitors-topbar.component';
import { VisitorsComponent } from './visitors.component';

const ROUTES: Route[] = [{ path: '', component: VisitorsComponent }];

@NgModule({
    declarations: [
        VisitorsComponent,
        VisitorsTopbarComponent,
        GuestListingComponent,
        InviteVisitorModalComponent,
        VisitorInductionModalComponent,
        VisitorNotesModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedBookingsModule,
        UserLabelComponent,
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
