import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ExploreComponent } from './explore.component';
import { SharedContentModule } from '../ui/shared.module';
import { FooterLegendComponent } from './footer-legend/footer-legend.component';
import { FiltersComponent } from './filters/filters.component';
import { ComponentsModule } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';

const ROUTES: Route[] = [
    { path: '', component: ExploreComponent },
    { path: ':search_type', component: ExploreComponent }
];

@NgModule({
    declarations: [
        ExploreComponent,
        FooterLegendComponent,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        ComponentsModule,
        FormsModule,
        SharedExploreModule
    ],
    entryComponents: [
        FiltersComponent
    ]
})
export class AppExploreModule {}
