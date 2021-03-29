
import { DurationPipe } from '../../app/ui/duration.pipe';

describe('DurationPipe', () => {

    let pipe: DurationPipe

    beforeEach(() => (pipe = new DurationPipe()));

    it('should create pipe', () => {
        expect(pipe).toBeTruthy();
    });
});
