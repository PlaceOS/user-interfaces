import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService } from '@placeos/common';
import { GlobalBannerComponent } from '../lib/global-banner.component';

describe('GlobalBannerComponent', () => {
    let spectator: Spectator<GlobalBannerComponent>;
    const createComponent = createComponentFactory({
        component: GlobalBannerComponent,
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: jest.fn().mockResolvedValue(undefined),
            } as any),
        ],
    });

    beforeEach(() => {
        localStorage.removeItem('PLACE.last_banner');
        spectator = createComponent();
        spectator.component.banner.set(undefined);
        spectator.component.environment_bar.set(undefined);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the banner contents once initialised', () => {
        spectator.component.banner.set({
            id: 'banner-1',
            content: 'Scheduled maintenance tonight',
        });
        spectator.detectChanges();
        expect('button[icon]').not.toExist();
        spectator.component.is_setup.set(true);
        spectator.detectChanges();
        expect('button[icon]').toExist();
        expect('div.flex-1').toContainText('Scheduled maintenance tonight');
        expect('div.bg-info').toExist();
    });

    it('should style the banner based on its type', () => {
        spectator.component.is_setup.set(true);
        spectator.component.banner.set({
            id: 'banner-2',
            type: 'warn',
            content: 'Warning message',
        });
        spectator.detectChanges();
        expect('div.bg-warning').toExist();
        spectator.component.banner.set({
            id: 'banner-3',
            type: 'error',
            content: 'Error message',
        });
        spectator.detectChanges();
        expect('div.bg-error').toExist();
        expect('div.bg-warning').not.toExist();
    });

    it('should hide the banner and remember its id when closed', () => {
        spectator.component.is_setup.set(true);
        spectator.component.banner.set({
            id: 'banner-4',
            content: 'Close me',
        });
        spectator.detectChanges();
        expect('button[icon]').toExist();
        spectator.click('button[icon]');
        spectator.detectChanges();
        expect(localStorage.getItem('PLACE.last_banner')).toBe('banner-4');
        expect('button[icon]').not.toExist();
    });

    it('should not show a banner that was previously closed', () => {
        localStorage.setItem('PLACE.last_banner', 'banner-5');
        spectator.component.is_setup.set(true);
        spectator.component.banner.set({
            id: 'banner-5',
            content: 'Old news',
        });
        spectator.detectChanges();
        expect('button[icon]').not.toExist();
    });

    it('should display environment bars when an environment colour is set', () => {
        expect('.environment-bar').not.toExist();
        spectator.component.environment_bar.set('#ff0000');
        spectator.detectChanges();
        expect('.environment-bar').toHaveLength(2);
        expect(document.body.classList).toContain('has-environment-bar');
        spectator.component.environment_bar.set(undefined);
        spectator.detectChanges();
        expect('.environment-bar').not.toExist();
        expect(document.body.classList).not.toContain('has-environment-bar');
    });
});
