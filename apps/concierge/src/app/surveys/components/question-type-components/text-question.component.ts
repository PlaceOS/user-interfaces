import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyCreatorService } from '../../services/survey-creator.service';
import { Question } from '../../survey-types';
import { Observable } from 'rxjs';

@Component({
    selector: 'text-question',
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
                        <input class="input-field" disabled type="text" />
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

                    <div class="input-field-container">
                        <input class="input-field" disabled type="text" />
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
                height: 30px;
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
export class TextQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;
    @Input() view: string = 'nonDraft';
    @Output() newTitleEvent = new EventEmitter<string>();
    title_error$: Observable<boolean> = this.surveyCreatorService.title_error$;

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    updateTitle(event) {
        this.newTitleEvent.emit(event.target.value);
        this.surveyCreatorService.checkForm();
    }
}
