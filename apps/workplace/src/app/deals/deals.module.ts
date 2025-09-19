import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DealDetailsModalComponent } from './deal-details-modal.component';
import { DealsComponent } from './deals.component';

const ROUTES: Route[] = [{ path: '', component: DealsComponent }];

@NgModule({
    declarations: [],
    imports: [
        DealsComponent,
        DealDetailsModalComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class DealsModule {}
