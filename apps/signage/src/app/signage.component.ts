import { Component, ElementRef, ViewChild } from '@angular/core';
import { SignageService } from './signage.service';

@Component({
    selector: 'signage-panel',
    template: `
        <div class="absolute inset-0 bg-black pointer-events-none">
            <ng-container *ngIf="active_media | async">
                <img
                    #image_outlet
                    *ngIf="(active_media | async).type === 'image'"
                    [src]="(active_media | async).url"
                />
                <video
                    #video_outlet
                    *ngIf="(active_media | async).type === 'video'"
                    [src]="(active_media | async).url"
                ></video>
            </ng-container>
        </div>
    `,
    styles: ``,
})
export class SignagePanelComponent {
    public readonly active_media = this._service.active_media;

    @ViewChild('image_outlet')
    private _image_outlet?: ElementRef<HTMLImageElement>;
    @ViewChild('video_outlet')
    private _video_outlet?: ElementRef<HTMLVideoElement>;

    constructor(private _service: SignageService) {}

    public ngOnInit() {
        this._service.init();
    }
}
