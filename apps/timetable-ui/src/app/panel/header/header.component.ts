import { Component, Input } from '@angular/core';

@Component({
    selector: 'panel-header',
    template: `
        <div class="logo">
            <img src="/assets/logos/usyd.png" />
        </div>
        <div class="logo">
            <img src="/assets/logos/WSLHD.png" />
        </div>
        <div class="name">
            {{ title }}
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
                height: 3em;
                align-items: center;
                padding: 0.25em 1em;
                background-color: var(--gray-300);
            }

            .logo {
                flex-grow: 1;
            }

            img {
                height: 2.5em;
            }

            .name {
                font-size: 1.2em;
            }
        `,
    ],
})
export class PanelHeaderComponent {
    @Input() title: string;
}
