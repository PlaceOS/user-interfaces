import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { UIModule } from '../ui/ui.module';

import { AssetListingComponent } from './asset-listing.component';
import { AssetManagerTopbarComponent } from './asset-manager-topbar.component';
import { AssetManagerComponent } from './asset-manager.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AssetViewComponent } from './asset-view.component';
import { AssetRequestListComponent } from './asset-request-list.component';
import { ComponentsModule } from '@placeos/components';
import { AssetItemListComponent } from './asset-item-list.component';
import { SplitJoinPipe } from './split-join.pipe';
import { AssetRequestDetailsComponent } from './asset-request-details.component';
import { DurationFormatPipe } from './duration.pipe';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetPurchaseOrderFormComponent } from './asset-purchase-order-form.component';
import { AssetCategoryFormComponent } from './asset-category-form.component';
import { AssetFormComponent } from './asset-form.component';
import { AssetGroupFormComponent } from './asset-group-form.component';
import { AssetPurchaseOrderListComponent } from './asset-purchase-order-list.component';
import { AssetBulkFormComponent } from './asset-bulk-form.component';
import { NewAssetManagerComponent } from './new-asset-manager.component';
import { AssetCategoryManagementModalComponent } from './asset-category-management-modal.component';

const COMPONENTS = [
    NewAssetManagerComponent,
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
        path: 'new',
        component: NewAssetManagerComponent,
        children,
    },
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
