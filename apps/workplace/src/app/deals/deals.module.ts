import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DealsComponent } from './deals.component';

const ROUTES: Route[] = [
    { path: '', component: DealsComponent, title: 'Deals & Offers' },
];

@NgModule({
    declarations: [],
    imports: [DealsComponent, RouterModule.forChild(ROUTES)],
})
export class DealsModule {}
