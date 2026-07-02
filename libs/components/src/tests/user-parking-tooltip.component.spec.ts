import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { LocaleService, SettingsService, notifySuccess } from '@placeos/common';
import { of } from 'rxjs';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
}));

import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { UserParkingTooltipComponent } from '../lib/user-parking-tooltip.component';

describe('UserParkingTooltipComponent', () => {
    let spectator: Spectator<UserParkingTooltipComponent>;
    const settings = {
        initialised: of(true),
        get: jest.fn(() => 'ABC-123'),
        saveUserSetting: jest.fn(),
    };
    const tooltip = { data: null, close: jest.fn() };
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
        jest.clearAllMocks();
        settings.get.mockReturnValue('ABC-123');
        spectator = createComponent();
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
        expect(notifySuccess).toHaveBeenCalled();
        expect(tooltip.close).toHaveBeenCalled();
    });

    it('should not save an empty plate number but still close', async () => {
        settings.get.mockReturnValue('');
        await spectator.fixture.whenStable();
        spectator.component.plate_number.set('');
        spectator.click('button[btn]');
        expect(settings.saveUserSetting).not.toHaveBeenCalled();
        expect(notifySuccess).toHaveBeenCalled();
        expect(tooltip.close).toHaveBeenCalled();
    });
});
