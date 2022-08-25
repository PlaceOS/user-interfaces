import { Component, Input } from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';

@Component({
    selector: 'app-icon,icon',
    template: `
        <div class="flex items-center justify-center h-[1.25em] w-[1.25em]">
            <i
                *ngIf="!icon || icon.type !== 'img'"
                [class]="icon?.class || className"
            >
                {{ icon?.content }}
                <ng-content></ng-content>
            </i>
            <img
                class="h-[1em] w-[1em]"
                *ngIf="icon && icon.type === 'img'"
                [src]="icon.src | safe: 'resource'"
            />
        </div>
    `,
    styles: [
        `
            i {
                font-size: 1em;
            }
        `,
    ],
})
export class IconComponent {
    @Input() public className: string = 'material-icons';
    /** Icon details */
    @Input() public icon: ApplicationIcon;
}
