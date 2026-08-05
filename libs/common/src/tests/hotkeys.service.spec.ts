import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';

import { HotkeysService } from '../lib/hotkeys.service';

function keypress(code: string, hold_duration: number = 10) {
    window.dispatchEvent(new KeyboardEvent('keydown', { code, repeat: false }));
    setTimeout(
        () =>
            window.dispatchEvent(
                new KeyboardEvent('keyup', { code, repeat: false }),
            ),
        hold_duration,
    );
}

describe('HotkeysService', () => {
    let spectator: SpectatorService<HotkeysService>;
    const createService = createServiceFactory(HotkeysService);

    beforeEach(() => {
        vi.useFakeTimers();
        spectator = createService();
    });

    afterEach(() => vi.useRealTimers());

    it('should emit hotkey events', () => {
        const spy = vi.fn();
        const sub = spectator.service.listen(['Alt', 'KeyK'], spy);
        keypress('AltLeft');
        keypress('KeyK');
        vi.advanceTimersByTime(100);
        sub.unsubscribe();
        expect(spy).toHaveBeenCalledTimes(1);
        spectator.service.listen(['Alt', 'Shift', 'KeyK'], spy);
        keypress('AltLeft');
        keypress('ShiftLeft');
        keypress('KeyK');
        vi.advanceTimersByTime(100);
        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should emit hotkey events only if the keys are pressed in the correct order', () => {
        const spy = vi.fn();
        spectator.service.listen(['Alt', 'KeyK'], spy);
        keypress('KeyK');
        keypress('AltLeft', 150);
        vi.advanceTimersByTime(100);
        expect(spy).toHaveBeenCalledTimes(0);
        keypress('KeyK');
        vi.advanceTimersByTime(100);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should not allow invalid key combinations', () => {
        const spy = vi.fn();
        spectator.service.listen(['Alt', 'Shift'], spy);
        keypress('AltLeft');
        keypress('ShiftLeft');
        vi.advanceTimersByTime(100);
        expect(spy).toHaveBeenCalledTimes(0);
        spectator.service.listen(['Alt', 'KeyK'], spy);
        keypress('AltLeft');
        keypress('KeyK');
        vi.advanceTimersByTime(100);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should ignore hotkeys while typing in an editable element', () => {
        const spy = vi.fn();
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.focus();
        spectator.service.listen(['KeyS'], spy);

        keypress('KeyS');
        vi.advanceTimersByTime(100);

        expect(spy).not.toHaveBeenCalled();
        input.remove();
    });
});
