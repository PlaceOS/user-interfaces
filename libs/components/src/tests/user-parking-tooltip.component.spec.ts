import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { LocaleService, SettingsService } from '@placeos/common';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { of } from 'rxjs';

import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { UserParkingTooltipComponent } from '../lib/user-parking-tooltip.component';

// `notifySuccess` is a real workspace fn that opens on the notify outlet; a
// fake outlet lets us assert that a success notification was raised.
const notify_open = vi.fn(() => ({ onAction: () => of(), dismiss: vi.fn() }));

describe('UserParkingTooltipComponent', () => {
    let spectator: Spectator<UserParkingTooltipComponent>;
    const settings = {
        initialised: of(true),
        get: vi.fn(() => 'ABC-123'),
        saveUserSetting: vi.fn(),
    };
    const tooltip = { data: null, close: vi.fn() };
    const createComponent = createComponentFactory({
        component: UserParkingTooltipComponent,
        providers: [
            { provide: SettingsService, useValue: settings },
            { provide: CustomTooltipData, useValue: tooltip },
            { provide: LocaleService, useValue: { get: (key: string) => key } },
            provideNoopAnimations(),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        settings.get.mockReturnValue('ABC-123');
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should load the saved plate number on init', async () => {
        await spectator.fixture.whenStable();
        expect(settings.get).toHaveBeenCalledWith('plate_number');
        expect(spectator.component.plate_number()).toBe('ABC-123');
    });

    it('should save the plate number and close the tooltip', async () => {
        await spectator.fixture.whenStable();
        spectator.component.plate_number.set('XYZ-789');
        spectator.click('button[btn]');
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'plate_number',
            'XYZ-789',
        );
        expect(notify_open).toHaveBeenCalled();
        expect(tooltip.close).toHaveBeenCalled();
    });

    it('should not save an empty plate number but still close', async () => {
        settings.get.mockReturnValue('');
        await spectator.fixture.whenStable();
        spectator.component.plate_number.set('');
        spectator.click('button[btn]');
        expect(settings.saveUserSetting).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalled();
        expect(tooltip.close).toHaveBeenCalled();
    });
});
