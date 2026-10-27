import {
    Component,
    ElementRef,
    input,
    OnDestroy,
    OnInit,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler, withTimeout } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { AnnounceDirective } from './announce.directive';

/** Time to wait for the first camera frame before the camera counts as failed */
const FIRST_FRAME_TIMEOUT_MS = 10_000;

function stopTracks(stream: MediaStream) {
    for (const track of stream.getTracks()) {
        track.stop();
    }
}

@Component({
    selector: 'a-take-photo',
    template: `
        <div
            name="camera"
            class="border-base-300 bg-base-200 relative flex h-88 w-88 flex-col items-center justify-center overflow-hidden rounded-full border-2"
        >
            <video
                id="video"
                #video
                autoplay
                [class.opacity-0]="has_photo()"
                class="absolute top-1/2 left-1/2 mx-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            ></video>
            <canvas
                id="canvas"
                #canvas
                width="400"
                height="400"
                class="absolute top-1/2 left-1/2 mx-auto h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                [class.opacity-0]="!has_photo()"
            ></canvas>
            @if (camera_error()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-8 text-center opacity-60"
                >
                    <icon class="text-6xl" aria-hidden="true"
                        >videocam_off</icon
                    >
                    <p announce>
                        {{ 'APP.VISITOR_KIOSK.CAMERA_OFF' | translate }}
                    </p>
                </div>
            } @else if (loading()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <div class="text" announce>
                        {{ 'APP.VISITOR_KIOSK.PLEASE_WAIT' | translate }}
                    </div>
                </div>
            }
        </div>
        <div class="mt-4 flex w-full items-center justify-center space-x-2">
            @if (!has_photo()) {
                <button
                    class="inverse flex-1"
                    btn
                    matRipple
                    (click)="back.emit()"
                >
                    {{ back_text() || ('COMMON.BACK' | translate) }}
                </button>
                <button
                    class="take-photo flex-1"
                    btn
                    matRipple
                    [disabled]="loading() || camera_error()"
                    (click)="takePhoto()"
                >
                    {{ 'APP.VISITOR_KIOSK.TAKE_PHOTO_ACTION' | translate }}
                </button>
            } @else {
                <button
                    class="inverse flex-1"
                    btn
                    matRipple
                    (click)="cancelPhoto()"
                >
                    {{ 'APP.VISITOR_KIOSK.RETAKE' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="acceptPhoto()">
                    {{ 'COMMON.ACCEPT' | translate }}
                </button>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            [name='camera'] {
                width: 22.5rem;
                height: 25rem;
            }

            button {
                width: 8rem;
            }
        `,
    ],
    imports: [
        AnnounceDirective,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
    ],
})
export class TakePhotoComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public readonly back_text = input('');
    public readonly captured = output<string | null>();
    public readonly back = output();
    public has_photo = signal(false);
    public loading = signal(false);
    /** Whether the camera could not start */
    public readonly camera_error = signal(false);
    private _destroyed = false;

    private readonly _video_el =
        viewChild<ElementRef<HTMLVideoElement>>('video');
    private readonly _canvas_el =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');

    private readonly constraints = {
        audio: false,
        video: {
            aspectRatio: { ideal: 1, exact: 1 },
        },
    };

    public image_url = signal<string | null>(null);

    public ngOnInit() {
        this.loading.set(true);
        this.startCapture();
    }

    public ngOnDestroy() {
        this._destroyed = true;
        this.stopCapture();
    }

    private async startCapture() {
        this.image_url.set(null);
        this.camera_error.set(false);
        try {
            const media = navigator.mediaDevices;
            if (!media) throw new Error('Camera API is not available.');
            const stream = await media.getUserMedia(this.constraints);
            // The visitor can leave the page before the camera starts
            if (this._destroyed) return stopTracks(stream);
            const video = this._video_el().nativeElement;
            video.srcObject = stream;
            // Keep capture disabled until the camera shows a frame
            if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
                await withTimeout(
                    new Promise((resolve) =>
                        video.addEventListener('loadeddata', resolve, {
                            once: true,
                        }),
                    ),
                    FIRST_FRAME_TIMEOUT_MS,
                    'Camera did not show a frame.',
                );
            }
        } catch (error) {
            console.error('Unable to start camera.', error);
            this.stopCapture();
            if (!this._destroyed) this.camera_error.set(true);
        } finally {
            if (!this._destroyed) this.loading.set(false);
        }
    }

    private stopCapture() {
        const el = this._video_el().nativeElement;
        if (!el?.srcObject) return;
        stopTracks(el.srcObject as MediaStream);
    }

    public takePhoto() {
        const vid_el = this._video_el().nativeElement;
        // No camera frame yet. Do not capture a blank photo.
        if (vid_el.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
        const { videoWidth, videoHeight } = vid_el;
        this.loading.set(true);
        const canvas = this._canvas_el().nativeElement;
        const ctx = canvas.getContext('2d');

        const cw = canvas.width;
        const ch = canvas.height;

        const min_dim = Math.min(videoWidth, videoHeight);
        const sw = Math.min(min_dim, canvas.width);
        const sh = Math.min(min_dim, canvas.height);

        const sx = (videoWidth - sw) / 2;
        const sy = (videoHeight - sh) / 2;
        ctx.drawImage(vid_el, sx, sy, sw, sh, 0, 0, cw, ch);
        this.has_photo.set(true);
        this.stopCapture();
        this.loading.set(false);
    }

    public cancelPhoto() {
        this.loading.set(true);
        const canvas = this._canvas_el().nativeElement;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.has_photo.set(false);
        this.startCapture();
    }

    public acceptPhoto() {
        const canvas = this._canvas_el().nativeElement;
        try {
            this.image_url.set(canvas.toDataURL('image/jpeg', 0.75));
            this.captured.emit(this.image_url());
        } catch (err) {
            console.error(
                'Failed to convert canvas blob into JPEG image. Error: ',
                err,
            );
            this.captured.emit(null);
            this.cancelPhoto();
        }
    }
}
