import { Component, computed, input } from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';
import { SafePipe } from './safe.pipe';

const CLASS_MAP = {
    rounded: 'material-symbols-rounded',
    outlined: 'material-symbols-outlined',
    sharp: 'material-symbols-sharp',
};

/**
 * Shows a Material Symbols ligature or an image. The icon is hidden from
 * assistive technology by default, because most icons are decoration next to
 * text. Set `label` when the icon is the only carrier of its meaning. The icon
 * is then announced as an image with that name.
 */
@Component({
    selector: 'icon,i[icon]',
    host: {
        '[attr.aria-hidden]': 'label() ? null : "true"',
        '[attr.role]': 'label() ? "img" : null',
        '[attr.aria-label]': 'label() || null',
    },
    template: `
        <div
            class="flex h-[1.25em] max-h-[1.25em] w-[1.25em] max-w-[1.25em] items-center justify-center overflow-hidden"
        >
            @if (!icon() || icon().type !== 'img') {
                <i [class]="class_ref()">
                    {{ icon()?.content }}
                    <ng-content></ng-content>
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    alt=""
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
    public readonly icon = input<ApplicationIcon>(undefined);
    /** Accessible name. When empty, the icon is hidden from assistive technology. */
    public readonly label = input('');
    public readonly class_ref = computed(
        () =>
            CLASS_MAP[this.icon()?.class] ||
            CLASS_MAP[this.className()] ||
            this.className(),
    );
}
