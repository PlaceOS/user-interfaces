import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from 'libs/users/src/lib/user.class';
import { AuthenticatedImageDirective } from './authenticated-image.directive';

@Component({
    selector: 'a-user-avatar',
    template: `
        <div
            class="flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2 border-base-100 bg-base-200"
            *ngIf="user"
            [attr.user-id]="user.id"
        >
            <div
                initials
                class="text-[1em] uppercase text-base-content opacity-60"
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
    imports: [CommonModule, AuthenticatedImageDirective],
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
