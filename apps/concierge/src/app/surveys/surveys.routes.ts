import { Routes } from '@angular/router';
import { SurveyOutletComponent } from '@placeos/components';
import { unsavedChangesGuard } from '../ui/unsaved-changes.guard';
import { BuildingListComponent } from './building-list.component';
import { SurveyBuilderComponent } from './survey-builder.component';
import { SurveyListingsComponent } from './survey-listings.component';
import { SurveyResponsesComponent } from './survey-responses.component';
import { SurveyComponent } from './survey.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: SurveyComponent,
        children: [
            { path: '', component: BuildingListComponent, title: 'Surveys' },
            {
                path: 'list/:id',
                component: SurveyListingsComponent,
                title: 'Surveys',
            },
            {
                path: 'builder',
                component: SurveyBuilderComponent,
                title: 'Survey Builder',
                canDeactivate: [unsavedChangesGuard],
            },
            {
                path: 'builder/:id',
                component: SurveyBuilderComponent,
                title: 'Survey Builder',
                canDeactivate: [unsavedChangesGuard],
            },
            {
                path: 'responses/:id',
                component: SurveyResponsesComponent,
                title: 'Survey Responses',
            },
            { path: '**', pathMatch: 'full', redirectTo: '' },
        ],
    },
    { path: 'run/:id', component: SurveyOutletComponent, title: 'Survey' },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];
