import { Component, Input } from '@angular/core';

@Component({
    selector: 'media-player',
    template: `
        <img class="absolute inset-0 object-contain object-center" />
        <video class="absolute inset-0 object-contain object-center"></video>
        @if (controls) {
            <div
                class="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full p-4 flex items-center space-x-2 text-lg text-base-100 overflow-hidden"
            >
                <div class="absolute inset-0 bg-base-content opacity-30"></div>
                <button icon matRipple>
                    <app-icon>skip_previous</app-icon>
                </button>
                <button icon matRipple>
                    <app-icon>pause</app-icon>
                </button>
                <button icon matRipple>
                    <app-icon>skip_next</app-icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                height: 100%;
                width: 100%;
                background: var(--bg);
            }
        `,
    ],
})
export class MediaPlayerComponent {
    @Input() public controls: boolean = true;
}
