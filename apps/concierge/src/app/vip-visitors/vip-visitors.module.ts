import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { VipVisitorsComponent } from './vip-visitors.component';

const ROUTES: Route[] = [{ path: '', component: VipVisitorsComponent }];

@NgModule({
    declarations: [],
    imports: [VipVisitorsComponent, RouterModule.forChild(ROUTES)],
})
export class VipVisitorsModule {}
