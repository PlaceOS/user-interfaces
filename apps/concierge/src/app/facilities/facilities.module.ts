import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FacilitiesMapComponent } from './facilities-map.component';
import { FacilitiesStatusComponent } from './facilities-status.component';
import { FacilitiesTopbarComponent } from './facilities-topbar.component';

import { FacilitiesComponent } from './facilities.component';

const ROUTES: Route[] = [{ path: '', component: FacilitiesComponent }];

@NgModule({
    declarations: [],
    imports: [
        FacilitiesComponent,
        FacilitiesTopbarComponent,
        FacilitiesStatusComponent,
        FacilitiesMapComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class FacilitiesModule {}
