import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { IconComponent } from './icon.component';

@Component({
    selector: 'image-viewer',
    template: `
        <div class="bg-base-200 h-screen w-screen">
            <img
                auth
                class="h-full w-full object-contain object-center"
                [source]="url"
            />
            <button
                class="bg-base-100 absolute top-1 right-1"
                icon
                matRipple
                mat-dialog-close
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IconComponent, AuthenticatedImageDirective, MatDialogModule],
})
export class ImageViewerComponent {
    public readonly url = inject(MAT_DIALOG_DATA);
}
