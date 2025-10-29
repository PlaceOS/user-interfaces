import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AccessibilityControlsComponent } from 'apps/map-kiosk/src/app/accessibility-controls.component';
import { ExploreLevelSelectComponent } from 'apps/map-kiosk/src/app/explore-level-select.component';
import { ExploreComponent } from 'apps/map-kiosk/src/app/explore.component';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];

const STANDALONE_COMPONENTS = [
    ExploreComponent,
    ExploreLevelSelectComponent,
    AccessibilityControlsComponent,
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES), ...STANDALONE_COMPONENTS],
})
export class AppExploreModule {}
