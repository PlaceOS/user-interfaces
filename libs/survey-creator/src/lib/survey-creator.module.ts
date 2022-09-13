import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { SurveyCreatorComponent } from './survey-creator.component';
import { InputTitleComponent } from './components/input-title.component';
import { ButtonWithIconComponent } from './components/button-with-icon.component';
import { QuestionBoxComponent } from './components/question-box.component';
import { DesignPreviewContainerComponent } from './components/design-preview-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuestionListItemComponent } from './components/question-list-item.component';
import { SearchBarComponent } from './components/search-bar.component';
import { RatingQuestionComponent } from './components/rating-question.component';
import { TextQuestionComponent } from './components/text-question.component';

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
    ],
    exports: [...COMPONENTS],
})
export class SurveyCreatorModule {}
