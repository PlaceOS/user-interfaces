import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DealsComponent } from './deals.component';

const ROUTES: Route[] = [{ path: '', component: DealsComponent }];

@NgModule({
    declarations: [],
    imports: [DealsComponent, RouterModule.forChild(ROUTES)],
})
export class DealsModule {}
