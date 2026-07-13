import type { Mock } from 'vitest';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockModule, MockProvider } from 'ng-mocks';

import { DeskSettingsModalComponent } from '../lib/desk-settings-modal.component';

describe('DeskSettingsModalComponent', () => {
    let spectator: Spectator<DeskSettingsModalComponent>;
    const dialog_ref = { close: vi.fn() };
    const desk_module = { execute: vi.fn(async () => true) };
    const org = {
        module: vi.fn(() => desk_module),
    };
    const createComponent = createComponentFactory({
        component: DeskSettingsModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { id: 'desk-1' } },
            { provide: MatDialogRef, useValue: dialog_ref },
            MockProvider(OrganisationService as any, org as any),
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
        imports: [
            FormsModule,
            MockModule(MatDialogModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatSliderModule),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should expose the desk id from dialog data', () => {
        expect(spectator.component.desk_id).toBe('desk-1');
    });

    it('should apply the standing preset height when selected', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'desk_standing_height' ? 105 : undefined,
        );
        spectator.component.setPreset('standing');
        expect(spectator.component.preset()).toBe('standing');
        expect(spectator.component.height()).toBe(105);
    });

    it('should apply the sitting preset height when selected', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'desk_sitting_height' ? 68 : undefined,
        );
        spectator.component.setPreset('sitting');
        expect(spectator.component.preset()).toBe('sitting');
        expect(spectator.component.height()).toBe(68);
    });

    it('should clear the preset when a manual height is entered', () => {
        spectator.component.updateHeight(85);
        expect(spectator.component.height()).toBe(85);
        expect(spectator.component.preset()).toBe(null);
    });

    it('should mark height as matching preset when updated to preset value', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'desk_standing_height' ? 102 : undefined,
        );
        spectator.component.updateHeight(102);
        expect(spectator.component.preset()).toBe('standing');
    });

    it('should switch to preset editing view', () => {
        expect('desk-height-presets').not.toExist();
        spectator.component.edit_presets.set(true);
        spectator.detectChanges();
        expect('desk-height-presets').toExist();
    });

    it('should send desk height to the module and close on apply', async () => {
        spectator.component.height.set(90);
        await spectator.component.setDeskHeight();
        expect(org.module).toHaveBeenCalledWith('desks', 'DeskControl');
        expect(desk_module.execute).toHaveBeenCalledWith('set_desk_height', [
            'desk-1',
            90,
        ]);
        expect(localStorage.getItem('PLACEOS.last_desk_height')).toBe('90');
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should close without erroring when no desk module is available', async () => {
        org.module.mockReturnValueOnce(null);
        await spectator.component.setDeskHeight();
        expect(desk_module.execute).not.toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should format slider labels with a cm suffix', () => {
        expect(spectator.component.formatLabel(72)).toBe('72.0cm');
    });
});
