import { NgModule } from '@angular/core';

import { SurveyWidgetComponent } from './survey-widget/survey-widget.component';

const STANDALONE_COMPONENTS = [SurveyWidgetComponent];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SurveySuiteModule {}
