import { Component, Input, OnInit } from '@angular/core';
import { QuestionType, UISurveyResponse } from '../types';

@Component({
    selector: 'survey-widget',
    styles: [
        `
            :host {
                display: flex;
            }
        `,
    ],
    template: `
        <div class="flex flex-col flex-1 p-2 w-full">
            <div
                class="flex flex-col h-full w-full bg-base-100 rounded shadow border border-base-200"
            >
                <div class="p-4 pb-2 text-xl">
                    {{ response?.question?.title || '' }}
                </div>
                <div class="flex flex-col w-full">
                    <ng-container
                        *ngIf="
                            [
                                QuestionType.Comment_Box,
                                QuestionType.Single_Line_Text
                            ].includes(type)
                        "
                    >
                        <table-widget [value]="response.answers"></table-widget>
                    </ng-container>
                    <ng-container
                        *ngIf="
                            [
                                QuestionType.Drop_Down,
                                QuestionType.Radio_Group,
                                QuestionType.Check_Box
                            ].includes(type)
                        "
                    >
                        <selection-widget
                            [value]="response.answers"
                            [question]="response.question"
                        ></selection-widget>
                    </ng-container>
                    <ng-container *ngIf="QuestionType.Rating === type">
                        <ratings-widget
                            [value]="response.answers"
                            [question]="response.question"
                        ></ratings-widget>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
})
export class SurveyWidgetComponent implements OnInit {
    @Input() response: UISurveyResponse;
    public QuestionType = QuestionType;
    constructor() {}

    get type() {
        return this.response?.question?.type || 'empty';
    }

    ngOnInit(): void {}
}
