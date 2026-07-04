import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { EmergencyContactsService } from '../../app/staff/emergency-contacts.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/ts-client');

import * as assets_mod from '@placeos/assets';
import * as ts_client from '@placeos/ts-client';

describe('EmergencyContactsService', () => {
    let spectator: SpectatorService<EmergencyContactsService>;
    const createService = createServiceFactory({
        service: EmergencyContactsService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal(null),
                building: { id: 'bld-1' },
                organisation: { id: 'org-1' },
                region: { id: 'reg-1' },
                levelWithID: jest.fn(() => ({ id: 'lvl-1' })),
                waitUntilInitialised: () => Promise.resolve(),
            } as any),
        ],
    });

    beforeEach(() => {
        (assets_mod.queryAssets as jest.Mock).mockResolvedValue({ data: [] });
        (assets_mod.saveAsset as jest.Mock).mockResolvedValue({});
        (assets_mod.saveAssetCategory as jest.Mock).mockResolvedValue({});
        (assets_mod.saveAssetType as jest.Mock).mockResolvedValue({ id: 'at1' });
        (ts_client.cleanObject as jest.Mock).mockImplementation((x: any) => x);
        (ts_client.queryAssetCategories as jest.Mock).mockResolvedValue({
            data: [],
        });
        (ts_client.queryAssetTypes as jest.Mock).mockResolvedValue({
            data: [],
        });
        (ts_client.removeAsset as jest.Mock).mockResolvedValue({});
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            details: {},
        });
        (ts_client.updateMetadata as jest.Mock).mockResolvedValue({});
        spectator = createService();
    });

    it('should generate prefixed contact ids', () => {
        expect(spectator.service.generateContactId()).toMatch(/^contact-/);
    });

    it('should save a contact as an asset when a type exists', async () => {
        spectator.service.asset_type.set({ id: 'at1' } as any);
        const ok = await spectator.service.saveContact({
            id: 'contact-new',
            name: 'Jane',
            email: 'jane@x.com',
            phone: '1',
            roles: ['Warden'],
            zone: 'lvl-1',
        });
        expect(ok).toBe(true);
        expect(assets_mod.saveAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                asset_type_id: 'at1',
                identifier: 'Jane',
            }),
        );
    });

    it('should remove a contact by id', async () => {
        const ok = await spectator.service.deleteContact('asset-9');
        expect(ok).toBe(true);
        expect(ts_client.removeAsset).toHaveBeenCalledWith('asset-9');
    });

    it('should skip persisting a role that already exists', async () => {
        spectator.service.roles.set(['Warden']);
        (assets_mod.saveAssetCategory as jest.Mock).mockClear();
        const ok = await spectator.service.addRole('Warden');
        expect(ok).toBe(true);
        expect(assets_mod.saveAssetCategory).not.toHaveBeenCalled();
    });

    it('should persist a new sorted role list on add', async () => {
        spectator.service.category.set({ id: 'cat-1' } as any);
        spectator.service.roles.set(['Warden']);
        (assets_mod.saveAssetCategory as jest.Mock).mockClear();
        const ok = await spectator.service.addRole('Aider');
        expect(ok).toBe(true);
        expect(assets_mod.saveAssetCategory).toHaveBeenCalledWith(
            expect.objectContaining({
                description: JSON.stringify({ roles: ['Aider', 'Warden'] }),
            }),
        );
    });
});
