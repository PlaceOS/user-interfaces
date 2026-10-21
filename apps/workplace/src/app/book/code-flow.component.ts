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
    BookingFormService,
    queryBookings,
    setBookingCheckedIn,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BookingType,
    CalendarEvent,
    currentUser,
    i18n,
    notifyError,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    checkinEventGuest,
    EventFormService,
    queryEvents,
} from '@placeos/events';
import { showSystem } from '@placeos/ts-client';
import { addMinutes, endOfDay, getUnixTime } from 'date-fns';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganisationService } from '@placeos/common';
import { scanForQRCode } from '@placeos/common/qr-code';

@Component({
    selector: 'book-code-flow',
    template: `
        @if (!loading()) {
            <div
                class="bg-neutral relative flex flex-1 items-center justify-center overflow-hidden"
            >
                <video
                    class="min-h-full min-w-full object-cover"
                    id="video"
                    #video
                ></video>
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
                >
                    <div
                        class="relative z-10 flex flex-col items-center justify-end"
                    >
                        <h2
                            class="mb-1 text-3xl uppercase subpixel-antialiased"
                        >
                            {{
                                (is_scanning()
                                    ? 'APP.WORKPLACE.CODE_SCAN_TITLE'
                                    : 'APP.WORKPLACE.CODE_ENTER_TITLE'
                                ) | translate
                            }}
                        </h2>
                        <span class="mb-4">
                            {{
                                (is_scanning()
                                    ? 'APP.WORKPLACE.CODE_SCAN_MSG'
                                    : 'APP.WORKPLACE.CODE_ENTER_MSG'
                                ) | translate
                            }}
                        </span>
                    </div>
                    <div class="flex items-center justify-center">
                        <div
                            box
                            class="m-8 flex h-64 w-64 items-center justify-center space-x-2 rounded-2xl p-8 transition-all"
                            [class.input]="!is_scanning()"
                        >
                            <label for="room-code" class="uppercase">
                                {{ 'COMMON.CODE' | translate }}
                            </label>
                            <input
                                matInput
                                id="room-code"
                                class="w-full border-none bg-none text-left text-3xl"
                                [(ngModel)]="room_code"
                                name="room-code"
                                placeholder="e.g. 12102910"
                                (keydown.enter)="submitCode()"
                            />
                            <button
                                icon
                                matRipple
                                type="button"
                                [attr.aria-label]="
                                    'COMMON.CHECK_IN' | translate
                                "
                                [disabled]="!room_code().trim()"
                                (click)="submitCode()"
                            >
                                <icon class="text-2xl">arrow_forward</icon>
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-base-100 bg-opacity-50 m-4 flex items-center space-x-2 rounded-sm p-2"
                    >
                        <button
                            matRipple
                            [class]="
                                'w-40 flex-1 border-none text-black ' +
                                (is_scanning()
                                    ? 'bg-base-100'
                                    : 'bg-opacity-50 hover:bg-base-100 bg-transparent')
                            "
                            (click)="is_scanning.set(true)"
                        >
                            {{ 'APP.WORKPLACE.CODE_SCAN_TITLE' | translate }}
                        </button>
                        <button
                            matRipple
                            [class]="
                                'w-40 flex-1 border-none text-black ' +
                                (!is_scanning()
                                    ? 'bg-base-100'
                                    : 'bg-opacity-50 hover:bg-base-100 bg-transparent')
                            "
                            (click)="is_scanning.set(false)"
                        >
                            {{ 'APP.WORKPLACE.CODE_ENTER_TITLE' | translate }}
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.WORKPLACE.CODE_CHECKING_IN' | translate }}</p>
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

            [box].input > button[icon] {
                display: flex;
            }

            [box] label {
                font-family: var(--heading-font);
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
        `,
    ],
    imports: [
        MatInputModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
    ],
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

    public readonly room_code = signal<string>('');
    /** Last scanned QR code that is not a PlaceOS link. Scans repeat many
     * times each second, so this stops a repeated error message. */
    private _last_invalid_qr = '';
    /** Canvas for QR code processing */
    private _canvas: HTMLCanvasElement;
    /** Canvas context */
    private _ctx: CanvasRenderingContext2D;
    /** Video element to emit camera feed */
    private readonly _video_el =
        viewChild<ElementRef<HTMLVideoElement>>('video');

    public ngOnDestroy() {
        this.unsub('scan_for_qr_code');
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
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
        // Deep links from a scanned QR code already carry the resource, so
        // there is no need to prompt for camera access.
        const params = this._route.snapshot.queryParamMap;
        if (params.has('asset_id') || params.has('space_id')) return;
        this.timeout('initialise', () => this._startScanning());
    }

    /** Check in to the booking for the resource code that the user typed */
    public submitCode() {
        const code = this.room_code().trim();
        if (!code || this.loading()) return;
        this._checkinBooking(code);
    }

    private handleQrCode(result: string) {
        if (this.loading()) return;
        const url = result;
        const hashindex = url.indexOf('/#/');
        if (hashindex <= 0) {
            if (url === this._last_invalid_qr) return;
            this._last_invalid_qr = url;
            notifyError(i18n('APP.WORKPLACE.CODE_QR_INVALID'));
            return;
        }
        // could just whole page redirect to url
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        const params = {};
        let match;
        while ((match = regex.exec(url))) {
            params[match[1]] = match[2];
        }
        this._router.navigate([url.split('/#')[1].split('?')[0]], {
            queryParams: params,
        });
    }

    private async _checkinBooking(
        asset_id: string,
        type: BookingType = 'desk',
    ) {
        this.loading.set(true);
        this.unsub('scan_for_qr_code');
        const current_bookings = await queryBookings({
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(addMinutes(Date.now(), 5)),
            type,
            email: currentUser().email,
        }).catch((_) => [] as Booking[]);
        const item = current_bookings.find((_) => _.asset_id === asset_id);
        if (item) {
            await setBookingCheckedIn(item, true).catch((_) => {
                notifyError(i18n('BOOKINGS.CHECK_IN_ERROR'));
                this.loading.set(false);
                throw _;
            });
            this._router.navigate(['/book', 'code', 'success']);
        } else {
            const later_bookings = await queryBookings({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(endOfDay(Date.now())),
                type,
                email: currentUser().email,
            }).catch((_) => [] as Booking[]);
            if (later_bookings.find((_) => _.asset_id === asset_id)) {
                this._router.navigate(['/book', 'code', 'error'], {
                    queryParams: { type: 'not_started', asset_id },
                });
                return;
            }
            // A current booking that is not for this resource means the user
            // scanned the wrong resource.
            if (current_bookings.length) {
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
        this.unsub('scan_for_qr_code');
        const bookings = await queryEvents({
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(Date.now() + 5 * 60 * 1000),
        }).catch((_) => []);
        const item = bookings.find((_) =>
            _.resources.find((s) => s.id === space_id || s.email === space_id),
        );
        if (item) {
            await checkinEventGuest(item.id, email, true).catch((_) => {
                notifyError(i18n('BOOKINGS.CHECK_IN_ERROR'));
                this.loading.set(false);
                throw _;
            });
            this._router.navigate(['/book', 'code', 'success']);
            this.loading.set(false);
        } else {
            let space: Awaited<ReturnType<typeof showSystem>>;
            try {
                space = await showSystem(space_id);
            } catch {
                this.loading.set(false);
                this._router.navigate(['/book', 'code', 'error'], {
                    queryParams: { type: 'space_error' },
                });
                return;
            }
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
            .then((stream) => {
                video_el.srcObject = stream;
                this.subscription(
                    'scan_for_qr_code',
                    scanForQRCode(video_el).subscribe({
                        next: (qr_code) =>
                            qr_code ? this.handleQrCode(qr_code) : null,
                        error: (error: unknown) =>
                            console.error('Error scanning QR code:', error),
                    }),
                );
            })
            .catch((e) => {
                console.error('Unable to fetch media devices!', e);
                this.is_scanning.set(false);
                notifyError(i18n('APP.WORKPLACE.CODE_CAMERA_ERROR'));
            });
    }
}
