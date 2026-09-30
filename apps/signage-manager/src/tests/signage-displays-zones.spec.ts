import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    setNotifyOutlet,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import {
    PlaceGroup,
    PlaceSystem,
    PlaceZone,
    queryZones,
    removeSystem,
    removeZone,
    update,
    updateZone,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { SignageService } from '../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

type SignageServiceTestAccess = SignageService & Record<string, any>;

/** Saves, errors and local edits of displays and zones */
describe('SignageService displays and zones', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const notify_open = vi.fn(() => ({
        onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
        dismiss: vi.fn(),
    }));
    const dialog = { open: vi.fn() };
    const confirm_close = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        setCurrentUser({ id: 'user-1', email: 'a@b.c' } as any);
        vi.mocked(queryZones).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        });
        TestBed.configureTestingModule({
            providers: [
                SignageService,
                { provide: UploadsService, useValue: {} },
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(),
                        signal: (_name: string, value?: unknown) =>
                            signal(value),
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: { initialised: signal(false) },
                },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        const service = TestBed.inject(
            SignageService,
        ) as SignageServiceTestAccess;
        service['_requirePermission'] = vi.fn(() => true);
        return service;
    }

    /** The next confirm modal returns "done" */
    function confirmNextDialog() {
        dialog.open.mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: confirm_close,
        });
    }

    /** Resolve system updates with raw API data, through the data mapper */
    function updateSystemsWith(raw: Partial<PlaceSystem>) {
        vi.mocked(update).mockImplementation(((params: {
            fn: (raw: Partial<PlaceSystem>) => PlaceSystem;
        }) => Promise.resolve(params.fn(raw))) as unknown as typeof update);
    }

    const expectError = () =>
        expect(notify_open).toHaveBeenCalledWith(
            expect.any(String),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );

    it('decodes saved names so the next save sends the real name', async () => {
        const service = createService();
        const display = new PlaceSystem({
            id: 'd1',
            name: 'A & B',
            version: 2,
            playlists: ['p1'],
        });
        service.selected_display.set(display);
        updateSystemsWith({ id: 'd1', name: 'A &amp; B', version: 3 });

        await service.removePlaylistFromDisplay(display, 'p1');

        expect(service.selected_display()?.name).toBe('A & B');
        expect(service.selected_display()?.version).toBe(3);

        dialog.open.mockReturnValue({ afterClosed: () => NEVER });
        void service.editDisplay(service.selected_display() as PlaceSystem);
        await vi.waitFor(() => expect(dialog.open).toHaveBeenCalled());
        const data = dialog.open.mock.calls[0][1].data;
        expect(data.display.name).toBe('A & B');

        await data.onEdit('d1', { name: data.display.name });
        expect(update).toHaveBeenLastCalledWith(
            expect.objectContaining({ form_data: { name: 'A & B' } }),
        );
    });

    it('decodes saved zone names before selecting the zone', async () => {
        const service = createService();
        const zone = new PlaceZone({ id: 'z1', playlists: ['p1'] });
        vi.mocked(updateZone).mockResolvedValue(
            new PlaceZone({ id: 'z1', name: 'R&amp;D' }),
        );

        await service.removePlaylistFromZone(zone, 'p1');

        expect(service.selected_zone()?.name).toBe('R&D');
    });

    it('shows an error and keeps the selection when an assignment fails', async () => {
        const service = createService();
        const zone = new PlaceZone({ id: 'z1', playlists: ['p1'] });
        service.selected_zone.set(zone);
        vi.mocked(updateZone).mockRejectedValue(new Error('Conflict'));
        const changed = vi.spyOn(service, 'changed');

        await service.removePlaylistFromZone(zone, 'p1');

        expectError();
        expect(service.selected_zone()).toBe(zone);
        expect(changed).not.toHaveBeenCalled();
    });

    it.each([
        [
            'display',
            () => vi.mocked(removeSystem).mockRejectedValue(new Error('403')),
            (service: SignageService) =>
                service.removeDisplay(new PlaceSystem({ id: 'd1' })),
        ],
        [
            'zone',
            () => vi.mocked(removeZone).mockRejectedValue(new Error('403')),
            (service: SignageService) =>
                service.removeZone(
                    new PlaceZone({ id: 'z1', tags: ['signage'] }),
                ),
        ],
    ] as const)(
        'closes the confirm modal and shows an error when removing a %s fails',
        async (_, fail, remove) => {
            const service = createService();
            fail();
            confirmNextDialog();

            const removed = await remove(service);

            expect(removed).toBe(false);
            expect(confirm_close).toHaveBeenCalled();
            expectError();
        },
    );

    it('applies local edits only to displays and zones in the list', () => {
        const service = createService();
        service['_display_items'].set([new PlaceSystem({ id: 'd1' })]);
        service['_display_overrides'].set({
            d1: new PlaceSystem({ id: 'd1', name: 'Edited' }),
            other: new PlaceSystem({ id: 'other', name: 'Other group' }),
        });
        service['_all_zone_list'].set([new PlaceZone({ id: 'z1' })]);
        service['_zone_overrides'].set({
            other: new PlaceZone({ id: 'other', name: 'Other group' }),
        });

        expect(
            service.filtered_displays().map(({ id, name }) => [id, name]),
        ).toEqual([['d1', 'Edited']]);
        expect(service.all_zones().map(({ id }) => id)).toEqual(['z1']);
    });

    it('drops local edits when the group changes', async () => {
        const service = createService();
        service['_signage_groups'].set(
            ['g1', 'g2'].map((id) => ({
                group: new PlaceGroup({ id, name: id }),
                permissions: 0,
            })),
        );
        service.selected_group_id.set('g1');
        TestBed.tick();
        service['_display_overrides'].set({
            d1: new PlaceSystem({ id: 'd1' }),
        });
        service['_zone_overrides'].set({ z1: new PlaceZone({ id: 'z1' }) });

        service.selected_group_id.set('g2');
        TestBed.tick();
        await flush();

        expect(service['_display_overrides']()).toEqual({});
        expect(service['_zone_overrides']()).toEqual({});
    });
});
