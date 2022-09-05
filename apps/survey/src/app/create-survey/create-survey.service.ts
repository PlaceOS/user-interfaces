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
        const question_counter: HTMLElement = document.createElement('text');
        question_counter.innerHTML = 'Question ' + this.counter;

        const question_title: HTMLInputElement = document.createElement(
            'INPUT'
        ) as HTMLInputElement;
        question_title.setAttribute('type', 'text');
        question_title.id = this.counter.toString();

        document.getElementById('questionForm').appendChild(question_counter);
        document.getElementById('questionForm').appendChild(question_title);

        if (questionType == QuestionType.checkbox || QuestionType.dropdown) {
            this.newAnswerForm();
        }
    }

    newAnswerForm(): void {
        let answerCounter: number = 1;

        const answer_label: HTMLElement = document.createElement('text');
        answer_label.innerHTML = 'Enter Answer Options';

        const checkbox_title: HTMLInputElement = document.createElement(
            'INPUT'
        ) as HTMLInputElement;

        checkbox_title.setAttribute('type', 'text');
        checkbox_title.id = 'Answer' + answerCounter.toString();
        checkbox_title.setAttribute('style', 'width: 200px');

        const add_checkbox_button: HTMLElement =
            document.createElement('button');
        add_checkbox_button.innerHTML = 'Add another answer option';
        add_checkbox_button.setAttribute('style', 'width: 100px');

        const finish_checkbox_button: HTMLElement =
            document.createElement('button');
        finish_checkbox_button.innerHTML = 'Finish checkbox answer';
        finish_checkbox_button.setAttribute('style', 'width: 100px');

        document.getElementById('questionForm').appendChild(answer_label);
        document.getElementById('questionForm').appendChild(checkbox_title);

        document
            .getElementById('questionForm')
            .appendChild(add_checkbox_button);

        document
            .getElementById('questionForm')
            .appendChild(finish_checkbox_button);

        answerCounter++;
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

    private _addInputField(): void {
        ///
    }

    private _addButton(): void {
        ///
    }
}
