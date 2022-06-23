import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import QrScanner from 'qr-scanner';

@Component({
    selector: 'book-code-flow',
    template: `
        <div
            class="flex-1 overflow-hidden flex items-center justify-center bg-black relative"
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
                    class="m-4 p-2 flex items-center space-x-2 bg-white bg-opacity-50 rounded"
                >
                    <button
                        mat-button
                        [class]="
                            'flex-1 text-black border-none w-40 ' +
                            (is_scanning
                                ? 'bg-white'
                                : 'bg-transparent hover:bg-white bg-opacity-50')
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
                                : 'bg-transparent hover:bg-white bg-opacity-50')
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
                position: relative;
                width: 100%;
                height: 100vh;
                display: flex;
                flex-direction: column;
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
export class BookCodeFlowComponent implements OnInit, OnDestroy {
    /** Boolean to toggle scan/code */
    public is_scanning = true;
    /** Room Code input value */
    public room_code: string;
    /** Menu event */
    @Output() public menu = new EventEmitter(false);
    /** Video element to emit camera feed */
    @ViewChild('video', { static: true })
    private _video_el: ElementRef<HTMLVideoElement>;

    private _qr_scanner;

    constructor(private _router: Router) {}

    public ngOnDestroy() {
        if (this._video_el.nativeElement.srcObject) {
            (this._video_el.nativeElement.srcObject as any)
                .getTracks()
                .forEach((track) => track?.stop());
        }
        this._qr_scanner?.stop();
    }

    public ngOnInit(): void {
        if (!navigator.mediaDevices?.getUserMedia) return;
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
}
