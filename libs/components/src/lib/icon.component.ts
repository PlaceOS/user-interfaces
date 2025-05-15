import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';

@Component({
    selector: 'icon,icon',
    template: `
        <div class="flex h-[1.25em] w-[1.25em] items-center justify-center">
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
    imports: [CommonModule],
})
export class IconComponent {
    @Input() public className = 'material-symbols-rounded';
    /** Icon details */
    @Input() public icon: ApplicationIcon;
}
