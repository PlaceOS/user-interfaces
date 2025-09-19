import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { POIManagerComponent } from './poi-manager.component';

const ROUTES: Route[] = [{ path: '', component: POIManagerComponent }];

@NgModule({
    declarations: [],
    imports: [POIManagerComponent, RouterModule.forChild(ROUTES)],
})
export class POIManagerModule {}
