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
                type: QuestionType.text,
                name: '',
                title: 'What was this space booked for?',
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
            this.selected_questions.push(question);

            console.log(this.selected_questions, 'selected question in store');
        }
    }

    deleteQuestion(question?: string) {
        const index_to_delete = this.selected_questions.findIndex((object) => {
            return object.title == question;
        });
        this.selected_questions.splice(index_to_delete, 1);
    }

    private _generateID() {
        return Math.floor(Math.random() * 10000000).toString();
    }

    // newQuestionForm(questionType): void {
    //     this.question_counter++;

    //     const question_div = document.createElement('div');
    //     question_div.setAttribute(
    //         'id',
    //         this.question_counter.toString() + 'div'
    //     );
    //     question_div.setAttribute(
    //         'style',
    //         'display: flex; flex-direction: column;'
    //     );
    //     document.getElementById('questionForm').appendChild(question_div);

    //     const question_label: HTMLElement = document.createElement('text');
    //     question_label.innerHTML = 'Question ' + this.question_counter;

    //     const question_title = this._addInputField(
    //         'text',
    //         this.question_counter.toString(),
    //         questionType.toString()
    //     );

    //     document
    //         .getElementById(this.question_counter.toString() + 'div')
    //         .appendChild(question_label);
    //     document
    //         .getElementById(this.question_counter.toString() + 'div')
    //         .appendChild(question_title);

    //     if (
    //         questionType == QuestionType.checkbox ||
    //         questionType == QuestionType.dropdown
    //     ) {
    //         this.newAnswerForm();
    //     }
    // }

    // newAnswerForm(): void {
    //     const answer_label: HTMLElement = document.createElement('text');
    //     answer_label.innerHTML = 'Enter Answer Options';
    //     const add_answer_button: HTMLElement = document.createElement('button');
    //     add_answer_button.innerHTML = 'Add answer option';
    //     add_answer_button.setAttribute('style', 'width: 100px');
    //     add_answer_button.setAttribute('onclick', 'addAnswer');
    //     add_answer_button.onclick = () => {
    //         const answer_field = this._addInputField(
    //             'text',
    //             '',
    //             'answer_option',
    //             'width: 200px'
    //         );

    //         document
    //             .getElementById(this.question_counter.toString() + 'div')
    //             .appendChild(answer_field);
    //     };

    //     document
    //         .getElementById(this.question_counter.toString() + 'div')
    //         .appendChild(answer_label);
    //     document
    //         .getElementById(this.question_counter.toString() + 'div')
    //         .appendChild(add_answer_button);
    // }

    // createNewJSON() {
    //     this.surveyJSON = {
    //         pages: [
    //             {
    //                 elements: [],
    //             },
    //         ],
    //     };
    //     document.getElementById('surveyContainer').textContent = '';
    // }

    // submitSurvey() {
    //     this.createNewJSON();

    //     for (let i = 1; i <= this.question_counter; i++) {
    //         const question = document.getElementById(
    //             i.toString()
    //         ) as HTMLInputElement;

    //         let child_nodes = document.getElementById(
    //             i.toString() + 'div'
    //         ).childNodes;

    //         let answers = [].filter.call(child_nodes, (item) => {
    //             return item.classList.contains('answer_option');
    //         });

    //         answers = answers.map((item) => item.value);

    //         this.surveyJSON.pages[0].elements[i - 1] = {
    //             type: question?.className,
    //             name: i.toString(),
    //             title: question?.value,
    //             choices: answers || [],
    //         } as Question;
    //     }

    //     this.buildSurvey();
    // }

    // async buildSurvey(): Promise<void> {
    //     const survey = new Model(this.surveyJSON);

    //     SurveyNG.render('surveyContainer', { model: survey });
    //     survey.onComplete.add((sender: any) => {
    //         console.log('completed');
    //         document.getElementById('surveyResults').innerHTML = Object.values(
    //             sender.data
    //         ).toString();
    //     });
    // }

    // private _addInputField(
    //     type: string,
    //     id?: string,
    //     class_name?: string,
    //     style?: string
    // ): HTMLElement | HTMLInputElement {
    //     const input_field: HTMLInputElement = document.createElement(
    //         'INPUT'
    //     ) as HTMLInputElement;

    //     input_field.setAttribute('type', type);
    //     input_field.setAttribute('id', id);
    //     input_field.setAttribute('class', class_name);
    //     input_field.setAttribute('style', style);
    //     return input_field;
    // }
}
