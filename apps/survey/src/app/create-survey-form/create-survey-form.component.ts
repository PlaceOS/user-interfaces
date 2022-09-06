import { Component, OnInit } from '@angular/core';
import { CreateSurveyService } from '../create-survey/create-survey.service';
import { QuestionType } from '../survey-types';

@Component({
    selector: 'placeos-create-survey-form',
    templateUrl: './create-survey-form.component.html',
    styles: [``],
})
export class CreateSurveyFormComponent implements OnInit {
    survey_title: String = 'Survey';
    constructor(private _createSurveyService: CreateSurveyService) {}

    ngOnInit(): void {}

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
