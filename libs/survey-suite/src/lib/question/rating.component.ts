import { Component, OnInit } from '@angular/core';
import { BaseQuestionComponent } from './base-question.component';

@Component({
    selector: 'rating',
    styles: [],
    template: `
        <div class="flex w-full flex-col p-4">
            <div class="mb-4 flex flex-row items-center space-x-2">
                <div
                    *ngFor="let i of generateArray(question.rateMax)"
                    class="flex h-10 w-10 items-center justify-center rounded-full border"
                >
                    <span class="font-semibold">{{ i }}</span>
                </div>
            </div>
            <div class="flex flex-col" *ngIf="!preview">
                <mat-slider [max]="10" [min]="3" [thumbLabel]="true" [step]="1">
                    <input matSliderThumb [(ngModel)]="question.rateMax" />
                </mat-slider>
                <span class="text-xs">
                    {{
                        'APP.CONCIERGE.SURVEY_QUESTION_HINT_RATING' | translate
                    }}
                </span>
            </div>
        </div>
    `,
    standalone: false,
})
export class RatingsComponent extends BaseQuestionComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
        if (!this.question.rateMax) {
            this.question.rateMax = 3;
        }
    }

    generateArray(max: number) {
        return Array.from({ length: max }, (val, index) => index + 1);
    }
}
