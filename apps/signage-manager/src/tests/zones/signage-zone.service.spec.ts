import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { addZone, PlaceZone, removeZone, updateZone } from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageZoneService } from '../../app/zones/signage-zone.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageZoneService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: any) => signal(default_value),
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
        const saved_zone = new PlaceZone({
            id: 'zone-new',
            display_name: 'Reception',
            parent_id: 'building-1',
            tags: ['signage'],
        });
        vi.mocked(addZone).mockResolvedValue(saved_zone);

        const result = await service.saveZone(new PlaceZone({}), {
            name: 'SIGNAGE Reception',
            display_name: 'Reception',
            description: 'Reception displays',
            parent_id: 'building-1',
        });

        expect(addZone).toHaveBeenCalledWith({
            name: 'SIGNAGE Reception',
            display_name: 'Reception',
            description: 'Reception displays',
            parent_id: 'building-1',
            tags: ['signage'],
        });
        expect(result).toEqual(saved_zone);
        expect(service.selected_zone()).toEqual(saved_zone);
    });

    it('updates only signage zones and preserves their tags and version', async () => {
        const service = createService();
        const zone = new PlaceZone({
            id: 'zone-1',
            display_name: 'Old name',
            parent_id: 'building-1',
            tags: ['signage', 'public'],
            version: 7,
        });
        const saved_zone = new PlaceZone({
            ...zone,
            display_name: 'Lobby',
            parent_id: 'building-2',
        });
        vi.mocked(updateZone).mockResolvedValue(saved_zone);

        await service.saveZone(zone, {
            name: 'SIGNAGE Lobby',
            display_name: 'Lobby',
            description: 'Main lobby',
            parent_id: 'building-2',
        });

        expect(updateZone).toHaveBeenCalledWith('zone-1', {
            name: 'SIGNAGE Lobby',
            display_name: 'Lobby',
            description: 'Main lobby',
            parent_id: 'building-2',
            tags: ['signage', 'public'],
            version: 7,
        });

        vi.mocked(updateZone).mockClear();
        await service.saveZone(
            new PlaceZone({ id: 'building-1', tags: ['building'] }),
            {
                name: 'Building',
                display_name: 'Building',
                description: '',
                parent_id: 'org-1',
            },
        );
        expect(updateZone).not.toHaveBeenCalled();
    });

    it('deletes only signage-tagged zones after confirmation', async () => {
        confirmNextDialog();
        const service = createService();
        const zone = new PlaceZone({
            id: 'zone-1',
            display_name: 'Lobby',
            tags: ['signage'],
        });
        service.selected_zone.set(zone);
        vi.mocked(removeZone).mockResolvedValue({});

        const removed = await service.removeZone(zone);

        expect(removeZone).toHaveBeenCalledWith('zone-1');
        expect(removed).toBe(true);
        expect(service.selected_zone()).toBeNull();

        vi.mocked(removeZone).mockClear();
        const untagged_removed = await service.removeZone(
            new PlaceZone({ id: 'building-1', tags: ['building'] }),
        );
        expect(untagged_removed).toBe(false);
        expect(removeZone).not.toHaveBeenCalled();
    });
});
