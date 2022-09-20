import { Component, OnInit, Input } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';
import { Question } from '../survey-types';

@Component({
    selector: 'text-question',
    template: `
        <div class="question-container">
            <div class="question">
                <span>
                    {{ question?.title }}
                </span>
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
            .question-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                position: relative;
                font-size: 12px;
                max-width: 800px;
                height: 80px;
                color: #808080;
                background-color: #fff;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            .question {
                display: flex;
                flex-direction: column;
                margin: 20px;
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
export class TextQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;
    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
