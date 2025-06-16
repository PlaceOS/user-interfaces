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
        @if (chart_data$ | async; as data) {
            <div class="flex flex-row space-x-4 p-4">
                <div
                    class="relative flex w-1/3 flex-col items-center justify-center space-y-2"
                >
                    @if (stats$ | async; as stats) {
                        <div class="relative h-28 w-28">
                            <svg class="h-full w-full -rotate-90">
                                <circle
                                    [ngStyle]="{
                                        cx: size / 2 + 'px',
                                        cy: size / 2 + 'px',
                                        r: (size - border_width) / 2 + 'px',
                                        stroke: 'var(--b2)',
                                        'stroke-width': border_width + 'px',
                                        'stroke-dasharray': circle + 'px',
                                    }"
                                ></circle>
                                <circle
                                    class="progress-bar"
                                    [ngStyle]="{
                                        cx: size / 2 + 'px',
                                        cy: size / 2 + 'px',
                                        r: (size - border_width) / 2 + 'px',
                                        stroke:
                                            progress <= 0.25
                                                ? 'var(--er)'
                                                : progress <= 0.5
                                                  ? 'var(--wa)'
                                                  : progress <= 0.75
                                                    ? 'var(--in)'
                                                    : 'var(--su)',
                                        'stroke-width': border_width + 'px',
                                        'stroke-dasharray': circle + 'px',
                                        'stroke-dashoffset': radius + 'px',
                                    }"
                                ></circle>
                            </svg>
                            <div
                                class="absolute inset-0 flex items-center justify-center text-4xl font-medium"
                            >
                                {{ stats.average || 0 | number: '1.1' }}
                            </div>
                        </div>
                        <div>{{ stats.total }} ratings</div>
                    }
                </div>
                <div class="flex w-2/3 flex-col-reverse">
                    @for (d of data; track d; let i = $index) {
                        <div
                            class="flex w-full flex-row items-center space-x-4 rounded-xl border border-base-100 px-2 hover:border-base-200"
                        >
                            @let percent = d || 0;
                            <div class="w-5 text-right">
                                {{ i + 1 }}
                            </div>
                            <div
                                progbar
                                class="h-2.5 flex-1 rounded-full bg-base-200"
                            >
                                <div
                                    class="h-2.5 rounded-full"
                                    [ngStyle]="{
                                        width: (percent || 0) + '%',
                                        'background-color':
                                            percent <= 25
                                                ? 'var(--er)'
                                                : percent <= 50
                                                  ? 'var(--wa)'
                                                  : percent <= 75
                                                    ? 'var(--in)'
                                                    : 'var(--su)',
                                    }"
                                ></div>
                            </div>
                            <div class="flex w-6 justify-end font-thin">
                                {{ (percent || 0) / 100 | percent }}
                            </div>
                        </div>
                    }
                </div>
            </div>
        }
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
