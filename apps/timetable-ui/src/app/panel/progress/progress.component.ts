import { Component, Input } from '@angular/core';

@Component({
    selector: 'panel-progress',
    template: `
        <div class="progress" [style.top.%]="date_time | timelinePosition">
            <div class="triangle"></div>
            <div class="line"></div>
        </div>
    `,
    styles: [
        `
            .progress {
                position: absolute;
            }

            .triangle {
                position: absolute;
                top: 50%;
                bottom: 0;
                left: 0;
                width: 0;
                height: 0;
                transform: translateY(-50%);
                border-style: solid;
                border-width: 0.5em 0 0.5em 0.75em;
                border-color: transparent transparent transparent var(--white);
            }

            .line {
                position: absolute;
                top: -1px;
                right: 0;
                left: 0;
                height: 3px;
                width: 100vw;
                background-color: var(--white);
            }
        `,
    ],
})
export class PanelProgressComponent {
    @Input() date_time: number;
}
