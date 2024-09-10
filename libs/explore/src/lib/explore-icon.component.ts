import { Component, Inject } from '@angular/core';
import { ApplicationIcon } from '@placeos/common';
import { MAP_FEATURE_DATA } from '@placeos/components';

@Component({
    selector: `explore-icon`,
    template: `
        <div
            class="flex items-center justify-center h-8 w-8 shadow rounded-full border border-base-200"
            [style.background-color]="color"
            [style.color]="text_color"
        >
            <app-icon [icon]="icon" class="text-xl"></app-icon>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                align-items: end;
                justify-content: end;
            }
        `,
    ],
})
export class ExploreIconComponent {
    public readonly icon = this._details.icon || { content: 'done' };
    public readonly color = this._details.color || 'var(--in)';
    public readonly text_color = this._details.text_color || 'var(--inc)';
    constructor(
        @Inject(MAP_FEATURE_DATA)
        private _details: {
            icon?: ApplicationIcon;
            color?: string;
            text_color?: string;
        },
    ) {}
}
