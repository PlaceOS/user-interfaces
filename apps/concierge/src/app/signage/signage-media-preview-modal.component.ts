import { Component, inject, OnInit, output, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AuthenticatedImageDirective,
    IconComponent,
    SafePipe,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'signage-media-preview-modal',
    template: `
        <header
            class="border-base-300 flex items-center justify-between border-b p-2"
        >
            <h1 class="px-2">
                {{
                    'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER'
                        | translate: { name: name() }
                }}
            </h1>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (!loading()) {
            <main class="bg-base-200">
                <div
                    class="flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center"
                >
                    @if (type() === 'image') {
                        <img
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource()"
                        />
                    }
                    @if (type() === 'webpage') {
                        <iframe
                            class="h-full w-full object-contain object-center"
                            [src]="resource() | safe: 'resource'"
                        ></iframe>
                    }
                    @if (type() === 'video') {
                        <video
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource()"
                            autoplay
                            controls
                        ></video>
                    }
                </div>
            </main>
        } @else {
            <main
                class="flex h-80 max-h-[65vh] w-md max-w-[80vw] flex-col items-center justify-center p-8"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (can_save() && !loading()) {
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="w-32" (click)="save.emit(true)">
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        TranslatePipe,
        IconComponent,
        SafePipe,
    ],
})
export class SignageMediaPreviewModalComponent implements OnInit {
    private _data = inject<{
        url: URL;
        type: 'image' | 'video' | 'webpage';
        save: boolean;
        name: string;
        file?: File;
    }>(MAT_DIALOG_DATA);
    public readonly save = output<any>();

    public readonly loading = signal('');
    public readonly resource = signal(this._data.url.toString());
    public readonly name = signal(this._data.name);
    public readonly type = signal(this._data.type);
    public readonly can_save = signal(this._data.save !== false);

    public readonly file = this._data.file;

    public ngOnInit() {
        console.log('Data:', this._data);
    }
}
