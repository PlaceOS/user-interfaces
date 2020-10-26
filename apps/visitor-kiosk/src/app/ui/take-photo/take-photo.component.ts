import {
    Component,
    OnInit,
    HostBinding,
    OnDestroy,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'a-take-photo',
    template: `
        <div name="camera" class="flex flex-col items-center justify-center rounded overflow-hidden relative">
            <mat-spinner diameter="32"></mat-spinner>
            <div class="text">Please wait...</div>
            <video
                id="video"
                #video
                autoplay
                width="360"
                height="400"
                class="absolute inset-0"
            ></video>
            <canvas
                id="canvas"
                #canvas
                class="absolute inset-0"
                width="360"
                height="400"
            ></canvas>
        </div>
        <div class="flex items-center justify-center mt-4 space-x-2">
            <button class="take-photo" *ngIf="!hasPhoto; else accept_state" mat-button (click)="takePhoto()">
                Take Photo
            </button>
        </div>
        <ng-template #accept_state>
            <button class="inverse" mat-button (click)="cancelPhoto()">
                Cancel
            </button>
            <button mat-button (click)="acceptPhoto()">
                Accept
            </button>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            [name="camera"] {
                width: 22.5rem;
                height: 25rem;
            }

            button {
                width: 8rem;
            }
        `,
    ],
})
export class TakePhotoComponent implements OnInit, OnDestroy {
    @Output() public photoAccepted = new EventEmitter();
    @HostBinding('class.has-photo') public hasPhoto = false;
    public video: any;
    public canvas: any;
    private canvasContext = null;

    private constraints = {
        audio: false,
        video: {
            width: { min: 360, max: 360 },
            height: { min: 400, max: 400 },
        },
    };

    public imgSrc = null;

    constructor() {}

    public ngOnInit() {
        setTimeout(() => this.getCanvasContext(), 500);
    }

    public ngOnDestroy() {
        this.stopCapture();
        this.video = null;
        this.canvasContext = null;
        this.canvas = null;
        this.imgSrc = null;
    }

    private startCapture() {
        this.imgSrc = null;
        console.log('TakePhotoComponent::startCapture');
        this.video = document.getElementById('video') as any;
        if (!this.video) {
            return setTimeout(() => this.startCapture(), 200);
        } else {
            navigator.mediaDevices
                .getUserMedia(this.constraints)
                .then((stream) => {
                    this.video.srcObject = stream;
                });
        }
    }

    private stopCapture() {
        console.log('TakePhotoComponent::stopCapture');
        if (this.video && this.video.srcObject) {
            this.video.srcObject
                .getVideoTracks()
                .forEach((track) => track.stop());
        }
    }

    private getCanvasContext() {
        console.log('TakePhotoComponent::getCanvasContext');
        this.canvas = document.getElementById('canvas') as any;
        if (!this.canvas) {
            return setTimeout(() => this.getCanvasContext(), 200);
        }
        this.canvasContext = this.canvas.getContext('2d');
        setTimeout(() => this.startCapture(), 200);
    }

    public takePhoto() {
        console.log('TakePhotoComponent::takePhoto');
        this.canvasContext.drawImage(
            this.video,
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
        this.hasPhoto = true;
        this.stopCapture();
    }

    public cancelPhoto() {
        console.log('TakePhotoComponent::cancelPhoto');
        this.canvasContext.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
        this.hasPhoto = false;
        this.startCapture();
    }

    public acceptPhoto() {
        try {
            this.imgSrc = this.canvas.toDataURL('image/jpeg', 0.75);
            this.photoAccepted.emit(this.imgSrc);
            console.log('TakePhotoComponent::acceptPhoto Success');
        } catch (err) {
            console.error(
                'TakePhotoComponent::acceptPhoto Error converting image',
                err
            );
            this.photoAccepted.emit(null);
            this.cancelPhoto();
        }
    }
}
