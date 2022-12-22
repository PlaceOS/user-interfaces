import { InjectionToken, NgModule } from '@angular/core';
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
import { AnswersApi, Configuration, InvitationsApi, QuestionsApi, SurveysApi } from '@placeos/survey-ts-client';
import { token } from '@placeos/ts-client';

/** API Adapter */
export const SURVEYS_API_ADAPTER = new InjectionToken<SurveysApi>(null);
export const QUESTIONS_API_ADAPTER = new InjectionToken<QuestionsApi>(null);
export const INVITATIONS_API_ADAPTER = new InjectionToken<InvitationsApi>(null);
export const ANSWERS_API_ADAPTER = new InjectionToken<AnswersApi>(null);
const ApiConfiguration: Configuration = new Configuration(
    {basePath: '/', accessToken: token() }
);
const surveyApi = new SurveysApi(ApiConfiguration);
const questionApi = new QuestionsApi(ApiConfiguration);
const invitationApi = new InvitationsApi(ApiConfiguration);
const answerApi = new AnswersApi(ApiConfiguration)

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
    providers:[
        {
            provide: SURVEYS_API_ADAPTER,
            useValue: surveyApi,
        },
        {
            provide: QUESTIONS_API_ADAPTER,
            useValue: questionApi
        },
        {
            provide: ANSWERS_API_ADAPTER,
            useValue: answerApi
        },
        {
            provide: INVITATIONS_API_ADAPTER,
            useValue: invitationApi
        }
    ],
    exports: [SurveyBuilderComponent, QuestionComponent],
})
export class SurveySuiteModule {}
