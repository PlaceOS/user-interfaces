import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IconComponent, SafePipe } from '@placeos/components';

@Component({
    selector: 'fullscreen-embed',
    template: `
        <div class="relative h-screen w-screen bg-base-200">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 rounded border border-base-300 bg-base-100"
            >
                <icon>close</icon>
            </button>
            <iframe
                class="h-full w-full"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
    `,
    styles: [``],
    imports: [IconComponent, MatRippleModule, SafePipe, MatDialogModule],
})
export class FullscreenEmbedComponent {
    private _data: string = inject(MAT_DIALOG_DATA);
    public readonly embed_url = signal(this._data);
}
