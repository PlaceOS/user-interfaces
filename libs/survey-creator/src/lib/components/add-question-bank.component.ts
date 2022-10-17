import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Question, QuestionType, Tag } from '../survey-types';
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
                    <mat-checkbox
                        color="primary"
                        [checked]="tag.apply"
                        (change)="tag.apply = !tag.apply"
                        >{{ tag.name }}</mat-checkbox
                    >
                </div>
                <question-container
                    (newTitleEvent)="updateTitle($event)"
                    (newRatingEvent)="updateRating($event)"
                    (newChoiceEvent)="updateChoice($event)"
                    (allChoicesEvent)="updateAllChoices($event)"
                ></question-container>
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
    tags: any = [
        {
            name: Tag.desk,
            apply: false,
        },
        { name: Tag.room, apply: false },
        { name: Tag.parking, apply: false },
    ];
    selected_tags: Tag[] = [];
    new_question: Question;
    new_questions: Question[] = [];
    private _update_flag: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    flag_sub: Subscription;

    public QuestionType = QuestionType;

    constructor(
        public dialogRef: MatDialogRef<AddQuestionBankComponent>,
        private _surveyCreatorService: SurveyCreatorService
    ) {}

    ngOnInit(): void {
        this.new_question = {
            title: '',
            type: '' as any,
            name: '',
            rateValues: [],
            choices: [],
            tags: [],
        };
    }

    closeDialog() {
        this.dialogRef.close();
    }
    updateTitle(event) {
        this.new_question.title = event[0];
        this.new_question.type = event[1];
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
        // console.log('add');
    }
    addQuestion() {
        this._update_flag.next(true);
        this.closeDialog();
        this.tags.forEach((tag) => {
            if (tag.apply) this.new_question.tags.push(tag.name);
        });
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
