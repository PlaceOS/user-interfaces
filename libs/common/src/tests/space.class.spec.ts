import { Space } from '../lib/types/space.class';

describe('Space', () => {
    it('should create with sensible defaults', () => {
        const space = new Space();
        expect(space.capacity).toBe(-1);
        expect(space.bookable).toBe(false);
        expect(space.response_status).toBe('tentative');
        expect(space.approval).toBe(false);
        expect(space.level).toBeTruthy();
    });

    it('should lowercase the email address', () => {
        expect(new Space({ email: 'Room.One@Org.com' }).email).toBe(
            'room.one@org.com',
        );
    });

    it('should fall back to features for the feature list', () => {
        expect(new Space({ features: ['vc'] }).feature_list).toEqual(['vc']);
        expect(
            new Space({ feature_list: ['whiteboard'], features: ['vc'] })
                .feature_list,
        ).toEqual(['whiteboard']);
    });

    it('should normalise camera snapshot URLs', () => {
        const multi = new Space({
            camera_snapshot_urls: ['http://cam-1', '', 'http://cam-2'],
        } as any);
        expect(multi.camera_snapshot_urls).toEqual([
            'http://cam-1',
            'http://cam-2',
        ]);
        expect(multi.camera_snapshot_url).toBe('http://cam-1');
        const single = new Space({ camera_snapshot_url: 'http://cam' });
        expect(single.camera_snapshot_urls).toEqual(['http://cam']);
    });

    describe('inUseAt', () => {
        const start = new Date(2024, 0, 10, 10, 0).valueOf();
        const space = new Space({
            availability: [{ date: start, duration: 60, status: 'busy' }],
        } as any);

        it('should report busy availability blocks', () => {
            expect(space.inUseAt(start, 60)).toBe(true);
        });

        it('should ignore non-matching or free blocks', () => {
            expect(space.inUseAt(start, 30)).toBe(false);
            expect(space.inUseAt(start + 1000, 60)).toBe(false);
            const free = new Space({
                availability: [
                    { date: start, duration: 60, status: 'free' },
                ],
            } as any);
            expect(free.inUseAt(start, 60)).toBe(false);
        });
    });
});
