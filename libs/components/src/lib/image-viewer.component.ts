import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'image-viewer',
    template: `
        <div class="h-screen w-screen bg-base-200">
            <img
                class="object-contain object-center w-full h-full"
                [src]="url"
            />
            <button
                class="absolute top-1 right-1 bg-base-100"
                icon
                matRipple
                mat-dialog-close
            >
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
    styles: [``],
})
export class ImageViewerComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public url: string) {}
}
