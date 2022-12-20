import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyCreatorService } from '../../services/survey-creator.service';
import { Question } from '@placeos/survey-suite';
import { Observable } from 'rxjs';

@Component({
    selector: 'rating-question',
    template: `
        <ng-container
            [ngTemplateOutlet]="view === 'nonDraft' ? nonDraft : draft"
        >
        </ng-container>
        <ng-template #nonDraft>
            <div class="rating-question-container">
                <div class="wrapper">
                    <div class="question">
                        <span>
                            {{ question.title }}
                        </span>
                    </div>

                    <div class="rating-numbers-container">
                        <div
                            *ngFor="let number of question?.rateValues"
                            class="rating-number"
                        >
                            <span>{{ number }}</span>
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
            <div class="rating-question-container">
                <div class="wrapper">
                    <mat-error *ngIf="title_error$ | async"
                        >Please enter a title</mat-error
                    >
                    <div class="draft-question">
                        <input-title
                            [ngClass]="{ 'error-style': title_error$ | async }"
                            [placeholder]="
                                question?.title || 'Type question here...'
                            "
                            (change)="updateTitle($event)"
                        ></input-title>
                    </div>
                    <div class="rating-numbers-container">
                        <div class="buttons-wrapper">
                            <minus-button
                                (click)="minusRating()"
                            ></minus-button>
                            <plus-button (click)="addRating()"></plus-button>
                        </div>

                        <div
                            *ngFor="
                                let number of question?.rateValues || rateValues
                            "
                            class="rating-number"
                        >
                            <span>{{ number }}</span>
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
            mat-error {
                color: #3b82f6;
                margin: 0px 0px 3px -12px;
            }
            .error-style {
                border: 1px solid #3b82f6;
                box-shadow: 0px 2px 4px rgba(5, 28, 44, 0.1);
                border-radius: 4px;
                padding-right: 10px;
            }
            .rating-question-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                position: relative;
                font-size: 12px;
                max-width: 800px;
                background-color: #fff;
                margin: 20px;
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 20px 30px;
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
            .rating-numbers-container {
                display: flex;
                flex-direction: row;
                margin: 10px 0px 0px -4px;
                align-items: center;
            }
            .rating-number {
                display: flex;
                flex-direction: row;
                border: 1px solid rgba(0, 0, 0, 0.12);
                width: 30px;
                height: 30px;
                border-radius: 20px;
                align-items: center;
                justify-content: center;
                margin-right: 5px;
            }
            .rating-number span {
                display: flex;
            }
            .buttons-wrapper {
                display: flex;
                flex-direction: row;
                margin: 0px 5px 0px -5px;
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
export class RatingQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;
    @Input() view: string = 'nonDraft';
    @Output() newTitleEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() newRatingEvent: EventEmitter<number[]> = new EventEmitter<
        number[]
    >();
    @Output() newUpdateEvent: EventEmitter<any> = new EventEmitter<any>();
    title_error$: Observable<boolean> = this.surveyCreatorService.title_error$;

    rateValues: number[];

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {
        this.rateValues = this.question?.rateValues || [1, 2, 3, 4, 5];
    }

    protected addRating() {
        if (this.rateValues.length > 9) return;
        this.rateValues.push(this.rateValues.length + 1);
        this.updateRating();
    }

    protected minusRating() {
        if (this.rateValues.length < 4) return;
        this.rateValues.pop();
        this.updateRating();
    }

    updateTitle(event) {
        this.newTitleEvent.emit(event.target.value);
        this.surveyCreatorService.checkForm();
    }

    updateRating() {
        // this.newRatingEvent.emit(this.rateValues);
        this.surveyCreatorService.new_question_form.patchValue({
            rateValues: this.rateValues,
        });
    }
}
