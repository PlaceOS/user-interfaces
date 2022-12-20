import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Question, QuestionType } from '@placeos/survey-suite';
import { SurveyCreatorService } from '../services/survey-creator.service';
import { SearchService } from '../services/search.service';

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
            <div class="search-bar-container">
                <search-bar [view]="'checkbox'"></search-bar>
            </div>
            <main>
                <span class="question-counter">
                    {{ (this.question_bank$ | async).length }} questions
                </span>
                <div *ngFor="let question of this.question_bank$ | async">
                    <question-container
                        (newTitleEvent)="updateTitle($event, question.title)"
                        (newRatingEvent)="updateRating($event, question.title)"
                        (newChoiceEvent)="updateChoice($event, question.title)"
                        (allChoicesEvent)="
                            updateAllChoices($event, question.title)
                        "
                        (updateTypeEvent)="updateType($event, question.title)"
                        [question]="question"
                        [canDelete]="true"
                    ></question-container>
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
            .search-bar-container {
                padding-top: 20px;
            }
            .question-counte {
                font-size: 20px;
                line-height: 24px;
                weight: 400;
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
    updated_question_bank: Question[] = [];
    question_bank$: Observable<Question[]>;
    bank_sub: Subscription;
    flag_sub: Subscription;
    private _update_flag: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);

    public QuestionType = QuestionType;

    constructor(
        public dialogRef: MatDialogRef<EditQuestionBankComponent>,
        public surveyCreatorService: SurveyCreatorService,
        public searchService: SearchService
    ) {}

    ngOnInit(): void {
        this.bank_sub = this.surveyCreatorService.question_bank$.subscribe(
            (questions: Question[]) => (this.updated_question_bank = questions)
        );
        this.question_bank$ = this.searchService.question_bank$;
    }

    closeDialog() {
        this.dialogRef.close();
    }

    updateTitle(event, title) {
        let found_question = this.updated_question_bank.find(
            (question) => question.title === title
        );
        this.flag_sub = this._update_flag.asObservable().subscribe((flag) => {
            if (flag) {
                found_question.title = event[0];
                found_question.type = event[1];
            }
        });
        this.surveyCreatorService.question_bank = this.updated_question_bank;
        this._update_flag.next(false);
    }

    updateChoice(event, title) {
        let found_question = this.updated_question_bank.find(
            (question) => question.title === title
        );
        this.flag_sub = this._update_flag.asObservable().subscribe((flag) => {
            if (flag) {
                let choice_index = found_question.choices.findIndex(
                    (item) => item == event[1]
                );
                found_question.choices[choice_index] = event[0];
            }
        });
        this.surveyCreatorService.question_bank = this.updated_question_bank;
        this._update_flag.next(false);
    }

    updateAllChoices(event, title) {
        let found_question = this.updated_question_bank.find(
            (question) => question.title === title
        );
        this.flag_sub = this._update_flag.asObservable().subscribe((flag) => {
            if (flag) {
                found_question.choices = event;
            }
        });
        this.surveyCreatorService.question_bank = this.updated_question_bank;
        this._update_flag.next(false);
    }
    updateRating(event, title) {
        let found_question = this.updated_question_bank.find(
            (question) => question.title === title
        );
        this.flag_sub = this._update_flag.asObservable().subscribe((flag) => {
            if (flag) {
                found_question.rateValues = event;
            }
        });
        this.surveyCreatorService.question_bank = this.updated_question_bank;
        this._update_flag.next(false);
    }

    updateType(event, title) {
        let found_question = this.updated_question_bank.find(
            (question) => question.title === title
        );

        found_question.type = event;

        if (event == QuestionType.Multi_Select || QuestionType.Single_Select) {
            found_question.choices = ['Type a choice here...'];
        }

        this.surveyCreatorService.question_bank = this.updated_question_bank;
    }

    updateQuestions() {
        this._update_flag.next(true);
        this.closeDialog();
    }

    ngOnDestroy(): void {
        this.bank_sub?.unsubscribe();
        this.flag_sub?.unsubscribe();
    }
}
