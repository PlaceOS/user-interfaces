import { AfterViewInit, Component } from '@angular/core';
import { BarChart, BarChartOptions } from 'chartist';
import { map } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidget } from './base-widget.component';
import { parseSelectionAnswers } from './survey-helper';

@Component({
    selector: 'selection-widget',
    styles: [],
    template: ` 
        <div class="flex flex-col w-full p-4">
            <div id="{{ widget_id }}" class="ct-chart ct-octave"></div> 
        </div>
    `,
})
export class SelectionWidgetComponent
    extends BaseWidget
    implements AfterViewInit
{
    private chartRef: BarChart;
    private chartOptions: BarChartOptions = {
        distributeSeries: true,
        chartPadding: 10,
        axisY: { onlyInteger: true },
    };
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

    ngAfterViewInit(): void {
        this.subscription(
            'chart-data',
            this.chart_data$.subscribe((data) => {
                const id = `#${this.widget_id}`;
                if (!this.chartRef) {
                    this.chartRef = new BarChart(id, data, this.chartOptions);
                    return;
                }
                this.chartRef.update(data);
            })
        );
    }
}
