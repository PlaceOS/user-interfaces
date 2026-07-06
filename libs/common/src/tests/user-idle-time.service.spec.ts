import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';

import { UserIdleTimeService } from '../lib/user-idle-time.service';

describe('UserIdleTimeService', () => {
    let spectator: SpectatorService<UserIdleTimeService>;
    const createService = createServiceFactory(UserIdleTimeService);

    beforeEach(() => vi.useFakeTimers());

    afterEach(() => vi.useRealTimers());

    it('should track idle time', async () => {
        spectator = createService();
        await vi.advanceTimersByTimeAsync(3000);
        expect(spectator.service.idle_time()).toBeGreaterThanOrEqual(3000);
    });

    it('should reset idle time on user interaction while listening', async () => {
        spectator = createService();
        const stop = spectator.service.startListening();
        await vi.advanceTimersByTimeAsync(3000);
        document.body.dispatchEvent(new Event('mousemove'));
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.service.idle_time()).toBeLessThan(3000);
        stop();
    });

    it('should ignore interactions after listening stops', async () => {
        spectator = createService();
        spectator.service.startListening();
        spectator.service.stopListening();
        await vi.advanceTimersByTimeAsync(3000);
        document.body.dispatchEvent(new Event('mousemove'));
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.service.idle_time()).toBeGreaterThanOrEqual(4000);
    });

    it('should resolve idleFor once idle for the given duration', async () => {
        spectator = createService();
        const resolved = vi.fn();
        spectator.service.idleFor(2000).then(resolved);
        await vi.advanceTimersByTimeAsync(1000);
        expect(resolved).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(2000);
        expect(resolved).toHaveBeenCalled();
    });
});
