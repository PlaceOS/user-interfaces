import { Component, OnInit } from '@angular/core';
import { SurveyNG, Model } from 'survey-angular';
import { SurveyCreatorService } from '../services/survey-creator.service';

@Component({
    selector: 'complete-survey',
    template: `
        <div class="flex flex-col bg-gray-300 w-full h-full  justify-center">
            <div class="mt-24">
                <span class="font-bold font-lg">Survey</span>
            </div>
            <div id="surveyContainer" class="bg-white rounded-md m-30 "></div>

            Survey results:
            <div id="surveyResults"></div>
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
    constructor(private _surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {
        const survey = new Model(this._surveyCreatorService.surveyJSON);
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
