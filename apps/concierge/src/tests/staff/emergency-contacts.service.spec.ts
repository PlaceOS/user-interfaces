import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    AssetCategory,
    AssetGroup,
    OrganisationService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import {
    EmergencyContact,
    EmergencyContactsService,
} from '../../app/staff/emergency-contacts.service';

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
        vi.mocked(ts_client.removeAsset).mockResolvedValue({});
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

    describe('role changes', () => {
        const contact = (id: string, roles: string[]): EmergencyContact => ({
            id,
            name: id,
            email: `${id}@x.com`,
            phone: '',
            roles,
            zone: '',
        });

        beforeEach(() => {
            spectator.service.category.set(new AssetCategory({ id: 'cat-1' }));
            spectator.service.asset_type.set({ id: 'at1' } as AssetGroup);
            spectator.service.roles.set(['Aider', 'Warden']);
            spectator.service.contacts.set([
                contact('asset-1', ['Warden', 'Aider']),
                contact('asset-2', ['Aider']),
            ]);
        });

        it('should rename a role in the role list and in each contact that has it', async () => {
            const ok = await spectator.service.renameRole('Warden', 'Chief');

            expect(ok).toBe(true);
            expect(ts_client.updateAssetCategory).toHaveBeenCalledWith(
                'cat-1',
                expect.objectContaining({
                    description: JSON.stringify({ roles: ['Aider', 'Chief'] }),
                }),
            );
            expect(ts_client.updateAsset).toHaveBeenCalledTimes(1);
            expect(ts_client.updateAsset).toHaveBeenCalledWith(
                'asset-1',
                expect.objectContaining({
                    other_data: expect.objectContaining({
                        roles: ['Chief', 'Aider'],
                    }),
                }),
            );
        });

        it('should remove a role from the role list and from each contact that has it', async () => {
            const ok = await spectator.service.removeRole('Aider');

            expect(ok).toBe(true);
            expect(ts_client.updateAssetCategory).toHaveBeenCalledWith(
                'cat-1',
                expect.objectContaining({
                    description: JSON.stringify({ roles: ['Warden'] }),
                }),
            );
            const updated = vi
                .mocked(ts_client.updateAsset)
                .mock.calls.map(([id, asset]) => [id, asset.other_data?.['roles']]);
            expect(updated).toEqual([
                ['asset-1', ['Warden']],
                ['asset-2', []],
            ]);
        });
    });

    describe('needsMigration', () => {
        const legacy: EmergencyContact = {
            id: 'c1',
            name: 'Jane',
            email: 'jane@x.com',
            phone: '',
            roles: [],
            zone: '',
        };

        it.each([
            [{ contacts: [legacy], roles: [] }, true],
            [{ contacts: [], roles: ['Warden'] }, true],
            [{ contacts: [legacy], roles: [], migrated: true }, false],
            [{ contacts: [], roles: [] }, false],
        ])('should check the legacy metadata %j', async (details, expected) => {
            vi.mocked(ts_client.showMetadata).mockResolvedValue(
                new ts_client.PlaceMetadata({ details }),
            );

            expect(await spectator.service.needsMigration()).toBe(expected);
        });

        it('should not need migration when the metadata cannot be read', async () => {
            vi.mocked(ts_client.showMetadata).mockRejectedValue(new Error('404'));

            expect(await spectator.service.needsMigration()).toBe(false);
        });
    });
});
