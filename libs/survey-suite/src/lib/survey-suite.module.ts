import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyBuilderComponent } from './survey-builder/survey-builder.component';
import { QuestionComponent } from './question/question.component';
import { SingleLineTextComponent } from './question/single-line-text.component';
import { MultiLineTextComponent } from './question/multi-line-text.component';
import { RatingsComponent } from './question/rating.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectionComponent } from './question/selection.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSliderModule
    ],
    declarations: [
        SurveyBuilderComponent,
        QuestionComponent,
        SingleLineTextComponent,
        SelectionComponent,
        MultiLineTextComponent,
        RatingsComponent,
    ],
    exports: [SurveyBuilderComponent, QuestionComponent],
})
export class SurveySuiteModule {}
