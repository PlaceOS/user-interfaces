import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';

const routes: Routes = [{ path: '', component: CreateSurveyFormComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
