import { NgModule, Type } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { ComponentsModule } from '@user-interfaces/components';

import { CateringConfigModalComponent } from './catering-config-modal.component';
import { CateringItemModalComponent } from './catering-item-modal.component';
import { CateringMenuItemComponent } from './catering-menu-item.component';
import { CateringMenuComponent } from './catering-menu.component';
import { CateringItemOptionModalComponent } from './catering-option-modal.component';
import { CateringOptionsModalComponent } from './catering-options-modal/catering-options-modal.component';
import { CateringOrderListOrderItemComponent } from './catering-order-list-order-item.component';
import { CateringOrderListOrderComponent } from './catering-order-list-order.component';
import { CateringOrderListComponent } from './catering-order-list.component';
import { CateringOrderModalComponent } from './catering-order-modal/catering-order-modal.component';

const COMPONENTS: Type<any>[] = [
    CateringOptionsModalComponent,
    CateringOrderModalComponent,
    CateringConfigModalComponent,
    CateringItemModalComponent,
    CateringMenuComponent,
    CateringMenuItemComponent,
    CateringItemOptionModalComponent,
    CateringOrderListComponent,
    CateringOrderListOrderComponent,
    CateringOrderListOrderItemComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        MatMenuModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatDialogModule,
        ComponentsModule
    ],
    providers: [],
    exports: [...COMPONENTS]
})
export class SharedCateringModule {}
