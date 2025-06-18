import { Component, inject } from '@angular/core';
import { ApplicationIcon } from '@placeos/common';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: `explore-icon`,
    template: `
        <div
            class="flex h-8 w-8 items-center justify-center rounded-full border border-base-200 shadow"
            [style.background-color]="color"
            [style.color]="text_color"
        >
            <icon [icon]="icon" class="text-xl"></icon>
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
    imports: [IconComponent],
})
export class ExploreIconComponent {
    private _details = inject<{
        icon?: ApplicationIcon;
        color?: string;
        text_color?: string;
    }>(MAP_FEATURE_DATA);

    public readonly icon = this._details.icon || { content: 'done' };
    public readonly color = this._details.color || 'var(--in)';
    public readonly text_color = this._details.text_color || 'var(--inc)';
}
