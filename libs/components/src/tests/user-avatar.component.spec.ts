import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { User } from '@placeos/common';
import { SafePipe } from '../lib/safe.pipe';

import { MockDirective } from 'ng-mocks';
import { AuthenticatedImageDirective } from '../lib/authenticated-image.directive';
import { UserAvatarComponent } from '../lib/user-avatar.component';

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
        spectator.setInput(
            'user',
            new User({
                name: 'John Smith',
                photo: 'true.png',
            }),
        );
        spectator.detectChanges();
        expect('img').toExist();
        expect('[initials]').not.toExist();
    });

    it("should show the user's initials", () => {
        spectator.setInput('user', new User({ name: 'John Smith' }));
        spectator.detectChanges();
        expect('img').not.toExist();
        expect('[initials]').toExist();
        expect('[initials]').toContainText('JS');
    });

    it('should render blank without a valid user', () => {
        spectator.detectChanges();
        expect('[initials]').not.toExist();
        expect('img').not.toExist();
    });

    it('should render blank for the empty placeholder user', () => {
        spectator.setInput(
            'user',
            new User({ name: '<empty>', email: '<empty>@dev.place.tech' }),
        );
        spectator.detectChanges();
        expect('[initials]').not.toExist();
        expect('img').not.toExist();
    });

    it('should derive initials from email-style names', () => {
        spectator.setInput('user', new User({ name: '<jane@example.com>' }));
        spectator.detectChanges();
        expect('[initials]').toContainText('ja');
    });

    it('should ignore bracketed email segments in display names', () => {
        spectator.setInput(
            'user',
            new User({ name: 'John Smith <john@example.com>' }),
        );
        spectator.detectChanges();
        expect('[initials]').toContainText('JS');
    });
});
