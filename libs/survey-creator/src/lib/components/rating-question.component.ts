import { Component, OnInit, Input } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'rating-question',
    template: `
        <div class="rating-question-container">
            <span
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
            </span>
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
    `,
    styles: [
        `
            .rating-question-container {
                display: flex;
                flex-direction: column;
                font-size: 12px;
                width: 800px;
                color: #808080;
                background-color: #fff;
                padding: 20px;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }

            .rating-question {
                display: flex;
                flex-direction: row;
            }
            .rating-numbers-container {
                display: flex;
                flex-direction: row;
                margin-top: 10px;
                margin-bottom: 10px;
            }

            .rating-number {
                display: flex;
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
                z-index: 99;
                position: flex;
                text-align: right;
                margin-top: -10px;
                margin-right: -10px;
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
