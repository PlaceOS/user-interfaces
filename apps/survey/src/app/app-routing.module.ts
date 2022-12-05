import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';
import { CompleteSurveyComponent } from './complete-survey.component';
import { SurveyListComponent } from '../../../../libs/survey-creator/src/lib/pages/survey-list.component';
import { BuildingListComponent } from '../../../../libs/survey-creator/src/lib/pages/building-list.component';
import { NotFoundComponent } from './not-found.component';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthorisedUserGuard],
        component: BuildingListComponent,
    },
    {
        path: 'create-survey',
        // canActivate: [AuthorisedUserGuard],
        component: CreateSurveyFormComponent,
    },
    {
        path: 'complete-survey',
        // canActivate: [AuthorisedUserGuard],
        component: CompleteSurveyComponent,
    },
    {
        path: 'list',
        // canActivate: [AuthorisedUserGuard],
        component: SurveyListComponent,
    },
    { path: '404', component: NotFoundComponent },
    { path: '', pathMatch: 'full', redirectTo: '/buildings' },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
