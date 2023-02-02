import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidget } from './base-widget.component';
import { parseSelectionAnswers } from './survey-helper';

@Component({
    selector: 'selection-widget',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                padding-bottom: 0.5rem;
            }
        `,
    ],
    template: `
        <div
            class="flex flex-col min-h-0 max-h-[22rem] h-full w-full overflow-y-auto relative p-2"
        >
            <div class="flex flex-1 justify-end mx-4">
                <span>{{ (data$ | async)?.length || 0 }} answers</span>
            </div>
            <ng-container *ngIf="chart_data$ | async as data">
                <div
                    *ngFor="let d of data"
                    class="flex flex-1 border-b mx-4 py-2 space-x-4"
                >
                    <div class="flex flex-1 flex-col">
                        <span>{{ d.name }}</span>
                        <div class="progress-bar bg-gray-200 h-2">
                            <span
                                class="progress-bar-fill h-2 rounded-lg"
                                [ngClass]="{
                                    'bg-red-500': d.percentage < 30,
                                    'bg-yellow-500':
                                        d.percentage >= 30 && d.percentage < 60,
                                    'bg-green-500': d.percentage >= 60
                                }"
                                [ngStyle]="{ width: d.percentage + '%' }"
                            ></span>
                        </div>
                    </div>
                    <div class="flex items-center w-12">
                        <span class="text-2xl font-thin">{{
                            d.percentage / 100 | percent
                        }}</span>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
})
export class SelectionWidgetComponent extends BaseWidget {
    chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) =>
            parseSelectionAnswers(
                data,
                this.question?.choices?.map((_) => _.text) || []
            )
        )
    );

    constructor() {
        super();
    }
}
