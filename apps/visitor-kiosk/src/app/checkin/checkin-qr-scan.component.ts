import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError } from '@user-interfaces/common';
import { BrowserQRCodeReader } from '@zxing/library';

import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-qr-scan]',
    template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center"
        >
            <p class="mt-6 mb-4">
                Please enter your email address or scan your QR code
            </p>
            <mat-form-field appearance="outline">
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
            <video
                #video
                class="rounded m-4 bg-gray-200 border border-gray-500"
                id="qr-stream"
                playsinline
                width="640"
                height="480"
                autoplay
            ></video>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">close</app-icon>
            </a>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }

            video {
                width: 36rem;
                height: 27rem;
            }

            mat-form-field {
                width: 36rem;
            }

            a {
                position: absolute;
            }
        `,
    ],
})
export class CheckinQRScanComponent {
    /** Email address of the visitor */
    public email: string;
    /** Video element to emit camera feed */
    @ViewChild('video') private _video_el: ElementRef<HTMLVideoElement>;
    /** QR Reader */
    private _reader: BrowserQRCodeReader;

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router
    ) {}

    public ngOnInit() {
        this._reader = new BrowserQRCodeReader();
        this.setupQRReader();
    }

    public ngOnDestroy() {
        if (this._video_el?.nativeElement.srcObject) {
            const track = (this._video_el.nativeElement
                .srcObject as any).getTracks()[0];
            if (track) {
                track.stop();
            }
        }
    }

    public async checkQRCode(raw_text: string) {
        const chunks = raw_text.split(',');
        if (chunks.length !== 2) {
            notifyError('Invalid QRCode');
            this.setupQRReader();
            return;
        } else {
            await this._checkin
                .loadGuestAndEvent(chunks[0], chunks[1])
                .catch((err) => {
                    this.handleError(err.message || err);
                    throw err;
                });
            this._router.navigate(['/checkin', 'details']);
        }
    }

    public async checkEmail(email: string) {
        if (!email || !email.includes('@') || email.length < 5) return;
        await this._checkin.loadGuestAndEvent(email).catch((err) => {
            this.handleError(err.message || err);
            throw err;
        });
        this._router.navigate(['/checkin', 'details']);
    }

    private setupQRReader() {
        this._reader
            .listVideoInputDevices()
            .then((videoInputDevices) => {
                const device = videoInputDevices[0].deviceId;
                this._reader
                    .decodeOnceFromVideoDevice(device, 'qr-stream')
                    .then((result) => this.checkQRCode(result.getText()))
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    }

    private handleError(message: string) {
        this._checkin.setError(message);
        this._router.navigate(['/checkin', 'error']);
    }
}
