import { Component, input } from '@angular/core';
import { User } from 'libs/users/src/lib/user.class';
import { AuthenticatedImageDirective } from './authenticated-image.directive';

@Component({
    selector: 'a-user-avatar',
    template: `
        @if (user()) {
            <div
                class="flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2 border-base-100 bg-base-200"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="uppercase text-base-content opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="h-full w-full object-cover object-center"
                        [source]="user().photo"
                    />
                }
            </div>
        }
    `,
    styles: [``],
    imports: [AuthenticatedImageDirective],
})
export class UserAvatarComponent {
    /** User to display avatar for */
    public readonly user = input<User>(undefined);

    public get initials(): string {
        const user = this.user();
        if (!user) return 'NA';
        const name = user.name || '';
        const parts = name.replace(/[()[\]\-+=\\/]+/gi, '').split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : name.slice(0, 2);
    }
}
