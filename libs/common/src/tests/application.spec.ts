import { Subject } from 'rxjs';

import * as ts_client from '@placeos/ts-client';

import * as app from '../lib/application';

vi.mock('@placeos/ts-client', { spy: true });

describe('application cache handling', () => {
    let version_updates: Subject<any>;
    let unrecoverable: Subject<any>;
    let cache: any;
    let reload: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.useFakeTimers();
        // `clearCacheCheck` fully resets the module-level cache state between
        // tests (the native builder shares module instances across specs).
        app.clearCacheCheck();
        version_updates = new Subject();
        unrecoverable = new Subject();
        cache = {
            isEnabled: true,
            versionUpdates: version_updates.asObservable(),
            unrecoverable: unrecoverable.asObservable(),
            checkForUpdate: vi.fn(async () => false),
        };
        vi.mocked(ts_client.isOnline).mockReturnValue(true);
        Object.defineProperty(globalThis.navigator, 'onLine', {
            configurable: true,
            value: true,
        });
        reload = vi.fn();
        Object.defineProperty(globalThis, 'location', {
            configurable: true,
            value: { reload },
        });
    });

    afterEach(() => {
        app.clearCacheCheck();
        vi.useRealTimers();
    });

    it('should reload immediately when a new version is ready and nothing blocks it', () => {
        app.setupCache(cache, { auto_reload: true });
        version_updates.next({ type: 'VERSION_READY' });

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should wait for the network before reloading', () => {
        vi.mocked(ts_client.isOnline).mockReturnValue(false);
        app.setupCache(cache, { auto_reload: true });
        version_updates.next({ type: 'VERSION_READY' });
        expect(reload).not.toHaveBeenCalled();
        expect(app.reloadPending()).toBe(true);

        vi.advanceTimersByTime(30_000);
        expect(reload).not.toHaveBeenCalled();

        vi.mocked(ts_client.isOnline).mockReturnValue(true);
        vi.advanceTimersByTime(5_000);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should wait for the reload gate to allow it', () => {
        let safe = false;
        app.setAutoReloadGate(() => safe);
        app.setupCache(cache, { auto_reload: true });
        version_updates.next({ type: 'VERSION_READY' });
        expect(reload).not.toHaveBeenCalled();

        vi.advanceTimersByTime(60_000);
        expect(reload).not.toHaveBeenCalled();

        safe = true;
        vi.advanceTimersByTime(5_000);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should reload anyway once the deferral limit is reached', () => {
        app.setAutoReloadGate(() => false);
        app.setupCache(cache, { auto_reload: true });
        version_updates.next({ type: 'VERSION_READY' });

        vi.advanceTimersByTime(10 * 60 * 1000 + 5_000);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should reload despite a reload gate that throws', () => {
        app.setAutoReloadGate(() => {
            throw new Error('gate failed');
        });
        app.setupCache(cache, { auto_reload: true });
        version_updates.next({ type: 'VERSION_READY' });

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should reload the current url to pick up a new version', () => {
        app.reloadForNewVersion();

        expect(reload).toHaveBeenCalledTimes(1);
        // Navigating instead would drop the hash, and with it the route the
        // app is on
        expect((globalThis.location as any).href).toBeUndefined();
    });

    it('should hold a version reload back for the reload gate', () => {
        let safe = false;
        app.setAutoReloadGate(() => safe);

        app.reloadForNewVersion();
        vi.advanceTimersByTime(60_000);
        expect(reload).not.toHaveBeenCalled();

        safe = true;
        vi.advanceTimersByTime(5_000);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should reload directly when initialisation fails and nothing handles it', () => {
        app.requestInitReload();

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should hand a failed initialisation to a registered handler instead', () => {
        const handler = vi.fn();
        app.setInitReloadHandler(handler);

        app.requestInitReload();

        expect(handler).toHaveBeenCalledTimes(1);
        expect(reload).not.toHaveBeenCalled();
    });

    it('should have no new version by default', () => {
        expect(app.hasNewVersion()).toBe(false);
        expect(app.serviceWorkerUpdate()()).toBeNull();
    });

    it('should do nothing when the service worker is disabled', () => {
        app.setupCache({ ...cache, isEnabled: false });
        vi.advanceTimersByTime(10_000);
        expect(cache.checkForUpdate).not.toHaveBeenCalled();
    });

    it('should periodically check for updates', () => {
        app.setupCache(cache);
        vi.advanceTimersByTime(3000);
        expect(cache.checkForUpdate).toHaveBeenCalledTimes(1);
        vi.advanceTimersByTime(5 * 60 * 1000);
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
        vi.advanceTimersByTime(30 * 60 * 1000);
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
