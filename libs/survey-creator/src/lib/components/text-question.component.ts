import { Component, OnInit, Input } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'text-question',
    template: `
        <div class="question-container">
            <span
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
            <div class="question">
                <span>
                    {{ question }}
                </span>
            </div>
        </div>
    `,
    styles: [
        `
            .question-container {
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

            .question {
                display: flex;
                flex-direction: row;
                margin-bottom: 10px;
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
export class TextQuestionComponent implements OnInit {
    @Input() question: string;
    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
