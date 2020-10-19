import { Component, Input } from '@angular/core';
import { User } from '../../../../users/src/lib/user.class';

@Component({
    selector: 'a-user-avatar',
    template: `
        <div class="user-avatar" *ngIf="user" [attr.user-id]="user.id">
            <div class="initials" *ngIf="!user.photo; else image_state">{{ initials }}</div>
        </div>
        <ng-template #image_state>
            <img [src]="user.photo | safe: 'resource'" />
        </ng-template>
    `,
    styles: [`
        .user-avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2em;
            width: 2em;
            border-radius: 100%;
            background-color: #f0f0f0;
            overflow: hidden;
        }

        .initials {
            font-size: 1em;
            color: rgba(#000, .35);
            text-transform: uppercase;
        }

        img {
            height: 100%;
            width: 100%;
        }
    `]
})
export class UserAvatarComponent {
    /** User to display avatar for */
    @Input() public user: User;

    public get initials(): string {
        if (!this.user) {
            return 'NA';
        }
        const parts = this.user.name.split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : this.user.name.slice(0, 2);
    }
}
