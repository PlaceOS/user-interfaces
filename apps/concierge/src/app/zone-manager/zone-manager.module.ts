import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ZoneManagerComponent } from './zone-manager.component';

const ROUTES: Route[] = [
    { path: '', component: ZoneManagerComponent, title: 'Zone Management' },
];

@NgModule({
    declarations: [],
    imports: [ZoneManagerComponent, RouterModule.forChild(ROUTES)],
})
export class ZoneManagerModule {}
