import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    CateringItem,
    CateringOrder,
    CateringStateService,
} from '@placeos/catering';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import { first, map } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { CalendarEvent, showEvent, updateEvent } from '@placeos/events';
import { updateBooking } from '@placeos/bookings';

@Component({
    selector: 'checkin-preferences',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
        >
            <h3 class="text-xl mb-2 w-full">
                {{ 'APP.VISITOR_KIOSK.BEVERAGE_MSG' | translate }}
            </h3>
            <div class="w-full">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        [(ngModel)]="beverage"
                        placeholder="Select beverage"
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
            <button btn matRipple class="w-32" (click)="update()">
                {{
                    (beverage
                        ? 'APP.VISITOR_KIOSK.SAVE'
                        : 'APP.VISITOR_KIOSK.CONTINUE'
                    ) | translate
                }}
            </button>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </div>
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class CheckinPreferencesComponent {
    public beverage: CateringItem;

    public readonly menu = this._catering.menu.pipe(
        map((l) => {
            return l.filter((_) =>
                _.tags.find(
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

    public async update() {
        if (!this.beverage) return this.next();
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
            const event = await showEvent(booking.linked_event.id)
                .toPromise()
                .catch(() => null);
            if (event) {
                const order =
                    (event.ext('catering') ? event.ext('catering')[0] : null) ||
                    new CateringOrder();
                await updateEvent(
                    booking.id,
                    new CalendarEvent({
                        ...event,
                        extension_data: {
                            ...event.extension_data,
                            catering: [
                                ...(event.extension_data.catering?.filter(
                                    (_) => _.id !== order.id,
                                ) || []),
                                new CateringOrder({
                                    ...order,
                                    items: [
                                        ...order.items,
                                        new CateringItem({
                                            ...this.beverage,
                                            quantity: 1,
                                        }),
                                    ],
                                }),
                            ],
                        },
                    }),
                ).toPromise();
            }
        }
        notifySuccess(i18n('APP.VISITOR_KIOSK.UPDATE_SUCCESS'));
        this.next();
    }

    public next() {
        this._router.navigate(['/welcome']);
    }
}
