import { signal, WritableSignal } from '@angular/core';
import { OrganisationService } from '@placeos/common';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import {
    UserDetails,
    UserLabelComponent,
} from '../lib/user-label.component';

describe('UserLabelComponent', () => {
    let spectator: Spectator<UserLabelComponent>;
    let theme_sig: WritableSignal<string>;
    const createComponent = createComponentFactory({
        component: UserLabelComponent,
        declarations: [MockComponent(UserAvatarComponent)],
        providers: [
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(() => undefined as any),
            }),
        ],
    });

    beforeEach(() => {
        theme_sig = signal('light');
        spectator = createComponent({
            providers: [
                MockProvider(SettingsService, {
                    theme_signal: theme_sig,
                    signal: jest.fn((key: string) =>
                        key === 'logo_dark'
                            ? signal('dark-logo.png')
                            : signal('light-logo.png'),
                    ) as any,
                }),
            ],
        });
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

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

    it('should use the light logo when the theme is light', () => {
        theme_sig.set('light');
        spectator.detectChanges();
        expect(spectator.component.logo()).toBe('light-logo.png');
    });

    it('should use the dark logo when the theme is dark', () => {
        theme_sig.set('dark');
        spectator.detectChanges();
        expect(spectator.component.logo()).toBe('dark-logo.png');
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
