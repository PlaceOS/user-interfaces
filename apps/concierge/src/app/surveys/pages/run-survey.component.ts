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
            class="relative flex h-full min-h-0 w-full flex-col items-center overflow-y-auto bg-base-100 pb-6"
        >
            @if ((loading$ | async).length) {
                <div class="absolute inset-0 z-10 flex bg-base-100 opacity-60">
                    <div class="m-auto flex flex-col items-center">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <span>{{ loading$ | async }}</span>
                    </div>
                </div>
            }
            <div class="flex w-full max-w-6xl flex-col">
                <survey [model]="service.surveyModel"></survey>
            </div>
        </main>
    `,
    providers: [RunSurveyService],
    standalone: false,
})
export class RunSurveyComponent extends AsyncHandler implements OnInit {
    loading$ = this.service.loading$;
    constructor(
        private route: ActivatedRoute,
        public service: RunSurveyService,
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
            }),
        );
    }
}
