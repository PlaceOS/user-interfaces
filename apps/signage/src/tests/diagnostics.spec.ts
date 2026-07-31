import { registerSignageDiagnostics } from '../app/diagnostics';

describe('signage diagnostics', () => {
    const state = { display_id: 'display-1', poll: { in_flight: false } };
    let remove: () => void;
    let poll: () => void;
    let reload: () => void;

    beforeEach(() => {
        vi.spyOn(console, 'groupCollapsed').mockImplementation(() => undefined);
        vi.spyOn(console, 'groupEnd').mockImplementation(() => undefined);
        vi.spyOn(console, 'log').mockImplementation(() => undefined);
        vi.spyOn(console, 'table').mockImplementation(() => undefined);
        poll = vi.fn() as any;
        reload = vi.fn() as any;
        remove = registerSignageDiagnostics({
            getState: () => state,
            poll,
            reload,
        });
    });

    afterEach(() => {
        remove();
        vi.restoreAllMocks();
    });

    it('should publish the diagnostics api on the window', () => {
        expect(typeof window.signage?.state).toBe('function');
        expect(typeof window.signage?.json).toBe('function');
        expect(typeof window.signage?.poll).toBe('function');
        expect(typeof window.signage?.reload).toBe('function');
    });

    it('should return and log the current state', () => {
        expect(window.signage?.state()).toBe(state);
        expect(console.groupCollapsed).toHaveBeenCalled();
    });

    it('should serialise the state as json', () => {
        expect(JSON.parse(window.signage?.json() || '{}')).toEqual(state);
    });

    it('should expose poll and reload actions', () => {
        window.signage?.poll();
        window.signage?.reload();

        expect(poll).toHaveBeenCalledTimes(1);
        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should tabulate lists of records', () => {
        remove();
        remove = registerSignageDiagnostics({
            getState: () => ({ upcoming_schedules: [{ playlist_id: 'a' }] }),
            poll,
        });

        window.signage?.state();

        expect(console.table).toHaveBeenCalledWith([{ playlist_id: 'a' }]);
    });

    it('should remove itself from the window when torn down', () => {
        remove();

        expect(window.signage).toBeUndefined();
    });
});
