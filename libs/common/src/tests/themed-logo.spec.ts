import { settingSignal, themedLogo } from '../lib/settings.service';
import type { ApplicationIcon } from '../lib/types';

// No SettingsService exists in this file, so the setting signals keep the
// values that the tests set.
describe('themedLogo', () => {
    const allow_dark_mode = settingSignal('allow_dark_mode', false);
    const theme = settingSignal('theme', 'light', true);
    const logo_light = settingSignal<string | ApplicationIcon>('logo_light');
    const logo_dark = settingSignal<string | ApplicationIcon>('logo_dark');
    const logo = themedLogo();

    beforeEach(() => {
        allow_dark_mode.set(true);
        theme.set('light');
        logo_light.set('light.svg');
        logo_dark.set({ type: 'img', src: 'dark.svg' });
    });

    it('should return a string logo for the light theme', () => {
        expect(logo()).toBe('light.svg');
    });

    it('should return the src of an icon logo when the theme changes to dark', () => {
        theme.set('dark');
        expect(logo()).toBe('dark.svg');
        theme.set('light');
        expect(logo()).toBe('light.svg');
    });

    it('should use the light logo when dark mode is not allowed', () => {
        theme.set('dark');
        allow_dark_mode.set(false);
        expect(logo()).toBe('light.svg');
    });

    it('should return an empty string when the logo is not set', () => {
        logo_light.set(undefined);
        expect(logo()).toBe('');
        logo_light.set({});
        expect(logo()).toBe('');
    });
});
