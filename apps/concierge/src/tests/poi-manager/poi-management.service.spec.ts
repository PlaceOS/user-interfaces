import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';
import * as ts_client_mod from '@placeos/ts-client';
import {
    POIManagementService,
    PointOfInterest,
} from '../../app/poi-manager/poi-management.service';
import { POIModalComponent } from '../../app/poi-manager/poi-modal.component';

jest.mock('@placeos/components');
jest.mock('@placeos/ts-client');
jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
    };
});

describe('POIManagementService', () => {
    let spectator: SpectatorService<POIManagementService>;
    let dialog_open: jest.Mock;
    let active_building: any;

    const organisation_service: any = {
        organisation: { id: 'org-1' },
        levelsForBuilding: jest.fn(() => [{ id: 'lvl-1' }, { id: 'lvl-2' }]),
        get building() {
            return active_building();
        },
    };

    const createService = createServiceFactory({
        service: POIManagementService,
        providers: [
            MockProvider(OrganisationService, organisation_service),
            MockProvider(MatDialog, {} as any),
        ],
    });

    beforeEach(() => {
        active_building = signal({ id: 'bld-1' });
        organisation_service.active_building = active_building;
        dialog_open = jest.fn(() => ({ afterClosed: () => of(true) }) as any);
        (component_mod as any).openConfirmModal = jest.fn(async () => ({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }));
        jest.clearAllMocks();
        (ts_client_mod.showMetadata as jest.Mock).mockResolvedValue({
            details: {},
        });
        (ts_client_mod.updateMetadata as jest.Mock).mockResolvedValue({
            id: 'meta-1',
        });
        spectator = createService();
        (spectator.inject(MatDialog) as any).open = dialog_open;
    });

    it('should load points of interest for the active building levels', async () => {
        (ts_client_mod.showMetadata as jest.Mock).mockResolvedValue({
            details: {
                'lvl-1': [{ id: 'poi-1', name: 'Foyer', level_id: 'lvl-1' }],
                'lvl-2': [{ id: 'poi-2', name: 'Cafe', level_id: 'lvl-2' }],
            },
        });

        spectator = createService();
        TestBed.flushEffects();
        await new Promise((r) => setTimeout(r, 5));

        expect(spectator.service.filtered_features()).toHaveLength(2);
        expect(spectator.service.filtered_features()[0].id).toBe('poi-1');
    });

    it('should filter features by the search string', async () => {
        (ts_client_mod.showMetadata as jest.Mock).mockResolvedValue({
            details: {
                'lvl-1': [
                    { id: 'poi-1', name: 'Foyer', level_id: 'lvl-1' },
                    { id: 'poi-2', name: 'Cafe', level_id: 'lvl-1' },
                ],
            },
        });

        spectator = createService();
        TestBed.flushEffects();
        await new Promise((r) => setTimeout(r, 5));

        spectator.service.setSearchString('caf');
        expect(spectator.service.filtered_features()).toEqual([
            expect.objectContaining({ id: 'poi-2' }),
        ]);
    });

    it('should open the POI modal when editing', () => {
        const poi = { id: 'poi-1', name: 'Foyer' } as PointOfInterest;
        spectator.service.editPointOfInterest(poi);
        expect(dialog_open).toHaveBeenCalledWith(POIModalComponent, {
            data: poi,
        });
    });

    it('should remove a point of interest from every level in the metadata', async () => {
        (ts_client_mod.showMetadata as jest.Mock).mockResolvedValue({
            details: {
                'lvl-1': [{ id: 'poi-1' }, { id: 'poi-2' }],
                'lvl-2': [{ id: 'poi-1' }],
            },
        });

        await spectator.service.removePointOfInterest({
            id: 'poi-1',
            name: 'Foyer',
        } as PointOfInterest);

        expect(ts_client_mod.updateMetadata).toHaveBeenCalledWith(
            'org-1',
            expect.objectContaining({
                name: 'points-of-interest',
                details: {
                    'lvl-1': [{ id: 'poi-2' }],
                    'lvl-2': [],
                },
            }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should not modify metadata when removal is cancelled', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'cancel',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removePointOfInterest({
            id: 'poi-1',
            name: 'Foyer',
        } as PointOfInterest);

        expect(ts_client_mod.updateMetadata).not.toHaveBeenCalled();
    });
});
