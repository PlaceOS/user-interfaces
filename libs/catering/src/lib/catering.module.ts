import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';

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
import { CateringItemListItemComponent } from './catering-order-modal/catering-item-list-item.component';

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
    CateringItemListItemComponent,

    ChargeCodeListModalComponent,
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
        FormFieldsModule,
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedCateringModule {}
