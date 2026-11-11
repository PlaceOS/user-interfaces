import { Subscription } from 'rxjs';

import { AsyncHandler } from '../lib/async-handler.class';

/** Exposes the protected helpers so that tests can call them. */
class TestHandler extends AsyncHandler {
    public override timeout(name: string, fn: () => void, delay?: number) {
        super.timeout(name, fn, delay);
    }
    public override interval(name: string, fn: () => void, delay?: number) {
        super.interval(name, fn, delay);
    }
    public override subscription(
        name: string,
        unsub: Subscription | (() => void),
    ) {
        super.subscription(name, unsub);
    }
    public override unsubWith(contains: string) {
        super.unsubWith(contains);
    }
}

describe('AsyncHandler', () => {
    let handler: TestHandler;

    beforeEach(() => {
        vi.useFakeTimers();
        handler = new TestHandler();
    });

    afterEach(() => vi.useRealTimers());

    it('should replace a pending timeout that has the same name', () => {
        const first = vi.fn();
        const second = vi.fn();

        handler.timeout('save', first, 100);
        handler.timeout('save', second, 100);
        vi.advanceTimersByTime(100);

        expect(first).not.toHaveBeenCalled();
        expect(second).toHaveBeenCalledTimes(1);
    });

    it('should stop pending timeouts and intervals on destroy', () => {
        const on_timeout = vi.fn();
        const on_interval = vi.fn();
        handler.timeout('once', on_timeout, 100);
        handler.interval('poll', on_interval, 50);
        vi.advanceTimersByTime(50);

        handler.ngOnDestroy();
        vi.advanceTimersByTime(500);

        expect(on_timeout).not.toHaveBeenCalled();
        expect(on_interval).toHaveBeenCalledTimes(1);
    });

    it('should unsubscribe the old subscription when a name is reused', () => {
        const old_unsub = vi.fn();
        const new_sub = new Subscription();

        handler.subscription('data', old_unsub);
        handler.subscription('data', new_sub);

        expect(old_unsub).toHaveBeenCalledTimes(1);
        expect(new_sub.closed).toBe(false);
        handler.ngOnDestroy();
        expect(new_sub.closed).toBe(true);
    });

    it('should only unsubscribe names that contain the given text', () => {
        const booking_a = vi.fn();
        const booking_b = vi.fn();
        const other = vi.fn();
        handler.subscription('booking-a', booking_a);
        handler.subscription('booking-b', booking_b);
        handler.subscription('other', other);

        handler.unsubWith('booking');

        expect(booking_a).toHaveBeenCalledTimes(1);
        expect(booking_b).toHaveBeenCalledTimes(1);
        expect(other).not.toHaveBeenCalled();
    });
});
