import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

import { UIModule } from '../ui/ui.module';

import { CateringComponent } from './catering.component';
import { CateringTopbarComponent } from './catering-topbar.component';
import { CateringOrderListComponent } from 'src/app/catering/catering-order-list.component';
import { CateringOrderListOrderComponent } from 'src/app/catering/catering-order-list-order.component';
import { CateringOrderListOrderItemComponent } from 'src/app/catering/catering-order-list-order-item.component';

import { CateringMenuComponent } from 'src/app/catering/catering-menu.component';
import { CateringMenuItemComponent } from 'src/app/catering/catering-menu-item.component';

import { CateringOptionsModalComponent } from 'src/app/catering/catering-options-modal/catering-options-modal.component';
import { CateringOrderModalComponent } from 'src/app/catering/catering-order-modal/catering-order-modal.component';
import { CateringItemModalComponent } from 'src/app/catering/catering-item-modal.component';
import { CateringConfigModalComponent } from 'src/app/catering/catering-config-modal.component';
import { CateringItemOptionModalComponent } from 'src/app/catering/catering-option-modal.component';

const ROUTES: Route[] = [
    { path: '', component: CateringComponent },
    { path: ':view', component: CateringComponent }
];

@NgModule({
    declarations: [
        CateringComponent,
        CateringTopbarComponent,

        CateringOrderListComponent,
        CateringOrderListOrderComponent,
        CateringOrderListOrderItemComponent,

        CateringMenuComponent,
        CateringMenuItemComponent,

        CateringOptionsModalComponent,
        CateringOrderModalComponent,
        CateringItemModalComponent,
        CateringConfigModalComponent,
        CateringItemOptionModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        MatTabsModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class CateringModule {}
