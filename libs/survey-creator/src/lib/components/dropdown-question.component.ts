import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../survey-types';
import { SurveyCreatorService } from '../survey-creator.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'dropdown-question',
    template: `
        <div class="question-container">
            <div class="wrapper">
                <div class="question">
                    <span>
                        {{ question?.title }}
                    </span>
                </div>
                <div class="dropdown-container">
                    <mat-form-field appearance="outline" class="dropdown">
                        <mat-label>Select...</mat-label>
                        <mat-select [formControl]="choices">
                            <mat-option
                                *ngFor="let choice of question?.choices"
                                [value]="choice"
                            >
                                {{ choice }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
                <!-- <div class="plus-minus-buttons">
                <plus-button (click)="addOption()"></plus-button>
                <minus-button (click)="deleteOption()"></minus-button>
                </div> -->
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
                color: #808080;
                background-color: #fff;
                margin: 5px 20px;
                border: 1px solid rgba(0, 0, 0, 0.12);
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
            .dropdown-container {
                display: flex;
                flex-direction: row;
                margin: 10px 0px 0px -4px;
            }
            .dropdown {
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
export class DropdownQuestionComponent implements OnInit {
    @Input() question: Question;
    @Input() preview?: boolean = false;

    choices = new FormControl('');

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
