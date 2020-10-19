import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedContentModule } from '../ui/shared.module';
import { ExploreComponent } from './explore.component';

import { BookingModalComponent } from './overlays/booking-modal/booking-modal.component';

import {
    InteractiveMapComponent,
    MAP_FEATURE_DATA,
} from '@user-interfaces/components';
import {
    ExploreMapControlComponent,
    ExploreMapViewComponent,
    ExploreSearchComponent,
    ExploreSpaceInfoComponent,
    ExploreZoomControlComponent,
} from '@user-interfaces/explore';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
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
        FormsModule,
    ],
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
})
export class ExploreModule {}
