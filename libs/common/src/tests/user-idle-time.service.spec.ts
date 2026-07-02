import { discardPeriodicTasks, fakeAsync, tick } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { UserIdleTimeService } from '../lib/user-idle-time.service';

describe('UserIdleTimeService', () => {
    let spectator: SpectatorService<UserIdleTimeService>;
    const createService = createServiceFactory(UserIdleTimeService);

    it('should track idle time', fakeAsync(() => {
        spectator = createService();
        tick(3000);
        expect(spectator.service.idle_time()).toBeGreaterThanOrEqual(3000);
        discardPeriodicTasks();
    }));

    it('should reset idle time on user interaction while listening', fakeAsync(() => {
        spectator = createService();
        const stop = spectator.service.startListening();
        tick(3000);
        document.body.dispatchEvent(new Event('mousemove'));
        tick(1000);
        expect(spectator.service.idle_time()).toBeLessThan(3000);
        stop();
        discardPeriodicTasks();
    }));

    it('should ignore interactions after listening stops', fakeAsync(() => {
        spectator = createService();
        spectator.service.startListening();
        spectator.service.stopListening();
        tick(3000);
        document.body.dispatchEvent(new Event('mousemove'));
        tick(1000);
        expect(spectator.service.idle_time()).toBeGreaterThanOrEqual(4000);
        discardPeriodicTasks();
    }));

    it('should resolve idleFor once idle for the given duration', fakeAsync(() => {
        spectator = createService();
        const resolved = jest.fn();
        spectator.service.idleFor(2000).then(resolved);
        tick(1000);
        expect(resolved).not.toHaveBeenCalled();
        tick(2000);
        expect(resolved).toHaveBeenCalled();
        discardPeriodicTasks();
    }));
});
