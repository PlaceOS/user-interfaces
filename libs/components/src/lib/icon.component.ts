import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';
import { SafePipe } from './safe.pipe';

const CLASS_MAP = {
    rounded: 'material-symbols-rounded',
    outlined: 'material-symbols-outlined',
    sharp: 'material-symbols-sharp',
};

@Component({
    selector: 'icon,i[icon]',
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SafePipe],
})
export class IconComponent {
    public readonly className = input('material-symbols-rounded');
    public readonly icon = input<ApplicationIcon>(undefined);
    public readonly class_ref = computed(
        () =>
            CLASS_MAP[this.icon()?.class] ||
            CLASS_MAP[this.className()] ||
            this.className(),
    );
}
