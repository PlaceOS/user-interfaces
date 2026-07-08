import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { RegionModalComponent } from '../../app/region-manager/region-modal.component';

import * as ts_client from '@placeos/ts-client';

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

    const buildRegion = (data: any) => () =>
        createComponent({
            providers: [MockProvider(MAT_DIALOG_DATA, data)],
        });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client.authority as any).mockReturnValue({ description: 'ACME' });
        (ts_client.addZone as any).mockReset();
        (ts_client.updateZone as any).mockReset();
        (ts_client.addZone as any).mockResolvedValue({ id: 'region-new' });
        (ts_client.updateZone as any).mockResolvedValue({ id: 'r1' });
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
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
