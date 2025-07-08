import { Component, input } from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';
import { SafePipe } from './safe.pipe';

@Component({
    selector: 'icon,i[icon]',
    template: `
        <div
            class="flex h-[1.25em] w-[1.25em] items-center justify-center overflow-hidden"
        >
            @if (!icon() || icon().type !== 'img') {
                <i [class]="icon()?.class || className()">
                    {{ icon()?.content }}
                    <ng-content></ng-content>
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    [src]="icon().src | safe: 'resource'"
                />
            }
        </div>
    `,
    styles: [
        `
            i {
                font-size: 1em;
            }
        `,
    ],
    imports: [SafePipe],
})
export class IconComponent {
    public readonly className = input('material-symbols-rounded');
    /** Icon details */
    public readonly icon = input<ApplicationIcon>(undefined);
}
