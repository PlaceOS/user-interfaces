import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SurveyOutletComponent } from '@placeos/components';

import { BuildingListComponent } from './building-list.component';

import { SurveyBuilderComponent } from './survey-builder.component';
import { SurveyListingsComponent } from './survey-listings.component';
import { SurveyResponsesComponent } from './survey-responses.component';
import { SurveyComponent } from './survey.component';

const routes: Route[] = [
    {
        path: '',
        component: SurveyComponent,
        children: [
            { path: '', component: BuildingListComponent },
            { path: 'list/:id', component: SurveyListingsComponent },
            { path: 'builder', component: SurveyBuilderComponent },
            { path: 'builder/:id', component: SurveyBuilderComponent },
            { path: 'responses/:id', component: SurveyResponsesComponent },
            { path: '**', pathMatch: 'full', redirectTo: '' },
        ],
    },
    { path: 'run/:id', component: SurveyOutletComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [
        SurveyComponent,
        SurveyOutletComponent,
        BuildingListComponent,
        SurveyListingsComponent,
        SurveyBuilderComponent,
        SurveyResponsesComponent,
        RouterModule.forChild(routes),
    ],
})
export class SurveysModule {}
