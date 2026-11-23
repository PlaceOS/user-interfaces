import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { PlaceSystem, query, systems, zones } from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';
import { NEVER, of } from 'rxjs';
import { signageDisplay } from '../../app/displays/signage-display';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { SignageContextService } from '../../app/signage-context.service';
import {
    signagePlaylist,
    signageSystem,
    signageZone,
} from '../../app/signage-models';
import { hydratedTemplateMapping } from '../../app/signage-template-mapping';
import { SignageTemplateService } from '../../app/templates/signage-template.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageDisplayService', () => {
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
        const service = TestBed.inject(SignageDisplayService);
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'requirePermission',
        ).mockReturnValue(true);
        return service;
    }

    function closeNextDialogWith(value: unknown) {
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (result: unknown) => void) => {
                    Promise.resolve().then(() => handler(value));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
    }

    it.each(['playlist', 'display'] as const)(
        'shows an error when assigning from the %s fails and allows a retry',
        async (source) => {
            const service = createService();
            const display = signageSystem({
                id: 'display-1',
                version: 2,
                playlists: ['existing-playlist'],
            });
            const playlist = signagePlaylist({ id: 'playlist-1' });
            const updated = signageSystem({
                ...display,
                version: 3,
                playlists: ['existing-playlist', playlist.id],
            });
            service.selected_display.set(display);
            vi.mocked(systems.show).mockResolvedValue(mockReply(display));
            vi.mocked(systems.update)
                .mockRejectedValueOnce(new Error('Save failed'))
                .mockResolvedValueOnce(mockReply(updated));
            const changed = vi.spyOn(
                TestBed.inject(SignageContextService),
                'changed',
            );
            closeNextDialogWith(
                source === 'playlist' ? display.id : playlist.id,
            );
            const assign = () =>
                source === 'playlist'
                    ? service.addDisplayToPlaylist(playlist)
                    : service.addPlaylistToDisplay(display);

            await assign();

            expect(notify_open).toHaveBeenCalledExactlyOnceWith(
                'Could not add the playlist to the display. Please try again.',
                expect.anything(),
                expect.objectContaining({ panelClass: ['error'] }),
            );
            expect(service.selected_display()).toBe(display);
            expect(changed).not.toHaveBeenCalled();

            await assign();

            expect(systems.update).toHaveBeenLastCalledWith({
                sys_id: display.id,
                version: 2,
                body: {
                    playlists: ['existing-playlist', playlist.id],
                    version: 2,
                },
            });
            expect(service.selected_display()).toEqual({
                ...updated,
                signage_last_seen: 0,
            });
            expect(changed).toHaveBeenCalledOnce();
            expect(notify_open).toHaveBeenLastCalledWith(
                expect.any(String),
                expect.anything(),
                expect.objectContaining({ panelClass: ['success'] }),
            );
        },
    );

    it('updates the loaded displays in the background and keeps them on failure', async () => {
        const service = createService();
        const test_service = service as unknown as {
            _display_cache_group: string | null;
            _display_list: {
                update: (fn: (items: PlaceSystem[]) => PlaceSystem[]) => void;
            };
        };
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'canQueryLists',
        ).mockReturnValue(true);
        test_service._display_cache_group = 'g-1';
        test_service._display_list.update(() => [
            signageDisplay({ id: 'd-1', signage_last_seen: 1 }),
        ]);
        const lastSeen = () =>
            service
                .filtered_displays()
                .map((item) => [item.id, item.signage_last_seen]);

        vi.mocked(query).mockRejectedValueOnce(new Error('500'));
        await service.refreshDisplays();
        expect(lastSeen()).toEqual([['d-1', 1]]);

        vi.mocked(query).mockResolvedValueOnce({
            data: [
                signageDisplay({ id: 'd-1', signage_last_seen: 100 }),
                signageDisplay({ id: 'd-9', signage_last_seen: 100 }),
            ],
            total: 2,
            next: null,
        } as never);
        await service.refreshDisplays();
        // Rows are updated, not added
        expect(lastSeen()).toEqual([['d-1', 100]]);

        // A result that ends after the list loads again is dropped
        let resolve_old: (value: unknown) => void = () => undefined;
        vi.mocked(query).mockReturnValueOnce(
            new Promise((resolve) => (resolve_old = resolve)) as never,
        );
        const old_refresh = service.refreshDisplays();
        (service as unknown as { _display_revision: number })
            ._display_revision++;
        resolve_old({
            data: [signageDisplay({ id: 'd-1', signage_last_seen: 5 })],
            total: 1,
            next: null,
        });
        await old_refresh;
        expect(lastSeen()).toEqual([['d-1', 100]]);
    });

    it('shows an error when the selected display cannot be loaded', async () => {
        const service = createService();
        closeNextDialogWith('display-unloaded');
        vi.mocked(systems.show).mockRejectedValueOnce(new Error('Load failed'));
        const changed = vi.spyOn(
            TestBed.inject(SignageContextService),
            'changed',
        );

        await service.addDisplayToPlaylist(
            signagePlaylist({ id: 'playlist-1' }),
        );

        expect(notify_open).toHaveBeenCalledExactlyOnceWith(
            'Could not add the playlist to the display. Please try again.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(systems.update).not.toHaveBeenCalled();
        expect(changed).not.toHaveBeenCalled();
    });

    describe('adding a display to a zone', () => {
        const zone = signageZone({ id: 'zone-1', parent_id: 'building-1' });

        it('adds the zone and its ancestors and keeps the other zones', async () => {
            const service = createService();
            const display = signageSystem({
                id: 'display-1',
                version: 5,
                zones: ['org-1', 'other-zone'],
            });
            vi.mocked(systems.show).mockResolvedValue(mockReply(display));
            vi.mocked(zones.show).mockImplementation(
                fromV1Mock(
                    async (id: string) =>
                        signageZone({
                            id,
                            parent_id: id === 'building-1' ? 'org-1' : '',
                        }),
                    ['id', '...'],
                ),
            );
            vi.mocked(systems.update).mockResolvedValue(mockReply(display));
            closeNextDialogWith(display.id);

            await service.addDisplayToZone(zone);

            expect(systems.update).toHaveBeenCalledWith({
                sys_id: 'display-1',
                version: 5,
                body: {
                    zones: ['org-1', 'other-zone', 'building-1', 'zone-1'],
                    version: 5,
                },
            });
            expect(notify_open).toHaveBeenLastCalledWith(
                'Display added to zone',
                expect.anything(),
                expect.objectContaining({ panelClass: ['success'] }),
            );
        });

        it('saves nothing for a display that is already in the zone', async () => {
            const service = createService();
            vi.mocked(systems.show).mockResolvedValue(
                mockReply(
                    signageSystem({ id: 'display-1', zones: ['zone-1'] }),
                ),
            );
            closeNextDialogWith('display-1');

            await service.addDisplayToZone(zone);

            expect(systems.update).not.toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalledExactlyOnceWith(
                'Display already assigned to this zone.',
                expect.anything(),
                expect.objectContaining({ panelClass: ['error'] }),
            );
        });
    });

    /** The next confirm modal returns "done" */
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

    // Zone, schedule and report views keep their own copies of displays
    it('reloads the other views after a display is saved or removed', async () => {
        const service = createService();
        const changed = vi.spyOn(
            TestBed.inject(SignageContextService),
            'changed',
        );
        closeNextDialogWith(signageSystem({ id: 'd1', name: 'Lobby' }));

        await service.editDisplay(signageSystem({ id: 'd1' }));
        expect(changed).toHaveBeenCalledTimes(1);

        vi.mocked(systems.destroy).mockResolvedValue(mockReply(''));
        confirmNextDialog();
        await service.removeDisplay(signageSystem({ id: 'd1' }));
        expect(changed).toHaveBeenCalledTimes(2);
    });

    it('takes a display used outside signage off signage instead of deleting it', async () => {
        const service = createService();
        const display = signageSystem({
            id: 'room-1',
            version: 4,
            modules: ['mod-1'],
        });
        vi.mocked(systems.update).mockResolvedValue(mockReply(display));
        confirmNextDialog();

        expect(await service.removeDisplay(display)).toBe(true);

        expect(systems.destroy).not.toHaveBeenCalled();
        expect(systems.update).toHaveBeenCalledWith({
            sys_id: 'room-1',
            version: 4,
            body: { signage: false, version: 4 },
        });
    });

    it('loads the template mappings of the selected display once for its views', async () => {
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'hasFeature',
        ).mockReturnValue(true);
        const templates = TestBed.inject(SignageTemplateService);
        const list = vi
            .spyOn(templates, 'listTemplateMappings')
            .mockResolvedValue([hydratedTemplateMapping({ id: 'm1' })]);
        const service = createService();

        service.selected_display.set(signageSystem({ id: 'd1' }));
        await vi.waitFor(() =>
            expect(service.selected_display_template_mappings()).toHaveLength(
                1,
            ),
        );
        expect(list).toHaveBeenCalledExactlyOnceWith({
            control_system_id: 'd1',
        });

        list.mockResolvedValue([]);
        templates.template_mappings_revision.update((value) => value + 1);
        TestBed.tick();
        await vi.waitFor(() => expect(list).toHaveBeenCalledTimes(2));
        await vi.waitFor(() =>
            expect(service.selected_display_template_mappings()).toEqual([]),
        );
    });
});
