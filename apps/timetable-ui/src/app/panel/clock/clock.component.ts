import { Component, Input } from '@angular/core';

@Component({
    selector: 'panel-clock',
    template: `
        <span>{{ date_time | date: 'mediumDate' }}</span>
        <span>{{ date_time | date: 'H:mm:ss' }}</span>
    `,
    styles: [
        `
            :host {
                border-radius: 0.2em;
                padding: 0.25em 0.75em;
                text-align: center;
                font-size: 0.8em;
                color: var(--white);
                box-shadow: var(--shadow);
                background-color: var(--opaque-dark);
            }

            span {
                display: block;
                padding: 0.25em;
            }
        `,
    ],
})
export class PanelClockComponent {
    @Input() date_time: number;
}
