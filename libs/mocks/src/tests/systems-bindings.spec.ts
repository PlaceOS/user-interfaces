import { mockSystem } from '@placeos/ts-client';

import { createSystem, moduleState } from '../lib/systems-bindings.mock';

vi.mock('@placeos/ts-client');

/** A binding as ts-client stores it on a mock module */
const binding = (value: unknown) => ({ value, set: vi.fn() });

describe('moduleState', () => {
    it('should keep public JSON values and leave out internal state', () => {
        const mod = {
            _volume: binding(40),
            _inputs: binding(['PC1']),
            // `_seen` in the mock class, so ts-client adds `__seen`
            __seen: binding(new Set(['event-1'])),
            _other: binding(new Map()),
            $volume: () => undefined,
        };

        expect(moduleState(mod)).toEqual({ volume: 40, inputs: ['PC1'] });
    });
});

describe('createSystem', () => {
    /**
     * Display module whose `volume` command changes its binding. As in
     * ts-client, the `volume` property reads and writes the binding.
     */
    function display() {
        const mod = {
            _volume: binding(40),
            get volume() {
                return mod._volume.value as number;
            },
            set volume(value: number) {
                mod._volume.value = value;
            },
            call: vi.fn((_command: string, args: number[]) => {
                mod._volume.value = args[0];
            }),
        };
        return mod;
    }
    /** The parts of a mock system that `createSystem` and the test use */
    function system() {
        const value = {
            Bookings: [{ $poll_bookings: vi.fn(), call: vi.fn() }],
            AreaManagement: [{ $update: vi.fn(), call: vi.fn() }],
            Display: [display(), display()],
        };
        vi.mocked(mockSystem).mockReturnValueOnce(value as never);
        return value;
    }
    const saved = () =>
        JSON.parse(localStorage.getItem('PLACEOS.mock.system.sys-a'));

    beforeEach(() => vi.useFakeTimers());
    afterEach(() => {
        localStorage.clear();
        vi.useRealTimers();
    });

    it('should keep module state that commands change across a reload', () => {
        const first = system();
        createSystem({ id: 'sys-a' });
        // Polling calls `$` methods directly, and does not save
        expect(first.Bookings[0].$poll_bookings).toHaveBeenCalled();
        expect(saved()).toBeNull();

        first.Display[1].call('volume', [70]);
        expect(saved()).toEqual({ Display: { 1: { volume: 70 } } });

        // A reload creates the modules again from their defaults
        const second = system();
        createSystem({ id: 'sys-a' });
        expect(second.Display.map((mod) => mod.volume)).toEqual([40, 70]);

        // Later saves keep the restored module
        second.Display[0].call('volume', [10]);
        expect(saved()).toEqual({
            Display: { 0: { volume: 10 }, 1: { volume: 70 } },
        });
    });
});
