import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IconComponent, SafePipe } from '@placeos/components';

interface SidebarEmbedData {
    url: string;
    side: 'left' | 'right';
}

@Component({
    selector: 'sidebar-embed',
    template: `
        <div class="bg-base-200 relative h-full w-full overflow-hidden">
            <button
                icon
                matRipple
                mat-dialog-close
                class="border-base-300 bg-base-100 absolute top-2 z-10 rounded border"
                [class.left-2]="close_button_side() === 'left'"
                [class.right-2]="close_button_side() === 'right'"
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
export class SidebarEmbedComponent {
    private _data: SidebarEmbedData = inject(MAT_DIALOG_DATA);
    public readonly embed_url = signal(this._data.url);
    public readonly close_button_side = computed(() =>
        this._data.side === 'right' ? 'left' : 'right',
    );
}
