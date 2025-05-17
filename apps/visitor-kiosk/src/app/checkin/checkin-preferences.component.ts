import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    i18n,
    log,
    nextValueFrom,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { setToken, showMetadata } from '@placeos/ts-client';
import {
    Booking,
    LinkedCalendarEvent,
} from 'libs/bookings/src/lib/booking.class';
import { saveBooking, updateBooking } from 'libs/bookings/src/lib/bookings.fn';
import { CateringItem } from 'libs/catering/src/lib/catering-item.class';
import { CateringOrder } from 'libs/catering/src/lib/catering-order.class';
import {
    showEventMetadata,
    updateEventMetadata,
} from 'libs/events/src/lib/events.fn';
import { lastValueFrom, of } from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

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
                <icon>close</icon>
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

    public readonly menu = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap((bld) =>
            showMetadata(bld.id, 'catering').pipe(
                catchError(() => of({ details: [] })),
                map(({ details }) => (details instanceof Array ? details : [])),
                map((menu) => menu.map((i) => new CateringItem(i))),
            ),
        ),
        map((menu) =>
            menu.filter((_) =>
                (_.tags || []).find(
                    (_) =>
                        _.toLowerCase() === 'drink' ||
                        _.toLowerCase() === 'drinks' ||
                        _.toLowerCase() === 'beverage',
                ),
            ),
        ),
        startWith([]),
        shareReplay(1),
    );

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _checkin: CheckinStateService,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public ngOnInit(): void {
        this.loading = true;
        this.subscription(
            '',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('email')) {
                    await this._checkin
                        .loadGuestAndEvent(
                            params.get('email'),
                            params.get('event_id'),
                        )
                        .catch((err) => {
                            this.handleError(
                                'Unable to find visitor or a meeting associated with the given email address.',
                            );
                            throw err;
                        });
                }
                if (params.has('jwt')) setToken(params.get('jwt'));
            }),
        );
        this.type = 'menu';
        this.timeout(
            'event',
            () => {
                this.event.pipe(first()).subscribe((event) => {
                    if (!event) return this.next();
                    if (!event.linked_event) {
                        log(
                            'CHECKIN',
                            'Visitor booking does not support catering.',
                            undefined,
                            'info',
                        );
                    }
                });
            },
            1000,
        );
        this.subscription('menu', this.menu.subscribe());
    }

    public async update() {
        this.type = 'save';
        if (!this.beverage) return this.next();
        this.loading = true;
        const booking = await nextValueFrom(this._checkin.event);
        if (!booking) return notifyError(i18n('APP.VISITOR_KIOSK.LOAD_ERROR'));
        await lastValueFrom(
            updateBooking(booking.id, {
                ...booking.toJSON(),
                extension_data: {
                    ...booking.extension_data,
                    beverage: this.beverage,
                },
            }),
        );
        if (booking.linked_event) {
            const event = booking.linked_event;
            const metadata = await lastValueFrom(
                showEventMetadata(event.event_id, event.system_id),
            );
            const order_list = metadata.catering || [];
            let order =
                order_list.find((_) => _.caterer == this.beverage.caterer) ||
                new CateringOrder({ caterer: this.beverage.caterer });
            order = await this._createCateringOrder(booking, order, event);
            await lastValueFrom(
                updateEventMetadata(
                    event.event_id,
                    event.system_id,
                    {
                        ...metadata,
                        catering: [
                            ...(metadata.catering?.filter(
                                (_) => _.id !== order.id,
                            ) || []),
                            order,
                        ],
                    },
                    { ical_uid: event.ical_uid },
                ),
            );
        } else {
            const standalone_location = this._settings.get(
                'app.standalone_visitor_location',
            );
            this._createCateringOrder(
                booking,
                booking.linked_bookings[0]
                    ? booking.linked_bookings[0].extension_data.details
                    : undefined,
                undefined,
                standalone_location,
            );
        }
        notifySuccess(i18n('APP.VISITOR_KIOSK.BEVERAGE_SUCCESS'));
        this.loading = false;
        this.next();
    }

    public next() {
        this._router.navigate(['/welcome']);
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate(['/checkin', 'error']);
    }

    private async _createCateringOrder(
        parent: Booking,
        old_order: CateringOrder = new CateringOrder(),
        event?: LinkedCalendarEvent,
        location?: string,
    ) {
        const existing_item = old_order.items.find(
            (_) => _.custom_id === this.beverage.custom_id,
        );
        if (existing_item) (existing_item as any).quantity += 1;
        const order = new CateringOrder({
            ...old_order,
            caterer: this.beverage.caterer,
            items: existing_item
                ? [...old_order.items]
                : [
                      ...old_order.items,
                      new CateringItem({
                          ...this.beverage,
                          quantity: 1,
                      }),
                  ],
        });
        const booking = new Booking({
            type: 'catering-order',
            booking_type: 'catering-order',
            date: parent.date,
            duration: parent.duration,
            description: parent.title,
            user_id: parent.user_id,
            user_email: parent.user_email,
            booked_by_email: parent.asset_id,
            asset_id: order.id,
            title: `Catering order for ${parent.user_name}`,
            attendees: [],
            approved: true,
            extension_data: {
                parent_id: parent.id,
                details: order,
                location: location || parent.location,
            },
            parent_id: parent.id,
            zones: parent.zones,
            location: location || parent.location,
        });
        const query: Record<string, any> = { booking_id: booking.id };
        if (event) {
            query.event_id = event.id;
            query.ical_uid = event.ical_uid;
        }
        await lastValueFrom(saveBooking(booking, query));
        return order;
    }
}
