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

    it('should name the missing name or callback in the error', () => {
        const no_fn = undefined as unknown as () => void;

        expect(() => handler.timeout('save', no_fn)).toThrow(
            'Cannot create a timeout without a callback',
        );
        expect(() => handler.timeout('', vi.fn())).toThrow(
            'Cannot create named timeout without a name',
        );
        expect(() => handler.interval('poll', no_fn)).toThrow(
            'Cannot create a interval without a callback',
        );
        expect(() => handler.interval('', vi.fn())).toThrow(
            'Cannot create named interval without a name',
        );
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

    it('should clear a timeout that its callback set again on destroy', () => {
        const retry = vi.fn();
        handler.timeout('retry', () => handler.timeout('retry', retry), 100);
        vi.advanceTimersByTime(100);

        handler.ngOnDestroy();
        vi.advanceTimersByTime(500);

        expect(retry).not.toHaveBeenCalled();
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
