import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PointsAssetsComponent } from './points-assets.component';
import { PointsOverviewComponent } from './points-overview.component';
import { PointsComponent } from './points.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: PointsComponent,
        children: [
            { path: 'assets', component: PointsAssetsComponent },
            { path: 'overview', component: PointsOverviewComponent },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [
        PointsComponent,
        PointsOverviewComponent,
        PointsAssetsComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class PointsModule {}
