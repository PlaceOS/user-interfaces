import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { UIModule } from '../ui/ui.module';

import { AssetListingComponent } from './asset-listing.component';
import { AssetManagerTopbarComponent } from './asset-manager-topbar.component';
import { AssetManagerComponent } from './asset-manager.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AssetViewComponent } from './asset-view.component';
import { ImageCarouselComponent } from './image-carousel.component';
import { AssetFlowComponent } from './asset-flow.component';
import { AssetFlowConsumablesComponent } from './asset-flow-consumables.component';
import { AssetFlowDetailsComponent } from './asset-flow-details.component';
import { AssetFlowPurchasesComponent } from './asset-flow-purchases.component';
import { AssetFlowSpecsComponent } from './asset-flow-specs.component';
import { AssetRequestListComponent } from './asset-request-list.component';
import { ComponentsModule } from '@placeos/components';
import { AssetItemListComponent } from './asset-item-list.component';
import { SplitJoinPipe } from './split-join.pipe';
import { AssetRequestDetailsComponent } from './asset-request-details.component';
import { DurationFormatPipe } from './duration.pipe';

const COMPONENTS = [
    AssetManagerComponent,
    AssetManagerTopbarComponent,
    AssetListingComponent,
    AssetViewComponent,
    AssetFlowComponent,
    AssetFlowConsumablesComponent,
    AssetFlowDetailsComponent,
    AssetFlowPurchasesComponent,
    AssetFlowSpecsComponent,
    ImageCarouselComponent,
    AssetRequestListComponent,
    AssetItemListComponent,
    AssetRequestDetailsComponent,
    SplitJoinPipe,
    DurationFormatPipe
];

const ROUTES: Route[] = [
    {
        path: '',
        component: AssetManagerComponent,
        children: [
            {
                path: 'list',
                component: AssetListingComponent,
                children: [
                    { path: 'items', component: AssetItemListComponent },
                    { path: 'requests', component: AssetRequestListComponent },
                    { path: '**', redirectTo: 'requests' },
                ],
            },
            { path: 'view/:id', component: AssetViewComponent },
            { path: 'manage/:view', component: AssetFlowComponent },
            { path: '**', redirectTo: 'list/requests' },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        UIModule,
        ComponentsModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatStepperModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppAssetManangerModule {}
