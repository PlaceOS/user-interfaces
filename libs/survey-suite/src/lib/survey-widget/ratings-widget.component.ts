import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidgetComponent } from './base-widget.component';
import { parseRatingAnswers, parseRatingStats } from './survey-helper';

@Component({
    selector: 'ratings-widget',
    styles: [
        `
            svg circle {
                fill: transparent;
            }

            .progress-bar {
                stroke-linecap: round;
                transition: stroke-dashoffset 0.5s ease-in-out;
            }
        `,
    ],
    template: `
        <ng-container *ngIf="chart_data$ | async as data"> </ng-container>
    `,
    imports: [CommonModule],
})
export class RatingsWidgetComponent extends BaseWidgetComponent {
    public readonly size = 7 * 16;
    public readonly border_width = 0.75 * 16;
    public progress = 0;
    public chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) =>
            parseRatingAnswers(data, this.max_rate),
        ),
        shareReplay(1),
    );

    public stats$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) => parseRatingStats(data, this.max_rate)),
        tap((_) => (this.progress = _.average / this.max_rate)),
        shareReplay(1),
    );

    public get circle() {
        return Math.round((2 * 3.14159 * (this.size - this.border_width)) / 2);
    }

    public get radius() {
        return Math.round(this.circle * (1 - this.progress));
    }

    get max_rate() {
        return this.question?.rateMax || 10;
    }
}
