import { Routes } from '@angular/router';

import { ExploreComponent } from './explore.component';

import { MAP_FEATURE_DATA } from '@placeos/common';

export const ROUTES: Routes = [
    {
        path: '',
        component: ExploreComponent,
        title: 'Explore',
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    },
    {
        path: ':search_type',
        component: ExploreComponent,
        title: 'Explore',
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    },
];
