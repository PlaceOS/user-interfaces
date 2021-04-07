import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserQRCodeReader } from '@zxing/library';
import { BaseClass } from '@placeos/common';

@Component({
    selector: 'qr-reader',
    template: `
        <header class="header">
            <a-topbar-header (menuChange)="menu.emit($event)"></a-topbar-header>
        </header>
        <div
            class="flex-1 overflow-hidden flex items-center justify-center bg-black relative"
        >
            <video
                class="min-w-full min-h-full object-cover"
                id="video"
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
                    class="m-4 p-2 flex items-center space-x-2 bg-white bg-opacity-50 rounded"
                >
                    <button
                        mat-button
                        [class]="
                            'flex-1 text-black border-none w-40 ' +
                            (is_scanning
                                ? 'bg-white'
                                : 'hover:bg-white bg-opacity-50')
                        "
                        (click)="is_scanning = true"
                    >
                        Scan Code
                    </button>
                    <button
                        mat-button
                        [class]="
                            'flex-1 text-black border-none w-40 ' +
                            (!is_scanning
                                ? 'bg-white'
                                : 'hover:bg-white bg-opacity-50')
                        "
                        (click)="is_scanning = false"
                    >
                        Enter Code
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100vh;
                display: flex;
                flex-direction: column;
            }

            h2 {
                font-family: 'Grotesk Condensed';
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
                font-family: 'Grotesk Bold';
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            button {
                background: transparent;
            }
        `,
    ],
})
export class QrReaderComponent extends BaseClass implements OnInit, OnDestroy {
    /** Whether to show the overlay menu */
    public show_menu: boolean;
    /** Boolean to toggle scan/code */
    public is_scanning: boolean = true;
    /** Room Code input value */
    public room_code: string;
    /** Menu event */
    @Output() public menu = new EventEmitter(false);
    /** Device ID of Camera */
    private device_id: string;
    /** Video element to emit camera feed */
    @ViewChild('video') private _video_el: ElementRef<HTMLVideoElement>;

    constructor(private _router: Router) {
        super();
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

    public ngOnInit(): void {
        const codeReader = new BrowserQRCodeReader();
        codeReader.listVideoInputDevices().then((videoInputDevices) => {
            this.device_id = videoInputDevices[0].deviceId;
            codeReader
                .decodeOnceFromVideoDevice(this.device_id, 'video')
                .then((result): any => {
                    const url = result['text'];
                    const hashindex = url.indexOf('/#/');
                    // could just whole page redirect to url
                    if (hashindex > 0) {
                        let regex = /[?&]([^=#]+)=([^&#]*)/g,
                            params = {},
                            match;
                        while ((match = regex.exec(url))) {
                            params[match[1]] = match[2];
                        }
                        this._router.navigate(
                            [url.split('/#')[1].split('?')[0]],
                            params
                        );
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        });
    }
}
