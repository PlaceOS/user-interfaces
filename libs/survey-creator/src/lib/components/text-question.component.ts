import { Component, OnInit, Input } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';

@Component({
    selector: 'text-question',
    template: `
        <div class="question-container">
            <div class="question">
                <span>
                    {{ question }}
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
                font-size: 12px;
                max-width: 800px;
                height: 80px;
                color: #808080;
                background-color: #fff;
                padding: 20px;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }

            .question {
                display: flex;
                flex-direction: column;
            }

            .close {
                display: flex;
                flex-direction: column;
                z-index: 99;
                margin-top: -30px;
                margin-right: -10px;
            }
        `,
    ],
})
export class TextQuestionComponent implements OnInit {
    @Input() question: string;
    @Input() preview?: boolean = false;
    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
