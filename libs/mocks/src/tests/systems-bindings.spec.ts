import { mockSystem } from '@placeos/ts-client/compat';

import { createSystem, moduleState } from '../lib/systems-bindings.mock';

vi.mock('@placeos/ts-client/compat');

describe('moduleState', () => {
    it('should keep public JSON values and leave out internal state', () => {
        // As ts-client makes a mock module: variables are plain properties
        // and functions have a `$` name
        const mod = {
            volume: 40,
            inputs: ['PC1'],
            _seen: new Set(['event-1']),
            other: new Map(),
            $volume: () => undefined,
        };

        expect(moduleState(mod)).toEqual({ volume: 40, inputs: ['PC1'] });
    });
});

describe('createSystem', () => {
    /** Display module whose `volume` command changes its variable */
    function display() {
        const mod = {
            volume: 40,
            $volume: vi.fn((value: number) => {
                mod.volume = value;
            }),
        };
        return mod;
    }
    /** The parts of a mock system that `createSystem` and the test use */
    function system() {
        const value = {
            Bookings: [{ $poll_bookings: vi.fn() }],
            AreaManagement: [{ $update: vi.fn() }],
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
        const poll = first.Bookings[0].$poll_bookings;
        createSystem({ id: 'sys-a' });
        // Polling calls the function from before the wrap, and does not save
        expect(poll).toHaveBeenCalled();
        expect(saved()).toBeNull();

        first.Display[1].$volume(70);
        expect(saved()).toEqual({ Display: { 1: { volume: 70 } } });

        // A reload creates the modules again from their defaults
        const second = system();
        createSystem({ id: 'sys-a' });
        expect(second.Display.map((mod) => mod.volume)).toEqual([40, 70]);

        // Later saves keep the restored module
        second.Display[0].$volume(10);
        expect(saved()).toEqual({
            Display: { 0: { volume: 10 }, 1: { volume: 70 } },
        });
    });

    it('should save one time when a command calls other commands', () => {
        const value = system();
        const [first, second] = value.Display;
        const mod = first as typeof first & { $both: () => void };
        mod.$both = () => {
            mod.$volume(20);
            second.$volume(30);
        };
        createSystem({ id: 'sys-a' });
        const set_item = vi.spyOn(Storage.prototype, 'setItem');

        mod.$both();

        const writes = set_item.mock.calls.filter(
            ([key]) => key === 'PLACEOS.mock.system.sys-a',
        );
        set_item.mockRestore();
        expect(writes).toHaveLength(1);
        expect(saved()).toEqual({
            Display: { 0: { volume: 20 }, 1: { volume: 30 } },
        });
    });
});
