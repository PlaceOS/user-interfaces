import { Subject } from 'rxjs';

describe('application cache handling', () => {
    let app: typeof import('../lib/application');
    let version_updates: Subject<any>;
    let unrecoverable: Subject<any>;
    let cache: any;

    beforeEach(() => {
        jest.useFakeTimers();
        jest.resetModules();
        app = require('../lib/application');
        version_updates = new Subject();
        unrecoverable = new Subject();
        cache = {
            isEnabled: true,
            versionUpdates: version_updates.asObservable(),
            unrecoverable: unrecoverable.asObservable(),
            checkForUpdate: jest.fn(async () => false),
        };
    });

    afterEach(() => {
        app.clearCacheCheck();
        jest.useRealTimers();
    });

    it('should have no new version by default', () => {
        expect(app.hasNewVersion()).toBe(false);
        expect(app.serviceWorkerUpdate()()).toBeNull();
    });

    it('should do nothing when the service worker is disabled', () => {
        app.setupCache({ ...cache, isEnabled: false });
        jest.advanceTimersByTime(10_000);
        expect(cache.checkForUpdate).not.toHaveBeenCalled();
    });

    it('should periodically check for updates', () => {
        app.setupCache(cache);
        jest.advanceTimersByTime(3000);
        expect(cache.checkForUpdate).toHaveBeenCalledTimes(1);
        jest.advanceTimersByTime(5 * 60 * 1000);
        expect(cache.checkForUpdate).toHaveBeenCalledTimes(2);
    });

    it('should flag new versions when one is ready', () => {
        app.setupCache(cache);
        version_updates.next({ type: 'VERSION_READY' });
        expect(app.hasNewVersion()).toBe(true);
        expect(app.serviceWorkerUpdate()()).toEqual(
            expect.objectContaining({ action: 'Refresh' }),
        );
    });

    it('should ignore other version events', () => {
        app.setupCache(cache);
        version_updates.next({ type: 'VERSION_DETECTED' });
        expect(app.hasNewVersion()).toBe(false);
    });

    it('should stop polling once a new version is found', () => {
        app.setupCache(cache);
        version_updates.next({ type: 'VERSION_READY' });
        jest.advanceTimersByTime(30 * 60 * 1000);
        expect(cache.checkForUpdate).not.toHaveBeenCalled();
    });

    it('should prompt a reload for unrecoverable states', () => {
        app.setupCache(cache);
        unrecoverable.next({ reason: 'hash mismatch' });
        expect(app.hasNewVersion()).toBe(true);
        expect(app.serviceWorkerUpdate()()).toEqual(
            expect.objectContaining({ action: 'Reload' }),
        );
    });
});
