import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Route, RouterModule } from '@angular/router';
import { SharedExploreModule } from '@placeos/explore';

import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    IconComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { AccessibilityControlsComponent } from 'apps/map-kiosk/src/app/accessibility-controls.component';
import { ExploreLevelSelectComponent } from 'apps/map-kiosk/src/app/explore-level-select.component';
import { ExploreComponent } from 'apps/map-kiosk/src/app/explore.component';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];

const STANDALONE_COMPONENTS = [
    InteractiveMapComponent,
    IconComponent,
    CustomTooltipComponent,
    AuthenticatedImageDirective,
];

@NgModule({
    declarations: [
        ExploreComponent,
        ExploreLevelSelectComponent,
        AccessibilityControlsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedExploreModule,
        FormsModule,
        MatMenuModule,
        MatSlideToggleModule,
        ...STANDALONE_COMPONENTS,
    ],
})
export class AppExploreModule {}
