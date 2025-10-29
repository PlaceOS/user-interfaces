import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore.component';

import { MAP_FEATURE_DATA } from '@placeos/common';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];

@NgModule({
    declarations: [],
    imports: [ExploreComponent, RouterModule.forChild(ROUTES)],
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
})
export class ExploreModule {}
