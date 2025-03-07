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
        <div class="flex w-full flex-1 flex-col p-2">
            <div
                class="flex h-full w-full flex-col rounded border border-base-300 bg-base-100"
            >
                <div class="p-4 pb-2 text-xl">
                    {{ response?.question?.title || '' }}
                </div>
                <div class="flex w-full flex-col">
                    <ng-container
                        *ngIf="
                            [
                                QuestionType.Comment_Box,
                                QuestionType.Single_Line_Text,
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
                                QuestionType.Check_Box,
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
    standalone: false,
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
