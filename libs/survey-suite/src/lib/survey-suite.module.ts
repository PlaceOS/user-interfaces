import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyBuilderComponent } from './survey-builder/survey-builder.component';
import { QuestionBuilderComponent } from './question-builder/question-builder.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SurveyBuilderComponent, QuestionBuilderComponent],
    exports: [SurveyBuilderComponent],
})
export class SurveySuiteModule {}
