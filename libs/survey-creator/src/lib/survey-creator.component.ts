import { Component } from '@angular/core';
import { SurveyCreatorService } from './survey-creator.service';
import { QuestionType, Question } from './survey-types';

@Component({
    selector: 'lib-survey-creator',
    template: `<H2>Create Survey</H2> `,
    styles: [],
})
export class SurveyCreatorComponent {
    survey_title: String = 'Survey';

    constructor(private _createSurveyService: SurveyCreatorService) {}

    // addTextQuestion(): void {
    //     this._createSurveyService.newQuestionForm(QuestionType.text);
    // }

    // addCheckboxQuestion(): void {
    //     this._createSurveyService.newQuestionForm(QuestionType.checkbox);
    // }

    // addDropdownQuestion(): void {
    //     this._createSurveyService.newQuestionForm(QuestionType.dropdown);
    // }

    // addRatingQuestion(): void {
    //     this._createSurveyService.newQuestionForm(QuestionType.rating);
    // }

    // submitSurvey(): void {
    //     this._createSurveyService.submitSurvey();
    // }
    // reset(): void {
    //     document.getElementById('questionForm').textContent = '';
    //     this._createSurveyService.question_counter = 0;
    //     this._createSurveyService.createNewJSON();
    // }
}
