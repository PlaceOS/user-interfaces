import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { ApplicationIcon } from '@placeos/common';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: `explore-icon`,
    template: `
        <div
            class="border-base-200 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm"
            [style.background-color]="color()"
            [style.color]="text_color()"
        >
            <icon [icon]="icon()" class="text-xl"></icon>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IconComponent],
})
export class ExploreIconComponent {
    private _details = inject<{
        icon?: ApplicationIcon;
        color?: string;
        text_color?: string;
    }>(MAP_FEATURE_DATA);

    public readonly icon = signal(this._details.icon || { content: 'done' });
    public readonly color = signal(this._details.color || 'var(--info)');
    public readonly text_color = signal(
        this._details.text_color || 'var(--info-content)',
    );
}
