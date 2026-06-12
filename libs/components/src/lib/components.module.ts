import { NgModule } from '@angular/core';

import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';

import { ActionIconComponent } from './action-icon.component';
import { BindingDirective } from './binding.directive';
import { PopoutMenuComponent } from './popout-menu.component';
import { UserAvatarComponent } from './user-avatar.component';

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
import { DynamicMapComponent } from './dynamic-map.component';
import { MapsIndoorsComponent } from './maps-indoors.component';
import { MediaDurationPipe } from './media-duration.pipe';
import { MisconfiguredComponent } from './misconfigured.component';
import { PrintableComponent } from './printable.component';
import { RedirectComponent } from './redirect.component';
import { RegionSelectComponent } from './region-select.component';
import { SafePipe } from './safe.pipe';
import { SanitizePipe } from './sanitise.pipe';
import { ServiceWorkerUpdateCardComponent } from './service-worker-update-card.component';
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

const STANDALONE_COMPONENTS = [
    IconComponent,
    ConfirmModalComponent,
    CustomTooltipComponent,
    SettingsToggleComponent,
    ServiceWorkerUpdateCardComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    ChatComponent,
    InteractiveMapComponent,
    DynamicMapComponent,
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
    LimitInputDirective,

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

@NgModule({
    declarations: [],
    exports: [...STANDALONE_COMPONENTS],
    imports: [...STANDALONE_COMPONENTS],
    providers: [
        { provide: MAP_FEATURE_DATA, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class ComponentsModule {}
