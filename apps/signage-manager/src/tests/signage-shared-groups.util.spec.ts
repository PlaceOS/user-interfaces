import {
    playlist,
    playlist_media,
    signage_templates,
} from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

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
        (playlist_media.show as any).mockResolvedValue(
            mockReply({ shared_with: GROUPS }),
        );

        const result = await listSignageSharedGroups('media', 'media-1');

        expect(playlist_media.show).toHaveBeenCalledWith({ id: 'media-1' });
        expect(result).toEqual(GROUPS);
    });

    it('lists the groups a template is shared with', async () => {
        (signage_templates.show as any).mockResolvedValue(
            mockReply({ shared_with: GROUPS }),
        );

        const result = await listSignageSharedGroups('templates', 'template-1');

        expect(signage_templates.show).toHaveBeenCalledWith({
            id: 'template-1',
        });
        expect(result).toEqual(GROUPS);
    });

    it('lists the groups a playlist is shared with', async () => {
        (playlist.show as any).mockResolvedValue(
            mockReply({ shared_with: GROUPS }),
        );

        const result = await listSignageSharedGroups('playlists', 'playlist-1');

        expect(playlist.show).toHaveBeenCalledWith({ id: 'playlist-1' });
        expect(result).toEqual(GROUPS);
    });

    it('returns no groups on backends without the attribute', async () => {
        (playlist_media.show as any).mockResolvedValue(
            mockReply({ shared_with: undefined }),
        );

        const result = await listSignageSharedGroups('media', 'media-1');

        expect(result).toEqual([]);
    });

    it('returns no groups when the item cannot be read', async () => {
        (playlist_media.show as any).mockRejectedValue({ status: 404 });

        const result = await listSignageSharedGroups('media', 'media-1');

        expect(result).toEqual([]);
    });

    it('does not request anything without an item', async () => {
        const result = await listSignageSharedGroups('media', '');

        expect(playlist_media.show).not.toHaveBeenCalled();
        expect(result).toEqual([]);
    });

    it('unlinks each item type from a single group', async () => {
        (playlist_media.destroy as any).mockResolvedValue(mockReply({}));
        (playlist.destroy as any).mockResolvedValue(mockReply({}));
        (signage_templates.destroy as any).mockResolvedValue(mockReply({}));

        await unshareSignageItem('media', 'media-1', 'grp-2');
        await unshareSignageItem('playlists', 'playlist-1', 'grp-2');
        await unshareSignageItem('templates', 'template-1', 'grp-2');

        expect(playlist_media.destroy).toHaveBeenCalledWith({
            id: 'media-1',
            group_id: 'grp-2',
        });
        expect(playlist.destroy).toHaveBeenCalledWith({
            id: 'playlist-1',
            group_id: 'grp-2',
        });
        expect(signage_templates.destroy).toHaveBeenCalledWith({
            id: 'template-1',
            group_id: 'grp-2',
        });
    });
});
