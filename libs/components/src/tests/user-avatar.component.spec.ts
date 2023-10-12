import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { User } from '@placeos/users';
import { SafePipe } from '../lib/safe.pipe';

import { UserAvatarComponent } from '../lib/user-avatar.component';
import { MockDirective } from 'ng-mocks';
import { AuthenticatedImageDirective } from '../lib/authenticated-image.directive';

describe('UserAvatarComponent', () => {
    let spectator: Spectator<UserAvatarComponent>;
    const createComponent = createComponentFactory({
        component: UserAvatarComponent,
        declarations: [SafePipe, MockDirective(AuthenticatedImageDirective)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it("should show the user's image", () => {
        spectator.component.user = new User({
            name: 'John Smith',
            photo: 'true.png',
        });
        spectator.detectChanges();
        expect('img').toExist();
        expect('[initials]').not.toExist();
    });

    it("should show the user's initials", () => {
        spectator.component.user = new User({ name: 'John Smith' });
        spectator.detectChanges();
        expect('img').not.toExist();
        expect('[initials]').toExist();
        expect('[initials]').toContainText('JS');
    });
});
