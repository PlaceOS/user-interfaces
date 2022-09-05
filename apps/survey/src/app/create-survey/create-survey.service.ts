import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Model, SurveyNG } from 'survey-angular';
import { BaseClass } from '@placeos/common';
import { Question, QuestionType } from '../survey-types';

@Injectable({
    providedIn: 'root',
})
export class CreateSurveyService extends BaseClass {
    surveyTitle: Text;
    surveyData: any;
    counter: number = 0;

    //Store of JSON generated from survey questions
    private _surveyJSON: BehaviorSubject<any> = new BehaviorSubject<any>({}); //TODO: data type

    surveyJSON$: Observable<any> = this._surveyJSON.asObservable();

    set surveyJSON(json: any) {
        this._surveyJSON.next(json);
    }

    get surveyJSON() {
        return this._surveyJSON.getValue();
    }

    constructor() {
        super();
    }

    newQuestionForm(questionType): void {
        this.counter++;
        const questionLabel = document.createElement('text');
        questionLabel.innerHTML = 'Question ' + this.counter;

        const input_field = document.createElement('INPUT') as HTMLInputElement;
        input_field.id = this.counter.toString();
        input_field.setAttribute('type', 'text');

        document.getElementById('questionForm').appendChild(questionLabel);
        document.getElementById('questionForm').appendChild(input_field);

        if (questionType == 'checkbox') {
            //TODO: add dynamic checkboxes with answer labels
        }
    }
    createNewJSON() {
        this.surveyJSON = {
            pages: [
                {
                    elements: [],
                },
            ],
        };
        document.getElementById('surveyContainer').textContent = '';
    }

    submitSurvey() {
        this.createNewJSON();

        for (let i = 1; i <= this.counter; i++) {
            const question = document.getElementById(
                i.toString()
            ) as HTMLInputElement;

            this.surveyJSON.pages[0].elements[i - 1] = {
                type: question.type,
                name: i.toString(),
                title: question.value,
            };
        }

        this.buildSurvey();
    }

    async buildSurvey() {
        const survey = new Model(this.surveyJSON);

        SurveyNG.render('surveyContainer', { model: survey });
        survey.onComplete.add((sender: any) => {
            console.log('completed');
            this.surveyData = sender.data;
            document.getElementById('surveyResults').innerHTML = Object.values(
                this.surveyData
            ).toString();
        });
    }
}
