import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { PlaceSystem, show, SignagePlaylist, update } from '@placeos/ts-client';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { SignageContextService } from '../../app/signage-context.service';

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
});
