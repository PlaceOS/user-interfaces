import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ComponentsModule } from '@placeos/components';

import { ActionFieldComponent } from './action-field.component';
import { CounterComponent } from './counter.component';
import { DateFieldComponent } from './date-field.component';
import { DurationFieldComponent } from './duration-field.component';
import { TimeFieldComponent } from './time-field.component';
import { UserListFieldComponent } from './user-list-field.component';
import { UserSearchFieldComponent } from './user-search-field.component';
import { ItemListFieldComponent } from './item-list-field.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

export * from './action-field.component';
export * from './counter.component';
export * from './date-field.component';
export * from './duration-field.component';
export * from './time-field.component';
export * from './user-list-field.component';
export * from './user-search-field.component';

const COMPONENTS: Type<any>[] = [
    ActionFieldComponent,
    CounterComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
    ItemListFieldComponent,
];
@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatCheckboxModule,
        ComponentsModule,
    ],
    exports: [...COMPONENTS],
})
export class FormFieldsModule {}
