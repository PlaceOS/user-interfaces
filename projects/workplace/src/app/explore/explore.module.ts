import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AInteractiveMapModule } from '@acaprojects/ngx-interactive-map';

import { SharedContentModule } from '../ui/shared.module';
import { ExploreComponent } from './explore.component';

import { BookingModalComponent } from './overlays/booking-modal/booking-modal.component';

import { ExploreMapViewComponent } from 'src/app/explore/explore-map-view.component';
import { ExploreZoomControlComponent } from 'src/app/explore/explore-zoom-control.component';
import { ExploreMapControlComponent } from 'src/app/explore/explore-map-control.component';
import { ExploreSearchComponent } from 'src/app/explore/explore-search.component';
import { ExploreSpaceInfoComponent } from 'src/app/explore/explore-space-info.component';
import { InteractiveMapComponent, MAP_FEATURE_DATA } from 'src/app/ui/interactive-map.component';


const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent }
];

@NgModule({
    declarations: [
        ExploreComponent,
        ExploreMapViewComponent,
        ExploreZoomControlComponent,
        ExploreMapControlComponent,
        ExploreSearchComponent,
        ExploreSpaceInfoComponent,
        InteractiveMapComponent,

        BookingModalComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        AInteractiveMapModule,
        FormsModule
    ],
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }]
})
export class ExploreModule {}
