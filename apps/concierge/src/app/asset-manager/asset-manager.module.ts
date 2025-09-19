import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AssetBulkFormComponent } from './asset-bulk-form.component';
import { AssetCategoryFormComponent } from './asset-category-form.component';
import { AssetFormComponent } from './asset-form.component';
import { AssetGroupFormComponent } from './asset-group-form.component';
import { AssetItemListComponent } from './asset-item-list.component';
import { AssetListingComponent } from './asset-listing.component';
import { AssetManagerComponent } from './asset-manager.component';
import { AssetPurchaseOrderFormComponent } from './asset-purchase-order-form.component';
import { AssetPurchaseOrderListComponent } from './asset-purchase-order-list.component';
import { AssetRequestListComponent } from './asset-request-list.component';
import { AssetViewComponent } from './asset-view.component';

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
    declarations: [],
    imports: [
        AssetBulkFormComponent,
        AssetCategoryFormComponent,
        AssetFormComponent,
        AssetGroupFormComponent,
        AssetItemListComponent,
        AssetListingComponent,
        AssetManagerComponent,
        AssetPurchaseOrderFormComponent,
        AssetPurchaseOrderListComponent,
        AssetRequestListComponent,
        AssetViewComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppAssetManangerModule {}
