import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { startMockPlaceClient } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';

import { RegionModalComponent } from '../../app/region-manager/region-modal.component';

import * as ts_client from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

vi.mock('@placeos/ts-client', { spy: true });

describe('RegionModalComponent', () => {
    let spectator: Spectator<RegionModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: RegionModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, null),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
            }),
        ],
    });

    const buildRegion = (data: unknown) => () =>
        createComponent({
            providers: [MockProvider(MAT_DIALOG_DATA, data)],
        });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        // The authority of mock mode has an empty description
        startMockPlaceClient();
        (ts_client.zones.create as any).mockReset();
        (ts_client.zones.update as any).mockReset();
        (ts_client.zones.create as any).mockResolvedValue(
            mockReply({ id: 'region-new' }),
        );
        (ts_client.zones.update as any).mockResolvedValue(
            mockReply({ id: 'r1' }),
        );
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        vi.restoreAllMocks();
    });

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

    it('should keep the stored timezone of an existing region', () => {
        spectator = buildRegion({
            id: 'r1',
            display_name: 'London',
            timezone: 'Europe/London',
        })();

        expect(spectator.component.model().timezone).toBe('Europe/London');
    });

    it('should block saving and notify when the display name is missing', async () => {
        spectator = buildRegion(null)();

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client.zones.create).not.toHaveBeenCalled();
    });

    it('should create a new region with the region tag and close on success', async () => {
        spectator = buildRegion(null)();
        spectator.component.model.update((m) => ({
            ...m,
            display_name: 'East Region',
        }));

        await spectator.component.save();

        expect(ts_client.zones.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                tags: ['region'],
                name: 'REGION  East Region',
            }),
        });
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith({
            id: 'region-new',
        });
        expect(spectator.component.loading()).toBe(false);
    });

    it('should update an existing region via updateZone', async () => {
        spectator = buildRegion({ id: 'r1', display_name: 'North Region' })();

        await spectator.component.save();

        expect(ts_client.zones.update).toHaveBeenCalledWith({
            id: 'r1',
            body: expect.objectContaining({ tags: ['region'] }),
        });
        expect(ts_client.zones.create).not.toHaveBeenCalled();
    });
});
