import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ExploreComponent } from './explore.component';
import { IndoorMapsComponent } from './indoor-maps/indoor-maps.component';

import { SharedExploreModule } from '@placeos/explore';

import { MAP_FEATURE_DATA } from '@placeos/components';
import { SharedComponentModule } from '../components/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];

@NgModule({
    declarations: [ExploreComponent, IndoorMapsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedComponentModule,
        SharedExploreModule,
        FormsModule,
        MatButtonToggleModule,
    ],
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
})
export class ExploreModule {}
