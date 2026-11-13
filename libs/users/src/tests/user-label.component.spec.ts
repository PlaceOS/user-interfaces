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

    it('should size the label and limit the logo width when landscape', () => {
        const logo = () =>
            spectator.query<HTMLImageElement>('img[alt="Logo"]')!;
        spectator.setInput({ width: 40, height: 20 });
        spectator.detectChanges();
        const label = spectator.query<HTMLElement>('.user-label')!;
        expect(label.style.width).toBe('40em');
        expect(label.style.height).toBe('20em');
        expect(logo().style.maxWidth).toBe('8em');
        spectator.setInput({ width: 20, height: 40 });
        spectator.detectChanges();
        expect(logo().style.maxWidth).toBe('');
    });

    it('should show the pass number only when the visitor has one', () => {
        const pre_text = () =>
            spectator.queryAll('pre').map((el) => el.textContent?.trim());
        spectator.setInput({
            user: { extra_details: 'Level 2' } as UserDetails,
        });
        spectator.detectChanges();
        expect(pre_text()).toEqual(['Level 2']);
        spectator.setInput({
            user: {
                extra_details: 'Level 2',
                pass_number: 'P-42',
            } as UserDetails,
        });
        spectator.detectChanges();
        expect(pre_text()).toEqual(['Level 2', 'P-42']);
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
