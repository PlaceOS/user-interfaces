import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'add-question-bank',
    template: `
        <section>
            <div class="header">
                <span class="dialog-title">Add to question bank</span>
                <span class="close" (click)="closeDialog()">
                    <mat-icon
                        aria-hidden="false"
                        aria-label="Material icon for closing dialog"
                        class="icon"
                        >close</mat-icon
                    >
                </span>
            </div>
            <main>
                <div><span class="section-heading">Category</span></div>
                <div>
                    <p class="small-text">
                        Please select tags that apply to the below question.
                    </p>
                </div>
                <div class="category-tags" *ngFor="let tag of tags">
                    <mat-checkbox color="primary">{{ tag }}</mat-checkbox>
                </div>
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
                                [question]="placeholder_question_text"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    updateTitle($event, QuestionType.rating)
                                "
                                (newRatingEvent)="updateRating($event)"
                            ></rating-question>
                        </ng-template>
                        <ng-template #Text>
                            <text-question
                                [question]="placeholder_question_text"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    updateTitle($event, QuestionType.text)
                                "
                            ></text-question>
                        </ng-template>
                        <ng-template #Comment>
                            <comment-box-question
                                [question]="placeholder_question_text"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    updateTitle($event, QuestionType.comment)
                                "
                            ></comment-box-question>
                        </ng-template>
                        <ng-template #Checkbox>
                            <checkbox-question
                                [question]="placeholder_question_select"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    updateTitle($event, QuestionType.checkbox)
                                "
                                (allChoicesEvent)="updateAllChoices($event)"
                            ></checkbox-question>
                        </ng-template>
                        <ng-template #Dropdown>
                            <dropdown-question
                                [question]="placeholder_question_select"
                                [view]="'draft'"
                                [preview]="true"
                            ></dropdown-question>
                        </ng-template>
                    </div>
                    <section class="options-container">
                        <div class="dropdown-container">
                            <mat-form-field appearance="none" class="dropdown">
                                <mat-select
                                    [(value)]="selected_tag"
                                    (selectionChange)="updateSelectedTag()"
                                >
                                    <mat-option
                                        *ngFor="
                                            let enum of QuestionType | keyvalue
                                        "
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
                    </section>
                </div>
                <div>
                    <button
                        mat-button
                        class="add-another-question"
                        (click)="addAnotherQuestion()"
                    >
                        Add another
                    </button>
                </div>
            </main>
            <footer>
                <button
                    mat-button
                    class="cancel-button"
                    color="basic"
                    (click)="closeDialog()"
                >
                    Cancel
                </button>
                <button
                    mat-button
                    class="add-button"
                    color="primary"
                    (click)="addQuestion()"
                >
                    Add
                </button>
            </footer>
        </section>
    `,
    styles: [
        `
            ::ng-deep .mat-select-value {
                max-width: min-content;
                margin-right: 3px;
            }
            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #fff;
                height: 70px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            main {
                margin: 20px;
            }
            .dialog-title {
                display: flex;
                font-size: 20px;
                line-height: 30px;
                font-weight: 800;
                padding: 20px;
            }
            .section-heading {
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
            }
            .small-text {
                size: 11px;
                font-weight: 400;
                margin-top: 3px;
                color: #808080;
            }
            .category-tags {
                display: inline-flex;
            }

            .category-tags mat-checkbox {
                margin: 10px 40px 10px 0px;
            }
            .question-box {
                border: 1px solid #3b82f6;
                box-shadow: 0px 0px 1px rgba(15, 23, 42, 0.06),
                    0px 20px 25px -5px rgba(15, 23, 42, 0.1),
                    0px 10px 10px -5px rgba(15, 23, 42, 0.04);
                border-radius: 4px;
                margin-top: 20px;
                padding: 10px;
            }
            .new-question {
                margin-left: -10px;
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
            .options-container {
                display: inline-flex;
                width: 100%;
                justify-content: flex-end;
                align-items: center;
            }
            .required-container {
                display: inline-flex;
                font-size: 12px;
                justify-content: space-between;
                width: 90px;
                align-items: center;
                margin: 0px 15px 5px 0px;
            }
            .add-another-question {
                background-color: #eeeeeeee;
                width: 100%;
                border-radius: 0px;
                color: black;
                border: none;
                margin-top: 30px;
            }
            .cancel-button {
                display: flex;
                color: #292f5b;
                background-color: #fff;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            .add-button {
                display: flex;
                color: #fff;
                background-color: #292f5b;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            footer {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                margin-right: 20px;
            }
            .close {
                display: flex;
                z-index: 99;
                text-align: right;
                vertical-align: middle;
                line-height: 12px;
                margin-right: 20px;
            }
        `,
    ],
})
export class AddQuestionBankComponent implements OnInit {
    tags: string[] = ['Desk', 'Room', 'Parking'];
    selected_tag: any = QuestionType.rating;
    question_type: string = QuestionType.rating;
    new_question: Question;
    new_questions: Question[] = [];
    private _update_flag: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    flag_sub: Subscription;
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

    public QuestionType = QuestionType;

    constructor(
        public dialogRef: MatDialogRef<AddQuestionBankComponent>,
        private _surveyCreatorService: SurveyCreatorService
    ) {}

    ngOnInit(): void {
        console.log(this.question_type, 'question type');
        console.log(this.selected_tag, 'selected_tag');

        this.new_question = {
            title: '',
            type: '' as any,
            name: '',
        };
    }

    updateSelectedTag() {
        this.question_type = this.selected_tag;
    }

    closeDialog() {
        this.dialogRef.close();
    }

    updateTitle(event, question_type) {
        this.new_question.title = event;
        this.new_question.type = question_type;
    }

    updateChoice(event) {
        let choice_index = this.new_question.choices.findIndex(
            (item) => item == event[1]
        );
        if (choice_index) {
            this.new_question.choices[choice_index] = event[0];
        }
    }

    updateAllChoices(event: string[]) {
        this.new_question.choices = event;
    }
    updateRating(event) {
        this.new_question.rateValues = event || [1, 2, 3, 4, 5];
    }

    addAnotherQuestion() {
        console.log('add');
    }

    addQuestion() {
        // switch (this.new_question.type) {
        //     case QuestionType.rating:
        //         this.new_question.title = event[0];
        //         this.new_question.rateValues = event[1];

        //     case QuestionType.checkbox || QuestionType.dropdown:
        //         console.log(event, 'event in Add modal');
        //         this.new_question.title = event[0];
        //         this.new_question.choices = event[1];
        // }
        this._update_flag.next(true);
        this.closeDialog();
        console.log(this.new_question, 'q to be added');
        this.flag_sub = this._update_flag.asObservable().subscribe((flag) => {
            if (flag) {
                this._surveyCreatorService.question_bank.push(
                    this.new_question
                );
            }
        });
        this._update_flag.next(false);
    }

    ngOnDestroy(): void {
        this.flag_sub?.unsubscribe();
    }
}
