import {
    ChangeDetectionStrategy,
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
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';

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
            @if (loading()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <div class="text">
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
                    {{ 'COMMON.CANCEL' | translate }}
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe, MatRippleModule, MatProgressSpinnerModule],
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
        this.stopCapture();
    }

    private async startCapture() {
        this.image_url.set(null);
        const stream = await navigator.mediaDevices?.getUserMedia(
            this.constraints,
        );
        this._video_el().nativeElement.srcObject = stream;
        this.loading.set(false);
    }

    private stopCapture() {
        const el = this._video_el().nativeElement;
        if (!el?.srcObject) return;
        const stream = el.srcObject as MediaStream;
        for (const track of stream.getVideoTracks()) {
            track.stop();
        }
    }

    public takePhoto() {
        this.loading.set(true);
        const canvas = this._canvas_el().nativeElement;
        const ctx = canvas.getContext('2d');
        const vid_el = this._video_el().nativeElement;
        const { videoWidth, videoHeight } = vid_el;

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
