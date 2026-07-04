import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    notifyError: jest.fn(),
}));

import * as common from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CateringStateService } from '../lib/catering-state.service';
import { ChargeCodeListModalComponent } from '../lib/charge-code-list-modal.component';

describe('ChargeCodeListModalComponent', () => {
    let spectator: Spectator<ChargeCodeListModalComponent>;
    const charge_codes = signal<string[]>([]);
    const saveSettings = jest.fn().mockResolvedValue({});
    const dialog_close = jest.fn();

    const createComponent = createComponentFactory({
        component: ChargeCodeListModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(CateringStateService, {
                charge_codes,
                saveSettings,
            } as any),
            MockProvider(MatDialogRef, { close: dialog_close } as any),
        ],
        imports: [
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatTooltipModule,
        ],
    });

    beforeEach(() => {
        charge_codes.set(['CODE-1', 'CODE-2']);
        saveSettings.mockClear();
        dialog_close.mockClear();
        (common.downloadFile as jest.Mock).mockClear();
        (common.notifyError as jest.Mock).mockClear();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should load charge codes from state on init', () => {
        expect(spectator.component.charge_codes()).toEqual(['CODE-1', 'CODE-2']);
    });

    it('should append a new empty code', () => {
        spectator.component.newCode();
        expect(spectator.component.charge_codes()).toEqual([
            'CODE-1',
            'CODE-2',
            '',
        ]);
    });

    it('should remove a code by index', () => {
        spectator.component.removeCode(0);
        expect(spectator.component.charge_codes()).toEqual(['CODE-2']);
    });

    it('should update a code at an index', () => {
        spectator.component.updateCode(1, 'CODE-9');
        expect(spectator.component.charge_codes()).toEqual([
            'CODE-1',
            'CODE-9',
        ]);
    });

    it('should save trimmed non-empty codes and close', async () => {
        spectator.component.charge_codes.set(['CODE-1', '', '  ', 'CODE-2']);
        await spectator.component.saveChargeCodes();
        expect(saveSettings).toHaveBeenCalledWith({
            charge_codes: ['CODE-1', 'CODE-2'],
        });
        expect(dialog_close).toHaveBeenCalled();
    });

    it('should download a CSV template', () => {
        spectator.component.downloadTemplate();
        expect(common.downloadFile).toHaveBeenCalledWith(
            'template.csv',
            expect.stringContaining('code,description'),
        );
    });

    it('should reject non-csv files', () => {
        const file = new File(['data'], 'codes.txt', { type: 'text/plain' });
        spectator.component.addCodesFromFile({
            target: { files: [file], value: 'codes.txt' },
        });
        expect(common.notifyError).toHaveBeenCalled();
        expect(spectator.component.charge_codes()).toEqual(['CODE-1', 'CODE-2']);
    });

    it('should import unique codes from a CSV file', async () => {
        const csv = 'code,description\nCODE-3,Third\nCODE-1,Duplicate';
        const file = new File([csv], 'codes.csv', { type: 'text/csv' });
        const target = { files: [file], value: 'codes.csv' };
        spectator.component.addCodesFromFile({ target });
        await new Promise((resolve) => setTimeout(resolve, 50));
        expect(spectator.component.charge_codes()).toEqual([
            'CODE-1',
            'CODE-2',
            'CODE-3',
        ]);
        expect(target.value).toBe('');
    });
});
