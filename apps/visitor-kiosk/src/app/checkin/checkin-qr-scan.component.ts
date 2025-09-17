import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    inject,
    viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    SettingsService,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import decodeQR from 'qr/decode.js';

import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-qr-scan]',
    template: `
        <div
            class="relative flex w-[36rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            [class.hidden]="checking_code"
        >
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.QR_CODE_MSG' | translate }}
            </p>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-px flex-1"
                >
                    <input
                        matInput
                        [(ngModel)]="email"
                        placeholder="Enter email..."
                        type="email"
                        autocomplete="off"
                        (blur)="checkEmail(email)"
                        (keyup.enter)="checkEmail(email)"
                    />
                    <mat-error>{{
                        'APP.VISITOR_KIOSK.INVALID_EMAIL' | translate
                    }}</mat-error>
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email)">
                    {{ 'APP.VISITOR_KIOSK.FIND_DETAILS' | translate }}
                </button>
            </div>
            <div
                class="relative mt-4 overflow-hidden rounded border border-base-200 bg-base-200"
            >
                <div
                    class="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2 opacity-30"
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
            </div>
            <a
                icon
                matRipple
                class="absolute right-0 top-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
        <div
            class="relative flex flex-col items-center overflow-hidden rounded bg-base-100 p-16 shadow"
            [class.hidden]="!checking_code"
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

            a {
                position: absolute;
            }
        `,
    ],
    standalone: false,
})
export class CheckinQRScanComponent
    extends AsyncHandler
    implements AfterViewInit, OnDestroy
{
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _settings = inject(SettingsService);

    public checking_code = false;
    /** Email address of the visitor */
    public email: string;
    /** Video element to emit camera feed */
    private readonly _video_el =
        viewChild<ElementRef<HTMLVideoElement>>('video');
    /** Canvas for QR code processing */
    private _canvas: HTMLCanvasElement;
    /** Canvas context */
    private _ctx: CanvasRenderingContext2D;

    public get is_induction_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

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
        this._stopQRReader();
    }

    public async checkQRCode(raw_text: string) {
        if (this.checking_code) return;
        this.timeout('check_qr_code', async () => {
            this._stopQRReader();
            this.checking_code = true;
            const chunks = raw_text.split(',');
            let [visit_block, system_id, event_id, host_email] = chunks;
            const [_, visitor_email] = visit_block.split(':');
            if (!visitor_email && !event_id) {
                notifyError('Invalid QRCode');
                this.setupQRReader();
                this.checking_code = false;
                return;
            }
            if (!/^\d+$/.test(event_id)) event_id = undefined;
            await this._checkin
                .loadGuestAndEvent(visitor_email, event_id)
                .catch((err) => {
                    this.handleError(err.message || err);
                    this.checking_code = false;
                    throw err;
                });
            const event = await nextValueFrom(this._checkin.event);
            if (event.rejected) {
                this.handleError('Your meeting has been rejected.');
                this.checking_code = false;
                return;
            }
            if (event.checked_in_at) {
                this._router.navigate(['/checkin', 'checkout']);
                return;
            }
            if (event.checked_out_at) {
                this.handleError('Your meeting has already finished.');
                this.checking_code = false;
                return;
            }
            if (this.is_induction_enabled && event?.induction !== 'accepted') {
                this._router.navigate(['/checkin', 'induction']);
            } else {
                this._router.navigate(['/checkin', 'details']);
            }
            this.checking_code = false;
        });
    }

    public async checkEmail(email: string) {
        if (!email || !email.includes('@') || email.length < 5) return;
        await this._checkin.loadGuestAndEvent(email).catch((err) => {
            this.handleError(
                'Unable to find visitor or a meeting associated with the given email address.',
            );
            throw err;
        });
        const event = await nextValueFrom(this._checkin.event);
        if (event.checked_out_at) {
            this.handleError('Your meeting has already finished.');
            this.checking_code = false;
            return;
        }
        if (event.checked_in_at) {
            this._router.navigate(['/checkin', 'checkout']);
            return;
        }
        if (
            event.induction !== 'accepted' &&
            this.is_induction_enabled &&
            !this.induction_after_details
        ) {
            this._router.navigate(['/checkin', 'induction']);
        } else {
            this._router.navigate(['/checkin', 'details']);
        }
    }

    private setupQRReader() {
        this.timeout('setup_qr_reader', () => {
            const _video_el = this._video_el();
            if (!_video_el?.nativeElement) return this.setupQRReader();
            if (
                navigator.mediaDevices?.getUserMedia &&
                !_video_el.nativeElement.srcObject
            ) {
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then((stream) => {
                        this._video_el().nativeElement.srcObject = stream;
                        this._startQRScanning();
                    })
                    .catch((e) =>
                        console.error('Unable to fetch media devices!', e),
                    );
            } else if (_video_el.nativeElement.srcObject) {
                this._startQRScanning();
            }
        });
    }

    private _startQRScanning() {
        const _video_el = this._video_el();
        if (!_video_el?.nativeElement) return;

        // Create canvas for image processing
        if (!this._canvas) {
            this._canvas = document.createElement('canvas');
            const ctx = this._canvas.getContext('2d');
            if (!ctx) {
                console.error('Unable to get 2D context for QR scanning');
                return;
            }
            this._ctx = ctx;
        }

        // Start scanning loop
        this.interval('scan_frame', () => this._scanFrame());
    }

    private _scanFrame() {
        const _video_el = this._video_el();
        if (!_video_el?.nativeElement || this.checking_code) return;

        const video = _video_el.nativeElement;
        if (video.videoWidth === 0 || video.videoHeight === 0) return;

        // Set canvas size to video size
        this._canvas.width = video.videoWidth;
        this._canvas.height = video.videoHeight;

        // Draw current video frame to canvas
        this._ctx.drawImage(video, 0, 0);

        try {
            // Get image data
            const imageData = this._ctx.getImageData(
                0,
                0,
                this._canvas.width,
                this._canvas.height,
            );

            // Create image object for qr library
            const image = {
                height: imageData.height,
                width: imageData.width,
                data: imageData.data,
            };

            // Try to decode QR code
            const result = decodeQR(image);
            if (result) this.checkQRCode(result);
        } catch (error) {
            // Ignore decoding errors - they're expected when no QR code is present
        }
    }

    private _stopQRReader() {
        this.clearInterval('scan_frame');
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate(['/checkin', 'error']);
    }
}
