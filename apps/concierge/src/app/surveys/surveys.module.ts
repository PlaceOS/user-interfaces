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
import { NotFoundComponent } from './not-found.component';

import { SurveySuiteModule } from '@placeos/survey-suite';
import { QuestionBankComponent } from './question-bank.component';
import { QuestionBankService } from './question-bank.service';
import { QuestionModalComponent } from './question-modal.component';
import { SearchInputComponent } from './search-input.component';
import { SurveyBuilderService } from './survey-builder.service';
import { SurveyListingsComponent } from './survey-listings.component';
import { SurveyManageComponent } from './survey-manage.component';
import { SurveyOutletComponent } from './survey-outlet.component';
import { SurveyResponsesComponent } from './survey-responses.component';
import { SurveyComponent } from './survey.component';
import { SurveyService } from './survey.service';

// //SurveyJS styling
// StylesManager.applyTheme('modern');

const routes: Route[] = [
    { path: 'run/:id', component: SurveyOutletComponent },
    {
        path: '',
        component: SurveyComponent,
        children: [
            { path: '', component: BuildingListComponent },
            { path: 'survey-list/:id', component: SurveyListingsComponent },
            { path: 'builder', component: SurveyManageComponent },
            { path: 'responses/:id', component: SurveyResponsesComponent },
            { path: '**', pathMatch: 'full', component: NotFoundComponent },
        ],
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

const COMPONENTS = [
    SurveyComponent,
    BuildingListComponent,
    NotFoundComponent,
    QuestionModalComponent,
    QuestionBankComponent,
    SurveyManageComponent,
    SearchInputComponent,
    SurveyListingsComponent,
    SurveyResponsesComponent,
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
        SurveySuiteModule,
        SurveyOutletComponent,
    ],
    providers: [SurveyBuilderService, QuestionBankService, SurveyService],
})
export class SurveysModule {}
