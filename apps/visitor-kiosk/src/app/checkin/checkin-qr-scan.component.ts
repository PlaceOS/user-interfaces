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
    notifyError,
    settingSignal,
} from '@placeos/common';
import decodeQR from 'qr/decode.js';

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
                @if (scanner_ready()) {
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
    /** Canvas for QR code processing */
    private _canvas: HTMLCanvasElement;
    /** Canvas context */
    private _ctx: CanvasRenderingContext2D;
    private _qr_scan_interval: ReturnType<typeof setInterval> | null = null;

    public ngAfterViewInit() {
        this._checkin.metadata = '';
        this.setupQRReader();
    }

    public ngOnDestroy() {
        const _video_el = this._video_el();
        if (_video_el.nativeElement.srcObject) {
            (_video_el.nativeElement.srcObject as any)
                .getTracks()
                .forEach((track) => track?.stop());
        }
        this.stopQRReader();
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
            this.setupQRReader();
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

    private setupQRReader() {
        const _video_el = this._video_el()?.nativeElement;
        if (!_video_el) {
            this.timeout('setup_qr_reader', () => this.setupQRReader(), 50);
            return;
        }
        if (navigator.mediaDevices?.getUserMedia && !_video_el.srcObject) {
            this.scanner_ready.set(false);
            navigator.mediaDevices
                .getUserMedia({
                    video: {
                        facingMode: 'environment',
                        width: { ideal: 1280, max: 1920 },
                        height: { ideal: 720, max: 1080 },
                        frameRate: { ideal: 24, max: 30 },
                    },
                })
                .then((stream) => {
                    _video_el.srcObject = stream;
                    _video_el.onloadedmetadata = () =>
                        this.scanner_ready.set(true);
                    this.startQRScanner(_video_el);
                })
                .catch((e) => {
                    this.scanner_ready.set(false);
                    console.error('Unable to fetch media devices!', e);
                });
        } else if (_video_el.srcObject) {
            this.stopQRReader();
        }
    }

    private stopQRReader() {
        if (this._qr_scan_interval) clearInterval(this._qr_scan_interval);
        this._qr_scan_interval = null;
    }

    private startQRScanner(video_el: HTMLVideoElement) {
        this.stopQRReader();
        this._canvas = document.createElement('canvas');
        this._ctx = this._canvas.getContext('2d');
        if (!this._ctx) {
            console.error('Unable to get 2D context for QR scanning');
            return;
        }
        this._qr_scan_interval = setInterval(
            () => this.scanVideoFrame(video_el),
            120,
        );
        this.scanVideoFrame(video_el);
    }

    private scanVideoFrame(video_el: HTMLVideoElement) {
        if (!video_el || video_el.videoWidth === 0 || video_el.videoHeight === 0)
            return;
        const source_width = video_el.videoWidth;
        const source_height = video_el.videoHeight;
        const scale = Math.min(1, 720 / Math.max(source_width, source_height));
        const target_width = Math.max(1, Math.floor(source_width * scale));
        const target_height = Math.max(1, Math.floor(source_height * scale));
        if (
            this._canvas.width !== target_width ||
            this._canvas.height !== target_height
        ) {
            this._canvas.width = target_width;
            this._canvas.height = target_height;
        }
        this._ctx.drawImage(video_el, 0, 0, target_width, target_height);
        try {
            const image_data = this._ctx.getImageData(
                0,
                0,
                this._canvas.width,
                this._canvas.height,
            );
            const qr_code = decodeQR({
                height: image_data.height,
                width: image_data.width,
                data: image_data.data,
            });
            if (qr_code) this.checkQRCode(qr_code);
        } catch {
            // QR decode failures are expected when no code is visible.
        }
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate([`/${this.flow}`, 'error']);
    }
}
