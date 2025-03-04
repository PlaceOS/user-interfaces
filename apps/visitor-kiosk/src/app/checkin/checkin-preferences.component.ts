import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
    CateringItem,
    CateringOrder,
    CateringStateService,
} from '@placeos/catering';
import {
    AsyncHandler,
    i18n,
    log,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { first, map, tap } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { CalendarEvent, showEvent, updateEvent } from '@placeos/events';
import { updateBooking } from '@placeos/bookings';

@Component({
    selector: 'checkin-preferences',
    template: `
        <div
            class="relative flex w-[36rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            *ngIf="!loading; else load_state"
        >
            <h3 class="mb-2 w-full text-xl">
                {{ 'APP.VISITOR_KIOSK.BEVERAGE_MSG' | translate }}
            </h3>
            <div class="w-full">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        [(ngModel)]="beverage"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.BEVERAGE_SELECT' | translate
                        "
                    >
                        <mat-option
                            *ngFor="let item of menu | async"
                            [value]="item"
                        >
                            {{ item.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="flex w-full items-center justify-end">
                <button btn matRipple class="w-32" (click)="update()">
                    {{
                        (beverage
                            ? 'APP.VISITOR_KIOSK.SAVE'
                            : 'APP.VISITOR_KIOSK.CONTINUE'
                        ) | translate
                    }}
                </button>
            </div>
            <a
                icon
                matRipple
                class="absolute right-2 top-2"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </div>
        <ng-template #load_state>
            <div
                class="relative flex h-[20rem] w-[28rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 p-8 shadow"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{
                        (type === 'menu'
                            ? 'APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING'
                            : 'APP.VISITOR_KIOSK.BEVERAGE_LOADING'
                        ) | translate
                    }}
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    standalone: false,
})
export class CheckinPreferencesComponent
    extends AsyncHandler
    implements OnInit
{
    public loading = false;
    public type = 'menu';
    public beverage: CateringItem;
    public readonly event = this._checkin.event;

    public readonly menu = this._catering.menu.pipe(
        map((l) => {
            return l.filter((_) =>
                (_.tags || []).find(
                    (_) =>
                        _.toLowerCase() === 'drink' ||
                        _.toLowerCase() === 'drinks' ||
                        _.toLowerCase() === 'beverage',
                ),
            );
        }),
        tap(() => (this.loading = false)),
    );

    constructor(
        private _router: Router,
        private _checkin: CheckinStateService,
        private _catering: CateringStateService,
    ) {
        super();
    }

    public ngOnInit(): void {
        this.loading = true;
        this.type = 'menu';
        this.event.pipe(first()).subscribe((event) => {
            if (event) {
                if (!event.linked_event) {
                    log(
                        'CHECKIN',
                        'Visitor booking does not support catering.',
                        undefined,
                        'info',
                    );
                }
            } else this.next();
        });
        this.subscription('menu', this.menu.subscribe());
    }

    public async update() {
        this.type = 'save';
        if (!this.beverage) return this.next();
        this.loading = true;
        const booking = await this._checkin.event
            .pipe(first((_) => !!_))
            .toPromise();
        if (!booking) return notifyError(i18n('APP.VISITOR_KIOSK.LOAD_ERROR'));
        await updateBooking(booking.id, {
            ...booking,
            extension_data: {
                ...booking.extension_data,
                beverage: this.beverage,
            },
        });
        if (booking.linked_event) {
            const event = await showEvent(booking.linked_event.event_id)
                .toPromise()
                .catch(() => null);
            console.log('Event:', event);
            if (event) {
                const order_list = event.ext('catering') || [];
                let order =
                    order_list.find(
                        (_) => _.caterer == this.beverage.caterer,
                    ) || new CateringOrder({ caterer: this.beverage.caterer });
                if (
                    order.items.find(
                        (_) => _.custom_id === this.beverage.custom_id,
                    )
                ) {
                    const existing_item = order.items.find(
                        (_) => _.custom_id === this.beverage.custom_id,
                    );
                    existing_item.quantity += 1;
                } else {
                    order = new CateringOrder({
                        ...order,
                        items: [
                            ...order.items,
                            new CateringItem({
                                ...this.beverage,
                                quantity: 1,
                            }),
                        ],
                    });
                }
                await updateEvent(
                    event.id,
                    new CalendarEvent({
                        ...event,
                        extension_data: {
                            ...event.extension_data,
                            catering: [
                                ...(event.extension_data.catering?.filter(
                                    (_) => _.id !== order.id,
                                ) || []),
                                order,
                            ],
                        },
                    }),
                    { calendar: event.host },
                ).toPromise();
            }
        }
        notifySuccess(i18n('APP.VISITOR_KIOSK.BEVERAGE_SUCCESS'));
        this.loading = false;
        this.next();
    }

    public next() {
        this._router.navigate(['/welcome']);
    }
}
