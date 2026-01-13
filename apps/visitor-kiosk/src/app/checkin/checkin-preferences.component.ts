import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { setToken, showMetadata } from '@placeos/ts-client';
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

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { saveBooking, updateBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    CateringItem,
    CateringOrder,
    i18n,
    LinkedCalendarEvent,
    log,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { showEventMetadata, updateEventMetadata } from '@placeos/events';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-preferences',
    template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                @let has_beverage = !!(event | async)?.extension_data.beverage;
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
                            @for (item of menu | async; track item) {
                                <mat-option [value]="item">
                                    {{ item.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (has_beverage) {
                    <div
                        class="bg-warning text-warning-content rounded-sm px-2 py-1"
                    >
                        You have already selected a beverage.
                    </div>
                }
                <div class="flex w-full items-center justify-end">
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="has_beverage"
                        (click)="update()"
                    >
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
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="bg-base-100 relative flex h-80 w-md flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm p-8 shadow-sm"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{
                        (type() === 'menu'
                            ? 'APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING'
                            : 'APP.VISITOR_KIOSK.BEVERAGE_LOADING'
                        ) | translate
                    }}
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
})
export class CheckinPreferencesComponent
    extends AsyncHandler
    implements OnInit
{
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _checkin = inject(CheckinStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public loading = signal(false);
    public type = signal<'save' | 'menu'>('menu');
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

    public ngOnInit(): void {
        this.loading.set(true);
        this._org.limit_init = true;
        this.subscription(
            '',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('jwt')) setToken(params.get('jwt'));
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
            }),
        );
        this.type.set('menu');
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
        this.subscription(
            'menu',
            this.menu.subscribe((l) => {
                if (l.length) {
                    this.loading.set(false);
                    this.clearTimeout('no_menu');
                } else {
                    this.timeout(
                        'no_menu',
                        () => {
                            notifyError('No menu available');
                            this.next();
                        },
                        1000,
                    );
                }
            }),
        );
    }

    public async update() {
        this.type.set('save');
        if (!this.beverage) return this.next();
        this.loading.set(true);
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
        this.loading.set(false);
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
