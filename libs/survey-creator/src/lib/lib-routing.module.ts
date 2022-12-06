import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuildingListComponent } from './pages/building-list.component';
import { SurveyListComponent } from './pages/survey-list.component';
import { DesignPreviewContainerComponent } from './pages/design-preview-container.component';
import { CompleteSurveyComponent } from './pages/complete-survey.component';
import { NotFoundComponent } from './pages/not-found.component';

const routes: Routes = [
    { path: '', component: BuildingListComponent },
    { path: 'survey-list/:id', component: SurveyListComponent },
    { path: 'create-survey', component: DesignPreviewContainerComponent },
    { path: 'complete-survey/:id', component: CompleteSurveyComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class LibRoutingModule {}
