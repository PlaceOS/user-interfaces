import { Component, Input } from '@angular/core';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'a-user-avatar',
    template: `
        <div
            class="h-[2.5em] w-[2.5em] flex items-center justify-center border-2 border-base-100 bg-base-200 rounded-full overflow-hidden"
            *ngIf="user"
            [attr.user-id]="user.id"
        >
            <div
                initials
                class="text-base-content opacity-60 uppercase text-[1em]"
                *ngIf="!user.photo; else image_state"
            >
                {{ initials }}
            </div>
        </div>
        <ng-template #image_state>
            <img auth class="h-full w-full" [source]="user.photo" />
        </ng-template>
    `,
    styles: [``],
})
export class UserAvatarComponent {
    /** User to display avatar for */
    @Input() public user: User;

    public get initials(): string {
        if (!this.user) return 'NA';
        const name = this.user.name || '';
        const parts = name.replace(/[()[\]\-+=\\/]+/gi, '').split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : name.slice(0, 2);
    }
}
