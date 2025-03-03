import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'signage-media-preview-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-base-300 p-2"
        >
            <h1 class="px-2">
                {{
                    'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER'
                        | translate: { name: name }
                }}
            </h1>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="bg-base-200" *ngIf="!loading; else load_state">
            <div
                class="flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center"
            >
                <img
                    *ngIf="type === 'image'"
                    class="h-full w-full object-contain object-center"
                    auth
                    [source]="resource.toString()"
                />
                <video
                    *ngIf="type === 'video'"
                    class="h-full w-full object-contain object-center"
                    auth
                    [source]="resource.toString()"
                    autoplay
                    controls
                ></video>
            </div>
        </main>
        <footer
            *ngIf="can_save && !loading"
            class="flex items-center justify-end space-x-2 border-t border-base-300 p-2"
        >
            <button btn matRipple class="w-32" (click)="save.emit()">
                {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex h-[20rem] max-h-[65vh] w-[28rem] max-w-[80vw] flex-col items-center justify-center p-8"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class SignageMediaPreviewModalComponent {
    @Output() public readonly save = new EventEmitter<any>();
    public loading = '';
    public readonly resource = this._data.url;
    public readonly type = this._data.type;
    public readonly name = this._data.name;
    public readonly file = this._data.file;
    public readonly can_save = this._data.save !== false;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            url: URL;
            type: 'image' | 'video';
            save: boolean;
            name: string;
            file?: File;
        },
    ) {}
}
