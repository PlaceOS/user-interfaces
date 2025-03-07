import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';

const VALID_TYPES = ['not_started', 'wrong_resource', 'other'];

@Component({
    selector: 'code-flow-success',
    template: `
        <div class="absolute inset-0 z-50 flex flex-col bg-base-100">
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{ 'APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED' | translate }}
                </h2>
                <div class="py-4">
                    <img src="assets/icons/not-found.svg" class="h-64" />
                </div>
                <p class="max-w-[32rem] text-center" [ngSwitch]="type">
                    <ng-container *ngSwitchCase="'not_started'">
                        Booking has not started yet. Please try again once the
                        booking has commenced.
                    </ng-container>
                    <ng-container *ngSwitchCase="'wrong_resource'">
                        You have booking with a difference resource.
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                        You do not have a booking. Would you like to book the
                        set resource?
                    </ng-container>
                </p>
            </main>
            <footer
                class="mt-4 flex w-full items-center justify-center space-x-2 border-t border-base-200 p-2"
            >
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/book', 'code']"
                    [queryParams]="{ asset_id: asset_id }"
                    *ngIf="type === 'not_started'"
                >
                    {{ 'APP.WORKPLACE.TRY_AGAIN' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/book', 'new-desk']"
                    [queryParams]="{ asset_id: asset_id }"
                    *ngIf="type === 'no_booking'"
                >
                    {{ 'APP.WORKPLACE.BOOK' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="inverse w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class CodeFlowErrorComponent extends AsyncHandler {
    public type = 'other';
    public asset = null;
    public asset_id = '';

    constructor(
        private _route: ActivatedRoute,
        private _state: BookingFormService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                this.type = params.get('type') as any;
                this.asset_id = params.get('asset_id') as any;
            }),
        );
    }
}
