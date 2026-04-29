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
            {
                path: 'items',
                component: AssetItemListComponent,
                title: 'Assets',
            },
            {
                path: 'requests',
                component: AssetRequestListComponent,
                title: 'Asset Requests',
            },
            {
                path: 'purchase-orders',
                component: AssetPurchaseOrderListComponent,
                title: 'Asset Purchase Orders',
            },
            { path: '**', redirectTo: 'requests' },
        ],
    },
    { path: 'view/:id', component: AssetViewComponent, title: 'Asset Details' },
    {
        path: 'manage',
        children: [
            {
                path: 'group',
                component: AssetGroupFormComponent,
                title: 'Asset Groups',
            },
            { path: 'asset', component: AssetFormComponent, title: 'Assets' },
            {
                path: 'asset-bulk',
                component: AssetBulkFormComponent,
                title: 'Bulk Assets',
            },
            {
                path: 'category',
                component: AssetCategoryFormComponent,
                title: 'Asset Categories',
            },
            {
                path: 'purchase-order',
                component: AssetPurchaseOrderFormComponent,
                title: 'Asset Purchase Orders',
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
        AssetManagerComponent,
        AssetItemListComponent,
        AssetRequestListComponent,
        AssetPurchaseOrderListComponent,
        AssetViewComponent,
        AssetGroupFormComponent,
        AssetFormComponent,
        AssetBulkFormComponent,
        AssetCategoryFormComponent,
        AssetPurchaseOrderFormComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppAssetManangerModule {}
