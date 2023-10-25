import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { RunSurveyService } from '../services/run-survey.service';

@Component({
    selector: 'run-survey',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    template: `
        <main
            class="flex flex-col min-h-0 h-full w-full bg-base-100 relative items-center pb-6 overflow-y-auto"
        >
            <div
                *ngIf="(loading$ | async).length"
                class="flex absolute inset-0 opacity-60 bg-base-100 z-10"
            >
                <div class="flex flex-col m-auto items-center">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <span>{{ loading$ | async }}</span>
                </div>
            </div>
            <div class="flex flex-col w-full max-w-6xl">
                <survey [model]="service.surveyModel"></survey>
            </div>
        </main>
    `,
    providers: [RunSurveyService],
})
export class RunSurveyComponent extends AsyncHandler implements OnInit {
    loading$ = this.service.loading$;
    constructor(
        private route: ActivatedRoute,
        public service: RunSurveyService
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscription(
            'route-param',
            this.route.params.subscribe((params) => {
                const id = params?.id || '';
                if (id?.length) {
                    this.service.loadSurvey(id);
                }
            })
        );
    }
}
