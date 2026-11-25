import { TestBed } from '@angular/core/testing';
import {
    deregisterSystem,
    mockSystem,
    registerSystem,
} from '@placeos/ts-client/compat';

import { markInitialisationComplete } from '../lib/application';
import { deviceId } from '../lib/device-id';
import {
    REMOTE_SETUP_MOCK_SYSTEM,
    remoteSetupModule,
    RemoteSetupService,
    RemoteSetupTarget,
} from '../lib/remote-setup';
import { settingSignal } from '../lib/settings.service';
import { startFakePlaceClient } from './fake-session';
import { startMockPlaceClient } from './test-helpers';

vi.mock('@placeos/ts-client', { spy: true });

/**
 * Short wait before a check that something did not occur. Use it only
 * after a positive signal, such as `waitForBinding`.
 */
const flush = () => new Promise((resolve) => setTimeout(resolve, 10));

/** Value that the realtime client has for a binding of the driver */
function bindingValue(name: string) {
    return remoteSetupModule()?.variable<unknown>(name).value();
}

/**
 * Wait until the service binding has the value. The client gives each
 * value to the listeners of the binding when it gets the value.
 */
async function waitForBinding(name: string, value: unknown) {
    await vi.waitFor(() => expect(bindingValue(name)).toEqual(value));
}

/**
 * RemoteSetup driver in the mock system of mock mode. The test sets its
 * bindings, and reads the calls of its functions.
 * @param bindings Values of the bindings at the first check
 */
function mockDriver(bindings: Record<string, unknown> = {}) {
    const register = vi.fn(() => null);
    const complete = vi.fn(() => null);
    registerSystem(REMOTE_SETUP_MOCK_SYSTEM, {
        RemoteSetup: [
            {
                connected: false,
                clear_list: [],
                clear_systems: [],
                [`device_${deviceId()}`]: null,
                register,
                complete,
                ...bindings,
            },
        ],
    });
    return {
        register,
        complete,
        emit: (name: string, value: unknown) => {
            const mod = mockSystem(REMOTE_SETUP_MOCK_SYSTEM)?.[
                'RemoteSetup'
            ]?.[0];
            if (mod) mod[name] = value;
        },
    };
}

