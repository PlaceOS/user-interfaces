import { Component } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidget } from './base-widget.component';
import { parseRatingAnswers, parseRatingStats } from './survey-helper';

@Component({
    selector: 'ratings-widget',
    styles: [
        `
            :host {
                padding-bottom: 0.5rem;
            }
        `,
    ],
    template: `
        <ng-container *ngIf="chart_data$ | async as data">
            <div class="flex flex-row space-x-4 p-4">
                <div
                    class="relative flex w-1/3 flex-col items-center justify-center space-y-4"
                >
                    <ng-container *ngIf="stats$ | async as stats">
                        <div class="flex flex-row items-end">
                            <span class="text-6xl"
                                >{{ stats.average || 0 | number: '1.1' }}
                            </span>
                            <span class="font-thin"
                                >/ {{ maxRate | number: '1.1' }}</span
                            >
                        </div>

                        <div class="progress-bar h-5 bg-base-200">
                            <span
                                class="progress-bar-fill h-5 rounded-lg bg-warning"
                                [ngStyle]="{ width: stats.percentage + '%' }"
                            ></span>
                        </div>
                        <span>{{ stats.total }} ratings</span>
                    </ng-container>
                </div>
                <div class="flex w-2/3 flex-col-reverse">
                    <div
                        *ngFor="let d of data; let i = index"
                        class="flex w-full flex-row items-center space-x-4"
                    >
                        <div class="flex w-3 justify-end">
                            <span> {{ i + 1 }}</span>
                        </div>
                        <div class="progress-bar h-3 bg-base-200">
                            <span
                                class="progress-bar-fill h-3 bg-warning"
                                [ngStyle]="{ width: d + '%' }"
                            ></span>
                        </div>
                        <div class="flex min-w-[1.5rem] justify-end">
                            <span> {{ d / 100 | percent }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
    `,
    standalone: false,
})
export class RatingsWidgetComponent extends BaseWidget {
    public chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) => parseRatingAnswers(data, this.maxRate)),
        shareReplay(1),
    );

    public stats$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) => parseRatingStats(data, this.maxRate)),
        shareReplay(1),
    );

    get maxRate() {
        return this.question?.rateMax || 10;
    }

    constructor() {
        super();
    }
}
