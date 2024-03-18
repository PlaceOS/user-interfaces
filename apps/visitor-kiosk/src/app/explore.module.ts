import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';
import { SharedSpacesModule } from '@placeos/spaces';

import { SharedComponentsModule } from './components/shared-components.module';

import { ExploreComponent } from 'apps/map-kiosk/src/app/explore.component';
import { ExploreLevelSelectComponent } from 'apps/map-kiosk/src/app/explore-level-select.component';
import { AccessibilityControlsComponent } from 'apps/map-kiosk/src/app/accessibility-controls.component';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
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
        ComponentsModule,
        SharedSpacesModule,
        SharedComponentsModule,
        FormsModule,
        SharedExploreModule,
    ],
})
export class AppExploreModule {}
