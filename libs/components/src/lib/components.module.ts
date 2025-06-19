import { ClipboardModule } from '@angular/cdk/clipboard';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';

import { ActionIconComponent } from './action-icon.component';
import { BindingDirective } from './binding.directive';
import { PopoutMenuComponent } from './popout-menu.component';
import { UserAvatarComponent } from './user-avatar.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { AttachedResourceConfigModalComponent } from './attached-resource-config-modal.component';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { AvailableRoomsStateModalComponent } from './available-rooms-state-modal.component';
import { BuildingSelectComponent } from './building-select.component';
import { BuildingPipe } from './building.pipe';
import { ChangelogModalComponent } from './changelog-modal.component';
import { ChatComponent } from './chat/chat.component';
import { CiscoMapComponent } from './cisco-map.component';
import { ConfirmModalComponent } from './confirm-modal.component';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { DateFromPipe } from './date-from.pipe';
import { DebugConsoleComponent } from './debug-console.component';
import { DeskHeightPresetsComponent } from './desk-height-presets.component';
import { DurationPipe } from './duration.pipe';
import { FixedPipe } from './fixed.pipe';
import { FullscreenModalShellComponent } from './fullscreen-modal-shell.component';
import { GlobalBannerComponent } from './global-banner.component';
import { GlobalLoadingComponent } from './global-loading.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { IconComponent } from './icon.component';
import { ImageCarouselComponent } from './image-carousel.component';
import { ImageViewerComponent } from './image-viewer.component';
import { IndoorMapsComponent } from './indoor-maps.component';
import { InteractiveMapComponent } from './interactive-map.component';
import { JsonDisplayComponent } from './json-display.component';
import { LanguageSelectComponent } from './language-tooltip.component';
import { LevelPipe } from './level.pipe';
import { LimitInputDirective } from './limit-input.directive';
import { LoginComponent } from './login.component';
import { MapCanvasComponent } from './map-canvas.component';
import { MapLocateModalComponent } from './map-locate-modal.component';
import { MapPinComponent } from './map-pin.component';
import { MapPolygonComponent } from './map-polygon.component';
import { MapRadiusComponent } from './map-radius.component';
import { MapRendererComponent } from './map-renderer.component';
import { MapsIndoorsComponent } from './maps-indoors.component';
import { MediaDurationPipe } from './media-duration.pipe';
import { MisconfiguredComponent } from './misconfigured.component';
import { PrintableComponent } from './printable.component';
import { RedirectComponent } from './redirect.component';
import { RegionSelectComponent } from './region-select.component';
import { SafePipe } from './safe.pipe';
import { SanitizePipe } from './sanitise.pipe';
import { SettingsToggleComponent } from './settings-toggle.component';
import { SimpleTableComponent } from './simple-table.component';
import { StatusOverlayComponent } from './status-overlay.component';
import { StatusPillComponent } from './status-pill.component';
import { ThumbnailPipe } from './thumbnail.pipe';
import { TranslatePipe } from './translate.pipe';
import { UnauthorisedComponent } from './unauthorised.component';
import { UserControlsComponent } from './user-controls.component';
import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import { WorkLocationTooltipComponent } from './work-location-tooltip.component';
import { ZonePipe } from './zone.pipe';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

const MAT_MODULES = [
    MatAutocompleteModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    ClipboardModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatPaginatorModule,
    PortalModule,
    ScrollingModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
];

const COMPONENTS = [
    ActionIconComponent,
    PopoutMenuComponent,

    MapPinComponent,
    MapRadiusComponent,
    MapPolygonComponent,
    MapCanvasComponent,
    IndoorMapsComponent,
    StatusOverlayComponent,
    MapLocateModalComponent,
    RedirectComponent,
    DebugConsoleComponent,
    JsonDisplayComponent,
    ImageViewerComponent,
    WorkLocationTooltipComponent,

    FixedPipe,
    DateFromPipe,
    ThumbnailPipe,

    UserControlsComponent,
    BuildingSelectComponent,
    RegionSelectComponent,
    HelpTooltipComponent,
    AccessibilityTooltipComponent,
    LanguageSelectComponent,
    AttachedResourceConfigModalComponent,

    LoginComponent,

    MisconfiguredComponent,
];

const DIRECTIVES = [LimitInputDirective];

const STANDALONE_COMPONENTS = [
    IconComponent,
    ConfirmModalComponent,
    CustomTooltipComponent,
    SettingsToggleComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    ChatComponent,
    InteractiveMapComponent,
    MapRendererComponent,
    MapsIndoorsComponent,
    VirtualKeyboardComponent,
    SimpleTableComponent,
    AvailableRoomsStateModalComponent,
    ChangelogModalComponent,
    ImageCarouselComponent,
    UserAvatarComponent,
    StatusPillComponent,
    DeskHeightPresetsComponent,
    PrintableComponent,

    CiscoMapComponent,

    UnauthorisedComponent,
    FullscreenModalShellComponent,

    AuthenticatedImageDirective,
    BindingDirective,

    TranslatePipe,
    MediaDurationPipe,
    SafePipe,
    SanitizePipe,
    DurationPipe,
    LevelPipe,
    BuildingPipe,
    ZonePipe,
];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
    ],
    providers: [
        { provide: MAP_FEATURE_DATA, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class ComponentsModule {}
