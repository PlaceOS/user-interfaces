import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RegionManagerComponent } from './region-manager.component';

const ROUTES: Route[] = [
    { path: '', component: RegionManagerComponent, title: 'Region Management' },
];

@NgModule({
    declarations: [],
    imports: [RegionManagerComponent, RouterModule.forChild(ROUTES)],
})
export class RegionManagerModule {}
