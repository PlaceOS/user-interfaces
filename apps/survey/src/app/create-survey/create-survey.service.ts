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
    question_counter: number = 0;

    //Store of JSON generated from survey questions
    private _surveyJSON: BehaviorSubject<any> = new BehaviorSubject<any>({});

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
        this.question_counter++;

        const question_div = document.createElement('div');
        question_div.setAttribute(
            'id',
            this.question_counter.toString() + 'div'
        );
        question_div.setAttribute(
            'style',
            'display: flex; flex-direction: column;'
        );
        document.getElementById('questionForm').appendChild(question_div);

        const question_label: HTMLElement = document.createElement('text');
        question_label.innerHTML = 'Question ' + this.question_counter;

        const question_title = this._addInputField(
            'text',
            this.question_counter.toString(),
            questionType.toString()
        );

        document
            .getElementById(this.question_counter.toString() + 'div')
            .appendChild(question_label);
        document
            .getElementById(this.question_counter.toString() + 'div')
            .appendChild(question_title);

        if (
            questionType == QuestionType.checkbox ||
            questionType == QuestionType.dropdown ||
            questionType == QuestionType.rating
        ) {
            this.newAnswerForm();
        }
    }

    newAnswerForm(): void {
        const answer_label: HTMLElement = document.createElement('text');
        answer_label.innerHTML = 'Enter Answer Options';
        const add_answer_button: HTMLElement = document.createElement('button');
        add_answer_button.innerHTML = 'Add answer option';
        add_answer_button.setAttribute('style', 'width: 100px');
        add_answer_button.setAttribute('onclick', 'addAnswer');
        add_answer_button.onclick = () => {
            const answer_field = this._addInputField(
                'text',
                '',
                'answer_option',
                'width: 200px'
            );

            document
                .getElementById(this.question_counter.toString() + 'div')
                .appendChild(answer_field);
        };

        document
            .getElementById(this.question_counter.toString() + 'div')
            .appendChild(answer_label);
        document
            .getElementById(this.question_counter.toString() + 'div')
            .appendChild(add_answer_button);
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

        for (let i = 1; i <= this.question_counter; i++) {
            const question = document.getElementById(
                i.toString()
            ) as HTMLInputElement;

            let child_nodes = document.getElementById(
                i.toString() + 'div'
            ).childNodes;

            let answers = [].filter.call(child_nodes, (item) => {
                return item.classList.contains('answer_option');
            });

            answers = answers.map((item) => item.value);

            this.surveyJSON.pages[0].elements[i - 1] = {
                type: question?.className,
                name: i.toString(),
                title: question?.value,
                choices: answers,
            };
        }

        this.buildSurvey();
    }

    async buildSurvey() {
        const survey = new Model(this.surveyJSON);

        console.log(this.surveyJSON, 'survey');

        SurveyNG.render('surveyContainer', { model: survey });
        survey.onComplete.add((sender: any) => {
            console.log('completed');
            this.surveyData = sender.data;
            document.getElementById('surveyResults').innerHTML = Object.values(
                this.surveyData
            ).toString();
        });
    }

    private _addInputField(
        type: string,
        id?: string,
        class_name?: string,
        style?: string
    ): HTMLElement | HTMLInputElement {
        const input_field: HTMLInputElement = document.createElement(
            'INPUT'
        ) as HTMLInputElement;

        input_field.setAttribute('type', type);
        input_field.setAttribute('id', id);
        input_field.setAttribute('class', class_name);
        input_field.setAttribute('style', style);
        return input_field;
    }
}
