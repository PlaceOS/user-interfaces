import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UIModule } from '../ui/ui.module';

import { AssetListingComponent } from './asset-listing.component';
import { AssetManagerTopbarComponent } from './asset-manager-topbar.component';
import { AssetManagerComponent } from './asset-manager.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AssetViewComponent } from './asset-view.component';
import { ImageCarouselComponent } from './image-carousel.component';

const COMPONENTS = [
    AssetManagerComponent,
    AssetManagerTopbarComponent,
    AssetListingComponent,
    AssetViewComponent,
    ImageCarouselComponent
];

const ROUTES: Route[] = [
    {
        path: '',
        component: AssetManagerComponent,
        children: [
            { path: 'list', component: AssetListingComponent },
            { path: 'view/:id', component: AssetViewComponent },
            { path: '**', redirectTo: 'list' },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        UIModule,
        MatButtonToggleModule,
        MatTabsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppAssetManangerModule {}
