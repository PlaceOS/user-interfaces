import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { setInitReloadHandler } from '../lib/application';
import { setNotifyOutlet } from '../lib/notifications';
import { OrganisationService } from '../lib/org/organisation.service';

import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockPage, mockReply } from '@placeos/ts-client/compat';
import { FakeSession, startFakePlaceClient } from './fake-session';

vi.mock('@placeos/ts-client', { spy: true });

/**
 * The service starts loading from its constructor, so each test configures its
 * settings and then builds it - there is no shared instance to reconfigure.
 */
describe('OrganisationService offline boot', () => {
    let spectator: SpectatorService<OrganisationService>;
    const reload = vi.fn<() => void>();
    const settings_mock = {
        get: vi.fn(),
        app_name: 'signage',
        setOverrides: vi.fn(),
    };
    const createService = createServiceFactory({
        service: OrganisationService,
        providers: [
            { provide: SettingsService, useValue: settings_mock },
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    let place: FakeSession;
    /** Never comes online, as on a device with no network */
    const stayOffline = () => place.signOut();

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
        localStorage.clear();
        sessionStorage.clear();
        settings_mock.get.mockReturnValue(undefined);
        place = startFakePlaceClient();
        Object.defineProperty(globalThis.navigator, 'onLine', {
            configurable: true,
            value: true,
        });
        place.signIn({ id: 'auth-1' });
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({ data: [] } as any),
        );
        vi.mocked(ts_client.metadata.bulkFetch).mockResolvedValue(
            mockReply({}),
        );
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: {},
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        setInitReloadHandler(reload);
    });

    afterEach(() => {
        setInitReloadHandler(null);
        setNotifyOutlet(null, true);
        vi.useRealTimers();
    });

    it('should not report failed loads while offline', async () => {
        const snackbar = {
            open: vi.fn(() => ({
                onAction: () => ({ subscribe: vi.fn() }),
                dismiss: vi.fn(),
            })),
        };
        setNotifyOutlet(snackbar as any, true);
        stayOffline();
        place.signOut();
        vi.mocked(ts_client.zones.query).mockRejectedValue(
            new Error('Failed to fetch'),
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(40_000);

        expect(ts_client.zones.query).toHaveBeenCalled();
        expect(snackbar.open).not.toHaveBeenCalled();

        // Back online and still failing: now it is worth telling someone
        place.signIn({ id: 'auth-1' });
        await vi.advanceTimersByTimeAsync(20_000);

        expect(snackbar.open).toHaveBeenCalled();
    });

    it('should keep querying without an authority while offline', async () => {
        stayOffline();
        place.setAuthority(null);

        spectator = createService();
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.zones.query).toHaveBeenCalledWith(
            expect.objectContaining({ tags: ['org'] }),
        );
    });

    it('should try cached organisation data after the offline wait', async () => {
        stayOffline();

        spectator = createService();
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.zones.query).toHaveBeenCalled();
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should load anyway when offline boot is enabled', async () => {
        stayOffline();
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.offline_boot' ? true : undefined,
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.zones.query).toHaveBeenCalled();
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should still start immediately once online', async () => {
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.offline_boot' ? true : undefined,
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(2000);

        // Well before the offline fallback delay
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should restart zone loading when authentication recovers', async () => {
        vi.mocked(ts_client.zones.query)
            .mockImplementationOnce(
                fromV1Mock(() => new Promise(() => undefined), ['...'], 'page'),
            )
            .mockResolvedValue(mockPage({ data: [] } as any));

        spectator = createService();
        await vi.advanceTimersByTimeAsync(1000);

        expect(ts_client.zones.query).toHaveBeenCalledTimes(1);
        expect(spectator.service.initialised()).toBe(false);

        // Effects see the settled value, so each change needs a tick
        place.signOut();
        TestBed.tick();
        place.signIn({ id: 'auth-1' });
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(1000);

        expect(ts_client.zones.query).toHaveBeenCalledTimes(5);
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should reload when zone loading remains incomplete for 30 seconds', async () => {
        vi.mocked(ts_client.zones.query).mockImplementation(
            fromV1Mock(() => new Promise(() => undefined), ['...'], 'page'),
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(1000);
        await vi.advanceTimersByTimeAsync(29_999);

        expect(reload).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(1);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should cancel the reload when zone loading completes', async () => {
        spectator = createService();
        await vi.advanceTimersByTimeAsync(121_000);

        expect(spectator.service.initialised()).toBe(true);
        expect(reload).not.toHaveBeenCalled();
    });
});
