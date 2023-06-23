import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { FacilitiesComponent } from './facilities.component';
import { FacilitiesTopbarComponent } from './facilities-topbar.component';
import { FacilitiesStatusComponent } from './facilities-status.component';
import { FacilitiesMapComponent } from './facilities-map.component';

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
