import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
    CateringItem,
    CateringOrder,
    CateringStateService,
} from '@placeos/catering';
import { i18n, log, notifyError, notifySuccess } from '@placeos/common';
import { first, map } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { CalendarEvent, showEvent, updateEvent } from '@placeos/events';
import { updateBooking } from '@placeos/bookings';

@Component({
    selector: 'checkin-preferences',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
            *ngIf="!loading; else load_state"
        >
            <h3 class="text-xl mb-2 w-full">
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
            <div class="flex items-center justify-end w-full">
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
                class="absolute top-2 right-2"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </div>
        <ng-template #load_state>
            <div
                class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center justify-center w-[28rem] h-[20rem] p-8 space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{ 'APP.VISITOR_KIOSK.BEVERAGE_LOADING' | translate }}
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
})
export class CheckinPreferencesComponent implements OnInit {
    public loading = false;
    public beverage: CateringItem;
    public readonly event = this._checkin.event;

    public readonly menu = this._catering.menu.pipe(
        map((l) => {
            console.log(
                'Menu:',
                l.map((_) => _.tags),
            );
            return l.filter((_) =>
                (_.tags || []).find(
                    (_) =>
                        _.toLowerCase() === 'drink' ||
                        _.toLowerCase() === 'drinks' ||
                        _.toLowerCase() === 'beverage',
                ),
            );
        }),
    );

    constructor(
        private _router: Router,
        private _checkin: CheckinStateService,
        private _catering: CateringStateService,
    ) {}

    public ngOnInit(): void {
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
    }

    public async update() {
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
