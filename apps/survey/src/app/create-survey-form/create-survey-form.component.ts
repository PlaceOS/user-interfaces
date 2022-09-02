import { Component, OnInit } from '@angular/core';
import { CreateSurveyService } from '../create-survey/create-survey.service';
import { StylesManager, Model, SurveyNG } from 'survey-angular';

@Component({
    selector: 'placeos-create-survey-form',
    templateUrl: './create-survey-form.component.html',
    styles: [``],
})
export class CreateSurveyFormComponent implements OnInit {
    surveyJSON: any;
    survey_title: String = 'Survey';
    constructor(private _createSurveyService: CreateSurveyService) {}

    ngOnInit(): void {
        this.surveyJSON = this._createSurveyService.surveyJSON;
    }

    addTextQuestion(): void {
        this._createSurveyService.addQuestion('text');
    }

    addCheckboxQuestion(): void {
        this._createSurveyService.addQuestion('checkbox');
    }
}
