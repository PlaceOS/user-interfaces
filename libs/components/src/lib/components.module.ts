import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {ClipboardModule} from '@angular/cdk/clipboard';

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
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from './confirm-modal.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { InteractiveMapComponent } from './interactive-map.component';
import { MapPinComponent } from './map-pin.component';
import { MapRadiusComponent } from './map-radius.component';

export * from './action-field/action-field.component';
export * from './action-icon/action-icon.component';
export * from './binding/binding.directive';
export * from './booking-form/booking-form.component';
export * from './confirm-modal.component';
export * from './counter/counter.component';
export * from './date-field/date-field.component';
export * from './duration-field/duration-field.component';
export * from './icon/icon.component';
export * from './login/login.component';
export * from './popout-menu/popout-menu.component';
export * from './time-field/time-field.component';
export * from './unauthorised/unauthorised.component';
export * from './user-avatar/user-avatar.component';
export * from './user-form/user-form.component';
export * from './user-list-field/user-list-field.component';
export * from './user-search-field/user-search-field.component';
export * from './interactive-map.component';
export * from './map-pin.component';
export * from './map-radius.component';

const MAT_MODULES: any[] = [
    MatAutocompleteModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    ClipboardModule
];

const COMPONENTS: Type<any>[] = [
    ActionIconComponent,
    IconComponent,
    PopoutMenuComponent,
    UserAvatarComponent,

    ActionFieldComponent,
    DateFieldComponent,
    DurationFieldComponent,
    CounterComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
    ConfirmModalComponent,
    InteractiveMapComponent,
    MapPinComponent,
    MapRadiusComponent
];

const DIRECTIVES: Type<any>[] = [BindingDirective];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, APipesModule, ...MAT_MODULES],
    providers: [],
    exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES, APipesModule],
})
export class ComponentsModule {}
