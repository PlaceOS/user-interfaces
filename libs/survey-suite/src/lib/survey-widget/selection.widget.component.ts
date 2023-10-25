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
                    class="flex flex-1 mx-4 pt-2 pb-3 space-x-4"
                >
                    <div class="flex flex-1 flex-col space-y-1">
                        <span>{{ d.name }}</span>
                        <div class="progress-bar bg-base-200 h-1">
                            <span
                                class="progress-bar-fill h-1 rounded-lg"
                                [ngClass]="{
                                    'bg-error': d.percentage <= 25,
                                    'bg-warning':
                                        d.percentage > 25 && d.percentage <= 50,
                                    'bg-info':
                                        d.percentage > 50 && d.percentage <= 75,
                                    'bg-success': d.percentage > 75
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
