import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';
import { SharedSpacesModule } from '@placeos/spaces';

import { ExploreComponent } from './explore.component';
import { FooterLegendComponent } from './footer-legend.component';
import { FiltersComponent } from './filters.component';
import { SharedComponentsModule } from '../components/shared-components.module';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent },
];

@NgModule({
    declarations: [ExploreComponent, FooterLegendComponent, FiltersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ComponentsModule,
        SharedSpacesModule,
        SharedComponentsModule,
        FormsModule,
        SharedExploreModule,
    ]
})
export class AppExploreModule {}
