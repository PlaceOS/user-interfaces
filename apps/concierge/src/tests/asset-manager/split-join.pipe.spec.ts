import { SplitJoinPipe } from '../../app/asset-manager/split-join.pipe';

describe('SplitJoinPipe', () => {
    let pipe: SplitJoinPipe;

    beforeEach(() => (pipe = new SplitJoinPipe()));

    it('should replace underscores with spaces by default', () => {
        expect(pipe.transform('in_transit')).toBe('in transit');
        expect(pipe.transform('at_a_location')).toBe('at a location');
    });

    it('should support custom split and join tokens', () => {
        expect(pipe.transform('a-b-c', '-', '/')).toBe('a/b/c');
    });

    it('should safely handle empty or nullish values', () => {
        expect(pipe.transform('')).toBe('');
        expect(pipe.transform(null as any)).toBe('');
        expect(pipe.transform(undefined as any)).toBe('');
    });
});
