import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MultiLineTextComponent } from './question/multi-line-text.component';
import { QuestionComponent } from './question/question.component';
import { RatingsComponent } from './question/rating.component';
import { SelectionComponent } from './question/selection.component';
import { SingleLineTextComponent } from './question/single-line-text.component';
import { RatingsWidgetComponent } from './survey-widget/ratings-widget.component';
import { SelectionWidgetComponent } from './survey-widget/selection.widget.component';
import { SurveyWidgetComponent } from './survey-widget/survey-widget.component';
import { TableWidgetComponent } from './survey-widget/table-widget.component';

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
        QuestionComponent,
        SingleLineTextComponent,
        SelectionComponent,
        MultiLineTextComponent,
        RatingsComponent,
        SurveyWidgetComponent,
        SelectionWidgetComponent,
        RatingsWidgetComponent,
        TableWidgetComponent
    ],
    exports: [QuestionComponent,SurveyWidgetComponent],
})
export class SurveySuiteModule {}
