import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { InductionSettingsModalComponent } from '../../app/building-manager/induction-settings-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
    notifyError: jest.fn(),
}));
jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
    updateMetadata: jest.fn(),
}));

describe('InductionSettingsModalComponent', () => {
    let spectator: Spectator<InductionSettingsModalComponent>;

    const createComponent = createComponentFactory({
        component: InductionSettingsModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, 'bld-1'),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn(() => undefined) }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
            }),
        ],
    });

    beforeEach(() => {
        (common_mod.notifySuccess as jest.Mock).mockClear();
        (common_mod.notifyError as jest.Mock).mockClear();
        (ts_client.showMetadata as jest.Mock).mockReset();
        (ts_client.updateMetadata as jest.Mock).mockReset();
        (ts_client.updateMetadata as jest.Mock).mockResolvedValue({ id: 'meta' });
        spectator = createComponent();
        (spectator.inject(MatDialogRef).close as jest.Mock).mockClear();
    });

    afterEach(() => jest.restoreAllMocks());

    it('should merge org and building metadata with the building taking precedence', async () => {
        (ts_client.showMetadata as jest.Mock).mockImplementation((zone) => {
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
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({ details: {} });

        await spectator.component.loadSettings();

        expect(spectator.component.induction_details()).toBe('');
        expect(spectator.component.is_enabled()).toBe(false);
    });

    it('should write induction details to both visitor-kiosk and concierge metadata on save', async () => {
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            name: '',
            description: '',
            details: {},
        });
        spectator.component.induction_details.set('Please sign in at reception');
        spectator.component.is_enabled.set(true);

        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledTimes(2);
        const bodies = (ts_client.updateMetadata as jest.Mock).mock.calls.map(
            (_) => _[1].details,
        );
        for (const details of bodies) {
            expect(details.induction_details).toBe('Please sign in at reception');
            expect(details.induction_enabled).toBe(true);
        }
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should notify error and keep the dialog open when saving fails', async () => {
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            name: '',
            description: '',
            details: {},
        });
        (ts_client.updateMetadata as jest.Mock).mockRejectedValue('failure');
        jest.spyOn(console, 'error').mockImplementation(() => undefined);

        await spectator.component.save();

        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });
});
