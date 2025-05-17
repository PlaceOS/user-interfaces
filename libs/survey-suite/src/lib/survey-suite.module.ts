import { NgModule } from '@angular/core';

import { QuestionComponent } from './question/question.component';
import { SurveyWidgetComponent } from './survey-widget/survey-widget.component';

const STANDALONE_COMPONENTS = [QuestionComponent, SurveyWidgetComponent];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SurveySuiteModule {}
