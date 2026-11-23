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
    playlist,
    type System,
    type SystemInput,
    systems,
    zones as zones_v7,
} from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { NEVER, of } from 'rxjs';
import { SignageDisplayService } from '../app/displays/signage-display.service';
import { SignagePlaylistService } from '../app/playlists/signage-playlist.service';
import { SignageContextService } from '../app/signage-context.service';
import {
    signagePlaylist,
    signageSystem,
    signageZone,
} from '../app/signage-models';
import { SignageZoneService } from '../app/zones/signage-zone.service';
import { signageGroup } from './signage-test-models';

vi.mock('@placeos/ts-client', { spy: true });

type TestAccess<T> = T & Record<string, unknown>;

/** Saves, errors and local edits of displays and zones */
describe('SignageDisplayService and SignageZoneService', () => {
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
        vi.mocked(zones_v7.query).mockResolvedValue(
            mockPage({
                data: [],
                total: 0,
                next: null,
            }),
        );
        TestBed.configureTestingModule({
            providers: [
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

    /** The services under test, with every permission check passing */
    function createServices() {
        const context = TestBed.inject(
            SignageContextService,
        ) as TestAccess<SignageContextService>;
        vi.spyOn(context, 'requirePermission').mockReturnValue(true);
        return {
            context,
            displays: TestBed.inject(
                SignageDisplayService,
            ) as TestAccess<SignageDisplayService>,
            zones: TestBed.inject(
                SignageZoneService,
            ) as TestAccess<SignageZoneService>,
            playlists: TestBed.inject(SignagePlaylistService),
        };
    }
    type SignageTestServices = ReturnType<typeof createServices>;

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

    /** Resolve system updates with raw API data */
    function updateSystemsWith(raw: SystemInput) {
        vi.mocked(systems.update).mockResolvedValue(
            mockReply(signageSystem(raw)),
        );
    }

    const expectError = () =>
        expect(notify_open).toHaveBeenCalledWith(
            expect.any(String),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );

    it('decodes saved names so the next save sends the real name', async () => {
        const { displays: service } = createServices();
        const display = signageSystem({
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
        void service.editDisplay(service.selected_display() as System);
        await vi.waitFor(() => expect(dialog.open).toHaveBeenCalled());
        const data = dialog.open.mock.calls[0][1].data;
        expect(data.display.name).toBe('A & B');

        await data.onEdit('d1', { name: data.display.name });
        expect(systems.update).toHaveBeenLastCalledWith(
            expect.objectContaining({ body: { name: 'A & B' } }),
        );
    });

    it('decodes saved zone names before selecting the zone', async () => {
        const { zones: service } = createServices();
        const zone = signageZone({ id: 'z1', playlists: ['p1'] });
        vi.mocked(zones_v7.update).mockResolvedValue(
            mockReply(signageZone({ id: 'z1', name: 'R&amp;D' })),
        );

        await service.removePlaylistFromZone(zone, 'p1');

        expect(service.selected_zone()?.name).toBe('R&D');
    });

    it('shows an error and keeps the selection when an assignment fails', async () => {
        const { context, zones: service } = createServices();
        const zone = signageZone({ id: 'z1', playlists: ['p1'] });
        service.selected_zone.set(zone);
        vi.mocked(zones_v7.update).mockRejectedValue(new Error('Conflict'));
        const changed = vi.spyOn(context, 'changed');

        await service.removePlaylistFromZone(zone, 'p1');

        expectError();
        expect(service.selected_zone()).toBe(zone);
        expect(changed).not.toHaveBeenCalled();
    });

    it.each([
        [
            'display',
            () =>
                vi.mocked(systems.destroy).mockRejectedValue(new Error('403')),
            ({ displays }: SignageTestServices) =>
                displays.removeDisplay(signageSystem({ id: 'd1' })),
        ],
        [
            'zone',
            () =>
                vi.mocked(zones_v7.destroy).mockRejectedValue(new Error('403')),
            ({ zones }: SignageTestServices) =>
                zones.removeZone(signageZone({ id: 'z1', tags: ['signage'] })),
        ],
    ] as const)(
        'closes the confirm modal and shows an error when removing a %s fails',
        async (_, fail, remove) => {
            const services = createServices();
            fail();
            confirmNextDialog();

            const removed = await remove(services);

            expect(removed).toBe(false);
            expect(confirm_close).toHaveBeenCalled();
            expectError();
        },
    );

    it('applies local edits only to displays and zones in the list', () => {
        const { displays, zones } = createServices();
        displays['_display_list'].update(() => [signageSystem({ id: 'd1' })]);
        displays['_display_overrides'].set({
            d1: signageSystem({ id: 'd1', name: 'Edited' }),
            other: signageSystem({ id: 'other', name: 'Other group' }),
        });
        zones['_all_zone_list'].set({
            zones: [signageZone({ id: 'z1' })],
            total: 1,
        });
        zones['_zone_overrides'].set({
            other: signageZone({ id: 'other', name: 'Other group' }),
        });

        expect(
            displays.filtered_displays().map(({ id, name }) => [id, name]),
        ).toEqual([['d1', 'Edited']]);
        expect(zones.all_zones().map(({ id }) => id)).toEqual(['z1']);
    });

    /** Select a signage group, as a staff user sees one */
    function selectGroup(
        context: TestAccess<SignageContextService>,
        group_id: string,
    ) {
        context['_signage_groups'].set([
            {
                group: signageGroup({ id: group_id, name: group_id }),
                permissions: 0,
            },
        ]);
        context.selected_group_id.set(group_id);
    }

    // Staff users get a 403 from these routes without the group
    // The zone index takes no display filter, so the display zones are
    // found in the zones of the group. The playlist lookup takes only the
    // id, as the server checks access through the groups of the playlist
    it('scopes the zone lookup of a display to the group', async () => {
        const { context, displays, playlists } = createServices();
        vi.spyOn(context, 'canQueryLists').mockReturnValue(true);
        selectGroup(context, 'g1');
        vi.mocked(zones_v7.query).mockResolvedValue(
            mockPage({
                data: [
                    signageZone({ id: 'z1', playlists: ['p9'] }),
                    signageZone({ id: 'z2', playlists: ['p8'] }),
                ],
                total: 2,
                next: null,
            }),
        );
        vi.mocked(playlist.show).mockResolvedValue(
            mockReply(signagePlaylist({ id: 'p9', name: 'Zone playlist' })),
        );

        displays.selected_display.set(
            signageSystem({ id: 'd1', zones: ['z1'] }),
        );
        await vi.waitFor(() =>
            expect(playlists.playlistsById(['p9']).map(({ id }) => id)).toEqual(
                ['p9'],
            ),
        );

        expect(zones_v7.query).toHaveBeenCalledWith({
            limit: 500,
            group_id: 'g1',
        });
        expect(displays.selected_display_zones().map(({ id }) => id)).toEqual([
            'z1',
        ]);
        expect(playlist.show).toHaveBeenCalledExactlyOnceWith({ id: 'p9' });
    });

    it('counts added and removed displays in the total', async () => {
        const { displays: service } = createServices();
        service['_display_list'].adjustTotal(5);
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (result: System) => void) => {
                    void Promise.resolve().then(() =>
                        handler(signageSystem({ id: 'd-new' })),
                    );
                    return { unsubscribe: vi.fn() };
                },
            }),
        });

        await service.addDisplay();
        expect(service.displays_total()).toBe(6);

        vi.mocked(systems.destroy).mockResolvedValue(mockReply(''));
        confirmNextDialog();
        await service.removeDisplay(signageSystem({ id: 'd-new' }));
        expect(service.displays_total()).toBe(5);
    });

    it('drops local edits when the group changes', async () => {
        const { context, displays, zones } = createServices();
        context['_signage_groups'].set(
            ['g1', 'g2'].map((id) => ({
                group: signageGroup({ id, name: id }),
                permissions: 0,
            })),
        );
        context.selected_group_id.set('g1');
        TestBed.tick();
        displays['_display_overrides'].set({
            d1: signageSystem({ id: 'd1' }),
        });
        zones['_zone_overrides'].set({ z1: signageZone({ id: 'z1' }) });

        context.selected_group_id.set('g2');
        TestBed.tick();
        await flush();

        expect(displays['_display_overrides']()).toEqual({});
        expect(zones['_zone_overrides']()).toEqual({});
    });
});
