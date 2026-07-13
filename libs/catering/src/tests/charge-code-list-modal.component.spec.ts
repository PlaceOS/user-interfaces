import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CateringStateService } from '../lib/catering-state.service';
import { ChargeCodeListModalComponent } from '../lib/charge-code-list-modal.component';

describe('ChargeCodeListModalComponent', () => {
    let spectator: Spectator<ChargeCodeListModalComponent>;
    const charge_codes = signal<string[]>([]);
    const saveSettings = vi.fn().mockResolvedValue({});
    const dialog_close = vi.fn();
    // Fake notification outlet so notifyError() is observable (a null outlet
    // no-ops); notifyError runs for real one layer above this spy.
    const notify_open = vi.fn(() => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    }));

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
        notify_open.mockClear();
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = createComponent();
    });

    afterEach(() => setNotifyOutlet(null, true));

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
        // downloadFile builds an anchor with the filename + encoded contents
        // and clicks it; intercept the DOM one layer below the real helper.
        const real_create = document.createElement.bind(document);
        let anchor: HTMLAnchorElement | null = null;
        const create_spy = vi
            .spyOn(document, 'createElement')
            .mockImplementation((tag: string) => {
                const el = real_create(tag);
                if (tag === 'a') {
                    anchor = el as HTMLAnchorElement;
                    anchor.click = vi.fn();
                }
                return el;
            });
        spectator.component.downloadTemplate();
        create_spy.mockRestore();
        expect(anchor).toBeTruthy();
        expect(anchor!.getAttribute('download')).toBe('template.csv');
        expect(anchor!.click).toHaveBeenCalled();
        const href = decodeURIComponent(anchor!.getAttribute('href') || '');
        // href is either a data: url with the encoded template or a blob: url
        if (href.startsWith('data:')) {
            expect(href).toContain('code,description');
        }
    });

    it('should reject non-csv files', () => {
        const file = new File(['data'], 'codes.txt', { type: 'text/plain' });
        spectator.component.addCodesFromFile({
            target: { files: [file], value: 'codes.txt' },
        });
        expect(notify_open).toHaveBeenCalled();
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
