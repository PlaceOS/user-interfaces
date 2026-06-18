import { Component, signal } from '@angular/core';
import { ControlAdvancedViewComponent } from './advanced-view.component';
import { SourceSelectComponent } from './ui/source-select.component';

@Component({
    selector: '[control-page-view]',
    template: `
        @switch (view()) {
            @case ('basic') {
                <source-select output="'ALL'" />
            }
            @default {
                <control-advanced-view />
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
    imports: [ControlAdvancedViewComponent, SourceSelectComponent],
})
export class ControlPageViewComponent {
    public readonly view = signal<'basic' | 'advanced'>('advanced');
}
