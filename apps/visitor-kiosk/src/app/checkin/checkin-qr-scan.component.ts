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
import {
    AsyncHandler,
    i18n,
    notifyError,
    settingSignal,
} from '@placeos/common';
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
import { PageHeadingDirective } from '../components/page-heading.directive';
import { CheckinStateService } from './checkin-state.service';

const SCAN_INTERVAL_MS = 100;
const CENTER_SCAN_INTERVAL_MS = 200;
const CENTER_SCAN_RATIO = 2 / 3;
const MAX_CENTER_SCAN_DIMENSION = 1080;
/** Size of the low resolution grid that detects camera motion */
const MOTION_GRID_COLUMNS = 32;
const MOTION_GRID_ROWS = 18;
/** Change in grid cell brightness (0-255) that counts as motion */
const MOTION_THRESHOLD = 12;
/** Time to keep decoding every scan after the last motion */
const MOTION_HOLD_MS = 2000;
/** Time between decodes while the camera image is still */
const STILL_DECODE_INTERVAL_MS = 500;

/** Brightness (0-255) of each pixel in RGBA image data */
function lumaGrid(rgba: ArrayLike<number>): Uint8Array {
    const grid = new Uint8Array(rgba.length / 4);
    for (let i = 0; i < grid.length; i++) {
        const offset = i * 4;
        grid[i] = (rgba[offset] + 2 * rgba[offset + 1] + rgba[offset + 2]) >> 2;
    }
    return grid;
}

/** Largest brightness change between two grids of the same size */
function gridChange(a: Uint8Array, b: Uint8Array): number {
    let change = 0;
    for (let i = 0; i < a.length; i++) {
        change = Math.max(change, Math.abs(a[i] - b[i]));
    }
    return change;
}

/**
 * Whether the scan loop decodes a frame. Decoding costs the most CPU, so it
 * runs every scan only while the camera image moves. It continues for a
 * short time after motion stops, then runs at a slow rate.
 */
function shouldDecode(
    now: number,
    last_decode: number,
    last_motion: number,
): boolean {
    return (
        now - last_motion < MOTION_HOLD_MS ||
        now - last_decode >= STILL_DECODE_INTERVAL_MS
    );
}

