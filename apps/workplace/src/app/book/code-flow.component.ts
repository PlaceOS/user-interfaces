import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Booking,
    BookingFormService,
    BookingType,
    checkinBooking,
    queryBookings,
} from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    firstTruthyValueFrom,
    notifyError,
} from '@placeos/common';
import {
    CalendarEvent,
    checkinEventGuest,
    EventFormService,
    queryEvents,
} from '@placeos/events';
import { showSystem } from '@placeos/ts-client';
import { addMinutes, endOfDay, getUnixTime } from 'date-fns';
import QrScanner from 'qr-scanner';

import { OrganisationService } from '@placeos/organisation';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'book-code-flow',
    template: `
        @if (!loading()) {
            <div
                class="relative flex flex-1 items-center justify-center overflow-hidden bg-neutral"
            >
                <video
                    class="min-h-full min-w-full object-cover"
                    id="video"
                    #video
                ></video>
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
                >
                    @if (is_scanning()) {
                        <div
                            class="relative z-10 flex flex-col items-center justify-end"
                        >
                            <h2
                                class="mb-1 text-3xl uppercase subpixel-antialiased"
                            >
                                Scan QR Code
                            </h2>
                            <span class="mb-4">
                                Scan the QR code outside a PlaceOS room or
                                space.
                            </span>
                        </div>
                    }
                    @if (!is_scanning()) {
                        <div
                            class="relative z-10 flex flex-col items-center justify-end"
                        >
                            <h2
                                class="mb-1 text-3xl uppercase subpixel-antialiased"
                            >
                                Enter Room ID
                            </h2>
                            <span class="mb-4">
                                Enter the room ID number outisde a PlaceOS room
                                or space.
                            </span>
                        </div>
                    }
                    <div class="flex items-center justify-center">
                        <div
                            box
                            class="m-8 flex h-64 w-64 items-center justify-center space-x-2 rounded-2xl p-8 transition-all"
                            [class.input]="!is_scanning()"
                        >
                            <span class="uppercase">Booking ID</span>
                            <input
                                matInput
                                class="w-full border-none bg-none text-left text-3xl"
                                [(ngModel)]="room_code"
                                name="booking-id"
                                placeholder="e.g. 12102910"
                            />
                        </div>
                    </div>
                    <div
                        class="m-4 flex items-center space-x-2 rounded bg-base-100 bg-opacity-50 p-2"
                    >
                        <button
                            matRipple
                            [class]="
                                'w-40 flex-1 border-none text-black ' +
                                (is_scanning()
                                    ? 'bg-base-100'
                                    : 'bg-transparent bg-opacity-50 hover:bg-base-100')
                            "
                            (click)="is_scanning.set(true)"
                        >
                            Scan Code
                        </button>
                        <button
                            matRipple
                            [class]="
                                'w-40 flex-1 border-none text-black ' +
                                (!is_scanning()
                                    ? 'bg-base-100'
                                    : 'bg-transparent bg-opacity-50 hover:bg-base-100')
                            "
                            (click)="is_scanning.set(false)"
                        >
                            Enter Code
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Checking in booking...</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
                width: 100%;
                height: 100vh;
                display: flex;
                flex-direction: column;
                background: #f0f0f0;
            }

            [box] {
                box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.5);
            }

            [box] > * {
                display: none;
            }

            [box].input {
                width: 32rem !important;
                max-width: calc(100% - 2rem) !important;
                padding: 1rem !important;
                height: 4rem !important;
                color: black !important;
                background: white;
                box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.8);
            }

            [box].input > * {
                display: initial;
            }

            [box] span {
                font-family: var(--heading-font);
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
        `,
    ],
    standalone: false,
})
export class BookCodeFlowComponent
    extends AsyncHandler
    implements OnInit, OnDestroy, AfterViewInit
{
    private readonly _router = inject(Router);
    private readonly _route = inject(ActivatedRoute);
    private readonly _event_form = inject(EventFormService);
    private readonly _booking_form = inject(BookingFormService);
    private readonly _org = inject(OrganisationService);

    public readonly menu = output();
    public readonly is_scanning = signal(false);
    public readonly loading = signal(false);

    public room_code: string;

    private _qr_scanner;
    /** Video element to emit camera feed */
    private readonly _video_el =
        viewChild<ElementRef<HTMLVideoElement>>('video');

    public ngOnDestroy() {
        this._stopScanning();
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('asset_id'))
                    this._checkinBooking(params.get('asset_id'));
                if (params.has('space_id'))
                    this._checkinEvent(
                        params.get('space_id'),
                        params.get('email'),
                    );
            }),
        );
    }

    public ngAfterViewInit() {
        this.timeout('initialise', () => this._startScanning());
    }

    private handleQrCode(result: string) {
        const url = result;
        const hashindex = url.indexOf('/#/');
        // could just whole page redirect to url
        if (hashindex > 0) {
            const regex = /[?&]([^=#]+)=([^&#]*)/g;
            const params = {};
            let match;
            while ((match = regex.exec(url))) {
                params[match[1]] = match[2];
            }
            this._router.navigate([url.split('/#')[1].split('?')[0]], params);
        }
    }

    private async _checkinBooking(
        asset_id: string,
        type: BookingType = 'desk',
    ) {
        this.loading.set(true);
        this._stopScanning();
        let bookings = await lastValueFrom(
            queryBookings({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(addMinutes(Date.now(), 5)),
                type,
                email: currentUser().email,
            }),
        ).catch((_) => [] as Booking[]);
        const item = bookings.find((_) => _.asset_id === asset_id);
        if (item) {
            await lastValueFrom(checkinBooking(item.id, true)).catch((_) => {
                notifyError(
                    `Unable to checkin booking with resource "${asset_id}"`,
                );
                this.loading.set(false);
                throw _;
            });
            this._router.navigate(['/book', 'code', 'success']);
        } else {
            bookings = await lastValueFrom(
                queryBookings({
                    period_start: getUnixTime(Date.now()),
                    period_end: getUnixTime(endOfDay(Date.now())),
                    type,
                }),
            ).catch((_) => [] as Booking[]);
            let item = bookings.find((_) => _.asset_id === asset_id);
            if (item) {
                this._router.navigate(['/book', 'code', 'error'], {
                    queryParams: { type: 'not_started', asset_id },
                });
                return;
            }
            bookings = await lastValueFrom(
                queryBookings({
                    period_start: getUnixTime(Date.now()),
                    period_end: getUnixTime(addMinutes(Date.now(), 5)),
                    type,
                }),
            ).catch((_) => [] as Booking[]);
            item = bookings.find((_) => _.asset_id === asset_id);
            if (item) {
                this._router.navigate(['/book', 'code', 'error'], {
                    queryParams: { type: 'wrong_resource', asset_id },
                });
                return;
            }
            this._router.navigate(['/book', 'code', 'error'], {
                queryParams: { type: 'no_booking', asset_id },
            });
            this._booking_form.newForm(type, new Booking({ asset_id, type }));
            this._booking_form.setOptions({ type });
        }
        this.loading.set(false);
    }

    private async _checkinEvent(space_id: string, email?: string) {
        if (!email) email = currentUser().email;
        this.loading.set(true);
        this._stopScanning();
        const bookings = await lastValueFrom(
            queryEvents({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(Date.now() + 5 * 60 * 1000),
            }),
        ).catch((_) => []);
        const item = bookings.find((_) =>
            _.resources.find((s) => s.id === space_id || s.email === space_id),
        );
        if (item) {
            await lastValueFrom(checkinEventGuest(item.id, email, true)).catch(
                (_) => {
                    notifyError(
                        `Unable to checkin event with resource "${space_id}"`,
                    );
                    this.loading.set(false);
                    throw _;
                },
            );
            this._router.navigate(['/book', 'code', 'success']);
            this.loading.set(false);
        } else {
            const space = await lastValueFrom(showSystem(space_id));
            if (space) {
                this._event_form.newForm(new CalendarEvent({ system: space }));
            }
            this._router.navigate(['/book', 'meeting']);
        }
        this.loading.set(false);
    }

    private _startScanning() {
        if (!navigator.mediaDevices?.getUserMedia || this.loading()) return;
        const video_el = this._video_el()?.nativeElement;
        if (!video_el)
            return this.timeout('retry_start_scan', () =>
                this._startScanning(),
            );
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => (video_el.srcObject = stream))
            .catch((e) => console.error('Unable to fetch media devices!', e));
        this._qr_scanner = new QrScanner(this._video_el().nativeElement, (r) =>
            this.handleQrCode(r),
        );
        this._qr_scanner.start();
    }

    private _stopScanning() {
        const video_el = this._video_el()?.nativeElement;
        if (video_el?.srcObject) {
            (video_el?.srcObject as MediaStream)
                .getTracks()
                .forEach((track) => track?.stop());
        }
        this._qr_scanner?.stop();
    }
}
