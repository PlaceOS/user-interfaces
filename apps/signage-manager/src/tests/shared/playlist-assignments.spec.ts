import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';

import { type SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { PlaylistAssignments } from '../../app/shared/playlist-assignments';
import { type SignageContextService } from '../../app/signage-context.service';

interface Holder {
    id: string;
    version: number;
    playlists?: string[];
}

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

/** Whether the last notification was an error */
function lastNotifyWasError() {
    const options = notify_open.mock.lastCall?.at(2) as
        | { panelClass?: string[] }
        | undefined;
    return !!options?.panelClass?.includes('error');
}

describe('PlaylistAssignments', () => {
    const can_update = signal(true);
    const context = {
        api_group_id: signal('g1'),
        data_change: signal(0),
        can_update,
        changed: vi.fn(),
        requirePermission: vi.fn((allowed: boolean) => allowed),
    };
    const playlist_service = { confirmTakeoverChange: vi.fn() };
    const save_playlists = vi.fn(
        async (item: Holder, playlists: string[]): Promise<Holder> => ({
            ...item,
            version: item.version + 1,
            playlists,
        }),
    );

    function make() {
        const overrides = signal<Record<string, Holder>>({});
        const selected = signal<Holder | null>(null);
        const assignments = TestBed.runInInjectionContext(
            () =>
                new PlaylistAssignments<Holder>({
                    context: context as unknown as SignageContextService,
                    playlist_service:
                        playlist_service as unknown as SignagePlaylistService,
                    dialog: {} as MatDialog,
                    overrides,
                    selected,
                    target: 'display_id',
                    already_assigned_key: 'ALREADY',
                    add_error_key: 'ADD_ERROR',
                    save_playlists,
                }),
        );
        return { assignments, overrides };
    }

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet(
            { open: notify_open } as unknown as Parameters<
                typeof setNotifyOutlet
            >[0],
            true,
        );
        can_update.set(true);
        playlist_service.confirmTakeoverChange.mockResolvedValue(true);
    });

    it('does not add a playlist the item already has', async () => {
        const { assignments } = make();
        const item = { id: 'd1', version: 1, playlists: ['p1'] };

        const saved = await assignments.add(item, { playlist_id: 'p1' }, 'OK');

        expect(saved).toBeNull();
        expect(playlist_service.confirmTakeoverChange).not.toHaveBeenCalled();
        expect(save_playlists).not.toHaveBeenCalled();
        expect(lastNotifyWasError()).toBe(true);
    });

    it('saves nothing when the user declines a takeover conflict', async () => {
        const { assignments, overrides } = make();
        playlist_service.confirmTakeoverChange.mockResolvedValue(false);
        const item = { id: 'd1', version: 1, playlists: [] };

        const saved = await assignments.add(item, { playlist_id: 'p1' }, 'OK');

        expect(saved).toBeNull();
        // The check needs the item, so it can find takeovers on it
        expect(playlist_service.confirmTakeoverChange).toHaveBeenCalledWith({
            playlist_id: 'p1',
            display_id: 'd1',
        });
        expect(save_playlists).not.toHaveBeenCalled();
        expect(overrides()).toEqual({});
    });

    it('takes off only the given playlist and keeps the saved item', async () => {
        const { assignments, overrides } = make();
        const item = { id: 'd1', version: 1, playlists: ['p1', 'p2', 'p3'] };

        const saved = await assignments.remove(item, 'p2', 'OK');

        expect(save_playlists).toHaveBeenCalledWith(item, ['p1', 'p3']);
        expect(saved?.playlists).toEqual(['p1', 'p3']);
        expect(overrides()['d1']).toEqual(saved);
        expect(context.changed).toHaveBeenCalledOnce();
    });

    it('takes off nothing without update permission', async () => {
        const { assignments } = make();
        can_update.set(false);

        const saved = await assignments.remove(
            { id: 'd1', version: 1, playlists: ['p1'] },
            'p1',
            'OK',
        );

        expect(saved).toBeNull();
        expect(save_playlists).not.toHaveBeenCalled();
    });

    it('drops local edits when signage data changes elsewhere', () => {
        const { assignments, overrides } = make();
        TestBed.tick();
        assignments.cache({ id: 'd1', version: 2, playlists: ['p1'] });

        context.data_change.update((count) => count + 1);
        TestBed.tick();

        expect(overrides()).toEqual({});
    });
});
