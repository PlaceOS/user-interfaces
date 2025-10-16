import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { IconComponent } from './icon.component';

@Component({
    selector: 'image-viewer',
    template: `
        <div class="h-screen w-screen bg-base-200">
            <img
                auth
                class="h-full w-full object-contain object-center"
                [source]="url"
            />
            <button
                class="absolute right-1 top-1 bg-base-100"
                icon
                matRipple
                mat-dialog-close
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [``],
    imports: [IconComponent, AuthenticatedImageDirective, MatDialogModule],
})
export class ImageViewerComponent {
    public readonly url = inject(MAT_DIALOG_DATA);
}
