import { AfterViewInit, Component } from '@angular/core';
import { PieChart, PieChartOptions } from 'chartist';
import { map, shareReplay } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidget } from './base-widget.component';
import { parseRatingAnswers, parseRatingAverage } from './survey-helper';

@Component({
    selector: 'ratings-widget',
    styles: [],
    template: `
        <ng-container *ngIf="chart_data$ | async as data">
            <div class="flex flex-row space-x-4 p-4">
                <div class="flex w-1/2 relative">
                    <div
                        class="absolute inset-0 flex w-full h-full items-center justify-center"
                    >
                        <span class="font-bold text-3xl">{{
                            (average_rating$ | async)?.series[0]?.value || 0
                                | number: '1.1'
                        }}</span>
                    </div>
                    <div id="{{ widget_id }}" class="ct-chart ct-octave"></div>
                </div>
                <div class="flex w-1/2 flex-col-reverse">
                    <div
                        *ngFor="let d of data; let i = index"
                        class="flex flex-row w-full space-x-4"
                    >
                        <div class=" items-center">
                            <mat-icon
                                class="{{
                                    j <= i ? 'text-yellow-600' : 'text-gray-300'
                                }}"
                                *ngFor="
                                    let _ of [].constructor(data.length);
                                    let j = index
                                "
                                >star</mat-icon
                            >
                        </div>
                        <span>{{ d }}</span>
                    </div>
                </div>
            </div>
        </ng-container>
    `,
})
export class RatingsWidgetComponent
    extends BaseWidget
    implements AfterViewInit
{
    private chartRef: PieChart;
    private chartOptions: PieChartOptions = {
        donut: true,
        donutWidth: 60,
        chartPadding: 10,
        showLabel: false,
    };

    public chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) => parseRatingAnswers(data, this.maxRate)),
        shareReplay(1)
    );

    public average_rating$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) => parseRatingAverage(data, this.maxRate)),
        shareReplay(1)
    );

    get maxRate() {
        return this.question?.rateMax || 10;
    }

    constructor() {
        super();
    }

    ngAfterViewInit() {
        this.subscription(
            'chart-average',
            this.average_rating$.subscribe((data) => {
                const id = `#${this.widget_id}`;
                if (!this.chartRef) {
                    this.chartRef = new PieChart(id, data, this.chartOptions);
                    return;
                }
                this.chartRef.update(data);
            })
        );
    }
}
