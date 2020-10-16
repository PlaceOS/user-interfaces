import { NgModule, Type } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

import { IconComponent } from 'src/app/ui/icon/icon.component';
import { BindingDirective } from 'src/app/ui/binding/binding.directive';

const COMPONENTS: Type<any>[] = [
    IconComponent,
    BindingDirective
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
    declarations: [...COMPONENTS],
    imports: [CommonModule, ...MAT_MODULES, ...ANGULAR_MODULES],
    exports: [...COMPONENTS, ...MAT_MODULES, ...ANGULAR_MODULES]
})
export class UIModule { }
