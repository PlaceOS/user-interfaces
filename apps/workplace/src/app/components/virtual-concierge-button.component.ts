import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { settingSignal } from '@placeos/common';
import { FullscreenEmbedComponent } from './fullscreen-embed.component';
import { SidebarEmbedComponent } from './sidebar-embed.component';

@Component({
    selector: 'virtual-concierge-button',
    template: `
        @if (virtual_concierge_url()) {
            <button
                icon
                matRipple
                class="bg-base-100 border-base-300 fixed top-72 right-2 z-10 h-14 w-14 border shadow-md"
                (click)="viewVirtualConcierge()"
            >
                <img class="z-10 h-12" src="assets/icons/roybot.png" />
            </button>
        }
    `,
    styles: [``],
    imports: [MatRippleModule],
})
export class VirtualConciergeButtonComponent {
    private readonly _dialog = inject(MatDialog);

    private readonly _configured_url = settingSignal(
        'virtual_concierge.url',
        '',
    );
    private readonly _legacy_url = settingSignal('virtual_concierge_url', '');

    public readonly virtual_concierge_url = computed(
        () => this._configured_url() || this._legacy_url(),
    );
    public readonly virtual_concierge_display = settingSignal<
        'fullscreen' | 'sidebar'
    >('virtual_concierge.display', 'fullscreen');
    public readonly virtual_concierge_side = settingSignal<'left' | 'right'>(
        'virtual_concierge.side',
        'left',
    );

    public viewVirtualConcierge() {
        const url = this.virtual_concierge_url();
        const is_sidebar = this.virtual_concierge_display() === 'sidebar';
        const side = this.virtual_concierge_side();
        const position =
            side === 'right'
                ? { right: '0', top: '0' }
                : { left: '0', top: '0' };
        if (is_sidebar) {
            this._dialog.open(SidebarEmbedComponent, {
                data: { url, side },
                height: '100vh',
                width: '28rem',
                maxWidth: '100vw',
                position,
                panelClass: [
                    'sidebar-embed-dialog',
                    `sidebar-embed-dialog-${side}`,
                ],
            });
            return;
        }
        this._dialog.open(FullscreenEmbedComponent, {
            data: url,
        });
    }
}
