import type { Mock } from 'vitest';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { SETTING_KEYS } from '@placeos/common';
import { MockComponent, MockDirective, MockModule, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';
import { signal } from '@angular/core';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { LockerListFieldComponent } from '../lib/locker-list-field.component';

describe('LockerListFieldComponent', () => {
    let spectator: Spectator<LockerListFieldComponent>;
    const createComponent = createComponentFactory({
        component: LockerListFieldComponent,
        providers: [
            {
                provide: MatDialog,
                useValue: {
                    open: vi.fn(() => ({
                        afterClosed: () => of([{ id: `1` }]),
                        componentInstance: { selected: signal([]) },
                    })),
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
            MockPipe(TranslatePipe, (v) => v),
            MockPipe(LevelPipe, (v) => ({ display_name: v, name: v }) as any),
        ],
        imports: [MockModule(MatCheckboxModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow adding lockers', () => {
        expect(spectator.query('button[name="add-locker"]')).toExist();
        spectator.click('button[name="add-locker"]');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledTimes(1);
    });

    it('should display selected lockers', () => {
        expect(spectator.query('div[locker]')).not.toExist();
        spectator.component.setValue([{ id: 'a' }] as any);
        spectator.detectChanges();
        expect(spectator.queryAll('div[locker]').length).toBe(1);
        spectator.component.setValue([{ id: 'a' }, { id: 'b' }] as any);
        spectator.detectChanges();
        expect(spectator.queryAll('div[locker]').length).toBe(2);
    });

    it('should allow removing lockers', () => {
        spectator.component.setValue([{ id: 'a' }] as any);
        spectator.detectChanges();
        expect(spectator.query('button[name="remove-locker"]')).toExist();
        spectator.click('button[name="remove-locker"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[locker]').length).toBe(0);
    });

    it('should apply the dialog result on change', () => {
        (spectator.inject(MatDialog).open as any).mockImplementation(() => ({
            afterClosed: () => of([{ id: 'x' }, { id: 'y' }]),
            componentInstance: { selected: signal([]) },
        }));
        spectator.click('button[name="add-locker"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[locker]').length).toBe(2);
        expect(spectator.component.items().map((_) => _.id)).toEqual([
            'x',
            'y',
        ]);
    });

    it('should fall back to component selection when dialog returns nothing', () => {
        (spectator.inject(MatDialog).open as any).mockImplementation(() => ({
            afterClosed: () => of(undefined),
            componentInstance: { selected: signal([{ id: 'fallback' }]) },
        }));
        spectator.click('button[name="add-locker"]');
        spectator.detectChanges();
        expect(spectator.component.items().map((_) => _.id)).toEqual([
            'fallback',
        ]);
    });

    it('should notify the form control when the value changes', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue([{ id: 'a' }] as any);
        expect(on_change).toHaveBeenCalledWith([{ id: 'a' }]);
    });

    it('should update disabled state via the control value accessor', () => {
        expect(spectator.component.disabled()).toBe(false);
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled()).toBe(true);
    });

    it('should render feature checkboxes and toggle selection', () => {
        spectator.setInput('features', ['power', 'usb']);
        spectator.component.setValue([{ id: 'a' }] as any);
        spectator.detectChanges();
        const boxes = spectator.queryAll('mat-checkbox');
        expect(boxes.length).toBe(2);
        spectator.component.setFeatures('power', true);
        expect(spectator.component.selected_features()).toEqual(['power']);
        spectator.component.setFeatures('usb', true);
        expect(spectator.component.selected_features()).toEqual([
            'power',
            'usb',
        ]);
        spectator.component.setFeatures('power', false);
        expect(spectator.component.selected_features()).toEqual(['usb']);
    });

    it('should show the accessible indicator for accessible lockers', () => {
        spectator.component.setValue([{ id: 'a', accessible: true }] as any);
        spectator.detectChanges();
        expect(spectator.query('icon.text-info')).toExist();
    });

    it('should add a favourite when toggling an unfavourited locker', () => {
        const settings = spectator.inject(SettingsService);
        spectator.component.toggleFavourite({ id: 'a' } as any);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            SETTING_KEYS.FAVORITE_LOCKERS,
            ['a'],
        );
    });

    it('should remove a favourite when toggling a favourited locker', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockReturnValue(['a', 'b']);
        spectator.component.toggleFavourite({ id: 'a' } as any);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            SETTING_KEYS.FAVORITE_LOCKERS,
            ['b'],
        );
    });
});
