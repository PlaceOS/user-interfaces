import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../survey-types';

@Component({
    selector: 'question-list-item',
    template: `
        <div class="question-list-item">
            <span class="icon-span">
                <mat-icon
                    aria-hidden="false"
                    aria-label="Material icon for button"
                    class="icon"
                    >drag_indicator</mat-icon
                >
            </span>
            <span>
                {{ question.title }}
            </span>
            <span *ngIf="question.selected">
                <mat-icon
                    aria-hidden="false"
                    aria-label="Material tick icon"
                    class="tick-icon"
                    >done</mat-icon
                >
            </span>
        </div>
    `,
    styles: [
        `
            .question-list-item {
                display: flex;
                position: relative;
                background-color: #fff;
                align-items: center;
                margin: 10px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #f5f5f5;
                font-size: 12px;
                color: #808080;
            }
            .question-list-item span {
                display: inline-flex;
                vertical-align: center;
            }
            .icon {
                display: inline-flex;
                vertical-align: center;
                justify-content: center;
                align-items: center;
                margin: 0px 5px 0px 5px;
            }
            .tick-icon {
                position: absolute;
                top: 10px;
                right: 0;
                color: #529a60;
            }
        `,
    ],
})
export class QuestionListItemComponent implements OnInit {
    @Input() question: Question;

    constructor() {}

    ngOnInit(): void {}
}
