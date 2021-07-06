import { Component, Input } from '@angular/core';
import { User } from '../../../users/src/lib/user.class';

@Component({
    selector: 'a-user-avatar',
    template: `
        <div
            class="flex items-center justify-center rounded-full overflow-hidden border-2 border-white"
            *ngIf="user"
            [attr.user-id]="user.id"
        >
            <div
                initials
                class="text-black text-opacity-50 uppercase"
                *ngIf="!user.photo; else image_state"
            >
                {{ initials }}
            </div>
        </div>
        <ng-template #image_state>
            <img class="h-full w-full" [src]="user.photo | safe: 'resource'" />
        </ng-template>
    `,
    styles: [
        `
            :host > div {
                height: 2.5em;
                width: 2.5em;
                background-color: #ccc;
                overflow: hidden;
                border: 2px solid white;
            }

            .initials {
                font-size: 1em;
            }
        `,
    ],
})
export class UserAvatarComponent {
    /** User to display avatar for */
    @Input() public user: User;

    public get initials(): string {
        if (!this.user) return 'NA';
        const parts = this.user.name
            .replace(/[()[\]\-+=\\/]+/gi, '')
            .split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : this.user.name.slice(0, 2);
    }
}
