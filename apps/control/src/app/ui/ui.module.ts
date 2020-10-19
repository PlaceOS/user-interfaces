import { NgModule, Type } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

import { ComponentsModule } from '@user-interfaces/components';

const COMPONENTS: Type<any>[] = [

]

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule
];

const ANGULAR_MODULES: any[] = [
    FormsModule,
    ReactiveFormsModule
]

@NgModule({
    declarations: [],
    imports: [CommonModule, ComponentsModule, ...MAT_MODULES, ...ANGULAR_MODULES],
    exports: [ComponentsModule, ...MAT_MODULES, ...ANGULAR_MODULES]
})
export class UIModule { }
