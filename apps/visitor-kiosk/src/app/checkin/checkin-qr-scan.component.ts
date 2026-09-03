import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    computed,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler, notifyError, settingSignal } from '@placeos/common';
import { type QRCamera, QRCanvas, frameLoop, rearCamera } from 'qr/dom.js';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    IconComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { CheckinStateService } from './checkin-state.service';

const SCAN_INTERVAL_MS = 100;
const CENTER_SCAN_INTERVAL_MS = 200;
const CENTER_SCAN_RATIO = 2 / 3;
const MAX_CENTER_SCAN_DIMENSION = 1080;

@Component({
    selector: '[checkin-qr-scan]',
    template: `
        <div
            class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            [class.hidden]="checking_code()"
        >
            <h3 class="mt-2 text-xl">
                {{
                    (flow === 'checkout'
                        ? 'COMMON.CHECK_OUT'
                        : 'COMMON.CHECK_IN'
                    ) | translate
                }}
            </h3>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.QR_CODE_MSG' | translate }}
            </p>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-px flex-1"
                >
                    <input
                        keyboard
                        matInput
                        [(ngModel)]="email"
                        placeholder="Enter email..."
                        type="email"
                        autocomplete="off"
                        (blur)="checkEmail(email())"
                        (keyup.enter)="checkEmail(email())"
                    />
                    <mat-error>{{
                        'APP.VISITOR_KIOSK.INVALID_EMAIL' | translate
                    }}</mat-error>
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email())">
                    {{ 'APP.VISITOR_KIOSK.FIND_DETAILS' | translate }}
                </button>
            </div>
            <div
                class="border-base-200 bg-base-200 relative mt-4 overflow-hidden rounded-sm border"
            >
                <div
                    class="absolute top-1/2 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2 opacity-30"
                >
                    <icon class="text-6xl">videocam_off</icon>
                    <p class="text-center">
                        {{ 'APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE' | translate }}
                    </p>
                </div>
                <video
                    #video
                    id="qr-stream"
                    playsinline
                    width="640"
                    height="480"
                    autoplay
                    class="relative z-10 object-cover"
                ></video>
                <canvas #centerScanCanvas hidden></canvas>
                @if (scanner_ready() && !checking_code()) {
                    <div
                        aria-hidden="true"
                        class="qr-guide pointer-events-none absolute top-1/2 left-1/2 z-20 aspect-square h-2/3 -translate-x-1/2 -translate-y-1/2 rounded-xl"
                    >
                        <span
                            class="absolute top-0 left-0 h-10 w-10 rounded-tl-xl border-t-4 border-l-4 border-white"
                        ></span>
                        <span
                            class="absolute top-0 right-0 h-10 w-10 rounded-tr-xl border-t-4 border-r-4 border-white"
                        ></span>
                        <span
                            class="absolute bottom-0 left-0 h-10 w-10 rounded-bl-xl border-b-4 border-l-4 border-white"
                        ></span>
                        <span
                            class="absolute right-0 bottom-0 h-10 w-10 rounded-br-xl border-r-4 border-b-4 border-white"
                        ></span>
                    </div>
                    <div
                        class="bg-base-100/90 text-base-content absolute right-2 bottom-2 z-20 inline-flex items-center gap-2 rounded px-2 py-1 text-sm shadow"
                    >
                        <span class="status-dot"></span>
                        Ready to scan QR code
                    </div>
                }
            </div>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
        <div
            class="bg-base-100 relative flex flex-col items-center overflow-hidden rounded-sm p-16 shadow-sm"
            [class.hidden]="!checking_code()"
        >
            <mat-spinner diameter="32"></mat-spinner>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.LOADING_DETAILS' | translate }}
            </p>
        </div>
    `,
    styles: [
        `
            video {
                width: 34rem;
                height: 24rem;
            }

            .status-dot {
                background: #22c55e;
                border-radius: 9999px;
                width: 0.5rem;
                height: 0.5rem;
                display: inline-block;
            }

            .qr-guide {
                box-shadow: 0 0 0 100vmax rgb(0 0 0 / 0.14);
            }

            a {
                position: absolute;
            }
        `,
    ],
    imports: [
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        RouterModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        VirtualKeyboardComponent,
    ],
})
export class CheckinQRScanComponent
    extends AsyncHandler
    implements AfterViewInit, OnDestroy
{
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly flow =
        this._route.snapshot.data['flow'] === 'checkout'
            ? 'checkout'
            : 'checkin';

    public readonly checking_code = signal(false);
    public readonly scanner_ready = signal(false);
    /** Email address of the visitor */
    public readonly email = signal('');
    public readonly induction_enabled = settingSignal(
        'induction_enabled',
        false,
    );
    public readonly induction_details = settingSignal('induction_details');
    public readonly is_induction_enabled = computed(
        () => this.induction_enabled() && this.induction_details(),
    );
    public readonly induction_after_details = settingSignal(
        'induction_after_details',
    );
    /** Video element to emit camera feed */
    private readonly _video_el =
        viewChild<ElementRef<HTMLVideoElement>>('video');
    private readonly _center_scan_canvas =
        viewChild<ElementRef<HTMLCanvasElement>>('centerScanCanvas');
    private _camera: QRCamera | null = null;
    private _decoder: QRCanvas | null = null;
    private _center_decoder: QRCanvas | null = null;
    private _center_scan_context: CanvasRenderingContext2D | null = null;
    private _cancel_scan_loop: (() => void) | null = null;
    private _scan_pending = false;
    private _last_scan_time = -SCAN_INTERVAL_MS;
    private _last_center_scan_time = -CENTER_SCAN_INTERVAL_MS;
    private _destroyed = false;

    public ngAfterViewInit() {
        this._checkin.metadata = '';
        void this.setupQRReader();
    }

    public ngOnDestroy() {
        this._destroyed = true;
        this.stopQRReader();
        this._camera?.stop();
        this._camera = null;
        this._decoder?.clear();
        this._decoder = null;
        this._center_decoder?.clear();
        this._center_decoder = null;
        this._center_scan_context = null;
        const video_el = this._video_el()?.nativeElement;
        if (video_el) video_el.srcObject = null;
    }

    public async checkQRCode(raw_text: string) {
        if (this.checking_code()) return;
        this.stopQRReader();
        this.checking_code.set(true);
        const chunks = raw_text.split(',');
        let [visit_block, system_id, event_id, host_email] = chunks;
        const [_, visitor_email] = visit_block.split(':');
        if (!visitor_email && !event_id) {
            notifyError('Invalid QRCode');
            void this.setupQRReader();
            this.checking_code.set(false);
            return;
        }
        if (!/^\d+$/.test(event_id)) event_id = undefined;
        await this._checkin
            .loadGuestAndEvent(visitor_email, event_id)
            .catch((err) => {
                this.handleError(err.message || err);
                this.checking_code.set(false);
                throw err;
            });
        const event = this._checkin.event();
        if (!event) {
            this.handleError('Unable to find visitor booking.');
            this.checking_code.set(false);
            return;
        }
        if (event.rejected) {
            this.handleError('Your meeting has been rejected.');
            this.checking_code.set(false);
            return;
        }
        if (event.checked_out_at) {
            this.handleError('Your meeting has already finished.');
            this.checking_code.set(false);
            return;
        }
        if (this.flow === 'checkout') {
            if (!event.checked_in_at) {
                this.handleError('You have not checked in yet.');
                this.checking_code.set(false);
                return;
            }
            this._router.navigate(['/checkout', 'confirm']);
            return;
        }
        if (event.checked_in_at) {
            this.handleError('You are already checked in.');
            this.checking_code.set(false);
            return;
        }
        if (this.is_induction_enabled() && event?.induction !== 'accepted') {
            this._router.navigate(['/checkin', 'induction']);
        } else {
            this._router.navigate(['/checkin', 'details']);
        }
        this.checking_code.set(false);
    }

    public async checkEmail(email: string) {
        if (
            this.checking_code() ||
            !email ||
            !email.includes('@') ||
            email.length < 5
        )
            return;
        this.checking_code.set(true);
        try {
            await this._checkin.loadGuestAndEvent(email);
        } catch {
            this.handleError(
                'Unable to find visitor or a meeting associated with the given email address.',
            );
            this.checking_code.set(false);
            return;
        }
        const event = this._checkin.event();
        if (!event) {
            this.handleError('Unable to find visitor booking.');
            this.checking_code.set(false);
            return;
        }
        if (event.checked_out_at) {
            this.handleError('Your meeting has already finished.');
            this.checking_code.set(false);
            return;
        }
        if (this.flow === 'checkout') {
            if (!event.checked_in_at) {
                this.handleError('You have not checked in yet.');
                this.checking_code.set(false);
                return;
            }
            this.checking_code.set(false);
            this._router.navigate(['/checkout', 'confirm']);
            return;
        }
        if (event.checked_in_at) {
            this.handleError('You are already checked in.');
            this.checking_code.set(false);
            return;
        }
        if (
            event.induction !== 'accepted' &&
            this.is_induction_enabled() &&
            !this.induction_after_details()
        ) {
            this._router.navigate(['/checkin', 'induction']);
        } else {
            this._router.navigate(['/checkin', 'details']);
        }
        this.checking_code.set(false);
    }

    private async setupQRReader() {
        const _video_el = this._video_el()?.nativeElement;
        if (!_video_el || this._destroyed) return;
        if (this._camera && this._decoder && this._center_decoder) {
            this.startQRScanner(_video_el);
            return;
        }
        this.scanner_ready.set(false);
        let camera: QRCamera | null = null;
        let decoder: QRCanvas | null = null;
        let center_decoder: QRCanvas | null = null;
        try {
            const decoder_options = {
                async: true,
                cropToSquare: false,
            } as const;
            decoder = new QRCanvas({}, decoder_options);
            center_decoder = new QRCanvas({}, decoder_options);
            camera = await rearCamera(_video_el);
            if (this._destroyed) {
                camera.stop();
                decoder.clear();
                center_decoder.clear();
                return;
            }
            this._camera = camera;
            this._decoder = decoder;
            this._center_decoder = center_decoder;
            const set_ready = () => this.scanner_ready.set(true);
            if (_video_el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                set_ready();
            } else {
                _video_el.addEventListener('loadeddata', set_ready, {
                    once: true,
                });
            }
            this.startQRScanner(_video_el);
        } catch (error) {
            camera?.stop();
            decoder?.clear();
            center_decoder?.clear();
            this.scanner_ready.set(false);
            console.error('Unable to start QR scanner.', error);
        }
    }

    private stopQRReader() {
        this._cancel_scan_loop?.();
        this._cancel_scan_loop = null;
    }

    private startQRScanner(video_el: HTMLVideoElement) {
        this.stopQRReader();
        const camera = this._camera;
        const decoder = this._decoder;
        if (!camera || !decoder || !this._center_decoder || this._destroyed)
            return;
        this._last_scan_time = -SCAN_INTERVAL_MS;
        this._last_center_scan_time = -CENTER_SCAN_INTERVAL_MS;
        this._cancel_scan_loop = frameLoop((timestamp) => {
            if (
                this._scan_pending ||
                this.checking_code() ||
                timestamp - this._last_scan_time < SCAN_INTERVAL_MS
            )
                return;
            this._last_scan_time = timestamp;
            this._scan_pending = true;
            void this.scanVideoFrame(camera, decoder, video_el, timestamp)
                .catch(() => undefined)
                .finally(() => (this._scan_pending = false));
        }, video_el);
    }

    private async scanVideoFrame(
        camera: QRCamera,
        decoder: QRCanvas,
        video_el: HTMLVideoElement,
        timestamp: number,
    ) {
        let qr_code = await camera.readFrame(decoder, true);
        if (
            typeof qr_code !== 'string' &&
            timestamp - this._last_center_scan_time >= CENTER_SCAN_INTERVAL_MS
        ) {
            this._last_center_scan_time = timestamp;
            qr_code = await this.scanCenteredFrame(video_el);
        }
        if (
            typeof qr_code === 'string' &&
            qr_code &&
            camera === this._camera &&
            !this._destroyed
        ) {
            await this.checkQRCode(qr_code);
        }
    }

    private async scanCenteredFrame(video_el: HTMLVideoElement) {
        const canvas = this._center_scan_canvas()?.nativeElement;
        const decoder = this._center_decoder;
        const frame_size = Math.min(video_el.videoWidth, video_el.videoHeight);
        if (!canvas || !decoder || frame_size <= 0) return;
        const source_size = Math.max(
            1,
            Math.floor(frame_size * CENTER_SCAN_RATIO),
        );
        const target_size = Math.min(MAX_CENTER_SCAN_DIMENSION, frame_size);
        if (canvas.width !== target_size || canvas.height !== target_size) {
            canvas.width = target_size;
            canvas.height = target_size;
        }
        this._center_scan_context ??= canvas.getContext('2d', {
            alpha: false,
        });
        if (!this._center_scan_context) return;
        this._center_scan_context.imageSmoothingEnabled = true;
        this._center_scan_context.imageSmoothingQuality = 'high';
        const source_x = Math.floor((video_el.videoWidth - source_size) / 2);
        const source_y = Math.floor((video_el.videoHeight - source_size) / 2);
        this._center_scan_context.drawImage(
            video_el,
            source_x,
            source_y,
            source_size,
            source_size,
            0,
            0,
            target_size,
            target_size,
        );
        const qr_code = await decoder.drawImage(
            canvas,
            target_size,
            target_size,
        );
        return typeof qr_code === 'string' ? qr_code : undefined;
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate([`/${this.flow}`, 'error']);
    }
}
