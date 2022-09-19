import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { InputTitleComponent } from './input-title.component';
import { PlusButtonComponent } from './plus-button.component';

@Component({
    selector: 'checkbox-question',
    template: ` <div class="question-container">
        <div class="wrapper">
            <div class="question">
                <span>
                    {{ question }}
                </span>
            </div>

            <div class="checkbox-container">
                <div *ngFor="let number of ['test']" class="checkbox">
                    <mat-checkbox></mat-checkbox>
                    <input-title
                        [placeholder]="'Type option here'"
                        [fontSize]="12"
                    ></input-title>
                </div>
            </div>
            <div class="plus-minus-buttons">
                <plus-button (click)="addOption()"></plus-button>
                <minus-button (click)="deleteOption()"></minus-button>
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
    </div>`,
    styles: [
        `
            .question-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
                max-width: 800px;
                color: #808080;
                background-color: #fff;
                padding: 20px;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }

            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .question {
                display: flex;
                flex-direction: row;
                margin-right: auto;
            }
            .checkbox-container {
                display: flex;
                flex-direction: row;
                margin-right: auto;
                margin-top: 10px;
                justify-content: center;
            }

            .checkbox {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-right: 5px;
            }

            .checkbox mat-checkbox {
                display: flex;
            }
            .checkbox input-title {
                display: flex;
                margin: 0px 0px 5px 5px;
            }

            .close {
                display: flex;
                flex-direction: column;
                z-index: 99;
                margin-top: -30px;
                margin-right: -10px;
            }

            .plus-minus-buttons {
                display: flex;
                flex-direction: row;
                margin-right: auto;
                margin-left: 20px;
            }
        `,
    ],
})
export class CheckboxQuestionComponent implements OnInit {
    @Input() question: string;
    @Input() preview?: boolean = false;

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}

    protected addOption() {
        console.log('add');
        document.getElementsByClassName('question-container');
    }

    protected deleteOption() {}
}
