import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { ComponentsModule } from '@placeos/components';
import { FormFieldsModule } from '@placeos/form-fields';
import { CateringConfigModalComponent } from './catering-config-modal.component';
import { CateringItemModalComponent } from './catering-item-modal.component';
import { CateringMenuItemComponent } from './catering-menu-item.component';
import { CateringMenuComponent } from './catering-menu.component';
import { CateringItemOptionModalComponent } from './catering-option-modal.component';
import { CateringOrderItemComponent } from './catering-order-item.component';
import { CateringOrderListComponent } from './catering-order-list.component';
import { CateringOrderModalComponent } from './catering-order-modal.component';
import { CateringOrderOptionsModalComponent } from './catering-order-options-modal.component';
import { CateringOrderComponent } from './catering-order.component';
import { MatTooltipModule } from '@angular/material/tooltip';

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
        MatCheckboxModule,
        MatRadioModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        FormFieldsModule,
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedCateringModule {}
