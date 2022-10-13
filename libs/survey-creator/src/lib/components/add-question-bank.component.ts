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
                                question_type == 'Text'
                                    ? Text
                                    : question_type == 'Checkbox'
                                    ? Checkbox
                                    : question_type == 'Comment'
                                    ? Comment
                                    : question_type == 'Dropdown'
                                    ? Dropdown
                                    : Rating
                            "
                        >
                        </ng-container>
                        <ng-template #Rating>
                            <rating-question
                                [question]="placeholder_question"
                                [view]="'draft'"
                                [preview]="true"
                                (newUpdateEvent)="addQuestion($event, 'Rating')"
                            ></rating-question>
                        </ng-template>
                        <ng-template #Text>
                            <text-question
                                [question]="placeholder_question"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="addQuestion($event, 'Text')"
                            ></text-question>
                        </ng-template>
                        <ng-template #Comment>
                            <comment-box-question
                                [question]="placeholder_question"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    addQuestion($event, 'Comment', question)
                                "
                            ></comment-box-question>
                        </ng-template>
                        <ng-template #Checkbox>
                            <checkbox-question
                                [question]="placeholder_question"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    addQuestion($event, 'Checkbox')
                                "
                            ></checkbox-question>
                        </ng-template>
                        <ng-template #Dropdown>
                            <dropdown-question
                                [question]="placeholder_question"
                                [view]="'draft'"
                                [preview]="true"
                                (newTitleEvent)="
                                    addQuestion($event, 'Dropdown')
                                "
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
                    (click)="storeQuestions()"
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
    new_questions: Question[] = [];
    private _update_flag: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    flag_sub: Subscription;

    placeholder_question: Question = {
        type: '' as QuestionType,
        title: 'Type a question...',
        name: '',
    };

    public QuestionType = QuestionType;

    constructor(
        public dialogRef: MatDialogRef<AddQuestionBankComponent>,
        private _surveyCreatorService: SurveyCreatorService
    ) {}

    ngOnInit(): void {
        console.log(this.question_type, 'question type');
        console.log(this.selected_tag, 'selected_tag');
    }

    updateSelectedTag() {
        this.question_type = this.selected_tag;
    }

    closeDialog() {
        this.dialogRef.close();
    }

    addAnotherQuestion() {
        console.log('add');
    }

    addQuestion(event, question_type) {
        const new_question: Question = {
            title: event,
            type: question_type,
            name: '',
        };

        switch (question_type) {
            case QuestionType.rating:
                new_question.title = event[0];
                new_question.rateValues = event[1];
        }

        this.new_questions = [new_question];
    }

    storeQuestions() {
        this._update_flag.next(true);
        this.closeDialog();
        this.flag_sub = this._update_flag.asObservable().subscribe((flag) => {
            if (flag) {
                this._surveyCreatorService.question_bank.push(
                    ...this.new_questions
                );
            }
        });
        this._update_flag.next(false);
    }

    ngOnDestroy(): void {
        this.flag_sub?.unsubscribe();
    }
}
