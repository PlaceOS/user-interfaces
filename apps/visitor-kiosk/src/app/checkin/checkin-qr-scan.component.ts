import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler, SettingsService, notifyError } from '@placeos/common';
import QrScanner from 'qr-scanner';

import { CheckinStateService } from './checkin-state.service';
import { take } from 'rxjs/operators';

@Component({
    selector: '[checkin-qr-scan]',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
            [class.hidden]="checking_code"
        >
            <p class="my-4">
                Please enter your email address or scan your QR code
            </p>
            <div class="flex items-center space-x-2 w-full">
                <mat-form-field
                    appearance="outline"
                    class="w-px flex-1 no-subscript"
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
                    <mat-error>Invalid email format</mat-error>
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email)">
                    Find Details
                </button>
            </div>
            <div
                class="relative rounded mt-4 bg-base-200 border border-base-200 overflow-hidden"
            >
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 flex flex-col items-center space-y-2 z-0"
                >
                    <app-icon class="text-6xl">videocam_off</app-icon>
                    <p class="text-center">
                        Camera feed loading or is not available
                    </p>
                </div>
                <video
                    #video
                    id="qr-stream"
                    playsinline
                    width="640"
                    height="480"
                    autoplay
                    class="object-cover relative z-10"
                ></video>
            </div>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </div>
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center p-16"
            [class.hidden]="!checking_code"
        >
            <mat-spinner diameter="32"></mat-spinner>
            <p class="my-4">Loading visitor information...</p>
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
})
export class CheckinQRScanComponent
    extends AsyncHandler
    implements AfterViewInit, OnDestroy
{
    public checking_code = false;
    /** Email address of the visitor */
    public email: string;
    /** Video element to emit camera feed */
    @ViewChild('video', { static: true })
    private _video_el: ElementRef<HTMLVideoElement>;
    /** QR Reader */
    private _reader;

    public get is_induction_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngAfterViewInit() {
        this.setupQRReader();
    }

    public ngOnDestroy() {
        if (this._video_el.nativeElement.srcObject) {
            (this._video_el.nativeElement.srcObject as any)
                .getTracks()
                .forEach((track) => track?.stop());
        }
        this._reader?.stop();
    }

    public async checkQRCode(raw_text: string) {
        if (this.checking_code) return;
        this.timeout('check_qr_code', async () => {
            this._reader?.stop();
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
            const event = await this._checkin.event.pipe(take(1)).toPromise();
            if (event.rejected) {
                this.handleError('Your meeting has been rejected.');
                this.checking_code = false;
                return;
            }
            if (this.is_induction_enabled && !event?.induction) {
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
                'Unable to find visitor or a meeting associated with the given email address.'
            );
            throw err;
        });
        const event = await this._checkin.event.pipe(take(1)).toPromise();
        if (
            !event?.induction &&
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
            if (!this._video_el?.nativeElement) return this.setupQRReader();
            if (navigator.mediaDevices?.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then(
                        (stream) =>
                            (this._video_el.nativeElement.srcObject = stream)
                    )
                    .catch((e) =>
                        console.error('Unable to fetch media devices!', e)
                    );
            }
            if (!QrScanner) return;
            this._reader = new QrScanner(this._video_el.nativeElement, (r) =>
                this.checkQRCode(r)
            );
            this._reader.start();
        });
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate(['/checkin', 'error']);
    }
}
