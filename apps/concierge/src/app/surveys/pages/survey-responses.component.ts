import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { map, shareReplay, take } from 'rxjs/operators';
import { SurveyResponsesService } from '../services/survey-responses.service';

@Component({
    selector: 'survey-responses',
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
                height: 100%;
            }
        `,
    ],
    template: `
        <sidebar></sidebar>
        <main
            class="relative w-full h-full bg-white dark:bg-neutral-600 overflow-y-auto p-4"
        >
            <div
                *ngIf="(loading$ | async).length"
                class="flex absolute inset-0 opacity-60 bg-white dark:bg-black z-10"
            >
                <div class="flex flex-col m-auto items-center">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <span>{{ loading$ | async }}</span>
                </div>
            </div>
            <ng-container *ngIf="surveyId$ | async; else noId">
                <header class="flex items-start w-full">
                    <button icon matRipple (click)="back()">
                        <app-icon class="flex mr-2">arrow_back</app-icon>
                    </button>
                    <div class="flex flex-row items-center">
                        <span class="text-2xl"
                            >Survey Responses -
                            {{ (survey$ | async)?.title || '' }}</span
                        >
                    </div>
                </header>
                <ng-container *ngIf="responses$ | async as responses">
                    <ng-container *ngIf="responses?.length > 0; else noRecords">
                        <div class="flex p-4 border-b justify-end space-x-2">
                            <div class="flex flex-col items-center flex-1">
                                <h3>Total Questions</h3>
                                <p class="text-4xl">
                                    {{ (stats$ | async)?.question_count || 0 }}
                                </p>
                            </div>
                            <div class="flex flex-col items-center flex-1">
                                <h3>Total Answers</h3>
                                <p class="text-4xl">
                                    {{ (stats$ | async)?.answer_count || 0 }}
                                </p>
                            </div>
                            <div class="flex flex-col items-center flex-1">
                                <h3>Triggers On</h3>
                                <p class="text-2xl">
                                    {{ (survey$ | async)?.trigger }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full pt-4">
                            <survey-widget
                                class="w-full lg:w-1/2 2xl:w-1/3"
                                *ngFor="let r of responses"
                                [response]="r"
                            ></survey-widget>
                        </div>
                    </ng-container>
                </ng-container>
            </ng-container>
        </main>

        <ng-template #noId>
            <div
                class="flex flex-col w-full h-full items-center justify-center"
            >
                <span class="text-lg text-gray-700"
                    >Invalid survey identity</span
                >
            </div>
        </ng-template>
        <ng-template #noRecords>
            <div
                class="flex flex-col w-full h-full items-center justify-center"
            >
                <span class="text-lg text-gray-700"
                    >No responses found for survey</span
                >
            </div>
        </ng-template>
    `,
    providers: [SurveyResponsesService],
})
export class SurveyResponsesComponent extends BaseClass implements OnInit {
    surveyId$ = this.route.params.pipe(map((params) => params.id || ''));
    survey$ = this.service.survey$;
    responses$ = this.service.responses$;
    stats$ = this.service.stats$.pipe(shareReplay(1));
    loading$ = this.service.loading$.pipe(shareReplay(1));

    constructor(
        private service: SurveyResponsesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscription(
            'params',
            this.surveyId$.subscribe((surveyId) => {
                if (surveyId?.length) {
                    this.service.getSurveyResponses(surveyId);
                }
            })
        );
    }

    public async back() {
        const survey = await this.survey$.pipe(take(1)).toPromise();
        this.router.navigate([
            'surveys',
            'survey-list',
            survey.building_id || '',
        ]);
    }
}
