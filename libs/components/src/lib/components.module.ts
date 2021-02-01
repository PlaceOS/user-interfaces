import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { APipesModule } from '@acaprojects/ngx-pipes';

import { BindingDirective } from './binding.directive';
import { ActionIconComponent } from './action-icon.component';
import { IconComponent } from './icon.component';
import { PopoutMenuComponent } from './popout-menu.component';
import { UserAvatarComponent } from './user-avatar.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from './confirm-modal.component';
import { CommonModule } from '@angular/common';
import { InteractiveMapComponent, MAP_FEATURE_DATA } from './interactive-map.component';
import { MapPinComponent } from './map-pin.component';
import { MapRadiusComponent } from './map-radius.component';
import { SearchbarComponent } from './searchbar.component';
import { StatusOverlayComponent } from './status-overlay.component';

export * from './action-icon.component';
export * from './binding.directive';
export * from './confirm-modal.component';
export * from './icon.component';
export * from './login/login.component';
export * from './popout-menu.component';
export * from './unauthorised.component';
export * from './user-avatar.component';
export * from './interactive-map.component';
export * from './map-pin.component';
export * from './map-radius.component';
export * from './searchbar.component';
export * from './misconfigured.component';
export * from './status-overlay.component';

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
    ClipboardModule,
    MatProgressSpinnerModule,
    MatChipsModule
];

const COMPONENTS: Type<any>[] = [
    ActionIconComponent,
    IconComponent,
    PopoutMenuComponent,
    UserAvatarComponent,

    ConfirmModalComponent,
    InteractiveMapComponent,
    MapPinComponent,
    MapRadiusComponent,
    SearchbarComponent,
    StatusOverlayComponent
];

const DIRECTIVES: Type<any>[] = [BindingDirective];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        APipesModule,
        ...MAT_MODULES,
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: MAP_FEATURE_DATA, useValue: {} }
    ],
    exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES, APipesModule],
})
export class ComponentsModule {}
