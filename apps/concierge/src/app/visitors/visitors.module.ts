import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { VisitorsComponent } from './visitors.component';

const ROUTES: Route[] = [{ path: '', component: VisitorsComponent }];

@NgModule({
    declarations: [],
    imports: [VisitorsComponent, RouterModule.forChild(ROUTES)],
})
export class VisitorsModule {}
