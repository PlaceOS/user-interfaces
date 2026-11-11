import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { DeskBookingComponent } from '../app/desk-booking.component';
import { FooterMenuComponent } from '../app/footer-menu.component';

describe('DeskBookingComponent', () => {
    let spectator: Spectator<DeskBookingComponent>;
    let router: Router;
    const settings = { get: vi.fn() };
    const createComponent = createComponentFactory({
        component: DeskBookingComponent,
        declarations: [MockComponent(FooterMenuComponent)],
        providers: [
            { provide: SettingsService, useValue: settings },
            { provide: Router, useValue: { navigate: vi.fn() } },
        ],
    });

    /** Create the component with `delay` as the kiosk reset setting */
    const setup = (delay: number | undefined) => {
        settings.get.mockReturnValue(delay);
        spectator = createComponent();
        router = spectator.inject(Router);
    };

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
    });

    afterEach(() => vi.useRealTimers());

    it('should return to the map after the configured reset delay', async () => {
        setup(2000);
        expect(settings.get).toHaveBeenCalledWith('app.kiosk_reset_delay');
        await vi.advanceTimersByTimeAsync(1999);
        expect(router.navigate).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(1);
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
    });

    it('should use a five minute delay when no setting is set', async () => {
        setup(undefined);
        await vi.advanceTimersByTimeAsync(5 * 60 * 1000 - 1);
        expect(router.navigate).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(1);
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
    });

    it('should restart the delay when the countdown is reset', async () => {
        setup(2000);
        await vi.advanceTimersByTimeAsync(1500);
        spectator.component.resetCountdown();
        await vi.advanceTimersByTimeAsync(1500);
        expect(router.navigate).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(500);
        expect(router.navigate).toHaveBeenCalledTimes(1);
    });
});
