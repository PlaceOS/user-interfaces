import { Component, OnInit } from '@angular/core';
import { SurveyNG } from 'survey-angular';
import { SurveyCreatorService } from '../services/survey-creator.service';

import { Model, StylesManager } from 'survey-core';

StylesManager.applyTheme('defaultV2');

@Component({
    selector: 'complete-survey',
    template: `
        <div class="flex flex-col bg-white w-full h-full ">
            <survey [model]="surveyCreatorService.surveyModel"></survey>
        </div>
    `,
    styles: [
        `
            #surveyContainer {
                display: flex;
                width: 500px;
                height: 800px;
                min-height: 500px;
                margin: 20px;
                border-radius: 10px;
                padding: 15%;
            }
        `,
    ],
})
export class CompleteSurveyComponent implements OnInit {
    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {
        const survey = new Model(this.surveyCreatorService.surveyJSON);
        SurveyNG.render('surveyContainer', {
            model: survey,
        });

        survey.onComplete.add((sender: any) => {
            console.log('completed');
            document.getElementById('surveyResults').innerHTML = Object.values(
                sender.data
            ).toString();
        });
    }
}
