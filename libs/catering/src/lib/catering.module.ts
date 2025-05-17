import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CateringImportMenuModalComponent } from './catering-import-menu-modal.component';
import { CateringItemModalComponent } from './catering-item-modal.component';
import { CateringMenuComponent } from './catering-menu.component';
import { CateringItemOptionModalComponent } from './catering-option-modal.component';
import { CateringOrderItemComponent } from './catering-order-item.component';
import { CateringOrderListComponent } from './catering-order-list.component';
import { CateringOrderModalComponent } from './catering-order-modal.component';
import { CateringOrderOptionsModalComponent } from './catering-order-options-modal.component';

import { CateringListFieldComponent } from './catering-list-field.component';
import { CateringItemDetailsComponent } from './catering-order-modal/catering-item-details.component';
import { CateringItemFiltersComponent } from './catering-order-modal/catering-item-filters.component';
import { CateringItemListItemComponent } from './catering-order-modal/catering-item-list-item.component';
import { CateringItemListComponent } from './catering-order-modal/catering-item-list.component';
import { NewCateringOrderModalComponent } from './catering-order-modal/new-catering-order-modal.component';
import { ChargeCodeListModalComponent } from './charge-code-list-modal.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

const COMPONENTS: Type<any>[] = [
    CateringOrderOptionsModalComponent,
    CateringOrderModalComponent,
    CateringItemModalComponent,
    CateringMenuComponent,
    CateringItemOptionModalComponent,
    CateringOrderListComponent,
    CateringOrderItemComponent,
    CateringImportMenuModalComponent,

    NewCateringOrderModalComponent,
    CateringItemListComponent,
    CateringItemDetailsComponent,
    CateringItemFiltersComponent,
    CateringItemListItemComponent,

    ChargeCodeListModalComponent,
];

const STANDALONE_IMPORTS = [IconComponent, TranslatePipe, SimpleTableComponent];

const STANDALONE_COMPONENTS = [CateringListFieldComponent];

const MAT_MODULES = [
    MatMenuModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...MAT_MODULES,
        ...STANDALONE_IMPORTS,
        ...STANDALONE_COMPONENTS,
    ],
    providers: [],
    exports: [...COMPONENTS, ...STANDALONE_COMPONENTS],
})
export class SharedCateringModule {}
