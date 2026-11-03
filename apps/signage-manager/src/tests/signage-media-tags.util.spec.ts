import {
    listSignageMediaTags,
    listSignageMediaTagCounts as queryTagCounts,
} from '@placeos/ts-client';

import { listSignageMediaTagCounts } from '../app/signage-media-tags.util';

vi.mock('@placeos/ts-client', { spy: true });

describe('signage media tags util', () => {
    beforeEach(() => vi.clearAllMocks());

    it('lists tags with the media count the backend reports', async () => {
        (queryTagCounts as any).mockResolvedValue({ news: 12, lobby: '3' });

        const result = await listSignageMediaTagCounts({ group_id: 'grp-1' });

        expect(queryTagCounts).toHaveBeenCalledWith({ group_id: 'grp-1' });
        // Tags are sorted by name so the folder list keeps a stable order.
        expect(result.tags).toEqual(['lobby', 'news']);
        expect(result.counts).toEqual({ news: 12, lobby: 3 });
    });

    it('omits empty query parameters', async () => {
        (queryTagCounts as any).mockResolvedValue({});

        await listSignageMediaTagCounts({ group_id: '', zone_id: 'zone-1' });

        expect(queryTagCounts).toHaveBeenCalledWith({ zone_id: 'zone-1' });
    });

    it('falls back to the tags endpoint when counts are unavailable', async () => {
        (queryTagCounts as any).mockRejectedValue({ status: 404 });
        (listSignageMediaTags as any).mockResolvedValue(['news', 'lobby']);

        const result = await listSignageMediaTagCounts({ group_id: 'grp-1' });

        expect(listSignageMediaTags).toHaveBeenCalledWith({
            group_id: 'grp-1',
        });
        expect(result.tags).toEqual(['lobby', 'news']);
        // No counts, so callers fall back to counting the media they loaded.
        expect(result.counts).toEqual({});
    });
});
