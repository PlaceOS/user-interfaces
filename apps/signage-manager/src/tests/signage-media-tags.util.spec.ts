import { apiEndpoint, get, listSignageMediaTags } from '@placeos/ts-client';

import { listSignageMediaTagCounts } from '../app/signage-media-tags.util';

vi.mock('@placeos/ts-client', { spy: true });

describe('signage media tags util', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (apiEndpoint as any).mockReturnValue('/api/engine/v2');
    });

    it('lists tags with the media count the backend reports', async () => {
        (get as any).mockResolvedValue({ news: 12, lobby: '3' });

        const result = await listSignageMediaTagCounts({ group_id: 'grp-1' });

        expect(get).toHaveBeenCalledWith(
            '/api/engine/v2/signage/media/tag_counts?group_id=grp-1',
        );
        // Tags are sorted by name so the folder list keeps a stable order.
        expect(result.tags).toEqual(['lobby', 'news']);
        expect(result.counts).toEqual({ news: 12, lobby: 3 });
    });

    it('omits empty query parameters', async () => {
        (get as any).mockResolvedValue({});

        await listSignageMediaTagCounts({ group_id: '', zone_id: 'zone-1' });

        expect(get).toHaveBeenCalledWith(
            '/api/engine/v2/signage/media/tag_counts?zone_id=zone-1',
        );
    });

    it('falls back to the tags endpoint when counts are unavailable', async () => {
        (get as any).mockRejectedValue({ status: 404 });
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
