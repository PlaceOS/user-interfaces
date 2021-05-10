import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { ComponentsModule } from '@placeos/components';

import { CateringConfigModalComponent } from './catering-config-modal.component';
import { CateringItemModalComponent } from './catering-item-modal.component';
import { CateringMenuItemComponent } from './catering-menu-item.component';
import { CateringMenuComponent } from './catering-menu.component';
import { CateringItemOptionModalComponent } from './catering-option-modal.component';
import { CateringOrderOptionsModalComponent } from './catering-order-options-modal.component';
import { CateringOrderItemComponent } from './catering-order-item.component';
import { CateringOrderComponent } from './catering-order.component';
import { CateringOrderListComponent } from './catering-order-list.component';
import { CateringOrderModalComponent } from './catering-order-modal/catering-order-modal.component';

const COMPONENTS: Type<any>[] = [
    CateringOrderOptionsModalComponent,
    CateringOrderModalComponent,
    CateringConfigModalComponent,
    CateringItemModalComponent,
    CateringMenuComponent,
    CateringMenuItemComponent,
    CateringItemOptionModalComponent,
    CateringOrderListComponent,
    CateringOrderComponent,
    CateringOrderItemComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        MatMenuModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatDialogModule,
        ComponentsModule,
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedCateringModule {}
