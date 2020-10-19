import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { FacilitiesComponent } from './facilities.component';
import { FacilitiesTopbarComponent } from './facilities-topbar.component';
import { FacilitiesStatusComponent } from './facilities-status.component';
import { FacilitiesMapComponent } from './facilities-map.component';

import { InteractiveMapComponent } from '@user-interfaces/components';
import { SharedExploreModule } from '@user-interfaces/explore';

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
