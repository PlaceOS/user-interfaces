import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { InductionSettingsModalComponent } from '../../app/building-manager/induction-settings-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('InductionSettingsModalComponent', () => {
    let spectator: Spectator<InductionSettingsModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: InductionSettingsModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, 'bld-1' as any),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn(() => undefined) }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
            }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client.showMetadata as any).mockReset();
        (ts_client.updateMetadata as any).mockReset();
        (ts_client.updateMetadata as any).mockResolvedValue({ id: 'meta' });
        spectator = createComponent();
        (spectator.inject(MatDialogRef).close as any).mockClear();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    it('should merge org and building metadata with the building taking precedence', async () => {
        (ts_client.showMetadata as any).mockImplementation((zone) => {
            if (zone === 'bld-1') {
                return Promise.resolve({
                    details: {
                        induction_details: 'Building specific induction',
                        induction_enabled: true,
                    },
                });
            }
            return Promise.resolve({
                details: {
                    induction_details: 'Org default induction',
                    induction_enabled: false,
                },
            });
        });

        await spectator.component.loadSettings();

        expect(spectator.component.induction_details()).toBe(
            'Building specific induction',
        );
        expect(spectator.component.is_enabled()).toBe(true);
        expect(spectator.component.loading()).toBe('');
    });

    it('should default to empty details and disabled when metadata is empty', async () => {
        (ts_client.showMetadata as any).mockResolvedValue({ details: {} });

        await spectator.component.loadSettings();

        expect(spectator.component.induction_details()).toBe('');
        expect(spectator.component.is_enabled()).toBe(false);
    });

    it('should write induction details to both visitor-kiosk and concierge metadata on save', async () => {
        (ts_client.showMetadata as any).mockResolvedValue({
            name: '',
            description: '',
            details: {},
        });
        spectator.component.induction_details.set('Please sign in at reception');
        spectator.component.is_enabled.set(true);

        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledTimes(2);
        const bodies = (ts_client.updateMetadata as any).mock.calls.map(
            (_) => _[1].details,
        );
        for (const details of bodies) {
            expect(details.induction_details).toBe('Please sign in at reception');
            expect(details.induction_enabled).toBe(true);
        }
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should notify error and keep the dialog open when saving fails', async () => {
        (ts_client.showMetadata as any).mockResolvedValue({
            name: '',
            description: '',
            details: {},
        });
        (ts_client.updateMetadata as any).mockRejectedValue('failure');
        vi.spyOn(console, 'error').mockImplementation(() => undefined);

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });
});
