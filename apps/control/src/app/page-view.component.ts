import { Component } from '@angular/core';

@Component({
    selector: '[control-page-view]',
    template: `
        @switch (view) {
            @case ('basic') {
                <source-select output="'ALL'"></source-select>
            }
            @default {
                <control-advanced-view></control-advanced-view>
            }
        }
    `,
    styles: [
        `
            :host {
                width: 100%;
                flex: 1;
                height: 50%;
                overflow: hidden;
                background: #f0f0f0;
                color: rgba(0, 0, 0, 0.85);
            }
        `,
    ],
    standalone: false,
})
export class ControlPageViewComponent {
    public view: 'basic' | 'advanced';
}
