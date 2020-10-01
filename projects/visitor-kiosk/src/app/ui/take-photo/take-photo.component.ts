import {
    Component,
    OnInit,
    ViewChild,
    HostBinding,
    OnDestroy,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'a-take-photo',
    templateUrl: './take-photo.component.html',
    styleUrls: ['./take-photo.component.scss']
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
            width: { min: 200, max: 200 },
            height: { min: 355, max: 355 }
        }
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
            navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
                this.video.srcObject = stream;
            });
        }
    }

    private stopCapture() {
        console.log('TakePhotoComponent::stopCapture');
        if (this.video && this.video.srcObject) {
            this.video.srcObject.getVideoTracks().forEach(track => track.stop());
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
        this.canvasContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        this.hasPhoto = true;
        this.stopCapture();
    }

    public cancelPhoto() {
        console.log('TakePhotoComponent::cancelPhoto');
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.hasPhoto = false;
        this.startCapture();
    }

    public acceptPhoto() {
        try {
            this.imgSrc = this.canvas.toDataURL('image/jpeg', 0.75);
            this.photoAccepted.emit(this.imgSrc);
            console.log('TakePhotoComponent::acceptPhoto Success');
        } catch (err) {
            console.error('TakePhotoComponent::acceptPhoto Error converting image', err);
            this.photoAccepted.emit(null);
            this.cancelPhoto();
        }
    }
}