@Component({
    selector: '[checkin-qr-scan]',
    template: `
        <div
            class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            [class.hidden]="checking_code()"
        >
            <h1 pageHeading class="mt-2 text-xl">
                {{
                    (flow === 'checkout'
                        ? 'COMMON.CHECK_OUT'
                        : 'COMMON.CHECK_IN'
                    ) | translate
                }}
            </h1>
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
                        [ngModel]="email()"
                        (ngModelChange)="setEmail($event)"
                        [placeholder]="'FORM.EMAIL' | translate"
                        [attr.aria-label]="'FORM.EMAIL' | translate"
                        [attr.aria-invalid]="email_error()"
                        aria-describedby="email-error"
                        type="email"
                        autocomplete="off"
                        (keyup.enter)="checkEmail(email())"
                    />
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email())">
                    {{ 'APP.VISITOR_KIOSK.FIND_DETAILS' | translate }}
                </button>
            </div>
            <p
                id="email-error"
                class="text-error mt-1 w-full text-sm"
                aria-live="polite"
            >
                @if (email_error()) {
                    {{ 'APP.VISITOR_KIOSK.INVALID_EMAIL' | translate }}
                }
            </p>
            <div
                class="border-base-200 bg-base-200 relative mt-4 overflow-hidden rounded-sm border"
            >
                <div
                    class="absolute top-1/2 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2 opacity-30"
                    [attr.aria-hidden]="scanner_ready() || null"
                >
                    <icon class="text-6xl" aria-hidden="true"
                        >videocam_off</icon
                    >
                    <p class="text-center">
                        {{
                            (camera_error()
                                ? 'APP.VISITOR_KIOSK.CAMERA_OFF'
                                : 'APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE'
                            ) | translate
                        }}
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
                        <span class="status-dot" aria-hidden="true"></span>
                        {{ 'APP.VISITOR_KIOSK.READY_TO_SCAN' | translate }}
                    </div>
                }
            </div>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
                [attr.aria-label]="'COMMON.CLOSE' | translate"
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
        PageHeadingDirective,
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
    /** Whether the camera could not start */
    public readonly camera_error = signal(false);
    /** Email address of the visitor */
    public readonly email = signal('');
    /** Whether the visitor submitted an email address that is not valid */
    public readonly email_error = signal(false);
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
    private _motion_context: CanvasRenderingContext2D | null = null;
    /** Motion grid of the last decoded frame */
    private _motion_reference: Uint8Array | null = null;
    private _last_motion_time = -MOTION_HOLD_MS;
    private _last_decode_time = -STILL_DECODE_INTERVAL_MS;
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
        this._motion_context = null;
        this._motion_reference = null;
        const video_el = this._video_el()?.nativeElement;
        if (video_el) video_el.srcObject = null;
    }

    public async checkQRCode(raw_text: string) {
        if (this.checking_code()) return;
        this.stopQRReader();
        this.checking_code.set(true);
        const chunks = raw_text.split(',');
        let [visit_block, , event_id] = chunks;
        const visit_parts = visit_block.split(':');
        const visitor_email = (
            visit_parts.length > 1
                ? visit_parts[1]
                : visit_block.includes('@')
                  ? visit_block
                  : ''
        ).trim();
        if (!visitor_email && !event_id) {
            notifyError(i18n('APP.VISITOR_KIOSK.INVALID_QR_CODE'));
            void this.setupQRReader();
            this.checking_code.set(false);
            return;
        }
        if (!/^\d+$/.test(event_id)) event_id = undefined;
        try {
            await this._checkin.loadGuestAndEvent(visitor_email, event_id);
            if (!this._destroyed) this._routeForEvent();
        } catch (err) {
            if (this._destroyed) return;
            this.handleError(err instanceof Error ? err.message : err);
        } finally {
            if (!this._destroyed) {
                this.checking_code.set(false);
            }
        }
    }

    public setEmail(email: string) {
        this.email.set(email);
        this.email_error.set(false);
    }

    public async checkEmail(email: string) {
        if (this.checking_code()) return;
        if (!email || !email.includes('@') || email.length < 5) {
            this.email_error.set(true);
            return;
        }
        this.checking_code.set(true);
        try {
            await this._checkin.loadGuestAndEvent(email);
            if (!this._destroyed) this._routeForEvent();
        } catch (err) {
            if (this._destroyed) return;
            this.handleError(
                err instanceof Error
                    ? err.message
                    : i18n('APP.VISITOR_KIOSK.LOAD_ERROR'),
            );
        } finally {
            if (!this._destroyed) {
                this.checking_code.set(false);
            }
        }
    }

    /** Send the visitor to the next step for the loaded event, or show an error */
    private _routeForEvent() {
        const event = this._checkin.event();
        if (!event) {
            this.handleError(i18n('APP.VISITOR_KIOSK.LOAD_ERROR'));
            return;
        }
        if (event.rejected) {
            this.handleError(i18n('APP.VISITOR_KIOSK.MEETING_REJECTED'));
            return;
        }
        if (event.checked_out_at) {
            this.handleError(i18n('APP.VISITOR_KIOSK.MEETING_FINISHED'));
            return;
        }
        if (this.flow === 'checkout') {
            if (!event.checked_in_at) {
                this.handleError(i18n('APP.VISITOR_KIOSK.NOT_CHECKED_IN'));
                return;
            }
            this._router.navigate(['/checkout', 'confirm']);
            return;
        }
        if (event.checked_in_at) {
            this.handleError(i18n('APP.VISITOR_KIOSK.ALREADY_CHECKED_IN'));
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
            this.camera_error.set(true);
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
        this._motion_reference = null;
        this._cancel_scan_loop = frameLoop((timestamp) => {
            if (
                this._scan_pending ||
                this.checking_code() ||
                timestamp - this._last_scan_time < SCAN_INTERVAL_MS
            )
                return;
            this._last_scan_time = timestamp;
            if (!this.shouldDecodeFrame(video_el, timestamp)) return;
            this._scan_pending = true;
            void this.scanVideoFrame(camera, decoder, video_el, timestamp)
                .catch(() => undefined)
                .finally(() => (this._scan_pending = false));
        }, video_el);
    }

    /** Check the camera for motion, and whether to decode this frame */
    private shouldDecodeFrame(video_el: HTMLVideoElement, timestamp: number) {
        const grid = this.readMotionGrid(video_el);
        // Decode every scan when motion cannot be measured
        if (
            !grid ||
            !this._motion_reference ||
            gridChange(grid, this._motion_reference) >= MOTION_THRESHOLD
        ) {
            this._last_motion_time = timestamp;
        }
        if (
            !shouldDecode(
                timestamp,
                this._last_decode_time,
                this._last_motion_time,
            )
        ) {
            return false;
        }
        this._last_decode_time = timestamp;
        this._motion_reference = grid;
        return true;
    }

    /** Brightness grid of the current camera frame, or null when unavailable */
    private readMotionGrid(video_el: HTMLVideoElement): Uint8Array | null {
        if (!video_el.videoWidth || !video_el.videoHeight) return null;
        try {
            if (!this._motion_context) {
                const canvas = document.createElement('canvas');
                canvas.width = MOTION_GRID_COLUMNS;
                canvas.height = MOTION_GRID_ROWS;
                // Keep the canvas in CPU memory. The scan loop reads it
                // every scan, and a GPU canvas stalls on each read.
                this._motion_context = canvas.getContext('2d', {
                    alpha: false,
                    willReadFrequently: true,
                });
                if (!this._motion_context) return null;
                // Average the pixels in each cell to remove camera noise
                this._motion_context.imageSmoothingQuality = 'high';
            }
            this._motion_context.drawImage(
                video_el,
                0,
                0,
                MOTION_GRID_COLUMNS,
                MOTION_GRID_ROWS,
            );
            return lumaGrid(
                this._motion_context.getImageData(
                    0,
                    0,
                    MOTION_GRID_COLUMNS,
                    MOTION_GRID_ROWS,
                ).data,
            );
        } catch {
            return null;
        }
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
