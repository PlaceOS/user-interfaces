import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreDeviceInfoComponent } from '../lib/explore-device-info.component';

vi.mock('@placeos/ts-client');

import { MAP_FEATURE_DATA, SettingsService } from '@placeos/common';
import { getModule } from '@placeos/ts-client';

describe('ExploreDeviceInfoComponent', () => {
    let spectator: Spectator<ExploreDeviceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeviceInfoComponent,
        ...ngMocks.guts(null, [PortalModule, OverlayModule]),
        providers: [
            MockProvider(MAP_FEATURE_DATA, {
                mac: 'User',
                variance: 10,
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    /** Create the component with the given device data and hidden fields */
    const createFor = (data: Record<string, unknown>, hidden?: string[]) =>
        createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, {
                    mac: 'aa:bb',
                    variance: 1,
                    system: 'sys-1',
                    ...data,
                }),
                MockProvider(SettingsService, {
                    get: vi.fn((key: string) =>
                        key === 'app.explore.hide_device_fields'
                            ? hidden
                            : undefined,
                    ) as SettingsService['get'],
                }),
            ],
        });
    const secondsAgo = (minutes: number) =>
        Math.floor(Date.now() / 1000) - minutes * 60;

    beforeEach(() => vi.mocked(getModule).mockReset());

    it('should show location and range', () => {
        spectator = createComponent();
        expect('[name="dot"]').toExist();
        spectator.query('[shadow]').dispatchEvent(new MouseEvent('mouseenter'));
        spectator.detectChanges();
        expect('[name="radius"]').toExist();
    });

    it('should open the device tooltip from the visible indicator', () => {
        vi.useFakeTimers();
        spectator = createComponent();
        spectator
            .query('[shadow]')
            .dispatchEvent(new MouseEvent('pointerenter'));
        vi.advanceTimersByTime(100);
        expect(document.querySelector('[name="device-info"]')).not.toBeNull();
        vi.useRealTimers();
    });

    it.each([
        [5, undefined, 'rgb(67, 160, 71)'],
        [15, undefined, 'rgb(255, 179, 0)'],
        [25, undefined, 'rgb(229, 57, 53)'],
        [25, 'blue', 'blue'],
    ])(
        'should colour the dot of a device seen %i minutes ago (bg_color %s) as %s',
        (minutes, bg_color, colour) => {
            spectator = createFor({ last_seen: secondsAgo(minutes), bg_color });
            expect(
                spectator.query<HTMLElement>('[name="dot"]').style
                    .backgroundColor,
            ).toBe(colour);
        },
    );

    it('should leave hidden device fields out of the tooltip', () => {
        vi.useFakeTimers();
        spectator = createFor(
            { manufacturer: 'Acme', os: 'Linux', ssid: 'Office' },
            ['mac', 'os'],
        );
        spectator
            .query('[shadow]')
            .dispatchEvent(new MouseEvent('pointerenter'));
        vi.advanceTimersByTime(100);
        const tooltip = document.querySelector('[name="device-info"]');
        expect(tooltip.textContent).not.toContain('aa:bb');
        expect(tooltip.querySelector('[os]')).toBeNull();
        expect(tooltip.querySelector('[type]')).toHaveText('Acme');
        expect(tooltip.querySelector('[ssid]')).toHaveText('Office');
        vi.useRealTimers();
    });

    it('should load the owner of the device only once', async () => {
        const execute = vi.fn(async () => ({ assigned_to: 'jo@place.tech' }));
        vi.mocked(getModule).mockReturnValue({ execute } as any);
        spectator = createFor({});

        await spectator.component.loadUser();
        await spectator.component.loadUser();

        expect(getModule).toHaveBeenCalledWith('sys-1', 'LocationServices');
        expect(execute).toHaveBeenCalledOnce();
        expect(execute).toHaveBeenCalledWith('check_ownership_of', ['aa:bb']);
        expect(spectator.component.username()).toBe('jo@place.tech');
    });

    it('should clear the owner when the ownership lookup fails', async () => {
        const execute = vi.fn(async () => {
            throw new Error('offline');
        });
        vi.mocked(getModule).mockReturnValue({ execute } as any);
        spectator = createFor({});

        await spectator.component.loadUser();

        expect(spectator.component.username()).toBe('');
    });
});
