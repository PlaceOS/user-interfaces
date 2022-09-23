import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';
import { CompleteSurveyComponent } from './complete-survey.component';

const routes: Routes = [
    { path: '', component: CreateSurveyFormComponent },
    { path: 'complete-survey', component: CompleteSurveyComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
