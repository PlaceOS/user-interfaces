import { Component, ElementRef, ViewChild } from '@angular/core';
import { SignageService } from './signage.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'signage-panel',
    template: `
        <div class="absolute inset-0 bg-[#212121] pointer-events-none">
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
            <ng-container *ngIf="diagnostics">
                <div class="absolute top-0 left-0 p-2 font-mono text-white">
                    <div class="">
                        Current Media: {{ (active_media | async)?.name }}
                        <span
                            *ngIf="!(active_media | async)"
                            class="opacity-30"
                        >
                            No Media Active
                        </span>
                    </div>
                    <div *ngIf="active_media | async" class="">
                        Media Duration:
                        {{ (active_media | async)?.duration | mediaDuration }}
                    </div>
                    <div *ngIf="active_media | async" class="">
                        Media Type: {{ (active_media | async)?.type }}
                    </div>
                </div>
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

    public get diagnostics() {
        return this._settings.get('app.diagnostics');
    }

    constructor(
        private _service: SignageService,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        this._service.init();
    }
}
