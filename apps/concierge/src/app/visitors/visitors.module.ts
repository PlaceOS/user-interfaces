import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GuestListingComponent } from './guest-listing.component';
import { VisitorsComponent } from './visitors.component';

const ROUTES: Route[] = [{ path: '', component: VisitorsComponent }];

@NgModule({
    declarations: [],
    imports: [
        VisitorsComponent,
        GuestListingComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class VisitorsModule {}
