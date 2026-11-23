import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { zones } from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';
import { NEVER, of } from 'rxjs';
import { SignageContextService } from '../../app/signage-context.service';
import { signagePlaylist, signageZone } from '../../app/signage-models';
import { SignageZoneService } from '../../app/zones/signage-zone.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageZoneService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: unknown) =>
            signal(default_value),
    };
    const org = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
    };
    const dialog = {
        open: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        settings.get.mockReturnValue(false);
        TestBed.configureTestingModule({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        const service = TestBed.inject(SignageZoneService);
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'requirePermission',
        ).mockReturnValue(true);
        return service;
    }

    /** Serve zones from a map of zone id to parent id */
    function mockParents(parents: Record<string, string>) {
        vi.mocked(zones.show).mockImplementation(
            fromV1Mock(
                async (id: string) =>
                    signageZone({ id, parent_id: parents[id] }),
                ['id', '...'],
            ),
        );
    }

    function confirmNextDialog() {
        dialog.open.mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        });
    }

    it('creates signage zones under an accessible parent', async () => {
        const service = createService();
        const saved_zone = signageZone({
            id: 'zone-new',
            display_name: 'Reception',
            parent_id: 'building-1',
            tags: ['signage'],
        });
        vi.mocked(zones.create).mockResolvedValue(mockReply(saved_zone));

        const result = await service.saveZone(signageZone({}), {
            name: 'SIGNAGE Reception',
            display_name: 'Reception',
            description: 'Reception displays',
            parent_id: 'building-1',
        });

        expect(zones.create).toHaveBeenCalledWith({
            body: {
                name: 'SIGNAGE Reception',
                display_name: 'Reception',
                description: 'Reception displays',
                parent_id: 'building-1',
                tags: ['signage'],
            },
        });
        expect(result).toEqual(saved_zone);
        expect(service.selected_zone()).toEqual(saved_zone);
    });

    it('updates only signage zones and preserves their tags', async () => {
        const service = createService();
        const zone = signageZone({
            id: 'zone-1',
            display_name: 'Old name',
            parent_id: 'building-1',
            tags: ['signage', 'public'],
        });
        const saved_zone = signageZone({
            ...zone,
            display_name: 'Lobby',
            parent_id: 'building-2',
        });
        vi.mocked(zones.update).mockResolvedValue(mockReply(saved_zone));
        mockParents({ 'building-2': 'org-1' });

        await service.saveZone(zone, {
            name: 'SIGNAGE Lobby',
            display_name: 'Lobby',
            description: 'Main lobby',
            parent_id: 'building-2',
        });

        expect(zones.update).toHaveBeenCalledWith({
            id: 'zone-1',
            body: {
                name: 'SIGNAGE Lobby',
                display_name: 'Lobby',
                description: 'Main lobby',
                parent_id: 'building-2',
                tags: ['signage', 'public'],
            },
        });

        vi.mocked(zones.update).mockClear();
        await service.saveZone(
            signageZone({ id: 'building-1', tags: ['building'] }),
            {
                name: 'Building',
                display_name: 'Building',
                description: '',
                parent_id: 'org-1',
            },
        );
        expect(zones.update).not.toHaveBeenCalled();
    });

    it('clears the zone search when the selected zone changes', () => {
        const service = createService();
        service.zone_search_term.set('kiosk');

        service.selected_zone.set(signageZone({ id: 'zone-2' }));

        expect(service.zone_search_term()).toBe('');
    });

    it('does not make a zone the parent of its own ancestor', async () => {
        const service = createService();
        const zone = signageZone({
            id: 'zone-1',
            parent_id: 'building-1',
            tags: ['signage'],
        });
        mockParents({ 'room-1': 'floor-1', 'floor-1': 'zone-1' });

        const result = await service.saveZone(zone, {
            name: 'Lobby',
            display_name: '',
            description: '',
            parent_id: 'room-1',
        });

        expect(result).toBeNull();
        expect(zones.update).not.toHaveBeenCalled();
    });

    it('deletes only signage-tagged zones after confirmation', async () => {
        confirmNextDialog();
        const service = createService();
        const zone = signageZone({
            id: 'zone-1',
            display_name: 'Lobby',
            tags: ['signage'],
        });
        service.selected_zone.set(zone);
        vi.mocked(zones.destroy).mockResolvedValue(mockReply(''));

        const removed = await service.removeZone(zone);

        expect(zones.destroy).toHaveBeenCalledWith({ id: 'zone-1' });
        expect(removed).toBe(true);
        expect(service.selected_zone()).toBeNull();

        vi.mocked(zones.destroy).mockClear();
        const untagged_removed = await service.removeZone(
            signageZone({ id: 'building-1', tags: ['building'] }),
        );
        expect(untagged_removed).toBe(false);
        expect(zones.destroy).not.toHaveBeenCalled();
    });
    describe('adding a zone to a playlist', () => {
        const playlist = signagePlaylist({ id: 'playlist-1' });

        /** The zone picker closes with `zone_id` */
        function pickZone(zone_id: string) {
            dialog.open.mockReturnValue({
                afterClosed: () => ({
                    subscribe: (handler: (result: string) => void) => {
                        Promise.resolve().then(() => handler(zone_id));
                        return { unsubscribe: vi.fn() };
                    },
                }),
            });
        }

        it('loads a picked zone that the zone list does not hold', async () => {
            const service = createService();
            const zone = signageZone({
                id: 'zone-far',
                playlists: ['playlist-0'],
            });
            vi.mocked(zones.show).mockResolvedValue(mockReply(zone));
            vi.mocked(zones.update).mockResolvedValue(mockReply(zone));
            pickZone('zone-far');

            await service.addZoneToPlaylist(playlist);

            expect(zones.show).toHaveBeenCalledWith({ id: 'zone-far' });
            expect(zones.update).toHaveBeenCalledWith({
                id: 'zone-far',
                body: { playlists: ['playlist-0', 'playlist-1'] },
            });
        });

        it('shows an error when the picked zone cannot be loaded', async () => {
            const service = createService();
            vi.mocked(zones.show).mockRejectedValue(new Error('Not found'));
            pickZone('zone-gone');

            await service.addZoneToPlaylist(playlist);

            expect(zones.update).not.toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalledExactlyOnceWith(
                'Could not update the assignment. Please try again.',
                expect.anything(),
                expect.objectContaining({ panelClass: ['error'] }),
            );
        });
    });
});
