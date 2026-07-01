import { Routes } from '@angular/router';
import { PointsAssetsComponent } from './points-assets.component';
import { PointsOverviewComponent } from './points-overview.component';
import { PointsComponent } from './points.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: PointsComponent,
        children: [
            {
                path: 'assets',
                component: PointsAssetsComponent,
                title: 'Point Assets',
            },
            {
                path: 'overview',
                component: PointsOverviewComponent,
                title: 'Points Overview',
            },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' },
        ],
    },
];
