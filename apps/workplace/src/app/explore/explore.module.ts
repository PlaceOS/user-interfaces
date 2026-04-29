import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore.component';

import { MAP_FEATURE_DATA } from '@placeos/common';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent, title: 'Explore' },
    {
        path: ':search_type',
        component: ExploreComponent,
        title: 'Explore',
    },
];

@NgModule({
    declarations: [],
    imports: [ExploreComponent, RouterModule.forChild(ROUTES)],
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
})
export class ExploreModule {}
