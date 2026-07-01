import { Routes } from '@angular/router';

import { ExploreComponent } from 'apps/map-kiosk/src/app/explore.component';

export const ROUTES: Routes = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];
