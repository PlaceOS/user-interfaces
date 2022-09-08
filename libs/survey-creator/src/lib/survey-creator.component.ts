import { Component } from '@angular/core';
import { SurveyCreatorService } from './survey-creator.service';
import { QuestionType, Question, Answer } from './survey-types';

@Component({
    selector: 'lib-survey-creator',
    template: `<H2>Create Survey</H2>

        <button (click)="addTextQuestion()">Add text question</button>
        <button (click)="addCheckboxQuestion()">Add checkbox question</button>
        <button (click)="addDropdownQuestion()">Add dropdown question</button>
        <button (click)="addRatingQuestion()">Add rating question</button>

        <div
            id="questionForm"
            style="display: flex; flex-direction: column; width: 500px; margin: 2rem"
        ></div>

        <button (click)="submitSurvey()" style="margin: 3rem">
            Submit survey
        </button>
        <button (click)="reset()">Reset survey</button>
        <h2>{{ survey_title }}</h2>
        <div id="surveyContainer"></div>

        <H2>Survey Results</H2>
        <div id="surveyResults"></div>`,
    styles: [],
})
export class SurveyCreatorComponent {
    survey_title: String = 'Survey';

    constructor(private _createSurveyService: SurveyCreatorService) {}

    addTextQuestion(): void {
        this._createSurveyService.newQuestionForm(QuestionType.text);
    }

    addCheckboxQuestion(): void {
        this._createSurveyService.newQuestionForm(QuestionType.checkbox);
    }

    addDropdownQuestion(): void {
        this._createSurveyService.newQuestionForm(QuestionType.dropdown);
    }

    addRatingQuestion(): void {
        this._createSurveyService.newQuestionForm(QuestionType.rating);
    }

    submitSurvey(): void {
        this._createSurveyService.submitSurvey();
    }
    reset(): void {
        document.getElementById('questionForm').textContent = '';
        this._createSurveyService.question_counter = 0;
        this._createSurveyService.createNewJSON();
    }
}