describe('RemoteSetupService', () => {
    let driver: ReturnType<typeof mockDriver>;
    let target: RemoteSetupTarget;
    let service: RemoteSetupService;
    const command_binding = `device_${deviceId()}`;

    beforeEach(async () => {
        startMockPlaceClient();
        driver = mockDriver();
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
        await vi.waitFor(() => {
            expect(bindingValue('connected')).toBe(false);
            expect(bindingValue(command_binding)).toBeNull();
            expect(bindingValue('clear_list')).toEqual([]);
            expect(bindingValue('clear_systems')).toEqual([]);
        });
    });

    afterEach(() => {
        vi.useRealTimers();
        deregisterSystem(REMOTE_SETUP_MOCK_SYSTEM);
        localStorage.clear();
        settingSignal('remote_setup_url').set(undefined);
        vi.restoreAllMocks();
    });

    it('should show only when the driver is connected', async () => {
        expect(service.available()).toBe(false);

        driver.emit('connected', true);
        await vi.waitFor(() => expect(service.available()).toBe(true));

        expect(service.setup_url()).toBe(
            `${location.origin}/concierge/#/remote-setup?device=${deviceId()}`,
        );
    });

    it('should use the remote_setup_url setting for the QR code', () => {
        settingSignal('remote_setup_url').set('https://setup.test/?a=1');

        expect(service.setup_url()).toBe(
            `https://setup.test/?a=1&device=${deviceId()}`,
        );
    });

    it('should register after a random wait only while a setup screen shows', async () => {
        driver.emit('connected', true);
        await vi.waitFor(() => expect(service.available()).toBe(true));
        vi.useFakeTimers();
        vi.spyOn(Math, 'random').mockReturnValue(0.5);
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(60 * 60 * 1000);
        expect(driver.register).not.toHaveBeenCalled();

        const close = service.showSetupScreen();
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(5_000 - 1);
        expect(driver.register).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(100);
        expect(driver.register.mock.calls).toEqual([[deviceId(), 'control']]);
        await vi.advanceTimersByTimeAsync(15 * 60 * 1000);
        expect(driver.register).toHaveBeenCalledTimes(2);

        close();
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(60 * 60 * 1000);
        expect(driver.register).toHaveBeenCalledTimes(2);
    });

    it('should apply a configure command once and complete it', async () => {
        const command = {
            id: 'cmd-1',
            config: { system_id: 'sys-2' },
            issued_at: 1,
        };

        driver.emit(command_binding, command);
        await vi.waitFor(() =>
            expect(driver.complete).toHaveBeenCalledWith(
                deviceId(),
                'cmd-1',
                'control',
            ),
        );
        // The same command again. A new `issued_at` lets the test see that
        // the value arrived.
        driver.emit(command_binding, { ...command, issued_at: 2 });
        await waitForBinding(command_binding, { ...command, issued_at: 2 });
        await flush();

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
        await flush();

        expect(driver.complete).not.toHaveBeenCalled();
    });

    it('should ignore values that are not commands', async () => {
        for (const value of [
            { config: { system_id: 'sys-2' } },
            { id: 'cmd-3', config: {} },
            null,
        ]) {
            driver.emit(command_binding, value);
            await waitForBinding(command_binding, value);
        }
        await flush();

        expect(target.apply).not.toHaveBeenCalled();
    });

    it('should clear the device when its ID is in the clear list', async () => {
        driver.emit('clear_list', ['DEV-OTHER']);
        await waitForBinding('clear_list', ['DEV-OTHER']);
        await flush();
        expect(target.apply).not.toHaveBeenCalled();

        driver.emit('clear_list', ['DEV-OTHER', deviceId()]);
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalledWith(null));
    });

    it('should clear once for an entry with its app and system', async () => {
        const entry = { id: 'clr-1', app: 'control', system_id: 'sys-1' };
        const other = [
            { ...entry, id: 'clr-0', app: 'signage' },
            { ...entry, id: 'clr-0', system_id: 'sys-2' },
        ];
        driver.emit('clear_systems', other);
        await waitForBinding('clear_systems', other);
        await flush();
        expect(target.apply).not.toHaveBeenCalled();

        driver.emit('clear_systems', [entry]);
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalledWith(null));

        // A person sets the device up with the same system again. The entry
        // of the other app lets the test see that the value arrived.
        const again = [other[0], entry];
        driver.emit('clear_systems', again);
        await waitForBinding('clear_systems', again);
        await flush();
        expect(target.apply).toHaveBeenCalledTimes(1);
    });

    it('should not clear for an entry from before it got its system', async () => {
        const entry = { id: 'clr-1', app: 'control', system_id: 'sys-1' };
        vi.mocked(target.system_id).mockReturnValue(null);
        driver.emit('clear_systems', [entry]);
        await waitForBinding('clear_systems', [entry]);

        // A person sets the device up with the system of the entry
        vi.mocked(target.system_id).mockReturnValue('sys-1');
        const later = [entry, { ...entry, id: 'clr-2', app: 'signage' }];
        driver.emit('clear_systems', later);
        await waitForBinding('clear_systems', later);
        await flush();
        expect(target.apply).not.toHaveBeenCalled();

        driver.emit('clear_systems', [entry, { ...entry, id: 'clr-3' }]);
        await vi.waitFor(() => expect(target.apply).toHaveBeenCalledWith(null));
    });

    it('should not clear for entries in the list at its first check', async () => {
        // A new device, which binds to a list that already has the entry.
        // A new client too: the client of `beforeEach` keeps the empty list
        // of its binding, and would give it to the new service first.
        TestBed.resetTestingModule();
        localStorage.clear();
        startMockPlaceClient();
        mockDriver({
            clear_systems: [
                { id: 'clr-1', app: 'control', system_id: 'sys-1' },
            ],
        });
        TestBed.inject(RemoteSetupService).start(target);
        TestBed.tick();
        await waitForBinding('clear_systems', [
            { id: 'clr-1', app: 'control', system_id: 'sys-1' },
        ]);
        await flush();

        expect(target.apply).not.toHaveBeenCalled();
    });

    it('should not clear again while the setup screen shows', async () => {
        service.showSetupScreen();
        driver.emit('clear_list', [deviceId()]);
        await waitForBinding('clear_list', [deviceId()]);
        await flush();

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

    afterEach(() => {
        deregisterSystem(REMOTE_SETUP_MOCK_SYSTEM);
        localStorage.clear();
    });

    it('should not bind when the domain has no remote setup system', async () => {
        startFakePlaceClient().signIn({ id: 'auth-1', config: {} });
        const service = await start();

        expect(remoteSetupModule()).toBeNull();
        expect(service.available()).toBe(false);
    });

    it('should not bind when MDM managed config sets the system', async () => {
        startMockPlaceClient();
        mockDriver().emit('connected', true);
        localStorage.setItem('PlaceOS.native.system_id', 'sys-mdm');
        const service = await start();
        await flush();

        expect(service.available()).toBe(false);
    });
});
