import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { SurveyCreatorComponent } from './survey-creator.component';
import { InputTitleComponent } from './components/input-title.component';
import { ButtonWithIconComponent } from './components/button-with-icon.component';
import { QuestionBoxComponent } from './components/question-box.component';
import { DesignPreviewContainerComponent } from './components/design-preview-container.component';
import { QuestionListItemComponent } from './components/question-list-item.component';
import { SearchBarComponent } from './components/search-bar.component';
import { RatingQuestionComponent } from './components/rating-question.component';
import { TextQuestionComponent } from './components/text-question.component';
import { ButtonsBorderlessComponent } from './components/buttons-borderless.component';
import { AddQuestionBankComponent } from './components/add-question-bank.component';
import { CheckboxQuestionComponent } from './components/checkbox-question.component';
import { PlusButtonComponent } from './components/plus-button.component';
import { MinusButtonComponent } from './components/minus-button.component';
import { CommentBoxQuestionComponent } from './components/comment-box-question.component';
import { DropdownQuestionComponent } from './components/dropdown-question.component';
import { CompleteSurveyComponent } from './complete-survey.component';

const COMPONENTS: Type<any>[] = [
    SurveyCreatorComponent,
    InputTitleComponent,
    ButtonWithIconComponent,
    QuestionBoxComponent,
    DesignPreviewContainerComponent,
    QuestionListItemComponent,
    SearchBarComponent,
    RatingQuestionComponent,
    TextQuestionComponent,
    ButtonsBorderlessComponent,
    AddQuestionBankComponent,
    CheckboxQuestionComponent,
    PlusButtonComponent,
    MinusButtonComponent,
    CommentBoxQuestionComponent,
    DropdownQuestionComponent,
    CompleteSurveyComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTabsModule,
        DragDropModule,
        MatButtonModule,
        MatSelectModule,
    ],
    exports: [...COMPONENTS],
})
export class SurveyCreatorModule {}
