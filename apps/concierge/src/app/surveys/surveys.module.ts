import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { UIModule } from '../ui/ui.module';

import { BuildingListComponent } from './building-list.component';

import { NewSurveyWidgetComponent } from './new-survey-widget.component';
import { QuestionModalComponent } from './question-modal.component';
import { QuestionComponent } from './question.component';
import { QuestionPipe } from './question.pipe';
import { SurveyBuilderComponent } from './survey-builder.component';
import { SurveyListingsComponent } from './survey-listings.component';
import { SurveyOutletComponent } from './survey-outlet.component';
import { SurveyResponsesComponent } from './survey-responses.component';
import { SurveyComponent } from './survey.component';

// //SurveyJS styling
// StylesManager.applyTheme('modern');

const routes: Route[] = [
    { path: 'run/:id', component: SurveyOutletComponent },
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
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

const COMPONENTS = [
    SurveyComponent,
    BuildingListComponent,
    SurveyListingsComponent,
    SurveyResponsesComponent,
];

const STANDALONE_COMPONENTS = [
    QuestionPipe,
    SurveyOutletComponent,
    SurveyBuilderComponent,
    NewSurveyWidgetComponent,
    QuestionComponent,
    QuestionModalComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        DragDropModule,
        MatSelectModule,
        MatSlideToggleModule,
        ComponentsModule,
        RouterModule,
        MatTableModule,
        MatMenuModule,
        MatFormFieldModule,
        UIModule,
        ...STANDALONE_COMPONENTS,
    ],
})
export class SurveysModule {}
