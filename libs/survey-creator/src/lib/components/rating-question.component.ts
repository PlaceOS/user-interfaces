import { Component, OnInit, Input } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'rating-question',
    template: `
        <div class="rating-question-container">
            <div class="wrapper">
                <div class="rating-question">
                    <span>
                        {{ question }}
                    </span>
                </div>

                <div class="rating-numbers-container">
                    <div
                        *ngFor="let number of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
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
    `,
    styles: [
        `
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
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 20px;
            }
            .rating-question {
                display: flex;
                flex-direction: row;
            }
            .rating-numbers-container {
                display: flex;
                flex-direction: row;
                margin: 10px 0px 0px -4px;
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
    @Input() question: string;
    @Input() preview?: boolean = false;

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
