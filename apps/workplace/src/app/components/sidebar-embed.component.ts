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
        <div
            class="bg-base-200 fixed inset-y-0 z-0 w-screen sm:w-100"
            [class.right-0]="close_button_side() === 'left'"
            [class.left-0]="close_button_side() === 'right'"
        >
            <iframe
                class="h-full w-full"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
        <button
            icon
            matRipple
            mat-dialog-close
            class="border-base-300 bg-base-100 fixed top-2 left-2 z-10 rounded border"
            [class.sm:right-102]="close_button_side() === 'left'"
            [class.sm:left-102]="close_button_side() === 'right'"
        >
            <icon>close</icon>
        </button>
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
