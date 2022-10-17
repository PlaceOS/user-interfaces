import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { QuestionCreatorService } from '../question-creator.service';

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
                            (change)="updateTitle($event)"
                        ></input-title>
                    </div>
                    <div class="draft-checkbox-container">
                        <div
                            *ngFor="
                                let choice of question?.choices ||
                                    'Type a choice here...'
                            "
                            class="checkbox"
                        >
                            <mat-checkbox></mat-checkbox>
                            <input
                                matInput
                                type="text"
                                class="choices_box"
                                [id]="choices_counter"
                                [style.fontSize.px]="12"
                                [placeholder]="choice"
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
                margin: 10px 20px 0px 10px;
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 20px 20px 0px 20px;
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
    @Output() newTitleEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() newChoiceEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() allChoicesEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public surveyCreatorService: SurveyCreatorService,
        public questionCreatorService: QuestionCreatorService
    ) {}

    ngOnInit(): void {}

    ngAfterViewInit() {}

    protected addOption() {
        this.question = this.questionCreatorService.addOption(this.question);
        this.updateAllChoices(this.question.choices);
    }

    protected deleteOption() {
        this.question = this.questionCreatorService.deleteOption(this.question);
        this.updateAllChoices(this.question.choices);
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
