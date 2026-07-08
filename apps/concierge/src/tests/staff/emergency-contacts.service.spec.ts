import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { EmergencyContactsService } from '../../app/staff/emergency-contacts.service';

vi.mock('@placeos/ts-client', { spy: true });

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
                levelWithID: vi.fn(() => ({ id: 'lvl-1' })),
                waitUntilInitialised: () => Promise.resolve(),
            } as any),
        ],
    });

    beforeEach(async () => {
        // @placeos/assets wraps these ts-client primitives; only ts-client can
        // be spied under the bundling builder, so stub at that boundary.
        vi.mocked(ts_client.queryAssets).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.addAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.updateAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.updateAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({ id: 'at1' } as any);
        vi.mocked(ts_client.updateAssetType).mockResolvedValue({
            id: 'at1',
        } as any);
        vi.mocked(ts_client.removeAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        vi.mocked(ts_client.updateMetadata).mockResolvedValue({} as any);
        spectator = createService();
        // Let the constructor's ensureCategoryAndTypeExist() chain settle so
        // its write calls don't leak into the per-test assertions.
        await new Promise((r) => setTimeout(r));
        vi.mocked(ts_client.addAsset).mockClear();
        vi.mocked(ts_client.updateAsset).mockClear();
        vi.mocked(ts_client.addAssetCategory).mockClear();
        vi.mocked(ts_client.updateAssetCategory).mockClear();
        vi.mocked(ts_client.addAssetType).mockClear();
        vi.mocked(ts_client.updateAssetType).mockClear();
        vi.mocked(ts_client.removeAsset).mockClear();
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
        // contact id starts with `contact-` => new asset => addAsset
        expect(ts_client.addAsset).toHaveBeenCalledWith(
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
        vi.mocked(ts_client.addAssetCategory).mockClear();
        vi.mocked(ts_client.updateAssetCategory).mockClear();
        const ok = await spectator.service.addRole('Warden');
        expect(ok).toBe(true);
        expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.updateAssetCategory).not.toHaveBeenCalled();
    });

    it('should persist a new sorted role list on add', async () => {
        spectator.service.category.set({ id: 'cat-1' } as any);
        spectator.service.roles.set(['Warden']);
        vi.mocked(ts_client.updateAssetCategory).mockClear();
        const ok = await spectator.service.addRole('Aider');
        expect(ok).toBe(true);
        // category has an id => saveAssetCategory => updateAssetCategory
        expect(ts_client.updateAssetCategory).toHaveBeenCalledWith(
            'cat-1',
            expect.objectContaining({
                description: JSON.stringify({ roles: ['Aider', 'Warden'] }),
            }),
        );
    });
});
