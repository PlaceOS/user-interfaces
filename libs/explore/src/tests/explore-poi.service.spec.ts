import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ExplorePointOfInterestModalComponent } from '../lib/explore-poi-modal.component';
import { ExplorePointOfInterestService } from '../lib/explore-poi.service';
import { ExploreStateService } from '../lib/explore-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ExplorePointOfInterestService', () => {
    let spectator: SpectatorService<ExplorePointOfInterestService>;
    const createService = createServiceFactory({
        service: ExplorePointOfInterestService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }) as any,
                setActions: vi.fn(),
                setFeatures: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                building: { id: 'bld-1' } as any,
                active_building: signal({ id: 'bld-1' }) as any,
                levelsForBuilding: vi.fn(() => [{ id: 'lvl-1' }]) as any,
            }),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should register features and actions for valid points of interest', () => {
        const state = spectator.inject(ExploreStateService);
        const list = [
            {
                location: 'poi-1',
                name: 'Kitchen',
                zone_id: 'lvl-1',
                extra_details: [{ label: 'Info', value: 'Text' }],
            },
        ];
        (spectator.service as any)._updateMapDetails(list);
        // 4 actions per item (mousedown, touchstart, mouseup, touchend)
        expect(state.setActions).toHaveBeenCalledWith(
            'poi',
            expect.arrayContaining([
                expect.objectContaining({ id: 'poi-1', action: 'mousedown' }),
                expect.objectContaining({ id: 'poi-1', action: 'touchstart' }),
                expect.objectContaining({ id: 'poi-1', action: 'mouseup' }),
                expect.objectContaining({ id: 'poi-1', action: 'touchend' }),
            ]),
        );
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        expect(actions.length).toBe(4);
        const [, features] = vi.mocked(state.setFeatures).mock.calls[0];
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('poi-1');
    });

    it('should skip points of interest without a location', () => {
        const state = spectator.inject(ExploreStateService);
        (spectator.service as any)._updateMapDetails([
            { name: 'No location', extra_details: [{ label: 'a' }] },
        ]);
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        const [, features] = vi.mocked(state.setFeatures).mock.calls[0];
        expect(actions.length).toBe(0);
        expect(features.length).toBe(0);
    });

    it('should skip points of interest without any details, image or media', () => {
        const state = spectator.inject(ExploreStateService);
        (spectator.service as any)._updateMapDetails([
            { location: 'poi-1', name: 'Empty' },
        ]);
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        const [, features] = vi.mocked(state.setFeatures).mock.calls[0];
        expect(actions.length).toBe(0);
        expect(features.length).toBe(0);
    });

    it('should include points of interest with only an image', () => {
        const state = spectator.inject(ExploreStateService);
        (spectator.service as any)._updateMapDetails([
            { location: 'poi-1', name: 'Photo', image: 'http://img' },
        ]);
        const [, features] = vi.mocked(state.setFeatures).mock.calls[0];
        expect(features.length).toBe(1);
    });

    it('should open the modal via viewDetails', () => {
        const dialog = spectator.inject(MatDialog);
        const item = { location: 'poi-1', name: 'Kitchen' } as any;
        spectator.service.viewDetails(item);
        expect(dialog.open).toHaveBeenCalledWith(
            ExplorePointOfInterestModalComponent,
            { data: item },
        );
    });

    it('should open the modal when the mouseup action fires', () => {
        const dialog = spectator.inject(MatDialog);
        const state = spectator.inject(ExploreStateService);
        const item = {
            location: 'poi-1',
            name: 'Kitchen',
            extra_details: [{ label: 'Info' }],
        };
        (spectator.service as any)._updateMapDetails([item]);
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        const mouseup = actions.find((_: any) => _.action === 'mouseup');
        mouseup.callback(new Event('mouseup'));
        expect(dialog.open).toHaveBeenCalledWith(
            ExplorePointOfInterestModalComponent,
            { data: item },
        );
    });
});
