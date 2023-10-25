import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Booking,
    BookingFormService,
    BookingType,
    checkinBooking,
    queryBookings,
} from '@placeos/bookings';
import { AsyncHandler, currentUser, notifyError } from '@placeos/common';
import {
    CalendarEvent,
    checkinEventGuest,
    EventFormService,
    queryEvents,
} from '@placeos/events';
import { showSystem } from '@placeos/ts-client';
import { addMinutes, endOfDay, getUnixTime } from 'date-fns';
import QrScanner from 'qr-scanner';

@Component({
    selector: 'book-code-flow',
    template: `
        <div
            class="flex-1 overflow-hidden flex items-center justify-center bg-neutral relative"
            *ngIf="!loading; else load_state"
        >
            <video
                class="min-w-full min-h-full object-cover"
                id="video"
                #video
            ></video>
            <div
                class="absolute text-white text-center inset-0 flex flex-col items-center justify-center"
            >
                <div
                    class="flex flex-col z-10 justify-end items-center relative"
                    *ngIf="is_scanning"
                >
                    <h2 class="text-3xl mb-1 uppercase subpixel-antialiased">
                        Scan QR Code
                    </h2>
                    <span class=" mb-4 ">
                        Scan the QR code outisde a PlaceOS room or space.
                    </span>
                </div>
                <div
                    class="flex flex-col z-10 justify-end items-center relative"
                    *ngIf="!is_scanning"
                >
                    <h2 class="text-3xl mb-1 uppercase subpixel-antialiased">
                        Enter Room ID
                    </h2>
                    <span class="mb-4">
                        Enter the room ID number outisde a PlaceOS room or
                        space.
                    </span>
                </div>
                <div class="flex items-center justify-center">
                    <div
                        box
                        class="rounded-2xl h-64 w-64 transition-all flex items-center justify-center p-8 m-8 space-x-2"
                        [class.input]="!is_scanning"
                    >
                        <span class="uppercase">Booking ID</span>
                        <input
                            matInput
                            class="border-none bg-none w-full text-3xl text-left"
                            [(ngModel)]="room_code"
                            name="booking-id"
                            placeholder="e.g. 12102910"
                        />
                    </div>
                </div>
                <div
                    class="m-4 p-2 flex items-center space-x-2 bg-base-100 bg-opacity-50 rounded"
                >
                    <button
                        matRipple
                        [class]="
                            'flex-1 text-black border-none w-40 ' +
                            (is_scanning
                                ? 'bg-base-100'
                                : 'bg-transparent hover:bg-base-100 hover:dark:bg-neutral-600 bg-opacity-50')
                        "
                        (click)="is_scanning = true"
                    >
                        Scan Code
                    </button>
                    <button
                        matRipple
                        [class]="
                            'flex-1 text-black border-none w-40 ' +
                            (!is_scanning
                                ? 'bg-base-100'
                                : 'bg-transparent hover:bg-base-100 hover:dark:bg-neutral-600 bg-opacity-50')
                        "
                        (click)="is_scanning = false"
                    >
                        Enter Code
                    </button>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Checking in booking...</p>
            </div>
        </ng-template>
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
})
export class BookCodeFlowComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    /** Menu event */
    @Output() public menu = new EventEmitter(false);
    /** Boolean to toggle scan/code */
    public is_scanning = true;
    /** Room Code input value */
    public room_code: string;
    public loading = false;

    private _qr_scanner;
    /** Video element to emit camera feed */
    @ViewChild('video')
    private _video_el: ElementRef<HTMLVideoElement>;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _event_form: EventFormService,
        private _booking_form: BookingFormService
    ) {
        super();
    }

    public ngOnDestroy() {
        if (this._video_el?.nativeElement?.srcObject) {
            (this._video_el.nativeElement.srcObject as any)
                .getTracks()
                .forEach((track) => track?.stop());
        }
        this._qr_scanner?.stop();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('asset_id'))
                    this._checkinBooking(params.get('asset_id'));
                if (params.has('space_id'))
                    this._checkinEvent(
                        params.get('space_id'),
                        params.get('email')
                    );
            })
        );
    }

    public ngAfterViewInit() {
        if (!navigator.mediaDevices?.getUserMedia || this.loading) return;
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => (this._video_el.nativeElement.srcObject = stream))
            .catch((e) => console.error('Unable to fetch media devices!', e));
        this._qr_scanner = new QrScanner(this._video_el.nativeElement, (r) =>
            this.handleQrCode(r)
        );
        this._qr_scanner.start();
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
        type: BookingType = 'desk'
    ) {
        this.loading = true;
        let bookings = await queryBookings({
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(addMinutes(Date.now(), 5)),
            type,
            email: currentUser().email,
        })
            .toPromise()
            .catch((_) => [] as Booking[]);
        const item = bookings.find((_) => _.asset_id === asset_id);
        if (item) {
            await checkinBooking(item.id, true)
                .toPromise()
                .catch((_) => {
                    notifyError(
                        `Unable to checkin booking with resource "${asset_id}"`
                    );
                    this.loading = false;
                    throw _;
                });
            this._router.navigate(['/book', 'code', 'success']);
        } else {
            bookings = await queryBookings({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(endOfDay(Date.now())),
                type,
            })
                .toPromise()
                .catch((_) => [] as Booking[]);
            let item = bookings.find((_) => _.asset_id === asset_id);
            if (item) {
                this._router.navigate(['/book', 'code', 'error'], {
                    queryParams: { type: 'not_started', asset_id },
                });
                return;
            }
            bookings = await queryBookings({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(addMinutes(Date.now(), 5)),
                type,
            })
                .toPromise()
                .catch((_) => [] as Booking[]);
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
            this._booking_form.newForm(new Booking({ asset_id, type }));
            this._booking_form.setOptions({ type });
        }
        this.loading = false;
    }

    private async _checkinEvent(space_id: string, email?: string) {
        if (!email) email = currentUser().email;
        this.loading = true;
        const bookings = await queryEvents({
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(Date.now() + 5 * 60 * 1000),
        })
            .toPromise()
            .catch((_) => []);
        const item = bookings.find((_) =>
            _.resources.find((s) => s.id === space_id || s.email === space_id)
        );
        if (item) {
            await checkinEventGuest(item.id, email, true)
                .toPromise()
                .catch((_) => {
                    notifyError(
                        `Unable to checkin event with resource "${space_id}"`
                    );
                    this.loading = false;
                    throw _;
                });
            this._router.navigate(['/book', 'code', 'success']);
            this.loading = false;
        } else {
            const space = await showSystem(space_id).toPromise();
            if (space) {
                this._event_form.newForm(new CalendarEvent({ system: space }));
            }
            this._router.navigate(['/book', 'meeting']);
        }
        this.loading = false;
    }
}
