import { NgModule } from '@angular/core';

import { CateringImportMenuModalComponent } from './catering-import-menu-modal.component';
import { CateringItemModalComponent } from './catering-item-modal.component';
import { CateringMenuComponent } from './catering-menu.component';
import { CateringItemOptionModalComponent } from './catering-option-modal.component';
import { CateringOrderItemComponent } from './catering-order-item.component';
import { CateringOrderListComponent } from './catering-order-list.component';
import { CateringOrderModalComponent } from './catering-order-modal.component';
import { CateringOrderOptionsModalComponent } from './catering-order-options-modal.component';

import { CateringListFieldComponent } from './catering-list-field.component';
import { NewCateringOrderModalComponent } from './catering-order-modal/new-catering-order-modal.component';
import { ChargeCodeListModalComponent } from './charge-code-list-modal.component';

const STANDALONE_COMPONENTS = [
    CateringListFieldComponent,
    CateringOrderOptionsModalComponent,
    CateringOrderModalComponent,
    CateringItemModalComponent,
    CateringMenuComponent,
    CateringItemOptionModalComponent,
    CateringOrderListComponent,
    CateringOrderItemComponent,
    CateringImportMenuModalComponent,

    NewCateringOrderModalComponent,

    ChargeCodeListModalComponent,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedCateringModule {}
