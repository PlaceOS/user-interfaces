import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, QuestionType } from '../survey-types';

@Component({
    selector: 'question-container',
    template: `
        <div class="question-box">
            <div class="new-question">
                <ng-container
                    [ngTemplateOutlet]="
                        question_type == QuestionType.text
                            ? Text
                            : question_type == QuestionType.checkbox
                            ? Checkbox
                            : question_type == QuestionType.comment
                            ? Comment
                            : question_type == QuestionType.dropdown
                            ? Dropdown
                            : Rating
                    "
                >
                </ng-container>
                <ng-template #Rating>
                    <rating-question
                        [question]="question || placeholder_question_text"
                        [view]="'draft'"
                        [preview]="true"
                        (newTitleEvent)="updateTitle($event)"
                        (newRatingEvent)="updateRating($event)"
                    ></rating-question>
                </ng-template>
                <ng-template #Text>
                    <text-question
                        [question]="question || placeholder_question_text"
                        [view]="'draft'"
                        [preview]="true"
                        (newTitleEvent)="updateTitle($event)"
                    ></text-question>
                </ng-template>
                <ng-template #Comment>
                    <comment-box-question
                        [question]="question || placeholder_question_text"
                        [view]="'draft'"
                        [preview]="true"
                        (newTitleEvent)="updateTitle($event)"
                    ></comment-box-question>
                </ng-template>
                <ng-template #Checkbox>
                    <checkbox-question
                        [question]="question || placeholder_question_select"
                        [view]="'draft'"
                        [preview]="true"
                        (newTitleEvent)="updateTitle($event)"
                        (allChoicesEvent)="updateAllChoices($event)"
                    ></checkbox-question>
                </ng-template>
                <ng-template #Dropdown>
                    <dropdown-question
                        [question]="question || placeholder_question_select"
                        [view]="'draft'"
                        [preview]="true"
                        (newTitleEvent)="updateTitle($event)"
                        (allChoicesEvent)="updateAllChoices($event)"
                    ></dropdown-question>
                </ng-template>
            </div>
            <section class="options-container">
                <div class="dropdown-container">
                    <mat-form-field appearance="none" class="dropdown">
                        <mat-select
                            [(value)]="selected_type"
                            (selectionChange)="updateSelectedTag()"
                        >
                            <mat-option
                                *ngFor="let enum of QuestionType | keyvalue"
                                [value]="enum.value"
                            >
                                {{ enum.value }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>

                <div class="required-container">
                    <mat-slide-toggle> </mat-slide-toggle>
                    <span>Required</span>
                </div>
                <div *ngIf="canDelete">
                    <button-borderless
                        [button_title]="'Delete'"
                        [icon]="'delete_forever'"
                        [icon_color]="'red'"
                        [text_color]="'black'"
                    ></button-borderless>
                </div>
            </section>
        </div>
    `,
    styles: [
        `
            .question-box {
                border: 1px solid rgba(0, 0, 0, 0.12);
                background-color: white;
                box-shadow: 0px 0px 1px rgba(15, 23, 42, 0.06),
                    0px 20px 25px -5px rgba(15, 23, 42, 0.1),
                    0px 10px 10px -5px rgba(15, 23, 42, 0.04);
                border-radius: 4px;
                margin-top: 20px;
                padding: 10px;
            }
            .question-box:active,
            .question-box:hover,
            .question-box:focus {
                border-color: #3b82f6;
            }
            .new-question {
                margin-left: -10px;
            }
            .options-container {
                display: inline-flex;
                width: 100%;
                justify-content: flex-end;
                align-items: center;
            }
            .dropdown-container {
                display: inline-flex;
                position: relative;
                width: 100px;
                margin-bottom: -10px;
            }
            .dropdown {
                display: absolute;
                font-size: 12px;
                width: 100%;
                height: 30px;
                margin-bottom: 10px;
            }
            .required-container {
                display: inline-flex;
                font-size: 12px;
                justify-content: space-between;
                width: 90px;
                align-items: center;
                margin: 0px 15px 5px 0px;
            }
        `,
    ],
})
export class QuestionContainerComponent implements OnInit {
    @Input() question?: Question;
    @Input() canDelete: boolean = false;
    @Output() newTitleEvent = new EventEmitter<any>();
    @Output() newRatingEvent = new EventEmitter<any>();
    @Output() newChoiceEvent = new EventEmitter<any>();
    @Output() allChoicesEvent = new EventEmitter<any>();
    @Output() updateTypeEvent = new EventEmitter<any>();

    selected_type: string;
    question_type: string;
    public QuestionType = QuestionType;
    placeholder_choice: string = 'Type a choice here...';
    placeholder_question_text: Question = {
        type: QuestionType.text || QuestionType.comment || QuestionType.rating,
        title: 'Type a question...',
        name: '',
    };
    placeholder_question_select: Question = {
        type: QuestionType.checkbox || QuestionType.dropdown,
        title: 'Type a question...',
        name: '',
        choices: [this.placeholder_choice],
    };

    constructor() {}

    ngOnInit(): void {
        this.question_type = this.question?.type || QuestionType.rating;
        this.selected_type = this.question_type;
    }
    updateSelectedTag() {
        this.question_type = this.selected_type;
        this.updateTypeEvent.emit(this.selected_type);
    }
    updateTitle(event) {
        this.newTitleEvent.emit([event, this.question_type]);
    }
    updateRating(event) {
        this.newRatingEvent.emit(event);
    }
    updateChoice(event) {
        this.newChoiceEvent.emit(event);
    }
    updateAllChoices(event) {
        this.allChoicesEvent.emit(event);
    }
}
