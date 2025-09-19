import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CateringComponent } from './catering.component';

const ROUTES: Route[] = [
    { path: '', component: CateringComponent },
    { path: ':view', component: CateringComponent },
];

@NgModule({
    declarations: [],
    imports: [CateringComponent, RouterModule.forChild(ROUTES)],
})
export class CateringModule {}
