import { Component, OnInit } from '@angular/core';
import { SurveyNG, Model } from 'survey-angular';
import { SurveyCreatorService } from '@placeos/survey-creator';

@Component({
    selector: 'placeos-complete-survey',
    template: `
        <section>
            <div id="surveyContainer"></div>

            Survey results:
            <div id="surveyResults"></div>
        </section>
    `,
    styles: [
        `
            section {
                background-color: #fff;
                padding: 50px;
            }
            #surveyContainer {
                display: inline-block;
                width: 100%;
                min-height: 500px;
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
