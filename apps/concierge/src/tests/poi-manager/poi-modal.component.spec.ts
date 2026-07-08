import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { POIModalComponent } from '../../app/poi-manager/poi-modal.component';
import { PointOfInterest } from '../../app/poi-manager/poi-management.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('POIModalComponent', () => {
    let spectator: Spectator<POIModalComponent>;
    let dialog_data: Partial<PointOfInterest> | undefined;
    let dialog_ref: any;
    let settings_map: Record<string, any>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: POIModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            { provide: MatDialogRef, useFactory: () => dialog_ref },
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                building_list: signal([{ id: 'bld-1' }]),
                active_levels: signal([{ id: 'lvl-1' }]),
                building: { id: 'bld-1' },
            } as any),
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(MatDialog, {} as any),
        ],
    });

    const build = (data?: Partial<PointOfInterest>) => {
        dialog_data = data;
        dialog_ref = { close: vi.fn() };
        return createComponent({ detectChanges: false });
    };

    beforeEach(() => {
        settings_map = {};
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        // Reset (not just clear) so any leftover *Once implementations queued by
        // an earlier spec file in the shared ts-client spy don't leak in.
        (ts_client_mod.post as any).mockReset();
        (ts_client_mod.showMetadata as any).mockReset();
        (ts_client_mod.updateMetadata as any).mockReset();
        // createShortURL() -> post() at the ts-client boundary
        (ts_client_mod.post as any).mockResolvedValue({ id: 'short-1' });
        (ts_client_mod.showMetadata as any).mockResolvedValue({
            details: {},
        });
        (ts_client_mod.updateMetadata as any).mockResolvedValue({
            id: 'meta-1',
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should treat array locations as coordinates', () => {
        spectator = build({ location: [1, 2] } as PointOfInterest);
        expect(spectator.component.location_type()).toBe('coordinates');
    });

    it('should treat string locations as map ids', () => {
        spectator = build({ location: 'map-1' } as PointOfInterest);
        expect(spectator.component.location_type()).toBe('map_id');
    });

    it('should initialise the model from the injected point of interest', () => {
        spectator = build({
            id: 'poi-1',
            name: 'Foyer',
            level_id: 'lvl-1',
            location: 'map-1',
            can_search: true,
        } as PointOfInterest);
        expect(spectator.component.model()).toEqual(
            expect.objectContaining({
                id: 'poi-1',
                name: 'Foyer',
                level_id: 'lvl-1',
                location: 'map-1',
                can_search: true,
            }),
        );
    });

    it('should reject saving when required fields are missing', async () => {
        spectator = build();
        await spectator.component.save();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client_mod.updateMetadata).not.toHaveBeenCalled();
    });

    it('should create a short URL and persist metadata for a new point', async () => {
        spectator = build();
        spectator.component.model.set({
            id: '',
            name: 'Foyer',
            level_id: 'lvl-1',
            location: 'map-1',
            can_search: false,
            image: '',
            media_type: 'audio',
            media_url: '',
            extra_details: [],
        });

        await spectator.component.save();

        // createShortURL() posts to the short_url endpoint
        expect(ts_client_mod.post).toHaveBeenCalledWith(
            '/api/engine/v2/short_url',
            expect.objectContaining({ name: 'Foyer' }),
        );
        expect(ts_client_mod.updateMetadata).toHaveBeenCalledWith(
            'org-1',
            expect.objectContaining({ name: 'points-of-interest' }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'meta-1' });
    });
});
