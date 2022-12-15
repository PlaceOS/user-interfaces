import { Component, OnInit } from '@angular/core';
import { SurveyNG } from 'survey-angular';
import { SurveyCreatorService } from '../services/survey-creator.service';
import { Model } from 'survey-core';

@Component({
    selector: 'complete-survey',
    template: `
        <div class="flex flex-col w-full h-full complete-container ">
            <span class="text-2xl font-bold self-center mt-6 mb-4">{{
                surveyCreatorService.survey_title.getValue()
            }}</span>
            <survey [model]="survey"></survey>
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
            .complete-container {
                background-color: #f3f3f3;
            }
            button {
                background-color: #292f5b;
            }
        `,
    ],
})
export class CompleteSurveyComponent implements OnInit {
    constructor(public surveyCreatorService: SurveyCreatorService) {}

    survey: Model;

    ngOnInit(): void {
        this.survey = new Model(this.surveyCreatorService.surveyJSON);
        SurveyNG.render('surveyContainer', {
            model: this.survey,
        });

        this.survey.onComplete.add((sender: any) => {
            console.log('completed survey', sender.data);
            // document.getElementById('surveyResults').innerHTML = Object.values(
            //     sender.data
            // ).toString();
        });
    }
}
