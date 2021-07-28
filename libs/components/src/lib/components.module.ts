import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';

import { BindingDirective } from './binding.directive';
import { ActionIconComponent } from './action-icon.component';
import { IconComponent } from './icon.component';
import { PopoutMenuComponent } from './popout-menu.component';
import { UserAvatarComponent } from './user-avatar.component';

import { ConfirmModalComponent } from './confirm-modal.component';
import {
    InteractiveMapComponent,
    MAP_FEATURE_DATA,
} from './interactive-map.component';
import { MapPinComponent } from './map-pin.component';
import { MapRadiusComponent } from './map-radius.component';
import { StatusOverlayComponent } from './status-overlay.component';
import { FixedPipe } from './fixed.pipe';
import { SafePipe } from './safe.pipe';
import { SanitizePipe } from './sanitise.pipe';
import { CustomTableComponent } from './custom-table.component';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import { GlobalLoadingComponent } from './global-loading.component';
import { MatSortModule } from '@angular/material/sort';
import { MapPolygonComponent } from './map-polygon.component';

export * from './action-icon.component';
export * from './binding.directive';
export * from './confirm-modal.component';
export * from './icon.component';
export * from './login.component';
export * from './popout-menu.component';
export * from './unauthorised.component';
export * from './user-avatar.component';
export * from './interactive-map.component';
export * from './map-pin.component';
export * from './map-radius.component';
export * from './misconfigured.component';
export * from './status-overlay.component';
export * from './custom-table.component';
export * from './custom-tooltip.component';
export * from './fixed.pipe';
export * from './safe.pipe';
export * from './sanitise.pipe';
export * from './virtual-keyboard.component';
export * from './global-loading.component';

export * from './authorised-admin.guard';
export * from './authorised-user.guard';

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
    MatChipsModule,
    MatPaginatorModule,
    CdkTableModule,
    PortalModule,
    MatSortModule,
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
    MapPolygonComponent,
    StatusOverlayComponent,
    CustomTableComponent,
    CustomTooltipComponent,
    VirtualKeyboardComponent,
    GlobalLoadingComponent,

    FixedPipe,
    SafePipe,
    SanitizePipe,
];

const DIRECTIVES: Type<any>[] = [BindingDirective];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MAT_MODULES],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: MAP_FEATURE_DATA, useValue: {} },
    ],
    exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES],
})
export class ComponentsModule {}
