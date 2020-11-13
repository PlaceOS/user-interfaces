import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { VisitorsComponent } from './visitors.component';
import { VisitorsTopbarComponent } from './visitors-topbar.component';
import { VisitorListingsComponent } from './visitor-listings.component';
import { VisitorEventComponent } from './visitor-event.component';
import { VisitorDetailsComponent } from './visitor-details.component';

const ROUTES: Route[] = [{ path: '', component: VisitorsComponent }];

@NgModule({
    declarations: [
        VisitorsComponent,
        VisitorsTopbarComponent,
        VisitorListingsComponent,
        VisitorEventComponent,
        VisitorDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
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
