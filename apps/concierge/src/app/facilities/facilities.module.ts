import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FacilitiesComponent } from './facilities.component';

const ROUTES: Route[] = [{ path: '', component: FacilitiesComponent }];

@NgModule({
    declarations: [],
    imports: [FacilitiesComponent, RouterModule.forChild(ROUTES)],
})
export class FacilitiesModule {}
