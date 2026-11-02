import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { UserDetails, UserLabelComponent } from '../lib/user-label.component';

describe('UserLabelComponent', () => {
    let spectator: Spectator<UserLabelComponent>;
    const createComponent = createComponentFactory({
        component: UserLabelComponent,
        declarations: [MockComponent(UserAvatarComponent)],
        providers: [
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(() => undefined),
            }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should render the user name', () => {
        spectator.setInput({
            user: { name: 'Jane Doe' } as UserDetails,
        });
        spectator.detectChanges();
        expect(spectator.query('.text-black')?.textContent).toContain(
            'Jane Doe',
        );
    });

    it('should treat wider-than-tall labels as landscape', () => {
        spectator.setInput({ width: 40, height: 20 });
        spectator.detectChanges();
        expect(spectator.component.landscape()).toBe(true);
        spectator.setInput({ width: 20, height: 40 });
        spectator.detectChanges();
        expect(spectator.component.landscape()).toBe(false);
    });

    it('should render the QR code image when provided', () => {
        spectator.setInput({
            user: { qr_code: 'qr.png' } as UserDetails,
        });
        spectator.detectChanges();
        const qr = spectator.query('img[src="qr.png"]');
        expect(qr).toExist();
    });
});
