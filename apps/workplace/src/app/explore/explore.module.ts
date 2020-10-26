import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedContentModule } from '../ui/shared.module';
import { ExploreComponent } from './explore.component';

import { BookingModalComponent } from './overlays/booking-modal/booking-modal.component';
import { SharedExploreModule } from '@user-interfaces/explore';

import {
    MAP_FEATURE_DATA,
} from '@user-interfaces/components';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];

@NgModule({
    declarations: [
        ExploreComponent,

        BookingModalComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        SharedExploreModule,
        FormsModule,
    ],
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
})
export class ExploreModule {}
