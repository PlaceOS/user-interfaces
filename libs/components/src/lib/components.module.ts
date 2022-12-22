import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { GlobalBannerComponent } from './global-banner.component';
import { MapLocateModalComponent } from './map-locate-modal.component';
import { ImageCarouselComponent } from './image-carousel.component';
import { DurationPipe } from './duration.pipe';
import { RedirectComponent } from './redirect.component';
import { DebugConsoleComponent } from './debug-console.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { JsonDisplayComponent } from './json-display.component';
import { ChangelogModalComponent } from './changelog-modal.component';

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
    ScrollingModule,
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
    GlobalBannerComponent,
    MapLocateModalComponent,
    ImageCarouselComponent,
    RedirectComponent,
    DebugConsoleComponent,
    JsonDisplayComponent,
    ChangelogModalComponent,

    FixedPipe,
    SafePipe,
    SanitizePipe,
    DurationPipe,
];

const DIRECTIVES: Type<any>[] = [BindingDirective];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...MAT_MODULES,
    ],
    providers: [
        { provide: MAP_FEATURE_DATA, useValue: {} },
    ],
    exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES, TranslateModule],
})
export class ComponentsModule {}
