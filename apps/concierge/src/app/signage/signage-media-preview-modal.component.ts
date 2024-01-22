import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { uploadFile } from '@placeos/common';
import { takeWhile } from 'rxjs/operators';

@Component({
    selector: 'signage-media-preview-modal',
    template: `
        <header
            class="flex items-center justify-between p-2 border-b border-base-300"
        >
            <h1 class="px-2">Preview - {{ name }}</h1>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="bg-base-200" *ngIf="!loading; else load_state">
            <div
                class="max-w-[80vw] max-h-[65vh] w-[80vw] h-[65vh] flex items-center justify-center"
            >
                <img
                    *ngIf="type === 'image'"
                    class="max-w-full max-h-full"
                    [src]="resource.toString()"
                />
                <video
                    *ngIf="type === 'video'"
                    class="max-w-full max-h-full"
                    [src]="resource.toString()"
                    autoplay
                    controls
                ></video>
            </div>
        </main>
        <footer
            *ngIf="can_save && !loading"
            class="p-2 flex items-center justify-end space-x-2 border-t border-base-300"
        >
            <button btn matRipple class="w-32" (click)="save.emit()">
                Save Media
            </button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center p-8 w-[28rem] h-[20rem] max-w-[80vw] max-h-[65vh]"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
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
        }
    ) {}
}
