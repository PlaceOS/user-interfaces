import {
    Component,
    OnInit,
    Input,
    ElementRef,
    Output,
    EventEmitter,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Question } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { InputTitleComponent } from './input-title.component';

@Component({
    selector: 'checkbox-question',
    template: `
        <ng-container
            [ngTemplateOutlet]="view === 'nonDraft' ? nonDraft : draft"
        >
        </ng-container>

        <ng-template #nonDraft>
            <div class="question-container">
                <div class="wrapper">
                    <div class="question">
                        <span>
                            {{ question?.title }}
                        </span>
                    </div>
                    <div class="checkbox-container">
                        <div
                            *ngFor="let choice of question?.choices"
                            class="checkbox"
                        >
                            <mat-checkbox></mat-checkbox>
                            <input
                                readonly
                                type="text"
                                [placeholder]="'Type option here'"
                                [style.fontSize.px]="12"
                                value="{{ choice }}"
                            />
                        </div>
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
            </div>
        </ng-template>
        <ng-template #draft>
            <div class="question-container">
                <div class="wrapper">
                    <div class="draft-question">
                        <input-title
                            [placeholder]="
                                question?.title || 'Type question here...'
                            "
                        ></input-title>
                    </div>
                    <div class="draft-checkbox-container">
                        <div
                            *ngFor="let choice of question?.choices"
                            class="checkbox"
                        >
                            <mat-checkbox></mat-checkbox>
                            <input
                                matInput
                                type="text"
                                class="choices_box"
                                [id]="choices_counter"
                                [style.fontSize.px]="12"
                                [placeholder]="
                                    choice || 'Type a choice here...'
                                "
                                (change)="updateTitle($event)"
                            />
                        </div>
                        <div class="plus-minus-buttons">
                            <minus-button
                                (click)="deleteOption()"
                            ></minus-button>
                            <plus-button (click)="addOption()"></plus-button>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            input-title {
                width: 500px;
            }
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
                margin: 10px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
                border-radius: 4px;
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 20px;
            }
            .question {
                display: flex;
                flex-direction: row;
                margin-right: auto;
            }
            .draft-question {
                display: flex;
                flex-direction: row;
                margin-left: -15px;
            }
            .checkbox-container {
                display: flex;
                flex-direction: column;
                margin-right: auto;
                margin-top: 10px;
                justify-content: center;
            }
            .draft-checkbox-container {
                display: flex;
                flex-direction: column;
                margin-top: 10px 0px 0px -10px;
            }
            .checkbox {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin-left: -5px;
            }
            .checkbox mat-checkbox {
                display: flex;
                margin: 3px 0px 0px 5px;
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
                align-items: flex-start;
                margin: 10px 0px 0px -10px;
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
    @Input() view = 'nonDraft';
    @Output() newTitleEvent = new EventEmitter<string>();

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    ngAfterViewInit() {}

    protected addOption() {
        let found_question = this._findQuestion(this.question);
        found_question.choices.push('Type a choice here...');
    }

    protected deleteOption() {
        let found_question = this._findQuestion(this.question);
        if (found_question.choices.length > 1) {
            found_question.choices.pop();
        }
    }

    private _findQuestion(question) {
        return this.surveyCreatorService.question_bank.find(
            (item) => item.title === question.title
        );
    }

    protected saveChoice() {
        //refactor this method to be saved when 'Add New' or 'Add' is pressed
        setTimeout(() => {
            let updated_choices: string[] = [];

            const choices = document.getElementsByClassName('choices_box');

            console.log(choices.length, 'choices length');

            for (let i = 0; i < choices.length; i++) {
                updated_choices[i] = (choices[i] as HTMLInputElement)?.value;
            }

            let found_question = this._findQuestion(this.question);
            found_question.choices = updated_choices;
        }, 800);
    }

    updateTitle(event) {
        this.newTitleEvent.emit(event.target.value);
    }
}
