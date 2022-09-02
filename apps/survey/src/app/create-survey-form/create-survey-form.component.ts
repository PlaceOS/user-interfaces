import { Component, OnInit } from '@angular/core';
import { CreateSurveyService } from '../create-survey/create-survey.service';

@Component({
    selector: 'placeos-create-survey-form',
    templateUrl: './create-survey-form.component.html',
    styleUrls: ['./create-survey-form.component.css'],
})
export class CreateSurveyFormComponent implements OnInit {
    constructor(private _createSurveyService: CreateSurveyService) {}

    ngOnInit(): void {
        this._createSurveyService.generateJSON();
    }
}
