import { Component, computed, input } from '@angular/core';
import { User } from '@placeos/common';
import { AuthenticatedImageDirective } from './authenticated-image.directive';

@Component({
    selector: 'a-user-avatar',
    template: `
        @if (is_valid()) {
            <div
                class="border-base-100 bg-base-200 flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="text-base-content uppercase opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="flex h-full w-full items-center justify-center object-cover object-center"
                        [alt]="initials"
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

    /** Whether a real user has been provided to display */
    public readonly is_valid = computed(() => {
        const user = this.user();
        if (!user) return false;
        // Treat the `<empty>` placeholder user as no user
        const name = (user.name || '').trim();
        const email = (user.email || '').trim();
        if (name.startsWith('<empty>') || email.startsWith('<empty>')) {
            return false;
        }
        return !!(name || email || user.first_name || user.last_name);
    });

    public get initials(): string {
        const user = this.user();
        if (!user) return 'NA';
        // Prefer structured name fields when present
        if (user.first_name && user.last_name) {
            return `${user.first_name[0]}${user.last_name[0]}`;
        }
        // Names can arrive as "First Last <email@domain>" or as a bare
        // email address, so strip any angle-bracketed email segment and
        // fall back to the email local part when nothing else remains.
        let name = (user.name || '').replace(/<[^>]*>/g, ' ').trim();
        if (!name) name = (user.email || user.name || '').split('@')[0];
        const parts = name
            .replace(/[()[\]\-+=\\/@<>]+/gi, ' ')
            .split(/\s+/)
            .filter(Boolean);
        if (parts.length === 0) return 'NA';
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : parts[0].slice(0, 2);
    }
}
