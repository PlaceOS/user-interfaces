import { Component, Input } from '@angular/core';
import { ApplicationIcon } from '@placeos/common';

@Component({
    selector: 'app-icon',
    template: `
        <div class="app-icon">
            <i *ngIf="!icon || icon.type !== 'img'" [class]="icon?.class || className">
                {{ icon?.content }}
                <ng-content></ng-content>
            </i>
            <img *ngIf="icon && icon.type === 'img'" [src]="icon.src | safe: 'resource'" />
        </div>
    `,
    styles: [
        `
            .app-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 1.25em;
                width: 1.25em;
            }

            i {
                font-size: 1em;
            }

            img {
                height: 1em;
                width: 1em;
            }
        `,
    ],
})
export class IconComponent {
    @Input() public className: string = 'material-icons';
    /** Icon details */
    @Input() public icon: ApplicationIcon;
}
