import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentsModule } from '@placeos/components';
import { UIModule } from '../ui/ui.module';

import { BuildingListComponent } from './pages/building-list.component';
import { SurveyListComponent } from './pages/survey-list.component';
import { DesignPreviewContainerComponent } from './pages/design-preview-container.component';
import { CompleteSurveyComponent } from './pages/complete-survey.component';
import { NotFoundComponent } from './pages/not-found.component';

import { BuildingListItemComponent } from './components/building-list-item.component';
import { AddBuildingModalComponent } from './components/add-building-modal.component';
import { AddQuestionBankComponent } from './components/add-question-bank.component';
import { EditQuestionBankComponent } from './components/edit-question-bank.component';
import { SearchBarComponent } from './components/search-bar.component';
import { InputTitleComponent } from './components/input-title.component';
import { QuestionContainerComponent } from './components/question-container.component';
import { ButtonBorderlessComponent } from './components/button-borderless.component';
import { QuestionListItemComponent } from './components/question-list-item.component';
import { QuestionBoxComponent } from './components/question-box.component';
import { CheckboxQuestionComponent } from './components/question-type-components/checkbox-question.component';
import { CommentBoxQuestionComponent } from './components/question-type-components/comment-box-question.component';
import { DropdownQuestionComponent } from './components/question-type-components/dropdown-question.component';
import { RatingQuestionComponent } from './components/question-type-components/rating-question.component';
import { TextQuestionComponent } from './components/question-type-components/text-question.component';
import { PlusButtonComponent } from './components/plus-button.component';
import { MinusButtonComponent } from './components/minus-button.component';
import { DragdropDirective } from './components/dragdrop.directive';

import { SurveySuiteModule } from '@placeos/survey-suite';
import { SurveyModule } from 'survey-angular-ui';
import { ModQuestionOverlayComponent } from './overlays/mod-question-overlay.component';

const routes: Route[] = [
    { path: '', component: BuildingListComponent },
    { path: 'survey-list/:id', component: SurveyListComponent },
    { path: 'create', component: DesignPreviewContainerComponent },
    { path: 'complete/:id', component: CompleteSurveyComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

const COMPONENTS = [
    AddBuildingModalComponent,
    BuildingListComponent,
    SurveyListComponent,
    BuildingListItemComponent,
    AddQuestionBankComponent,
    EditQuestionBankComponent,
    DesignPreviewContainerComponent,
    SearchBarComponent,
    InputTitleComponent,
    QuestionContainerComponent,
    ButtonBorderlessComponent,
    CheckboxQuestionComponent,
    CommentBoxQuestionComponent,
    DropdownQuestionComponent,
    RatingQuestionComponent,
    TextQuestionComponent,
    QuestionListItemComponent,
    QuestionBoxComponent,
    PlusButtonComponent,
    MinusButtonComponent,
    CompleteSurveyComponent,
    NotFoundComponent,
    ModQuestionOverlayComponent
];

@NgModule({
    declarations: [...COMPONENTS, DragdropDirective],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTabsModule,
        DragDropModule,
        MatButtonModule,
        MatSelectModule,
        MatSlideToggleModule,
        ComponentsModule,
        RouterModule,
        MatTableModule,
        MatMenuModule,
        MatFormFieldModule,
        UIModule,
        SurveySuiteModule,
        SurveyModule,
    ],
})
export class SurveysModule {}
