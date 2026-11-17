import { navDirection } from '../../app/shared/view-transitions';

describe('navDirection', () => {
    it('goes forward from a list to an item and back again', () => {
        expect(navDirection(['playlists'], ['playlists', 'p1'])).toBe(
            'forward',
        );
        expect(navDirection(['playlists', 'p1'], ['playlists'])).toBe('back');
    });

    it('has no direction between sections or between items', () => {
        expect(navDirection(['displays', 'd1'], ['playlists'])).toBeNull();
        expect(
            navDirection(['playlists', 'p1'], ['playlists', 'p2']),
        ).toBeNull();
    });
});
