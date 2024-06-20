import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { UIModule } from '../ui/ui.module';
import { PointsAssetModalComponent } from './asset-modal.component';
import { PointsAssetsComponent } from './points-assets.component';
import { PointsOverviewComponent } from './points-overview.component';
import { PointsTopbarComponent } from './points-topbar.component';
import { PointsComponent } from './points.component';
import { NewPointsComponent } from './new-points.component';

const ROUTES: Route[] = [
    {
        path: 'new',
        component: NewPointsComponent,
        children: [
            { path: 'assets', component: PointsAssetsComponent },
            { path: 'overview', component: PointsOverviewComponent },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' },
        ],
    },
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
    declarations: [
        NewPointsComponent,
        PointsComponent,
        PointsTopbarComponent,
        PointsOverviewComponent,
        PointsAssetsComponent,
        PointsAssetModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        MatTabsModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class PointsModule {}
