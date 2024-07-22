import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

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
import { LevelPipe } from './level.pipe';
import { BuildingPipe } from './building.pipe';
import { UserControlsComponent } from './user-controls.component';
import { BuildingSelectComponent } from './building-select.component';
import { RegionSelectComponent } from './region-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { LanguageSelectComponent } from './language-tooltip.component';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { UploadPermissionsModalComponent } from './upload-permissions-modal.component';
import { IndoorMapsComponent } from './indoor-maps.component';
import { PrintableComponent } from './printable.component';
import { ChatComponent } from './chat/chat.component';
import { DateFromPipe } from './date-from.pipe';
import { AttachedResourceConfigModalComponent } from './attached-resource-config-modal.component';
import { StatusPillComponent } from './status-pill.component';
import { AvailableRoomsStateModalComponent } from './available-rooms-state-modal.component';
import { MediaDurationPipe } from './media-duration.pipe';
import { ThumbnailPipe } from './thumbnail.pipe';
import { MapRendererComponent } from './map-renderer.component';
import { MapsIndoorsComponent } from './maps-indoors.component';
import { MapCanvasComponent } from './map-canvas.component';
import { ImageViewerComponent } from './image-viewer.component';
import { SimpleTableComponent } from './simple-table.component';
import { LimitInputDirective } from './limit-input.directive';

const MAT_MODULES: any[] = [
    MatAutocompleteModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRippleModule,
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
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
];

const COMPONENTS: Type<any>[] = [
    ActionIconComponent,
    IconComponent,
    PopoutMenuComponent,
    UserAvatarComponent,

    ConfirmModalComponent,
    InteractiveMapComponent,
    MapRendererComponent,
    MapsIndoorsComponent,
    MapPinComponent,
    MapRadiusComponent,
    MapPolygonComponent,
    MapCanvasComponent,
    IndoorMapsComponent,
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
    StatusPillComponent,
    ImageViewerComponent,
    SimpleTableComponent,

    FixedPipe,
    SafePipe,
    SanitizePipe,
    DurationPipe,
    LevelPipe,
    BuildingPipe,
    DateFromPipe,
    MediaDurationPipe,
    ThumbnailPipe,

    UserControlsComponent,
    BuildingSelectComponent,
    RegionSelectComponent,
    HelpTooltipComponent,
    AccessibilityTooltipComponent,
    LanguageSelectComponent,
    UploadPermissionsModalComponent,
    PrintableComponent,
    ChatComponent,
    AttachedResourceConfigModalComponent,
    AvailableRoomsStateModalComponent,
];

const DIRECTIVES: Type<any>[] = [
    BindingDirective,
    AuthenticatedImageDirective,
    LimitInputDirective,
];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES, TranslateModule],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        ...MAT_MODULES,
    ],
    providers: [
        { provide: MAP_FEATURE_DATA, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class ComponentsModule {}
