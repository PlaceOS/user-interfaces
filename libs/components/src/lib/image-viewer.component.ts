import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'image-viewer',
    template: `
        <div class="h-screen w-screen bg-base-200">
            <img
                class="h-full w-full object-contain object-center"
                [src]="url"
            />
            <button
                class="absolute right-1 top-1 bg-base-100"
                icon
                matRipple
                mat-dialog-close
            >
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class ImageViewerComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public url: string) {}
}
