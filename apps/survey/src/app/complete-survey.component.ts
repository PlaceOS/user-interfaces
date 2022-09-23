import { Component, OnInit } from '@angular/core';
import { SurveyNG, Model } from 'survey-angular';
import { SurveyCreatorService } from '@placeos/survey';

@Component({
    selector: 'placeos-complete-survey',
    template: ` <div id="surveyContainer"></div> `,
    styles: [
        `
            #surveyContainer {
                display: inline-block;
                width: 100%;
            }
        `,
    ],
})
export class CompleteSurveyComponent implements OnInit {
    constructor(private _surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {
        const survey = new Model(this._surveyCreatorService.surveyJSON);
        SurveyNG.render('surveyContainer', {
            model: survey,
        });
    }
}
