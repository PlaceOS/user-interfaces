import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyCreatorService } from '../survey-creator.service';
import { Question } from '../survey-types';

@Component({
    selector: 'comment-box-question',
    template: `
        <ng-container
            [ngTemplateOutlet]="view === 'nonDraft' ? nonDraft : draft"
        >
        </ng-container>

        <ng-template #nonDraft>
            <div class="question-container">
                <div class="wrapper">
                    <div class="question">
                        <span>
                            {{ question?.title }}
                        </span>
                    </div>
                    <div class="input-field-container">
                        <textarea class="input-field" disabled></textarea>
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
            <div class="question-container">
                <div class="wrapper">
                    <div class="draft-question">
                        <input-title
                            [placeholder]="
                                question?.title || 'Type question here...'
                            "
                            (change)="updateTitle($event)"
                        ></input-title>
                    </div>
                    <div class="input-field-container">
                        <textarea class="input-field" disabled></textarea>
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
            .question-container {
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
            .input-field-container {
                display: flex;
                flex-direction: row;
                margin: 10px 0px 0px -4px;
            }
            .input-field {
                display: flex;
                width: 500px;
                height: 50px;
                margin-bottom: 10px;
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
export class CommentBoxQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;
    @Input() view: string = 'nonDraft';
    @Output() newTitleEvent = new EventEmitter<string>();

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    updateTitle(event) {
        this.newTitleEvent.emit(event.target.value);
    }
}
