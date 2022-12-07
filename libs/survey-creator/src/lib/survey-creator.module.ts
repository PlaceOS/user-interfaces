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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { LibRoutingModule } from './lib-routing.module';

import { InputTitleComponent } from './components/input-title.component';
import { ButtonWithIconComponent } from './components/button-with-icon.component';
import { QuestionBoxComponent } from './components/question-box.component';
import { DesignPreviewContainerComponent } from './pages/design-preview-container.component';
import { QuestionListItemComponent } from './components/question-list-item.component';
import { SearchBarComponent } from './components/search-bar.component';
import { RatingQuestionComponent } from './components/rating-question.component';
import { TextQuestionComponent } from './components/text-question.component';
import { ButtonBorderlessComponent } from './components/button-borderless.component';
import { AddQuestionBankComponent } from './components/add-question-bank.component';
import { CheckboxQuestionComponent } from './components/checkbox-question.component';
import { PlusButtonComponent } from './components/plus-button.component';
import { MinusButtonComponent } from './components/minus-button.component';
import { CommentBoxQuestionComponent } from './components/comment-box-question.component';
import { DropdownQuestionComponent } from './components/dropdown-question.component';
import { CompleteSurveyComponent } from './pages/complete-survey.component';
import { EditQuestionBankComponent } from './components/edit-question-bank.component';
import { QuestionContainerComponent } from './components/question-container.component';
import { SurveyListComponent } from './pages/survey-list.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal.component';
import { BuildingListComponent } from './pages/building-list.component';
import { BuildingListItemComponent } from './components/building-list-item.component';
import { AddBuildingModalComponent } from './components/add-building-modal.component';
import { DragdropDirective } from './components/dragdrop.directive';

const COMPONENTS: Type<any>[] = [
    InputTitleComponent,
    ButtonWithIconComponent,
    QuestionBoxComponent,
    DesignPreviewContainerComponent,
    QuestionListItemComponent,
    SearchBarComponent,
    RatingQuestionComponent,
    TextQuestionComponent,
    ButtonBorderlessComponent,
    AddQuestionBankComponent,
    CheckboxQuestionComponent,
    PlusButtonComponent,
    MinusButtonComponent,
    CommentBoxQuestionComponent,
    DropdownQuestionComponent,
    CompleteSurveyComponent,
    EditQuestionBankComponent,
    QuestionContainerComponent,
    SurveyListComponent,
    ConfirmDeleteModalComponent,
    BuildingListComponent,
    BuildingListItemComponent,
    AddBuildingModalComponent,
];

@NgModule({
    declarations: [...COMPONENTS, DragdropDirective],
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
        MatSlideToggleModule,
        ComponentsModule,
        RouterModule,
        MatTableModule,
        MatMenuModule,
        LibRoutingModule,
    ],
    exports: [...COMPONENTS],
})
export class SurveyCreatorModule {}
