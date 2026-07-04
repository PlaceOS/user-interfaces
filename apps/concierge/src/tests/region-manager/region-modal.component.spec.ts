import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { RegionModalComponent } from '../../app/region-manager/region-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));
jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    authority: jest.fn(() => ({ description: 'ACME' })),
    addZone: jest.fn(),
    updateZone: jest.fn(),
}));

describe('RegionModalComponent', () => {
    let spectator: Spectator<RegionModalComponent>;

    const createComponent = createComponentFactory({
        component: RegionModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, null),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
            }),
        ],
    });

    const buildRegion = (data: any) => () =>
        createComponent({
            providers: [MockProvider(MAT_DIALOG_DATA, data)],
        });

    beforeEach(() => {
        (common_mod.notifyError as jest.Mock).mockClear();
        (ts_client.addZone as jest.Mock).mockReset();
        (ts_client.updateZone as jest.Mock).mockReset();
        (ts_client.addZone as jest.Mock).mockResolvedValue({ id: 'region-new' });
        (ts_client.updateZone as jest.Mock).mockResolvedValue({ id: 'r1' });
    });

    afterEach(() => jest.restoreAllMocks());

    it('should seed the model from the injected region and default the parent to the org', () => {
        spectator = buildRegion({
            id: 'r1',
            display_name: 'North Region',
        })();
        const model = spectator.component.model();
        expect(model.id).toBe('r1');
        expect(model.display_name).toBe('North Region');
        expect(model.parent_id).toBe('org-1');
    });

    it('should filter timezones by the current model timezone', () => {
        spectator = buildRegion(null)();
        spectator.component.model.update((m) => ({ ...m, timezone: 'london' }));
        const filtered = spectator.component.filtered_timezones();
        expect(filtered.length).toBeGreaterThan(0);
        expect(
            filtered.every((_) => _.toLowerCase().includes('london')),
        ).toBe(true);
    });

    it('should block saving and notify when the display name is missing', async () => {
        spectator = buildRegion(null)();

        await spectator.component.save();

        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(ts_client.addZone).not.toHaveBeenCalled();
    });

    it('should create a new region with the region tag and close on success', async () => {
        spectator = buildRegion(null)();
        spectator.component.model.update((m) => ({
            ...m,
            display_name: 'East Region',
        }));

        await spectator.component.save();

        expect(ts_client.addZone).toHaveBeenCalledWith(
            expect.objectContaining({
                tags: ['region'],
                name: 'REGION ACME East Region',
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith({
            id: 'region-new',
        });
        expect(spectator.component.loading()).toBe(false);
    });

    it('should update an existing region via updateZone', async () => {
        spectator = buildRegion({ id: 'r1', display_name: 'North Region' })();

        await spectator.component.save();

        expect(ts_client.updateZone).toHaveBeenCalledWith(
            'r1',
            expect.objectContaining({ tags: ['region'] }),
        );
        expect(ts_client.addZone).not.toHaveBeenCalled();
    });
});
