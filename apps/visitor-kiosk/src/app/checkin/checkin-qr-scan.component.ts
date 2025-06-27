import { AfterViewInit, Component, ElementRef, OnDestroy, inject, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    SettingsService,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import QrScanner from 'qr-scanner';

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
    private readonly _video_el = viewChild<ElementRef<HTMLVideoElement>>('video');
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
                    .then(
                        (stream) =>
                            (this._video_el().nativeElement.srcObject = stream),
                    )
                    .catch((e) =>
                        console.error('Unable to fetch media devices!', e),
                    );
            }
            if (!QrScanner) return;
            this._reader = new QrScanner(
                _video_el.nativeElement,
                (r) => this.checkQRCode(r.data),
                {},
            );
            this._reader.start();
        });
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate(['/checkin', 'error']);
    }
}
