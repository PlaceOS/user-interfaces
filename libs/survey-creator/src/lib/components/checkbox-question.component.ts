import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Question } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { InputTitleComponent } from './input-title.component';

@Component({
    selector: 'checkbox-question',
    template: ` <div class="question-container">
        <div class="wrapper">
            <div class="question">
                <span>
                    {{ question?.title }}
                </span>
            </div>
            <div class="checkbox-container">
                <div *ngFor="let choice of question?.choices" class="checkbox">
                    <mat-checkbox></mat-checkbox>
                    <input
                        type="text"
                        [placeholder]="'Type option here'"
                        [style.fontSize.px]="12"
                        value="{{ choice }}"
                    />
                </div>
            </div>
            <div class="plus-minus-buttons">
                <plus-button (click)="addOption()"></plus-button>
                <minus-button (click)="deleteOption()"></minus-button>
            </div>
        </div>

        <div
            *ngIf="!preview"
            class="close"
            (click)="surveyCreatorService.deleteQuestion(question)"
        >
            <mat-icon
                aria-hidden="false"
                aria-label="Material icon for deleting question"
                class="icon"
                >close</mat-icon
            >
        </div>
    </div>`,
    styles: [
        `
            .question-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                position: relative;
                font-size: 12px;
                max-width: 800px;
                color: #808080;
                background-color: #fff;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 20px;
            }
            .question {
                display: flex;
                flex-direction: row;
                margin-right: auto;
            }
            .checkbox-container {
                display: flex;
                flex-direction: column;
                margin-right: auto;
                margin-top: 10px;
                justify-content: center;
            }
            .checkbox {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-right: 5px;
            }
            .checkbox mat-checkbox {
                display: flex;
            }
            .checkbox input-title {
                display: flex;
                margin: 0px 0px 5px 5px;
            }
            .close {
                position: absolute;
                right: 0;
                top: 0;
                z-index: 99;
                margin-top: 10px;
                margin-right: 5px;
            }
            .plus-minus-buttons {
                display: flex;
                flex-direction: row;
                margin-right: auto;
                margin-left: 20px;
            }

            input[type='text'] {
                border: none;
                padding: 10px 10px;
                margin: 5px;
                font-weight: 500;
                width: 100%;
            }

            input[type='text']:focus {
                color: #808080;
            }

            input[type='text']:active {
                border: none;
            }
        `,
    ],
})
export class CheckboxQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;

    // choicesForm = this.fb.group({
    //     choiceField: new FormControl(''),
    // });

    constructor(
        public surveyCreatorService: SurveyCreatorService,
        private host: ElementRef // private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        // this.choices = this.question.choices;
    }

    ngAfterViewInit() {}

    // onKey(event: any) {
    //     // this.surveyCreatorService.survey_title.next(event.target.value);

    //     const current_question = this._findQuestion();

    //     current_question.choices.push(event.target.value);
    // }

    protected addOption(event?: any) {
        // console.log(this.choice);
        // this.surveyCreatorService.selected_questions[0].choices?.push(
        //     event.target.value
        // );
        // this._findQuestion();
        const current_question = this._findQuestion();
        current_question.choices?.push('');
    }

    protected deleteOption() {
        if (
            this.surveyCreatorService.selected_questions[0].choices?.length == 1
        )
            return;

        const current_question = this._findQuestion();
        current_question.choices?.pop();
    }

    private _findQuestion() {
        return this.surveyCreatorService.selected_questions.find(
            (item) => item.name == this.question.name
        );
    }
}
