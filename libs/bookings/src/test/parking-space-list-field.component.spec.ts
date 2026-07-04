import { MatDialog } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SETTING_KEYS } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { ParkingSpaceListFieldComponent } from '../lib/parking-space-list-field.component';

describe('ParkingSpaceListFieldComponent', () => {
    let spectator: Spectator<ParkingSpaceListFieldComponent>;
    const createComponent = createComponentFactory({
        component: ParkingSpaceListFieldComponent,
        providers: [
            {
                provide: MatDialog,
                useValue: {
                    open: jest.fn(() => ({
                        afterClosed: () => of([{ id: '1', name: 'Bay 1' }]),
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
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow adding spaces via the dialog', () => {
        expect(spectator.query('button[add-space]')).toExist();
        spectator.click('button[add-space]');
        const dialog = spectator.inject(MatDialog);
        expect(dialog.open).toHaveBeenCalledTimes(1);
        const config = (dialog.open as jest.Mock).mock.calls[0][1];
        expect(config.data.options.capacity).toBe(3);
    });

    it('should update the value with spaces returned from the dialog', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.click('button[add-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(1);
        expect(on_change).toHaveBeenCalledWith([{ id: '1', name: 'Bay 1' }]);
    });

    it('should not overwrite the value when the dialog is dismissed', () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as jest.Mock).mockReturnValueOnce({
            afterClosed: () => of(undefined),
        });
        spectator.component.setValue([{ id: 'existing' } as any]);
        spectator.detectChanges();
        spectator.click('button[add-space]');
        spectator.detectChanges();
        expect(spectator.component.spaces()).toEqual([{ id: 'existing' }]);
    });

    it('should display selected spaces', () => {
        expect(spectator.query('div[space]')).not.toExist();
        spectator.component.setValue([
            { id: 'a', name: 'Bay A' } as any,
            { id: 'b', name: 'Bay B' } as any,
        ]);
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(2);
    });

    it('should allow removing a selected space', () => {
        spectator.component.setValue([
            { id: 'a', name: 'Bay A' } as any,
            { id: 'b', name: 'Bay B' } as any,
        ]);
        spectator.detectChanges();
        spectator.component.removeResource({ id: 'a' } as any);
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(1);
        expect(spectator.component.spaces()).toEqual([
            { id: 'b', name: 'Bay B' },
        ]);
    });

    it('should add a space to favourites when toggled on', () => {
        const settings = spectator.inject(SettingsService);
        spectator.component.toggleFavourite({ id: 'space-1' } as any);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            SETTING_KEYS.FAVORITE_PARKING_SPACES,
            ['space-1'],
        );
    });

    it('should remove a space from favourites when toggled off', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation((key: string) =>
            key === SETTING_KEYS.FAVORITE_PARKING_SPACES
                ? ['space-1', 'space-2']
                : undefined,
        );
        spectator.detectChanges();
        spectator.component.toggleFavourite({ id: 'space-1' } as any);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            SETTING_KEYS.FAVORITE_PARKING_SPACES,
            ['space-2'],
        );
    });

    it('should reflect disabled state changes', () => {
        expect(spectator.component.disabled()).toBe(false);
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled()).toBe(true);
    });
});
