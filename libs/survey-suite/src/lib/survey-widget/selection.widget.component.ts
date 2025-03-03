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
            class="relative flex h-full max-h-[22rem] min-h-0 w-full flex-col overflow-y-auto p-2"
        >
            <div class="mx-4 flex flex-1 justify-end">
                <span>{{ (data$ | async)?.length || 0 }} answers</span>
            </div>
            <ng-container *ngIf="chart_data$ | async as data">
                <div
                    *ngFor="let d of data"
                    class="mx-4 flex flex-1 space-x-4 pb-3 pt-2"
                >
                    <div class="flex flex-1 flex-col space-y-1">
                        <span>{{ d.name }}</span>
                        <div class="progress-bar h-1 bg-base-200">
                            <span
                                class="progress-bar-fill h-1 rounded-lg"
                                [ngClass]="{
                                    'bg-error': d.percentage <= 25,
                                    'bg-warning':
                                        d.percentage > 25 && d.percentage <= 50,
                                    'bg-info':
                                        d.percentage > 50 && d.percentage <= 75,
                                    'bg-success': d.percentage > 75,
                                }"
                                [ngStyle]="{ width: d.percentage + '%' }"
                            ></span>
                        </div>
                    </div>
                    <div class="flex w-12 items-center">
                        <span class="text-2xl font-thin">{{
                            d.percentage / 100 | percent
                        }}</span>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
    standalone: false,
})
export class SelectionWidgetComponent extends BaseWidget {
    chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) =>
            parseSelectionAnswers(
                data,
                this.question?.choices?.map((_) => _.text) || [],
            ),
        ),
    );

    constructor() {
        super();
    }
}
