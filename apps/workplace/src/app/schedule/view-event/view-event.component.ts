import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';

import { BaseClass } from '@user-interfaces/common';
import { ScheduleStateService } from '../schedule-state.service';

@Component({
    selector: 'schedule-view-event',
    template: `
        <div class="w-full h-12 flex items-center bg-white shadow px-2">
            <button mat-button class="clear" (click)="back()">
                <div class="flex items-center">
                    <app-icon class="mr-2">keyboard_backspace</app-icon>
                    Back
                </div>
            </button>
        </div>
        <main class="flex-1 h-1/2 w-full overflow-auto">
            <div *ngIf="(event | async) && !(loading | async); else load_state">
                <ng-container [ngSwitch]="type">
                    <schedule-booking-details *ngSwitchCase="'booking'">
                    </schedule-booking-details>
                    <schedule-event-details
                        *ngSwitchDefault
                    ></schedule-event-details>
                </ng-container>
            </div>
        </main>
        <ng-template #load_state>
            <div
                class="p-8 flex flex-col items-center justify-center h-full w-full"
            >
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>{{ (loading | async) || 'Loading event details...' }}</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 50%;
                flex: 1;
            }
        `,
    ],
})
export class ScheduleViewEventComponent extends BaseClass implements OnInit {
    public readonly loading = this._state.loading;
    public readonly event = this._state.active_item;

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setID = (id) => this._state.setItem(id);

    public type: string = '';

    constructor(
        private _state: ScheduleStateService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _location: Location
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            combineLatest([
                this._route.paramMap,
                this._route.queryParamMap,
            ]).subscribe(([param, queryParam]) => {
                if (param.has('id')) {
                    this.setID(param.get('id'));
                }
                if (queryParam.has('type')) this.type = queryParam.get('type');
                if (queryParam.has('calendar')) {
                    this.setOptions({ calendar: queryParam.get('calendar') });
                }
            })
        );
        this.timeout(
            'check_event',
            async () => {
                const event = await this._state.active_item.toPromise();
                if (!event)
                    this._router.navigate(['/schedule', 'listing'], {
                        queryParamsHandling: 'preserve',
                    });
            },
            2000
        );
    }

    public back() {
        this._location.back();
    }
}
