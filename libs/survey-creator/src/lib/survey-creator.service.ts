import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Model, SurveyNG } from 'survey-angular';
import { Question, QuestionType } from './survey-types';
import {
    DragDropModule,
    CdkDragDrop,
    moveItemInArray,
    copyArrayItem,
    transferArrayItem,
} from '@angular/cdk/drag-drop';

@Injectable({
    providedIn: 'root',
})
export class SurveyCreatorService {
    question_counter: number = 0;
    survey_title: BehaviorSubject<string> = new BehaviorSubject<string>(
        'Survey Title'
    );
    survey_title$: Observable<string> = this.survey_title.asObservable();

    //Store of survey question bank
    private _question_bank: BehaviorSubject<Question[]> = new BehaviorSubject<
        Question[]
    >([]);
    question_bank$: Observable<Question[]> = this._question_bank.asObservable();

    set question_bank(questions: Question[]) {
        this._question_bank.next(questions);
    }

    get question_bank() {
        return this._question_bank.getValue();
    }

    //Store of selected questions
    private _selected_questions: BehaviorSubject<Question[]> =
        new BehaviorSubject<Question[]>([]);

    selected_questions$: Observable<Question[]> =
        this._selected_questions.asObservable();

    set selected_questions(questions: Question[]) {
        this._selected_questions.next(questions);
    }

    get selected_questions() {
        return this._selected_questions.getValue();
    }

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
        //Mock question bank
        this.question_bank = [
            {
                type: QuestionType.text,
                name: '',
                title: 'What feature did you like most?',
            },
            {
                type: QuestionType.rating,
                name: '',
                title: 'On a scale of 1-10, how likely would you recommend this space?',
                rateValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            {
                type: QuestionType.dropdown,
                name: '',
                title: 'What was this meeting booked for?',
                choices: ['External calls', 'Internal calls', 'Rather not say'],
            },
            {
                type: QuestionType.comment,
                name: '',
                title: 'Any additional feedback?',
            },
            {
                type: QuestionType.checkbox,
                name: '',
                title: 'Which features were available?',
                choices: ['whiteboard', 'jamboard'],
            },
        ];

        this.survey_title.pipe(debounceTime(700), distinctUntilChanged());
    }

    drop(event: any) {
        if (event.previousContainer === event.container) {
            //TODO: re-order items
            // moveItemInArray(
            //     event.container.data,
            //     event.previousIndex,
            //     event.currentIndex
            // );
        } else {
            const question = event.previousContainer.data[event.previousIndex];
            question.name = this._generateID();
            question.selected = true;

            if (this.findQuestion(question)) return;
            this.selected_questions.push(question);

            console.log(this.selected_questions, 'selected question in store');
        }
    }

    deleteQuestion(question?: Question) {
        const index_to_delete = this.selected_questions.findIndex((object) => {
            return object.title === question.title;
        });
        this.selected_questions[index_to_delete].selected = false;

        this.selected_questions.splice(index_to_delete, 1);
    }

    submitSurvey() {
        this._createNewJSON();

        this.surveyJSON.pages[0].elements = this.selected_questions.map(
            ({ selected, ...keepProperties }) => keepProperties
        );

        console.log(this.surveyJSON, 'survey json');
        this._buildSurvey();
    }

    public findQuestion(question: Question) {
        return this.selected_questions.find((object) => {
            return object.title === question.title;
        });
    }

    private _generateID() {
        return Math.floor(Math.random() * 10000000).toString();
    }

    private _createNewJSON() {
        this.surveyJSON = {
            pages: [
                {
                    elements: [],
                },
            ],
        };
    }

    private async _buildSurvey(): Promise<void> {
        const survey = new Model(this.surveyJSON);

        SurveyNG.render('surveyContainer', { model: survey });
        survey.onComplete.add((sender: any) => {
            console.log('completed');
            document.getElementById('surveyResults').innerHTML = Object.values(
                sender.data
            ).toString();
        });
    }
}
