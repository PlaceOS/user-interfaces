import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { AsyncHandler, notifyError } from '@placeos/common';

@Component({
    selector: 'signage-media',
    template: `
        <div
            class="relative bg-base-200 min-h-full w-full"
            (document:dragenter)="onEnter($event)"
            (document:drop)="hideOverlay($event)"
        >
            <ng-container *ngIf="!(loading | async); else load_template">
                <ng-container
                    *ngIf="(media | async)?.length; else empty_template"
                >
                    <div
                        class="flex flex-wrap items-start justify-start w-full p-2"
                    >
                        <div
                            class="m-2 p-2 bg-base-100 rounded-lg overflow-hidden h-[13rem] w-[17rem] border border-base-300 shadow"
                            *ngFor="let item of media | async"
                        >
                            <button
                                class="w-64 h-36 overflow-hidden bg-base-200 rounded m-0 p-0 relative"
                                (click)="previewMedia(item)"
                            >
                                <img
                                    *ngIf="
                                        item.type === 'video'
                                            ? (item.url | thumbnail)
                                            : item.url
                                    "
                                    [src]="
                                        item.type === 'video'
                                            ? (item.url | thumbnail)
                                            : item.url
                                    "
                                    class="object-contain w-full h-full"
                                />
                                <div
                                    class="absolute top-2 left-2 flex items-center justify-center rounded overflow-hidden"
                                >
                                    <div
                                        class="absolute inset-0 bg-base-content opacity-60 z-0"
                                    ></div>
                                    <div
                                        class="relative text-base-100 z-10 px-2 py-1 text-xs"
                                    >
                                        {{
                                            item.type === 'image'
                                                ? 'Image'
                                                : 'Video'
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="absolute top-2 right-2 flex items-center justify-center rounded overflow-hidden"
                                >
                                    <div
                                        class="absolute inset-0 bg-base-content opacity-60 z-0"
                                    ></div>
                                    <div
                                        class="relative text-base-100 z-10 px-2 py-1 text-xs"
                                    >
                                        {{ count || 0 }} Playlist(s)
                                    </div>
                                </div>
                                <div
                                    class="absolute bottom-2 right-2 flex items-center justify-center rounded overflow-hidden"
                                    *ngIf="item.duration"
                                >
                                    <div
                                        class="absolute inset-0 bg-base-content opacity-60 z-0"
                                    ></div>
                                    <div
                                        class="relative text-base-100 z-10 px-2 py-1 text-xs"
                                    >
                                        {{ item.duration | mediaDuration }}
                                    </div>
                                </div>
                            </button>
                            <div
                                class="flex items-center justify-between space-x-2"
                            >
                                <div class="truncate flex-1 w-1/2 px-2">
                                    {{ item.name }}
                                </div>
                                <button icon matRipple>
                                    <app-icon>more_vert</app-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </ng-container>
            </ng-container>
            <div class="absolute inset-0" *ngIf="show_dropzone">
                <div class="absolute inset-0 bg-base-200"></div>
                <div class="absolute inset-0 bg-base-content opacity-70"></div>
                <div
                    class="absolute inset-4 border-4 border-dashed border-neutral text-base-100 rounded-xl flex flex-col items-center justify-center"
                >
                    <app-icon class="text-8xl">upload</app-icon>
                    <p>Drop file to upload file</p>
                </div>
                <input
                    type="file"
                    class="absolute inset-0 w-full opacity-0"
                    (change)="previewFile($event)"
                />
            </div>
        </div>
        <ng-template #empty_template>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
            >
                <app-icon class="text-8xl">hide_image</app-icon>
                <p>No media found.</p>
            </div>
        </ng-template>
        <ng-template #load_template>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Loading...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                min-height: 100%;
            }
        `,
    ],
})
export class SignageMediaComponent extends AsyncHandler {
    public readonly loading = this._state.loading;
    public readonly media = this._state.media;
    public show_dropzone = false;

    public readonly previewMedia = (item) => this._state.previewMedia(item);

    public onEnter(e) {
        this.show_dropzone = e?.dataTransfer?.types.includes('Files');
    }

    public hideOverlay(e) {
        if (!(e.target instanceof HTMLInputElement)) {
            e.preventDefault();
        }
        this.timeout('hide_overlay', () => (this.show_dropzone = false));
    }

    constructor(private _state: SignageStateService) {
        super();
    }

    public previewFile(event) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const file = files[0];
        if (
            file &&
            (file.type.includes('image') || file.type.includes('video'))
        ) {
            this._state.previewFileMedia(file);
        } else {
            notifyError('Invalid file type.');
        }
    }
}
