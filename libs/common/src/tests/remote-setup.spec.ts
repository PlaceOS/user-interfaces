import { TestBed } from '@angular/core/testing';
import * as ts_client from '@placeos/ts-client';

import { markInitialisationComplete } from '../lib/application';
import { deviceId } from '../lib/device-id';
import { RemoteSetupService, RemoteSetupTarget } from '../lib/remote-setup';
import { settingSignal } from '../lib/settings.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Driver module whose bindings the test sets */
function fakeModule() {
    const listeners: Record<string, (value: unknown) => void> = {};
    const execute = vi.fn((_method: string, _args?: unknown[]) =>
        Promise.resolve(),
    );
    const mod = {
        execute,
        variable: (name: string) => ({
            bindThenSubscribe: (next: (value: unknown) => void) => {
                listeners[name] = next;
                return () => delete listeners[name];
            },
        }),
    };
    return {
        mod,
        execute,
        emit: (name: string, value: unknown) => listeners[name]?.(value),
    };
}

describe('RemoteSetupService', () => {
    let driver: ReturnType<typeof fakeModule>;
    let target: RemoteSetupTarget;
    let service: RemoteSetupService;
    const command_binding = `device_${deviceId()}`;

    beforeEach(async () => {
        driver = fakeModule();
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { remote_setup: { system_id: 'sys-rs' } },
        } as never);
        vi.mocked(ts_client.isMock).mockReturnValue(false);
        vi.mocked(ts_client.isSecure).mockReturnValue(true);
        vi.mocked(ts_client.host).mockReturnValue('placeos.test');
        vi.mocked(ts_client.getModule).mockReturnValue(driver.mod as never);
        target = {
            app: 'control',
            default_path: '/concierge/#/remote-setup',
            current: () => ({ system_id: 'sys-1' }),
            apply: vi.fn(() => Promise.resolve(true)),
        };
        markInitialisationComplete();
        service = TestBed.inject(RemoteSetupService);
        service.start(target);
        TestBed.tick();
        await vi.waitFor(() => expect(ts_client.getModule).toHaveBeenCalled());
    });

    afterEach(() => {
        localStorage.clear();
        settingSignal('remote_setup_url').set(undefined);
        vi.restoreAllMocks();
    });

    it('should show only when the driver is connected', () => {
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-rs',
            'RemoteSetup',
        );
        expect(service.available()).toBe(false);

        driver.emit('connected', true);

        expect(service.available()).toBe(true);
        expect(service.setup_url()).toBe(
            `https://placeos.test/concierge/#/remote-setup?device=${deviceId()}`,
        );
        expect(driver.execute).toHaveBeenCalledWith('register', [
            deviceId(),
            'control',
            { system_id: 'sys-1' },
        ]);
    });

    it('should use the remote_setup_url setting for the QR code', () => {
        settingSignal('remote_setup_url').set('https://setup.test/?a=1');

        expect(service.setup_url()).toBe(
            `https://setup.test/?a=1&device=${deviceId()}`,
        );
    });

    it('should apply a command once and complete it', async () => {
        const command = {
            id: 'cmd-1',
            action: 'configure',
            config: { system_id: 'sys-2' },
            issued_at: 1,
        };

        driver.emit(command_binding, command);
        driver.emit(command_binding, command);
        await vi.waitFor(() =>
            expect(driver.execute).toHaveBeenCalledWith('complete', [
                deviceId(),
                'cmd-1',
            ]),
        );

        expect(target.apply).toHaveBeenCalledTimes(1);
        expect(target.apply).toHaveBeenCalledWith({ system_id: 'sys-2' });

        driver.emit(command_binding, { id: 'cmd-2', action: 'clear' });
        await vi.waitFor(() =>
            expect(target.apply).toHaveBeenLastCalledWith(null),
        );
    });

    it('should not complete a command that does not go through', async () => {
        vi.mocked(target.apply).mockResolvedValue(false);
        driver.emit(command_binding, { id: 'cmd-4', action: 'clear' });
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalled());
        await Promise.resolve();

        expect(driver.execute).not.toHaveBeenCalledWith(
            'complete',
            expect.anything(),
        );
    });

    it('should ignore values that are not commands', async () => {
        driver.emit(command_binding, null);
        driver.emit(command_binding, { action: 'clear' });
        driver.emit(command_binding, {
            id: 'cmd-3',
            action: 'configure',
            config: {},
        });
        await Promise.resolve();

        expect(target.apply).not.toHaveBeenCalled();
    });
});

describe('RemoteSetupService on a device it does not set up', () => {
    /** Start the service and let it try to connect */
    async function start() {
        markInitialisationComplete();
        const service = TestBed.inject(RemoteSetupService);
        service.start({
            app: 'signage',
            default_path: '/signage-manager/#/remote-setup',
            current: () => null,
            apply: () => Promise.resolve(),
        });
        TestBed.tick();
        await new Promise((resolve) => setTimeout(resolve));
        return service;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.isMock).mockReturnValue(false);
    });

    afterEach(() => localStorage.clear());

    it('should not bind when the domain has no remote setup system', async () => {
        vi.mocked(ts_client.authority).mockReturnValue({ config: {} } as never);
        const service = await start();

        expect(ts_client.getModule).not.toHaveBeenCalled();
        expect(service.available()).toBe(false);
    });

    it('should not bind when MDM managed config sets the system', async () => {
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { remote_setup: { system_id: 'sys-rs' } },
        } as never);
        localStorage.setItem('PlaceOS.native.system_id', 'sys-mdm');
        const service = await start();

        expect(ts_client.getModule).not.toHaveBeenCalled();
        expect(service.available()).toBe(false);
    });
});
