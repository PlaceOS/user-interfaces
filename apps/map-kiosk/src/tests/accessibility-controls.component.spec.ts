import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockModule, MockProvider } from 'ng-mocks';

import { AccessibilityControlsComponent } from '../app/accessibility-controls.component';

const setting_signals: Record<string, ReturnType<typeof signal>> = {
    allow_dark_mode: signal<any>(false),
    accessible: signal<any>(false),
    font_size: signal<any>(16),
};
const theme = signal('light');

describe('AccessibilityControlsComponent', () => {
    let spectator: Spectator<AccessibilityControlsComponent>;
    const createComponent = createComponentFactory({
        component: AccessibilityControlsComponent,
        providers: [
            MockProvider(SettingsService, {
                signal: vi.fn((name: string) => setting_signals[name]) as any,
                theme_signal: theme as any,
                setTheme: vi.fn(),
                saveUserSetting: vi.fn(),
            }),
        ],
        imports: [MockModule(MatSlideToggleModule), FormsModule],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setting_signals.allow_dark_mode.set(false);
        setting_signals.accessible.set(false);
        setting_signals.font_size.set(16);
        theme.set('light');
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should hide the dark mode toggle when not allowed', () => {
        expect(spectator.component.can_change_dark_mode()).toBe(false);
        expect('button').not.toExist();
    });

    it('should show the dark mode toggle when allowed', () => {
        setting_signals.allow_dark_mode.set(true);
        spectator.detectChanges();
        expect(spectator.component.can_change_dark_mode()).toBe(true);
        expect('button').toContainText('Dark Mode');
    });

    it('should reflect the active theme in the dark_mode state', () => {
        setting_signals.allow_dark_mode.set(true);
        theme.set('dark');
        spectator.detectChanges();
        expect(spectator.component.dark_mode()).toBe(true);
        theme.set('light');
        spectator.detectChanges();
        expect(spectator.component.dark_mode()).toBe(false);
    });

    it('should enable dark mode when toggled on', async () => {
        vi.useFakeTimers();
        const settings = spectator.inject(SettingsService);
        setting_signals.allow_dark_mode.set(true);
        theme.set('light');
        spectator.detectChanges();
        spectator.component.setDarkMode(true);
        expect(settings.setTheme).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(100);
        expect(settings.setTheme).toHaveBeenCalledWith('dark');
    });

    it('should disable dark mode when toggled off', async () => {
        vi.useFakeTimers();
        const settings = spectator.inject(SettingsService);
        setting_signals.allow_dark_mode.set(true);
        theme.set('dark');
        spectator.detectChanges();
        spectator.component.setDarkMode(false);
        await vi.advanceTimersByTimeAsync(100);
        expect(settings.setTheme).toHaveBeenCalledWith('light');
    });

    it('should not change theme when already in the requested state', async () => {
        vi.useFakeTimers();
        const settings = spectator.inject(SettingsService);
        theme.set('dark');
        spectator.component.setDarkMode(true);
        await vi.advanceTimersByTimeAsync(100);
        expect(settings.setTheme).not.toHaveBeenCalled();
    });

    it('should save user settings after a delay', async () => {
        vi.useFakeTimers();
        const settings = spectator.inject(SettingsService);
        spectator.component.applySetting('font_size', 20);
        expect(settings.saveUserSetting).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(1000);
        expect(settings.saveUserSetting).toHaveBeenCalledWith('font_size', 20);
    });

    it('should fall back to a default font size', () => {
        setting_signals.font_size.set(0);
        spectator.detectChanges();
        expect(spectator.component.font_size()).toBe(16);
    });
});
