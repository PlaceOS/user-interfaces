import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormFieldsModule } from '@placeos/form-fields';

import { ComponentsModule } from 'libs/components/src/lib/components.module';

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
import { CateringImportMenuModalComponent } from './catering-import-menu-modal.component';

import { NewCateringOrderModalComponent } from './catering-order-modal/new-catering-order-modal.component';
import { CateringItemListComponent } from './catering-order-modal/catering-item-list.component';
import { CateringItemDetailsComponent } from './catering-order-modal/catering-item-details.component';
import { CateringItemFiltersComponent } from './catering-order-modal/catering-item-filters.component';
import { CateringListFieldComponent } from './catering-list-field.component';
import { CateringRoomsStateModalComponent } from './catering-rooms-state-modal.component';
import { ChargeCodeListModalComponent } from './charge-code-list-modal.component';

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
    CateringImportMenuModalComponent,

    CateringListFieldComponent,
    NewCateringOrderModalComponent,
    CateringItemListComponent,
    CateringItemDetailsComponent,
    CateringItemFiltersComponent,
    CateringRoomsStateModalComponent,

    ChargeCodeListModalComponent
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
        MatFormFieldModule,
        FormFieldsModule
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedCateringModule {}
