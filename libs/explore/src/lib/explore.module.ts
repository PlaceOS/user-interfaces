import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '@user-interfaces/components';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ExploreMapControlComponent } from './explore-map-control.component';
import { ExploreMapViewComponent } from './explore-map-view.component';
import { ExploreSearchComponent } from './explore-search.component';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';
import { ExploreZoomControlComponent } from './explore-zoom-control.component';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';

const COMPONENTS: Type<any>[] = [
    ExploreMapControlComponent,
    ExploreMapViewComponent,
    ExploreSearchComponent,
    ExploreSpaceInfoComponent,
    ExploreDeviceInfoComponent,
    ExploreZoomControlComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, ComponentsModule, FormsModule, MatSlideToggleModule],
    exports: [...COMPONENTS]
})
export class SharedExploreModule {}
