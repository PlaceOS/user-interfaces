import { Component, inject, output } from '@angular/core';
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
                <icon>close</icon>
            </button>
        </header>
        @if (!loading) {
            <main class="bg-base-200">
                <div
                    class="flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center"
                >
                    @if (type === 'image') {
                        <img
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource.toString()"
                        />
                    }
                    @if (type === 'video') {
                        <video
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource.toString()"
                            autoplay
                            controls
                        ></video>
                    }
                </div>
            </main>
        } @else {
            <main
                class="flex h-[20rem] max-h-[65vh] w-[28rem] max-w-[80vw] flex-col items-center justify-center p-8"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
        @if (can_save && !loading) {
            <footer
                class="flex items-center justify-end space-x-2 border-t border-base-300 p-2"
            >
                <button btn matRipple class="w-32" (click)="save.emit()">
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    standalone: false,
})
export class SignageMediaPreviewModalComponent {
    private _data = inject<{
    url: URL;
    type: 'image' | 'video';
    save: boolean;
    name: string;
    file?: File;
}>(MAT_DIALOG_DATA);

    public readonly save = output<any>();
    public loading = '';
    public readonly resource = this._data.url;
    public readonly type = this._data.type;
    public readonly name = this._data.name;
    public readonly file = this._data.file;
    public readonly can_save = this._data.save !== false;
}
