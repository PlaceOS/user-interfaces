import { moduleState } from '../lib/systems-bindings.mock';

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
