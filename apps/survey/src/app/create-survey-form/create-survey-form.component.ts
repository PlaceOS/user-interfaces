import { Component, OnInit } from '@angular/core';
import {
    SurveyCreatorService,
    QuestionType,
    Question,
    InputTitleComponent,
    ButtonWithIconComponent,
    QuestionBoxComponent,
} from '@placeos/survey';

@Component({
    selector: 'placeos-create-survey-form',
    templateUrl: './create-survey-form.component.html',
    styles: [],
})
export class CreateSurveyFormComponent implements OnInit {
    survey_title: String = 'Survey';
    constructor(private _createSurveyService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
