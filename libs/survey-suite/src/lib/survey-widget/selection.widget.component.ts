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
            class="relative flex h-full max-h-[22rem] min-h-0 w-full flex-col overflow-y-auto px-2 pb-2"
        >
            <div class="mx-4 flex flex-1 justify-end">
                <span>{{ (data$ | async)?.length || 0 }} answers</span>
            </div>
            @let data = chart_data$ | async;
            @if (data?.length) {
                <div
                    *ngFor="let d of data"
                    class="mx-4 flex flex-1 items-end pb-3 pt-2"
                >
                    <div class="w-px flex-1 flex-col space-y-1">
                        <div class="flex-1 truncate" [matTooltip]="d.name">
                            {{ d.name }}
                        </div>
                        <div class="progress-bar h-1 bg-base-200">
                            @let percent = d.percentage || 0;
                            <span
                                class="progress-bar-fill h-1 justify-center rounded-lg"
                                [ngClass]="{
                                    'bg-error': percent <= 25,
                                    'bg-warning': percent > 25 && percent <= 50,
                                    'bg-info': percent > 50 && percent <= 75,
                                    'bg-success': percent > 75,
                                }"
                                [ngStyle]="{ width: percent + '%' }"
                            ></span>
                        </div>
                    </div>
                    <div class="w-16 text-right text-2xl font-thin">
                        {{ d.percentage / 100 | percent }}
                    </div>
                </div>
            } @else {
                <p class="mx-2 rounded bg-base-300 p-8 text-center opacity-30">
                    No responses
                </p>
            }
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
