import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'app-enrolment',
    template: `
        <div class="absolute inset-0 flex flex-col bg-[#424242]">
            <div class="w-full h-16 p-2 bg-secondary shadow z-20">
                <img [src]="logo.src" class="h-12" />
            </div>
            <div
                class="w-full h-1/2 flex-1 relative z-10 flex flex-col items-center overflow-auto"
            >
                <ng-container *ngIf="!(loading | async); else load_state">
                    <ng-container [ngSwitch]="view | async">
                        <enrolment-event-details
                            *ngSwitchCase="'event'"
                        ></enrolment-event-details>
                        <enrolment-guest-confirm
                            *ngSwitchCase="'guest'"
                        ></enrolment-guest-confirm>
                        <div
                            class="bg-base-100 rounded p-4 border border-base-200 shadow m-4"
                            *ngSwitchCase="'complete'"
                        >
                            <app-icon class="text-7xl text-success"
                                >done</app-icon
                            >
                            <p>
                                You are now checked in. See you
                                {{
                                    event ? 'at ' + event.display.time : 'soon'
                                }}
                            </p>
                        </div>
                        <enrolment-error *ngSwitchDefault></enrolment-error>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="p-16 flex flex-col items-center justify-center space-y-2 h-full w-full text-white"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class EnrolmentComponent extends AsyncHandler {
    public loading = this._state.loading;
    public view = this._state.view;

    public get logo() {
        return this._settings.get('app.logo_dark') || {};
    }

    constructor(
        private _state: EnrolmentStateService,
        private _settings: SettingsService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('view')) {
                    this._state.setView(params.get('view') as any);
                }
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('uid')) {
                    const token = params.get('uid')!;
                    this._state.handleUserToken(token);
                    this.clearTimeout('check');
                }
            })
        );
        this.timeout('check', () => this._state.setError('guest'), 5000);
    }
}
