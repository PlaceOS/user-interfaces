import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { shareReplay } from 'rxjs/operators';
import { SurveyService } from '../services/survey.service';

@Component({
    selector: 'mod-survey',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }
        `,
    ],
    template: `
        <div
            *ngIf="(loading$ | async).length"
            class="flex absolute inset-0 opacity-60 bg-base-100 z-10"
        >
            <div class="flex flex-col m-auto items-center">
                <mat-spinner [diameter]="32"></mat-spinner>
                <span>{{ loading$ | async }}</span>
            </div>
        </div>
        <survey-creator-topbar
            class="flex flex-1 items-center"
        ></survey-creator-topbar>
        <survey-builder></survey-builder>
    `,
})
export class ModSurveyComponent extends AsyncHandler implements OnInit {
    loading$ = this._survey.loading$.pipe(shareReplay(1));

    constructor(
        private _survey: SurveyService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscription(
            'route_param',
            this._route.queryParams.subscribe((params) => {
                const id = params?.survey_id || '';
                this._survey.loadSurvey(id);
            })
        );
    }
}
