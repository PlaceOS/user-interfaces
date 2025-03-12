import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { FacilitiesMapComponent } from './facilities-map.component';
import { FacilitiesStatusComponent } from './facilities-status.component';
import { FacilitiesTopbarComponent } from './facilities-topbar.component';

import { SharedExploreModule } from '@placeos/explore';
import { FacilitiesComponent } from './facilities.component';

const ROUTES: Route[] = [{ path: '', component: FacilitiesComponent }];

@NgModule({
    declarations: [
        FacilitiesComponent,
        FacilitiesTopbarComponent,
        FacilitiesStatusComponent,
        FacilitiesMapComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedExploreModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class FacilitiesModule {}
