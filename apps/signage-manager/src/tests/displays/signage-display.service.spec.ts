import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import {
    PlaceSystem,
    removeSystem,
    show,
    SignagePlaylist,
    update,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { SignageContextService } from '../../app/signage-context.service';
import { HydratedSignageTemplateMapping } from '../../app/signage-template-mapping';
import { SignageTemplateService } from '../../app/templates/signage-template.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageDisplayService', () => {
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
            const display = new PlaceSystem({
                id: 'display-1',
                version: 2,
                playlists: ['existing-playlist'],
            });
            const playlist = new SignagePlaylist({ id: 'playlist-1' });
            const updated = new PlaceSystem({
                ...display,
                version: 3,
                playlists: ['existing-playlist', playlist.id],
            });
            service.selected_display.set(display);
            vi.mocked(show).mockResolvedValue(display);
            vi.mocked(update)
                .mockRejectedValueOnce(new Error('Save failed'))
                .mockResolvedValueOnce(updated);
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

            expect(update).toHaveBeenLastCalledWith(
                expect.objectContaining({
                    id: display.id,
                    path: 'systems',
                    method: 'patch',
                    form_data: {
                        playlists: ['existing-playlist', playlist.id],
                        version: 2,
                    },
                }),
            );
            expect(service.selected_display()).toEqual(updated);
            expect(changed).toHaveBeenCalledOnce();
            expect(notify_open).toHaveBeenLastCalledWith(
                expect.any(String),
                expect.anything(),
                expect.objectContaining({ panelClass: ['success'] }),
            );
        },
    );

    it('shows an error when the selected display cannot be loaded', async () => {
        const service = createService();
        closeNextDialogWith('display-unloaded');
        vi.mocked(show).mockRejectedValueOnce(new Error('Load failed'));
        const changed = vi.spyOn(
            TestBed.inject(SignageContextService),
            'changed',
        );

        await service.addDisplayToPlaylist(
            new SignagePlaylist({ id: 'playlist-1' }),
        );

        expect(notify_open).toHaveBeenCalledExactlyOnceWith(
            'Could not add the playlist to the display. Please try again.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(update).not.toHaveBeenCalled();
        expect(changed).not.toHaveBeenCalled();
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
        closeNextDialogWith(new PlaceSystem({ id: 'd1', name: 'Lobby' }));

        await service.editDisplay(new PlaceSystem({ id: 'd1' }));
        expect(changed).toHaveBeenCalledTimes(1);

        vi.mocked(removeSystem).mockResolvedValue({});
        confirmNextDialog();
        await service.removeDisplay(new PlaceSystem({ id: 'd1' }));
        expect(changed).toHaveBeenCalledTimes(2);
    });

    it('takes a display used outside signage off signage instead of deleting it', async () => {
        const service = createService();
        const display = new PlaceSystem({
            id: 'room-1',
            version: 4,
            modules: ['mod-1'],
        });
        vi.mocked(update).mockResolvedValue(display);
        confirmNextDialog();

        expect(await service.removeDisplay(display)).toBe(true);

        expect(removeSystem).not.toHaveBeenCalled();
        expect(update).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'room-1',
                form_data: { signage: false },
                method: 'patch',
            }),
        );
    });

    it('loads the template mappings of the selected display once for its views', async () => {
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'hasFeature',
        ).mockReturnValue(true);
        const templates = TestBed.inject(SignageTemplateService);
        const list = vi
            .spyOn(templates, 'listTemplateMappings')
            .mockResolvedValue([
                new HydratedSignageTemplateMapping({ id: 'm1' }),
            ]);
        const service = createService();

        service.selected_display.set(new PlaceSystem({ id: 'd1' }));
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
