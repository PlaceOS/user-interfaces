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
            class="sidebar-embed__container h-full w-full"
        >
            <iframe
                class="block h-full w-full border-0"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
        <button
            icon
            matRipple
            mat-dialog-close
            class="sidebar-embed__close border-base-300 bg-base-100 fixed top-2 z-10 rounded border"
            [class.sidebar-embed__close--left]="close_button_side() === 'left'"
            [class.sidebar-embed__close--right]="close_button_side() === 'right'"
        >
            <icon>close</icon>
        </button>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }

            .sidebar-embed__container {
                overflow: hidden;
            }

            .sidebar-embed__close {
                left: 0.5rem;
            }

            @media (min-width: 640px) {
                .sidebar-embed__close--left {
                    right: calc(28rem + 0.5rem);
                    left: auto;
                }

                .sidebar-embed__close--right {
                    left: calc(28rem + 0.5rem);
                }
            }
        `,
    ],
    imports: [IconComponent, MatRippleModule, SafePipe, MatDialogModule],
})
export class SidebarEmbedComponent {
    private _data: SidebarEmbedData = inject(MAT_DIALOG_DATA);
    public readonly embed_url = signal(this._data.url);
    public readonly close_button_side = computed(() =>
        this._data.side === 'right' ? 'left' : 'right',
    );
}
