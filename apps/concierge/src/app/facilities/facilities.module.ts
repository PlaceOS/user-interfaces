import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { FacilitiesMapComponent } from './facilities-map.component';
import { FacilitiesStatusComponent } from './facilities-status.component';
import { FacilitiesTopbarComponent } from './facilities-topbar.component';
import { FacilitiesComponent } from './facilities.component';

import { SharedExploreModule } from '@placeos/explore';
import { NewFacilitiesComponent } from './new-facilities.component';

const ROUTES: Route[] = [
    { path: '', component: FacilitiesComponent },
    { path: 'new', component: NewFacilitiesComponent },
];

@NgModule({
    declarations: [
        NewFacilitiesComponent,
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
