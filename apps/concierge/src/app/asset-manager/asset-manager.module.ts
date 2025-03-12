import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { Route, RouterModule } from '@angular/router';
import { UIModule } from '../ui/ui.module';

import { MatTabsModule } from '@angular/material/tabs';
import { ComponentsModule } from '@placeos/components';
import { AssetBulkFormComponent } from './asset-bulk-form.component';
import { AssetCategoryFormComponent } from './asset-category-form.component';
import { AssetCategoryManagementModalComponent } from './asset-category-management-modal.component';
import { AssetFormComponent } from './asset-form.component';
import { AssetGroupFormComponent } from './asset-group-form.component';
import { AssetItemListComponent } from './asset-item-list.component';
import { AssetListingComponent } from './asset-listing.component';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerTopbarComponent } from './asset-manager-topbar.component';
import { AssetManagerComponent } from './asset-manager.component';
import { AssetPurchaseOrderFormComponent } from './asset-purchase-order-form.component';
import { AssetPurchaseOrderListComponent } from './asset-purchase-order-list.component';
import { AssetRequestDetailsComponent } from './asset-request-details.component';
import { AssetRequestListComponent } from './asset-request-list.component';
import { AssetViewComponent } from './asset-view.component';
import { DurationFormatPipe } from './duration.pipe';
import { SplitJoinPipe } from './split-join.pipe';

const COMPONENTS = [
    AssetManagerComponent,
    AssetManagerTopbarComponent,
    AssetListingComponent,
    AssetViewComponent,
    AssetRequestListComponent,
    AssetItemListComponent,
    AssetRequestDetailsComponent,
    AssetLocationModalComponent,
    SplitJoinPipe,
    DurationFormatPipe,

    AssetFormComponent,
    AssetBulkFormComponent,
    AssetGroupFormComponent,
    AssetCategoryFormComponent,
    AssetPurchaseOrderFormComponent,
    AssetPurchaseOrderListComponent,
    AssetCategoryManagementModalComponent,
];

const children = [
    {
        path: 'list',
        component: AssetListingComponent,
        children: [
            { path: 'items', component: AssetItemListComponent },
            { path: 'requests', component: AssetRequestListComponent },
            {
                path: 'purchase-orders',
                component: AssetPurchaseOrderListComponent,
            },
            { path: '**', redirectTo: 'requests' },
        ],
    },
    { path: 'view/:id', component: AssetViewComponent },
    {
        path: 'manage',
        children: [
            { path: 'group', component: AssetGroupFormComponent },
            { path: 'asset', component: AssetFormComponent },
            { path: 'asset-bulk', component: AssetBulkFormComponent },
            { path: 'category', component: AssetCategoryFormComponent },
            {
                path: 'purchase-order',
                component: AssetPurchaseOrderFormComponent,
            },
        ],
    },
    { path: '**', redirectTo: 'list/requests' },
];

const ROUTES: Route[] = [
    {
        path: '',
        component: AssetManagerComponent,
        children,
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
        MatProgressBarModule,
        MatTabsModule,
        MatStepperModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppAssetManangerModule {}
