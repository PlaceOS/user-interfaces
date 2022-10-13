import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'dropdown-question',
    template: `
        <ng-container
            [ngTemplateOutlet]="view === 'nonDraft' ? nonDraft : draft"
        ></ng-container>
        <ng-template #nonDraft>
            <div class="question-container">
                <div class="wrapper">
                    <div class="question">
                        <span>
                            {{ question?.title }}
                        </span>
                    </div>
                    <div class="dropdown-container">
                        <mat-form-field appearance="outline" class="dropdown">
                            <mat-label>Select...</mat-label>
                            <mat-select [(value)]="selected_choice">
                                <mat-option
                                    *ngFor="let choice of question?.choices"
                                    [value]="choice"
                                >
                                    {{ choice }}</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
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
                            (change)="updateTitle($event)"
                        ></input-title>
                    </div>
                    <div class="dropdown-container">
                        <mat-form-field
                            disabled
                            appearance="outline"
                            class="draft-dropdown"
                        >
                            <mat-label class="select-label"
                                >Select...</mat-label
                            >
                            <mat-select disabled> </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="draft-checkbox-container">
                        <div
                            *ngFor="
                                let choice of question?.choices ||
                                    'Type a choice here...'
                            "
                            class="checkbox"
                        >
                            <input
                                matInput
                                type="text"
                                class="choices_box"
                                [id]="choices_counter"
                                [style.fontSize.px]="12"
                                [placeholder]="
                                    choice || 'Type a choice here...'
                                "
                                (change)="updateChoice($event, choice)"
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
            }
            .draft-question {
                display: flex;
                flex-direction: row;
                margin-left: -15px;
            }
            .dropdown-container {
                display: flex;
                flex-direction: row;
                margin: 10px 0px 0px -4px;
            }
            .draft-dropdown mat-label {
                margin-left: 30px;
            }
            .draft-checkbox-container {
                display: flex;
                flex-direction: column;
                margin-top: 10px 0px 0px -10px;
            }
            .draft-checkbox-container .choices_box {
                margin-left: -10px;
            }
            .checkbox {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin-left: -5px;
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
            .close {
                position: absolute;
                right: 0;
                top: 0;
                z-index: 99;
                margin-top: 10px;
                margin-right: 5px;
            }
        `,
    ],
})
export class DropdownQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;
    @Input() view = 'nonDraft';
    @Output() newTitleEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() newChoiceEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() allChoicesEvent: EventEmitter<any> = new EventEmitter<any>();

    title: string;
    placeholder_choice: string = 'Type a choice here...';

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    protected addOption() {
        let found_question = this._findQuestion(this.question);

        if (found_question) {
            found_question.choices.push(this.placeholder_choice);
        } else {
            this.question.choices.push(this.placeholder_choice);
            this.updateAllChoices(this.question.choices);
        }
    }
    protected deleteOption() {
        let found_question = this._findQuestion(this.question);
        if (found_question?.choices?.length > 1) {
            found_question.choices.pop();
        } else {
            this.question.choices.pop();
            this.updateAllChoices(this.question.choices);
        }
    }

    private _findQuestion(question) {
        return this.surveyCreatorService.question_bank.find(
            (item) => item.title === question.title
        );
    }

    updateTitle(event) {
        this.newTitleEvent.emit(event.target.value);
    }
    updateChoice(event, choice) {
        let found_index = this.question.choices.findIndex(
            (item) => item == choice
        );
        if ([found_index].length > 0) {
            //Update 'Add' Modal
            this.question.choices[found_index] = event.target.value;
            this.updateAllChoices(this.question.choices);
        } else {
            //Update 'Edit' modal
            this.newChoiceEvent.emit([event.target.value, choice]);
        }
    }
    updateAllChoices(event) {
        this.allChoicesEvent.emit(event);
    }
}
