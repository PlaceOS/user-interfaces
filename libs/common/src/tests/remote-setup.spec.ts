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
            system_id: vi.fn(() => 'sys-1'),
            apply: vi.fn(() => Promise.resolve(true)),
        };
        markInitialisationComplete();
        service = TestBed.inject(RemoteSetupService);
        service.start(target);
        TestBed.tick();
        await vi.waitFor(() => expect(ts_client.getModule).toHaveBeenCalled());
    });

    afterEach(() => {
        vi.useRealTimers();
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
    });

    it('should use the remote_setup_url setting for the QR code', () => {
        settingSignal('remote_setup_url').set('https://setup.test/?a=1');

        expect(service.setup_url()).toBe(
            `https://setup.test/?a=1&device=${deviceId()}`,
        );
    });

    it('should register after a random wait only while a setup screen shows', () => {
        vi.useFakeTimers();
        vi.spyOn(Math, 'random').mockReturnValue(0.5);
        const registers = () =>
            driver.execute.mock.calls.filter(([name]) => name === 'register');

        driver.emit('connected', true);
        TestBed.tick();
        vi.advanceTimersByTime(60 * 60 * 1000);
        expect(registers()).toHaveLength(0);

        const close = service.showSetupScreen();
        TestBed.tick();
        vi.advanceTimersByTime(5_000 - 1);
        expect(registers()).toHaveLength(0);
        vi.advanceTimersByTime(1);
        expect(registers()).toEqual([['register', [deviceId(), 'control']]]);
        vi.advanceTimersByTime(15 * 60 * 1000);
        expect(registers()).toHaveLength(2);

        close();
        TestBed.tick();
        vi.advanceTimersByTime(60 * 60 * 1000);
        expect(registers()).toHaveLength(2);
    });

    it('should apply a configure command once and complete it', async () => {
        const command = {
            id: 'cmd-1',
            config: { system_id: 'sys-2' },
            issued_at: 1,
        };

        driver.emit(command_binding, command);
        driver.emit(command_binding, command);
        await vi.waitFor(() =>
            expect(driver.execute).toHaveBeenCalledWith('complete', [
                deviceId(),
                'cmd-1',
                'control',
            ]),
        );

        expect(target.apply).toHaveBeenCalledTimes(1);
        expect(target.apply).toHaveBeenCalledWith({ system_id: 'sys-2' });
    });

    it('should not complete a command that does not go through', async () => {
        vi.mocked(target.apply).mockResolvedValue(false);
        driver.emit(command_binding, {
            id: 'cmd-4',
            config: { system_id: 'sys-2' },
        });
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalled());
        await Promise.resolve();

        expect(driver.execute).not.toHaveBeenCalledWith(
            'complete',
            expect.anything(),
        );
    });

    it('should ignore values that are not commands', async () => {
        driver.emit(command_binding, null);
        driver.emit(command_binding, { config: { system_id: 'sys-2' } });
        driver.emit(command_binding, { id: 'cmd-3', config: {} });
        await Promise.resolve();

        expect(target.apply).not.toHaveBeenCalled();
    });

    it('should clear the device when its ID is in the clear list', async () => {
        driver.emit('clear_list', ['DEV-OTHER']);
        await Promise.resolve();
        expect(target.apply).not.toHaveBeenCalled();

        driver.emit('clear_list', ['DEV-OTHER', deviceId()]);
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalledWith(null));
    });

    it('should clear once for an entry with its app and system', async () => {
        const entry = { id: 'clr-1', app: 'control', system_id: 'sys-1' };
        driver.emit('clear_systems', [
            { ...entry, id: 'clr-0', app: 'signage' },
            { ...entry, id: 'clr-0', system_id: 'sys-2' },
        ]);
        await Promise.resolve();
        expect(target.apply).not.toHaveBeenCalled();

        driver.emit('clear_systems', [entry]);
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalledWith(null));

        // A person sets the device up with the same system again
        driver.emit('clear_systems', [entry]);
        await Promise.resolve();
        expect(target.apply).toHaveBeenCalledTimes(1);
    });

    it('should not clear for an entry from before it got its system', async () => {
        const entry = { id: 'clr-1', app: 'control', system_id: 'sys-1' };
        vi.mocked(target.system_id).mockReturnValue(null);
        driver.emit('clear_systems', [entry]);

        // A person sets the device up with the system of the entry
        vi.mocked(target.system_id).mockReturnValue('sys-1');
        driver.emit('clear_systems', [
            entry,
            { ...entry, id: 'clr-2', app: 'signage' },
        ]);
        await Promise.resolve();
        expect(target.apply).not.toHaveBeenCalled();

        driver.emit('clear_systems', [entry, { ...entry, id: 'clr-3' }]);
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalledWith(null));
    });

    it('should not clear for entries in the list at its first check', async () => {
        driver.emit('clear_systems', [
            { id: 'clr-1', app: 'control', system_id: 'sys-1' },
        ]);
        await Promise.resolve();

        expect(target.apply).not.toHaveBeenCalled();
    });

    it('should not clear again while the setup screen shows', async () => {
        service.showSetupScreen();
        driver.emit('clear_list', [deviceId()]);
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
            system_id: () => null,
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
