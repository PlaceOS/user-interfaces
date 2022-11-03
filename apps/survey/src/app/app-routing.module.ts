import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';
import { CompleteSurveyComponent } from './complete-survey.component';
import { SurveyListComponent } from '../../../../libs/survey-creator/src/lib/pages/survey-list.component';
import { BuildingListComponent } from '../../../../libs/survey-creator/src/lib/pages/building-list.component';

const routes: Routes = [
    { path: '', component: CreateSurveyFormComponent },
    { path: 'complete-survey', component: CompleteSurveyComponent },
    { path: 'list', component: SurveyListComponent },
    { path: 'buildings', component: BuildingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
