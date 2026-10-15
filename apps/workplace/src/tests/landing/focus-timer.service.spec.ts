import { TestBed } from '@angular/core/testing';
import { FocusTimerService } from '../../app/landing-new/focus-timer.service';

describe('FocusTimerService', () => {
    let service: FocusTimerService;

    beforeEach(() => {
        vi.useFakeTimers();
        service = TestBed.inject(FocusTimerService);
        service.setDuration(25);
    });

    afterEach(() => {
        service.reset();
        vi.useRealTimers();
    });

    it('should count down while it runs', () => {
        service.start();
        vi.advanceTimersByTime(90 * 1000);
        expect(service.running()).toBe(true);
        expect(service.remaining()).toBe(25 * 60 - 90);
    });

    it('should keep the time that is left while it is paused', () => {
        service.start();
        vi.advanceTimersByTime(60 * 1000);
        service.pause();
        vi.advanceTimersByTime(5 * 60 * 1000);
        expect(service.running()).toBe(false);
        expect(service.remaining()).toBe(24 * 60);

        service.start();
        vi.advanceTimersByTime(60 * 1000);
        expect(service.remaining()).toBe(23 * 60);
    });

    it('should stop and put back the full time when the session ends', () => {
        service.setDuration(15);
        service.start();
        vi.advanceTimersByTime(15 * 60 * 1000);
        expect(service.running()).toBe(false);
        expect(service.started()).toBe(false);
        expect(service.remaining()).toBe(15 * 60);
        expect(vi.getTimerCount()).toBe(0);
    });

    it('should stop a session when the duration changes', () => {
        service.start();
        vi.advanceTimersByTime(60 * 1000);
        service.setDuration(45);
        expect(service.running()).toBe(false);
        expect(service.remaining()).toBe(45 * 60);
    });
});
