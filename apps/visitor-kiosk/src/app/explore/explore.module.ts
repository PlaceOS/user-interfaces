import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ExploreComponent } from './explore.component';
import { SharedContentModule } from '../ui/shared.module';
import { MapViewComponent } from './map-view/map-view.component';
import { ExploreSpaceStatusComponent } from './status-managers/space-status.component';
import { ExploreDeskStatusComponent } from './status-managers/desk-status.component';
import { ExploreZoneStatusDirective } from './status-managers/zone-status.directive';
import { ZoomControlsComponent } from './zoom-controls/zoom-controls.component';
import { ExploreSpaceInfoComponent } from './overlays/space-info/space-info.component';
import { ExploreSearchComponent } from './search/search.component';
import { ExploreMapLegendComponent } from './map-legend/map-legend.component';
import { FooterLegendComponent } from './footer-legend/footer-legend.component';
import { FiltersComponent } from './filters/filters.component';
import { ComponentsModule } from '@user-interfaces/components';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent }
];

@NgModule({
    declarations: [
        ExploreComponent,
        MapViewComponent,
        ExploreSpaceStatusComponent,
        ExploreDeskStatusComponent,
        ExploreZoneStatusDirective,
        ZoomControlsComponent,
        ExploreSpaceInfoComponent,
        ExploreSearchComponent,
        ExploreMapLegendComponent,
        FooterLegendComponent,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        ComponentsModule,
        FormsModule
    ],
    entryComponents: [
        ExploreSpaceInfoComponent,
        FiltersComponent
    ]
})
export class ExploreModule {}
