import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QuestionType, UISurveyResponse } from '../types';
import { RatingsWidgetComponent } from './ratings-widget.component';
import { SelectionWidgetComponent } from './selection.widget.component';
import { TableWidgetComponent } from './table-widget.component';

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
                    <ng-container *ngIf="isTable(type)">
                        <div
                            class="relative flex h-full max-h-[22rem] min-h-0 w-full flex-col divide-y divide-base-300 overflow-y-auto"
                        >
                            @let data = response.answers;
                            @if (data?.length) {
                                <div
                                    *ngFor="let d of data"
                                    class="mx-4 flex flex-1 p-2"
                                >
                                    <blockquote class="text-sm">
                                        {{ d }}
                                    </blockquote>
                                </div>
                            } @else {
                                <p
                                    class="mx-4 mb-2 rounded bg-base-300 p-8 text-center opacity-30"
                                >
                                    No responses
                                </p>
                            }
                        </div>
                    </ng-container>
                    <ng-container *ngIf="isSelection(type)">
                        <selection-widget
                            [value]="response.answers"
                            [question]="response.question"
                        ></selection-widget>
                    </ng-container>
                    <ng-container *ngIf="isRating(type)">
                        <ratings-widget
                            [value]="response.answers"
                            [question]="response.question"
                        ></ratings-widget>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        TableWidgetComponent,
        SelectionWidgetComponent,
        RatingsWidgetComponent,
    ],
})
export class SurveyWidgetComponent {
    @Input() public response: UISurveyResponse;

    public isRating(type: QuestionType) {
        return type === QuestionType.Rating;
    }
    public isSelection(type: QuestionType) {
        return (
            type === QuestionType.Drop_Down ||
            type === QuestionType.Radio_Group ||
            type === QuestionType.Check_Box
        );
    }
    public isTable(type: QuestionType) {
        return (
            type === QuestionType.Comment_Box ||
            type === QuestionType.Single_Line_Text
        );
    }

    public get type() {
        return this.response?.question?.type || QuestionType.Empty;
    }
}
