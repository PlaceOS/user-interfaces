import { WritableSignal, signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SettingsService } from '@placeos/common';
import { AccessibilityTooltipComponent } from '../lib/accessibility-tooltip.component';
import { CustomTooltipData } from '../lib/custom-tooltip.component';

describe('AccessibilityTooltipComponent', () => {
    let spectator: Spectator<AccessibilityTooltipComponent>;

    const theme = signal<string>('light');
    let setting_signals: Record<string, WritableSignal<any>> = {};
    const settings_mock = {
        signal: jest.fn((name: string, default_value?: any) => {
            if (!setting_signals[name]) {
                setting_signals[name] = signal(default_value);
            }
            return setting_signals[name];
        }),
        theme_signal: theme,
        setTheme: jest.fn((t: string) => theme.set(t)),
        saveUserSetting: jest.fn(),
        updateLocatable: jest.fn(),
    };
    const tooltip_mock = { data: null, close: jest.fn() };

    const createComponent = createComponentFactory({
        component: AccessibilityTooltipComponent,
        providers: [
            { provide: SettingsService, useValue: settings_mock },
            { provide: CustomTooltipData, useValue: tooltip_mock },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        setting_signals = {};
        theme.set('light');
        spectator = createComponent();
    });

    afterEach(() => jest.useRealTimers());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should only show dark mode option when allowed', () => {
        expect(spectator.queryAll('settings-toggle')).toHaveLength(2);
        setting_signals['allow_dark_mode'].set(true);
        spectator.detectChanges();
        expect(spectator.queryAll('settings-toggle')).toHaveLength(3);
    });

    it('should update theme when toggling dark mode', () => {
        expect(spectator.component.dark_mode()).toBe(false);
        spectator.component.setDarkMode(true);
        expect(settings_mock.setTheme).toHaveBeenCalledWith('dark');
        expect(spectator.component.dark_mode()).toBe(true);
        spectator.component.setDarkMode(false);
        expect(settings_mock.setTheme).toHaveBeenCalledWith('light');
        expect(spectator.component.dark_mode()).toBe(false);
    });

    it('should save accessible setting and show text size options', () => {
        jest.useFakeTimers();
        expect('mat-slider').not.toExist();
        spectator.component.applySetting('accessible', true);
        jest.advanceTimersByTime(500);
        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'accessible',
            true,
        );
        expect(spectator.component.accessible()).toBe(true);
        spectator.detectChanges();
        expect('mat-slider').toExist();
    });

    it('should update locatable state of the user', () => {
        expect(spectator.component.locatable()).toBeFalsy();
        spectator.component.setLocatable(true);
        expect(settings_mock.updateLocatable).toHaveBeenCalledWith(true);
        expect(spectator.component.locatable()).toBe(true);
    });

    it('should close the tooltip when the header is clicked', () => {
        spectator.click('div[matRipple]');
        expect(tooltip_mock.close).toHaveBeenCalled();
    });
});
