import {
    removeSignageMedia,
    removeSignagePlaylist,
    removeSignageTemplate,
    showSignageMedia,
    showSignagePlaylist,
    showSignageTemplate,
} from '@placeos/ts-client';

import {
    listSignageSharedGroups,
    unshareSignageItem,
} from '../app/signage-shared-groups.util';

vi.mock('@placeos/ts-client', { spy: true });

const GROUPS = [
    { id: 'grp-1', name: 'Facilities' },
    { id: 'grp-2', name: 'Marketing' },
];

describe('signage shared groups util', () => {
    beforeEach(() => vi.clearAllMocks());

    it('lists the groups a media item is shared with', async () => {
        (showSignageMedia as any).mockResolvedValue({ shared_with: GROUPS });

        const result = await listSignageSharedGroups(
            'media',
            'media-1',
            'grp-1',
        );

        expect(showSignageMedia).toHaveBeenCalledWith('media-1', {
            group_id: 'grp-1',
        });
        expect(result).toEqual(GROUPS);
    });

    it('omits the group query when no group is selected', async () => {
        (showSignageMedia as any).mockResolvedValue({ shared_with: [] });

        await listSignageSharedGroups('media', 'media-1');

        expect(showSignageMedia).toHaveBeenCalledWith('media-1', {});
    });

    it('lists the groups a template is shared with', async () => {
        (showSignageTemplate as any).mockResolvedValue({ shared_with: GROUPS });

        const result = await listSignageSharedGroups('templates', 'template-1');

        expect(showSignageTemplate).toHaveBeenCalledWith('template-1');
        expect(result).toEqual(GROUPS);
    });

    it('lists the groups a playlist is shared with', async () => {
        (showSignagePlaylist as any).mockResolvedValue({ shared_with: GROUPS });

        const result = await listSignageSharedGroups(
            'playlists',
            'playlist-1',
            'grp-1',
        );

        expect(showSignagePlaylist).toHaveBeenCalledWith('playlist-1', {
            group_id: 'grp-1',
        });
        expect(result).toEqual(GROUPS);
    });

    it('returns no groups on backends without the attribute', async () => {
        (showSignageMedia as any).mockResolvedValue({ shared_with: undefined });

        const result = await listSignageSharedGroups('media', 'media-1');

        expect(result).toEqual([]);
    });

    it('returns no groups when the item cannot be read', async () => {
        (showSignageMedia as any).mockRejectedValue({ status: 404 });

        const result = await listSignageSharedGroups('media', 'media-1');

        expect(result).toEqual([]);
    });

    it('does not request anything without an item', async () => {
        const result = await listSignageSharedGroups('media', '');

        expect(showSignageMedia).not.toHaveBeenCalled();
        expect(result).toEqual([]);
    });

    it('unlinks each item type from a single group', async () => {
        (removeSignageMedia as any).mockResolvedValue({});
        (removeSignagePlaylist as any).mockResolvedValue({});
        (removeSignageTemplate as any).mockResolvedValue({});

        await unshareSignageItem('media', 'media-1', 'grp-2');
        await unshareSignageItem('playlists', 'playlist-1', 'grp-2');
        await unshareSignageItem('templates', 'template-1', 'grp-2');

        expect(removeSignageMedia).toHaveBeenCalledWith('media-1', {
            group_id: 'grp-2',
        });
        expect(removeSignagePlaylist).toHaveBeenCalledWith('playlist-1', {
            group_id: 'grp-2',
        });
        expect(removeSignageTemplate).toHaveBeenCalledWith('template-1', {
            group_id: 'grp-2',
        });
    });
});
