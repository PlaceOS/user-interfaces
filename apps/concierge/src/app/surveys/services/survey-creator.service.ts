import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Model } from 'survey-core';
import { SurveyNG } from 'survey-angular';
import { Question, QuestionType, Tag, Survey } from '../survey-types';
import {
    DragDropModule,
    CdkDragDrop,
    moveItemInArray,
    copyArrayItem,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class SurveyCreatorService {
    question_counter: number = 0;
    survey_title: BehaviorSubject<string> = new BehaviorSubject<string>(
        'Survey Title'
    );
    survey_title$: Observable<string> = this.survey_title.asObservable();
    current_building: string = '';
    new_question_form: FormGroup;
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

    //Store of saved surveys
    private _saved_surveys: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
        []
    );

    saved_surveys$: Observable<any[]> = this._saved_surveys.asObservable();

    set saved_surveys(surveys: any[]) {
        this._saved_surveys.next(surveys);
    }

    get saved_surveys(): any[] {
        return this._saved_surveys.getValue();
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

    surveyModel: Model;

    //Form error
    _title_error: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    title_error$: Observable<boolean> = this._title_error.asObservable();
    _choice_error: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        null
    );
    choice_error$: Observable<boolean> = this._choice_error.asObservable();

    constructor() {
        //Mock question bank
        this.question_bank = [
            {
                type: QuestionType.text,
                name: '',
                title: 'What feature did you like most?',
                tags: [Tag.desk, Tag.room],
            },
            {
                type: QuestionType.rating,
                name: '',
                title: 'On a scale of 1-10, how likely would you recommend this space?',
                rateValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                tags: [Tag.desk, Tag.room, Tag.parking],
            },
            {
                type: QuestionType.dropdown,
                name: '',
                title: 'What was this meeting booked for?',
                choices: ['External calls', 'Internal calls', 'Rather not say'],
                tags: [Tag.room],
            },
            {
                type: QuestionType.comment,
                name: '',
                title: 'Any additional feedback?',
                tags: [Tag.desk, Tag.room],
            },
            {
                type: QuestionType.checkbox,
                name: '',
                title: 'Which features were available?',
                choices: ['whiteboard', 'jamboard'],
                tags: [Tag.room],
            },
            {
                type: QuestionType.dropdown,
                name: '',
                title: 'Was the parking space easy to find?',
                choices: ['Yes', 'No'],
                tags: [Tag.parking],
            },
        ];

        this.survey_title.pipe(debounceTime(700), distinctUntilChanged());

        //Mock saved surveys
        this.saved_surveys = [
            {
                building_name: 'Ellwood Tower',
                level: '01',
                type: 'Desk',
                title: 'Satisfaction survey',
                date: '25/08/2022',
                link: '369495',
                options: ['open'],
            },
            {
                building_name: 'Glemsford Building',
                level: '02',
                type: 'Room',
                title: 'Satisfaction survey',
                date: '30/08/2022',
                link: '234335',
                options: ['open'],
            },
            {
                building_name: 'Ellwood Tower',
                level: '01',
                type: 'Desk',
                title: 'Satisfaction survey',
                date: '30/09/2022',
                link: '773457',
                options: ['open'],
            },
            {
                building_name: 'Ellwood Tower',
                level: '03',
                type: 'Room',
                title: 'Satisfaction survey',
                date: '30/23/2022',
                link: '748994',
                options: ['open'],
            },
            {
                building_name: 'Glemsford Building',
                level: '03',
                type: 'Visitors',
                title: 'Satisfaction survey',
                date: '30/10/2022',
                link: '158380',
                options: ['open'],
            },
        ];
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
            return object.title === question?.title;
        });
        this.selected_questions[index_to_delete].selected = false;

        this.selected_questions.splice(index_to_delete, 1);
    }

    newForm() {
        this.new_question_form = new FormGroup({
            title: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            name: new FormControl(''),
            rateValues: new FormControl(''),
            choices: new FormControl(''),
            tags: new FormControl(''),
        });
    }

    checkForm() {
        !this.new_question_form.controls['title']?.valid
            ? this._title_error.next(true)
            : this._title_error.next(false);

        !this.new_question_form.controls['choices']?.valid
            ? this._choice_error.next(true)
            : this._choice_error.next(false);

        console.log(this.new_question_form);
    }

    updateValidators() {
        this.new_question_form.controls['choices']?.setValidators(
            Validators.required
        );
        this.new_question_form.controls['choices']?.updateValueAndValidity();

        console.log('validator set');
    }
    clearChoicesValidators() {
        this.new_question_form.controls['choices']?.clearValidators();
        this.new_question_form.controls['choices']?.updateValueAndValidity();
    }

    updateSurveysList() {
        const date = new Date();

        this.saved_surveys$.subscribe((surveys) =>
            surveys.push({
                id: Math.floor(Math.random() * (4 - 2) + 2).toString(),
                building_name: this.current_building,
                level: '01',
                type: 'Room',
                title: this.survey_title.getValue(),
                date: date.toLocaleDateString('en-GB'),
                link: Math.floor(100000 + Math.random() * 900000).toString(),
                options: ['open'],
            })
        );
    }

    async submitSurvey() {
        this._createNewJSON();

        this.surveyJSON.pages[0].elements = this.selected_questions.map(
            ({ selected, ...keepProperties }) => keepProperties
        );

        console.log(this.surveyJSON, 'survey json');
        this._buildSurvey();
        this.updateSurveysList();
    }

    async saveSurvey() {
        // const data = {
        //     id: 0,
        //     title: 'test title',
        //     description: 'test description',
        //     question_order: [0],
        // };
        // // const confirm = await createSurvey(data).toPromise();
        // console.log(confirm, 'post to backend');
    }

    public findQuestion(question: Question) {
        return this.selected_questions.find((object) => {
            return object.title === question.title;
        });
    }

    public updateCurrentBuilding(building_name: string) {
        this.current_building = building_name;
    }

    private _generateID() {
        return Math.floor(Math.random() * 10000000).toString();
    }

    private _createNewJSON() {
        this.surveyJSON = {
            pages: [
                {
                    name: this.survey_title.getValue(),
                    elements: [],
                },
            ],
        };
    }

    private async _buildSurvey(): Promise<void> {
        const survey = new Model(this.surveyJSON);
        this.surveyModel = survey;

        SurveyNG.render('surveyContainer', { model: survey });
        survey.onComplete.add((sender: any) => {
            console.log('completed');
            document.getElementById('surveyResults').innerHTML =
                Object.values(sender.data).toString() || '';
        });
    }
}
