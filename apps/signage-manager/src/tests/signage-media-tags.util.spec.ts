import { playlist_media } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

import { listSignageMediaTagCounts } from '../app/signage-media-tags.util';

vi.mock('@placeos/ts-client', { spy: true });

describe('signage media tags util', () => {
    beforeEach(() => vi.clearAllMocks());

    it('lists tags with the media count the backend reports', async () => {
        (playlist_media.tagCounts as any).mockResolvedValue(
            mockReply({ news: 12, lobby: '3' }),
        );

        const result = await listSignageMediaTagCounts({ group_id: 'grp-1' });

        expect(playlist_media.tagCounts).toHaveBeenCalledWith({
            group_id: 'grp-1',
        });
        // Tags are sorted by name so the folder list keeps a stable order.
        expect(result.tags).toEqual(['lobby', 'news']);
        expect(result.counts).toEqual({ news: 12, lobby: 3 });
    });

    it('omits an empty group', async () => {
        (playlist_media.tagCounts as any).mockResolvedValue(mockReply({}));

        await listSignageMediaTagCounts({ group_id: '' });

        expect(playlist_media.tagCounts).toHaveBeenCalledWith({});
    });

    it('falls back to the tags endpoint when counts are unavailable', async () => {
        (playlist_media.tagCounts as any).mockRejectedValue({ status: 404 });
        (playlist_media.tags as any).mockResolvedValue(
            mockReply(['news', 'lobby']),
        );

        const result = await listSignageMediaTagCounts({ group_id: 'grp-1' });

        expect(playlist_media.tags).toHaveBeenCalledWith({ group_id: 'grp-1' });
        expect(result.tags).toEqual(['lobby', 'news']);
        // No counts, so callers fall back to counting the media they loaded.
        expect(result.counts).toEqual({});
    });
});
