import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SettingsService } from '@placeos/common';
import { DeskHeightPresetsComponent } from '../lib/desk-height-presets.component';

describe('DeskHeightPresetsComponent', () => {
    let spectator: Spectator<DeskHeightPresetsComponent>;

    const settings_mock = {
        get: jest.fn(),
        saveUserSetting: jest.fn(),
    };

    const createComponent = createComponentFactory({
        component: DeskHeightPresetsComponent,
        providers: [{ provide: SettingsService, useValue: settings_mock }],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        settings_mock.get.mockReturnValue(undefined);
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should load stored heights from settings', () => {
        settings_mock.get.mockImplementation((name: string) =>
            name === 'desk_sitting_height' ? 65 : 110,
        );
        spectator = createComponent();
        expect(spectator.component.desk_sitting_height()).toBe(65);
        expect(spectator.component.desk_standing_height()).toBe(110);
        expect(spectator.component.not_set()).toBe(false);
    });

    it('should fallback to default heights when none are stored', () => {
        spectator = createComponent();
        expect(spectator.component.desk_sitting_height()).toBe(71);
        expect(spectator.component.desk_standing_height()).toBe(101);
        expect(spectator.component.not_set()).toBe(true);
    });

    it('should warn about unset heights when closable', () => {
        spectator = createComponent();
        expect('.bg-warning').not.toExist();
        spectator.component.show_close.set(true);
        spectator.detectChanges();
        expect('.bg-warning').toExist();
    });

    it('should save heights and emit close on save', () => {
        spectator = createComponent({ props: { show_close: true } });
        const spy = jest.fn();
        spectator.component.close.subscribe(spy);
        spectator.component.desk_sitting_height.set(72.5);
        spectator.component.desk_standing_height.set(105);
        spectator.click('button[btn]');
        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'desk_sitting_height',
            72.5,
        );
        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'desk_standing_height',
            105,
        );
        expect(spy).toHaveBeenCalled();
    });

    it('should save individual settings when changed', () => {
        spectator = createComponent();
        spectator.component.saveSetting('desk_sitting_height', 70);
        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'desk_sitting_height',
            70,
        );
    });

    it('should format slider labels as centimetres', () => {
        spectator = createComponent();
        expect(spectator.component.formatLabel(72)).toBe('72.0cm');
        expect(spectator.component.formatLabel(101.5)).toBe('101.5cm');
    });
});
