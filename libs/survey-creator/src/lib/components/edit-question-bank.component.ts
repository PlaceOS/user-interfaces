import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'edit-question-bank',
    template: `
        <section>
            <div class="header">
                <span class="dialog-title">Edit question bank</span>
                <span class="close" (click)="closeDialog()">
                    <mat-icon
                        aria-hidden="false"
                        aria-label="Material icon for closing dialog"
                        class="icon"
                        >close</mat-icon
                    >
                </span>
            </div>
            <div class="category-container">
                <div><span class="section-heading">Category</span></div>
                <div>
                    <p class="small-text">
                        Please select tags that apply to the below question.
                    </p>
                </div>
                <div class="category-tags" *ngFor="let tag of tags">
                    <mat-checkbox color="primary">{{ tag }}</mat-checkbox>
                </div>
            </div>
            <main>
                <div *ngFor="let question of this.question_bank$ | async">
                    <ng-container
                        [ngTemplateOutlet]="
                            question.type == 'Text'
                                ? Text
                                : question.type == 'Checkbox'
                                ? Checkbox
                                : question.type == 'Comment'
                                ? Comment
                                : question.type == 'Dropdown'
                                ? Dropdown
                                : Rating
                        "
                    >
                    </ng-container>

                    <ng-template #Rating>
                        <rating-question
                            [question]="question"
                            [view]="'draft'"
                            [preview]="true"
                        ></rating-question>
                    </ng-template>
                    <ng-template #Text>
                        <text-question
                            [question]="question"
                            [view]="'draft'"
                            [preview]="true"
                            (newTitleEvent)="
                                updateTitle($event, question.title)
                            "
                        ></text-question>
                    </ng-template>
                    <ng-template #Comment>
                        <comment-box-question
                            [question]="question"
                            [view]="'draft'"
                            [preview]="true"
                        ></comment-box-question>
                    </ng-template>
                    <ng-template #Checkbox>
                        <checkbox-question
                            [question]="question"
                            [view]="'draft'"
                            [preview]="true"
                        ></checkbox-question>
                    </ng-template>
                    <ng-template #Dropdown>
                        <dropdown-question
                            [question]="question"
                            [view]="'draft'"
                            [preview]="true"
                        ></dropdown-question>
                    </ng-template>
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
                    class="update-button"
                    color="primary"
                    (click)="updateQuestions()"
                >
                    Update
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
                margin: 0px;
                padding: 20px;
                background-color: #f8f8fa;
                border: 1px solid #d4d4d4;
            }
            .category-container {
                margin: 20px 20px 10px 20px;
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

            .new-question {
                margin-left: -10px;
            }
            .cancel-button {
                display: flex;
                color: #292f5b;
                background-color: #fff;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            .update-button {
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
export class EditQuestionBankComponent implements OnInit {
    tags: string[] = ['Desk', 'Room', 'Parking'];
    selected_tag: any = QuestionType.rating;
    question_type: string = QuestionType.rating;
    question_bank$: Observable<Question[]> =
        this._surveyCreatorService.question_bank$;

    updated_question_bank: Question[] = [];
    bank_sub: Subscription;

    public QuestionType = QuestionType;

    constructor(
        public dialogRef: MatDialogRef<EditQuestionBankComponent>,
        private _surveyCreatorService: SurveyCreatorService
    ) {}

    ngOnInit(): void {
        this.bank_sub = this._surveyCreatorService.question_bank$.subscribe(
            (questions) => (this.updated_question_bank = questions)
        );
    }

    updateSelectedTag() {
        this.question_type = this.selected_tag;
        this._resetChoices();
    }
    closeDialog() {
        this._resetChoices();
        this.dialogRef.close();
    }
    private _resetChoices() {
        this._surveyCreatorService.choices = ['Type a choice here...'];
    }

    updateTitle(event, title) {
        let found_question = this.updated_question_bank.find(
            (question) => question.title === title
        );
        found_question.title = event;
    }

    updateQuestions() {
        //Post updated_question_bank
    }

    ngOnDestroy(): void {
        this.bank_sub?.unsubscribe();
    }
}
