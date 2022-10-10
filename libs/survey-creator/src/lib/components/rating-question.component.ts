import { Component, OnInit, Input } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';
import { Question } from '../survey-types';

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
                    <div class="draft-question">
                        <input-title
                            [placeholder]="
                                question?.title || 'Type question here...'
                            "
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
            .rating-question-container {
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

    rateValues = [1, 2, 3, 4, 5];

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    protected addRating() {
        if (this.rateValues.length > 9) return;
        this.rateValues.push(this.rateValues.length + 1);
    }

    protected minusRating() {
        if (this.rateValues.length < 4) return;
        this.rateValues.pop();
    }
}
