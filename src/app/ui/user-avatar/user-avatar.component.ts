import { Component, Input } from '@angular/core';
import { User } from '../../users/user.class';

@Component({
    selector: 'a-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.scss']
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
