import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ADatePickerModule } from '@acaprojects/ngx-date-picker';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { BindingDirective } from './binding/binding.directive';
import { ActionIconComponent } from './action-icon/action-icon.component';
import { IconComponent } from './icon/icon.component';
import { PopoutMenuComponent } from './popout-menu/popout-menu.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

import { ActionFieldComponent } from './action-field/action-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { DurationFieldComponent } from './duration-field/duration-field.component';
import { TimeFieldComponent } from './time-field/time-field.component';
import { UserListFieldComponent } from './user-list-field/user-list-field.component';
import { UserSearchFieldComponent } from './user-search-field/user-search-field.component';

const MAT_MODULES: any[] = [
    MatAutocompleteModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule
];

const COMPONENTS: Type<any>[] = [
    ActionIconComponent,
    IconComponent,
    PopoutMenuComponent,
    UserAvatarComponent,

    ActionFieldComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
];

const DIRECTIVES: Type<any>[] = [BindingDirective];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [FormsModule, ReactiveFormsModule, ADatePickerModule, APipesModule, ...MAT_MODULES],
    providers: [],
    exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES, APipesModule],
})
export class SharedUIModule {}
