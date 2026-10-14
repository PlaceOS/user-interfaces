import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { settingSignal, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import {
    LandingWorldClockComponent,
    WORLD_CLOCK_KEY,
} from '../../app/landing-new/landing-world-clock.component';

describe('LandingWorldClockComponent', () => {
    let spectator: Spectator<LandingWorldClockComponent>;
    const createComponent = createComponentFactory({
        component: LandingWorldClockComponent,
        providers: [
            MockProvider(SettingsService, { saveUserSetting: vi.fn() }),
        ],
    });
    const zones = settingSignal<string[]>(WORLD_CLOCK_KEY, [], true);
    const use_24_hour_time = settingSignal<boolean>('use_24_hour_time', false);

    /** Time zones of the clocks on the page, without the local clock */
    const cityZones = () =>
        spectator
            .queryAll('[data-zone]')
            .slice(1)
            .map((_) => _.getAttribute('data-zone'));

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2026-01-15T12:00:00Z'));
        zones.set(['Asia/Tokyo', 'America/New_York']);
        use_24_hour_time.set(true);
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should show the local time, then the time in each city', () => {
        expect(spectator.queryAll('[data-zone]').length).toBe(3);
        expect(cityZones()).toEqual(['Asia/Tokyo', 'America/New_York']);
        expect(spectator.query('[data-zone="Asia/Tokyo"]')).toHaveText('21:00');
        expect(spectator.query('[data-zone="Asia/Tokyo"]')).toHaveText(
            'UTC+09:00',
        );
        expect(spectator.query('[data-zone="America/New_York"]')).toHaveText(
            '07:00',
        );
    });

    it('should use the 12 hour clock when the setting is off', () => {
        use_24_hour_time.set(false);
        spectator.detectChanges();
        expect(spectator.query('[data-zone="Asia/Tokyo"]')).toHaveText(
            '9:00 PM',
        );
    });

    it('should ignore a saved time zone that is not in the city list', () => {
        zones.set(['Not/AZone', 'Asia/Tokyo', 'Asia/Tokyo']);
        spectator.detectChanges();
        expect(cityZones()).toEqual(['Asia/Tokyo']);
    });

    it('should save the cities when the user adds or removes a city', () => {
        const settings = spectator.inject(SettingsService);
        spectator.component.addCity('Europe/Paris');
        expect(settings.saveUserSetting).toHaveBeenCalledWith(WORLD_CLOCK_KEY, [
            'Asia/Tokyo',
            'America/New_York',
            'Europe/Paris',
        ]);
        spectator.click(
            '[data-zone="Asia/Tokyo"] button[name="remove-world-clock-city"]',
        );
        expect(settings.saveUserSetting).toHaveBeenLastCalledWith(
            WORLD_CLOCK_KEY,
            ['America/New_York'],
        );
    });
});
