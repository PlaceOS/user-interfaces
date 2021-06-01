import { fakeAsync, tick } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { HotkeysService } from '../lib/hotkeys.service';

function keypress(code: string, hold_duration: number = 10) {
    window.dispatchEvent(new KeyboardEvent('keydown', { code, repeat: false }));
    setTimeout(
        () =>
            window.dispatchEvent(
                new KeyboardEvent('keyup', { code, repeat: false })
            ),
        hold_duration
    );
}

describe('HotkeysService', () => {
    let spectator: SpectatorService<HotkeysService>;
    const createService = createServiceFactory(HotkeysService);

    beforeEach(() => (spectator = createService()));

    it('should emit hotkey events', fakeAsync(() => {
        const spy = jest.fn();
        const sub = spectator.service.listen(['Alt', 'KeyK'], spy);
        keypress('AltLeft');
        keypress('KeyK');
        tick(100);
        sub.unsubscribe();
        expect(spy).toHaveBeenCalledTimes(1);
        spectator.service.listen(['Alt', 'Shift', 'KeyK'], spy);
        keypress('AltLeft');
        keypress('ShiftLeft');
        keypress('KeyK');
        tick(100);
        expect(spy).toHaveBeenCalledTimes(2);
    }));

    it('should emit hotkey events only if the keys are pressed in the correct order', fakeAsync(() => {
        const spy = jest.fn();
        spectator.service.listen(['Alt', 'KeyK'], spy);
        keypress('KeyK');
        keypress('AltLeft', 150);
        tick(100);
        expect(spy).toHaveBeenCalledTimes(0);
        keypress('KeyK');
        tick(100);
        expect(spy).toHaveBeenCalledTimes(1);
    }));

    it('should not allow invalid key combinations', fakeAsync(() => {
        const spy = jest.fn();
        spectator.service.listen(['Alt', 'Shift'], spy);
        keypress('AltLeft');
        keypress('ShiftLeft');
        tick(100);
        expect(spy).toHaveBeenCalledTimes(0);
        spectator.service.listen(['Alt', 'KeyK'], spy);
        keypress('AltLeft');
        keypress('KeyK');
        tick(100);
        expect(spy).toHaveBeenCalledTimes(1);
    }));
});
