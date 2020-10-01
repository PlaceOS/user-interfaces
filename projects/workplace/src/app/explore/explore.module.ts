import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AInteractiveMapModule } from '@acaprojects/ngx-interactive-map';

import { SharedContentModule } from '../shared/shared.module';
import { MapViewComponent } from './map-view/map-view.component';
import { ExploreSpaceStatusComponent } from './status-managers/space-status.component';
import { ExploreDeskStatusComponent } from './status-managers/desk-status.component';
import { ExploreZoneStatusComponent } from './status-managers/zone-status.component';
import { ZoomControlsComponent } from './zoom-controls/zoom-controls.component';
import { ExploreSpaceInfoComponent } from './overlays/space-info/space-info.component';
import { ExploreSearchComponent } from './search/search.component';
import { ExploreMapLegendComponent } from './map-legend/map-legend.component';
import { BookingModalComponent } from './overlays/booking-modal/booking-modal.component';
import { MapZonesComponent } from './map-zones/map-zones.component';

const ROUTES: Route[] = [
    { path: '', component: MapViewComponent },
    { path: ':search_type', component: MapViewComponent }
];

@NgModule({
    declarations: [
        MapViewComponent,
        ExploreSpaceStatusComponent,
        ExploreDeskStatusComponent,
        ExploreZoneStatusComponent,
        ZoomControlsComponent,
        ExploreSpaceInfoComponent,
        ExploreSearchComponent,
        ExploreMapLegendComponent,
        BookingModalComponent,
        MapZonesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        AInteractiveMapModule,
        FormsModule
    ]
})
export class ExploreModule {}
