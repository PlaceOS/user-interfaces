import { Component, ElementRef, ViewChild } from '@angular/core';
import { SignageService } from './signage.service';
import { SettingsService } from '@placeos/common';
import { combineLatest, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'signage-panel',
    template: `
        <div
            class="relative bg-[#212121] pointer-events-none flex justify-center h-full w-full"
        >
            <ng-container *ngIf="active_media | async">
                <img
                    #image_outlet
                    *ngIf="(active_media | async).type === 'image'"
                    [src]="(active_media | async).url"
                    class="object-contain max-w-full max-h-full"
                />
                <video
                    #video_outlet
                    *ngIf="(active_media | async).type === 'video'"
                    [src]="(active_media | async).url"
                    autoplay
                    muted
                    class="object-contain max-w-full max-h-full"
                ></video>
            </ng-container>
            <ng-container *ngIf="diagnostics">
                <div
                    class="absolute bottom-0 left-0 p-2 font-mono text-white text-sm"
                >
                    <div class="">
                        Current Media:
                        <span class="opacity-60">{{
                            (active_media | async)?.name
                        }}</span>
                        <span
                            *ngIf="!(active_media | async)"
                            class="opacity-30"
                        >
                            No Media Active
                        </span>
                    </div>
                    <div *ngIf="active_media | async" class="">
                        Media Duration:
                        <span class="opacity-60">{{
                            (active_media | async)?.duration | mediaDuration
                        }}</span>
                    </div>
                    <div *ngIf="active_media | async" class="">
                        Remaining Duration:
                        <span class="opacity-60">{{
                            remaining | async | mediaDuration
                        }}</span>
                    </div>
                    <div *ngIf="active_media | async" class="">
                        Media Type:
                        <span class="opacity-60">{{
                            (active_media | async)?.type
                        }}</span>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
    styles: `
        :host {
            display: block;
            height: 100vh;
            width: 100vw;
        }
    `,
})
export class SignagePanelComponent {
    public readonly active_media = this._service.active_media;
    public readonly remaining = combineLatest([
        this.active_media,
        interval(250),
    ]).pipe(
        map(([_]) =>
            _ ? Math.floor(Math.max(0, (_.end || 0) - Date.now()) / 1000) : 0
        )
    );

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
