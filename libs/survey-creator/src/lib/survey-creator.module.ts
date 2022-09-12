import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { SurveyCreatorComponent } from './survey-creator.component';
import { InputTitleComponent } from './components/input-title/input-title.component';
import { ButtonWithIconComponent } from './components/button-with-icon/button-with-icon.component';
import { QuestionBoxComponent } from './components/question-box/question-box.component';

const COMPONENTS: Type<any>[] = [
    SurveyCreatorComponent,
    InputTitleComponent,
    ButtonWithIconComponent,
    QuestionBoxComponent,
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
    ],
    exports: [...COMPONENTS],
})
export class SurveyCreatorModule {}
