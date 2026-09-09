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

    /** Never comes online, as on a device with no network */
    const stayOffline = () =>
        vi
            .mocked(ts_client.waitForSignal)
            .mockImplementation(() => new Promise(() => undefined) as any);

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
        localStorage.clear();
        sessionStorage.clear();
        settings_mock.get.mockReturnValue(undefined);
        vi.mocked(ts_client.onlineState).mockReturnValue(
            ts_client.createSignal(true),
        );
        vi.mocked(ts_client.isOnline).mockReturnValue(true);
        Object.defineProperty(globalThis.navigator, 'onLine', {
            configurable: true,
            value: true,
        });
        vi.mocked(ts_client.authority).mockReturnValue({ id: 'auth-1' } as any);
        vi.mocked(ts_client.queryZones).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.bulkMetadata).mockResolvedValue({} as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        setInitReloadHandler(reload);
    });

    afterEach(() => {
        setInitReloadHandler(null);
        setNotifyOutlet(null as any, true);
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
        vi.mocked(ts_client.isOnline).mockReturnValue(false);
        vi.mocked(ts_client.queryZones).mockRejectedValue(
            new Error('Failed to fetch'),
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(40_000);

        expect(ts_client.queryZones).toHaveBeenCalled();
        expect(snackbar.open).not.toHaveBeenCalled();

        // Back online and still failing: now it is worth telling someone
        vi.mocked(ts_client.isOnline).mockReturnValue(true);
        await vi.advanceTimersByTimeAsync(20_000);

        expect(snackbar.open).toHaveBeenCalled();
    });

    it('should keep querying without an authority while offline', async () => {
        stayOffline();
        vi.mocked(ts_client.authority).mockReturnValue(undefined as any);

        spectator = createService();
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.queryZones).toHaveBeenCalledWith(
            expect.objectContaining({ authority_id: undefined }),
        );
    });

    it('should try cached organisation data after the offline wait', async () => {
        stayOffline();

        spectator = createService();
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.queryZones).toHaveBeenCalled();
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should load anyway when offline boot is enabled', async () => {
        stayOffline();
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.offline_boot' ? true : undefined,
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.queryZones).toHaveBeenCalled();
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should still start immediately once online', async () => {
        vi.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.offline_boot' ? true : undefined,
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(2000);

        // Well before the offline fallback delay
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should restart zone loading when authentication recovers', async () => {
        const online = ts_client.createSignal(true);
        vi.mocked(ts_client.onlineState).mockReturnValue(online);
        vi.mocked(ts_client.queryZones)
            .mockImplementationOnce(() => new Promise(() => undefined) as any)
            .mockResolvedValue({ data: [] } as any);

        spectator = createService();
        await vi.advanceTimersByTimeAsync(1000);

        expect(ts_client.queryZones).toHaveBeenCalledTimes(1);
        expect(spectator.service.initialised()).toBe(false);

        online.set(false);
        online.set(true);
        await vi.advanceTimersByTimeAsync(1000);

        expect(ts_client.queryZones).toHaveBeenCalledTimes(5);
        expect(spectator.service.initialised()).toBe(true);
    });

    it('should reload when zone loading remains incomplete for 45 seconds', async () => {
        vi.mocked(ts_client.queryZones).mockImplementation(
            () => new Promise(() => undefined) as any,
        );

        spectator = createService();
        await vi.advanceTimersByTimeAsync(1000);
        await vi.advanceTimersByTimeAsync(44_999);

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
