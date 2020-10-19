import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { HashMap } from './types';
import { unique } from './general';

/** List of keys that cannot be in a combination by themselves or with each other */
const INVALID_STANDALONE_KEYS: string[] = ['control', 'shift', 'alt', 'meta', 'os'];

@Injectable({
    providedIn: 'root'
})
export class HotkeysService {
    /** Map of subjects which store press states of keys */
    private keydown_states: HashMap<BehaviorSubject<number>> = {};
    /** Map of obserers for key state subjects */
    private keydown_observers: HashMap<Observable<number>> = {};
    /** List of keys at the end of a combination */
    private combo_end: string[] = [];
    /** List of registered hotkey combinations */
    private registered_combos: string[][] = [];
    /** Counter for the number of keydown events. Used for checking order of key presses */
    private counter: number = 0;
    /** Last key code to be pressed */
    private last_down: string;

    constructor() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            if (this.last_down !== code) {
                if (!this.keydown_states[code]) {
                    this.keydown_states[code] = new BehaviorSubject(null);
                    this.keydown_observers[code] = this.keydown_states[code].asObservable();
                }
                this.keydown_states[code].next(++this.counter);
                if (this.combo_end.indexOf(code) >= 0) {
                    event.preventDefault();
                }
                this.last_down = code;
            }
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            this.keydown_states[code].next(null);
            if (this.last_down === code) {
                this.last_down = null;
            }
        });
    }

    /**
     * Listen to the given key combination
     * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
     * @param next Callback for combination presses
     */
    public listen(combo: string | string[], next: () => void): Subscription {
        combo = (combo instanceof Array ? combo : combo.split('+'));
        const combination: string[] = combo.map(i => this.mapKey(i.toLowerCase()));
        if (combination.length > 0 && this.validCombination(combination)) {
            this.registered_combos.push(combination);
            const last_key = combination[combination.length - 1];
            if (!this.keydown_states[last_key]) {
                this.keydown_states[last_key] = new BehaviorSubject(null);
                this.keydown_observers[last_key] = this.keydown_states[last_key].asObservable();
            }
            this.updateCombinationEndList();
            return this.keydown_observers[last_key].subscribe((count) => {
                if (count) {
                    const presses: number[] = [];
                    if (combination.length > 0) {
                        // Check that keys are pressed
                        for (const key of combination) {
                            const state = this.keydown_states[key];
                            presses.push(state ? state.getValue() || -1 : -1);
                        }
                        // Check that keys are pressed in the correct order
                        for (let i = 0; i < combination.length - 1; i++) {
                            if (presses[i] > presses[i + 1]) { return; }
                        }
                    }
                    const total = presses.reduce((a, v) => a + (v > 0 ? 1 : -1), 0);
                    if (total >= combination.length) {
                        next();
                    }
                }
            });
        }
        return null;
    }

    /**
     * Map key codes with multiple versions to simple form
     * @param code Code to transform
     */
    private mapKey(code: string): string {
        if (code.indexOf('alt') >= 0 || code.indexOf('shift') >= 0 || code.indexOf('control') >= 0) {
            return code.replace('left', '').replace('right', '');
        }
        return code;
    }

    /**
     * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
     */
    private updateCombinationEndList(): void {
        const key_list = [];
        for (const combo of this.registered_combos) {
            this.combo_end.push(combo[combo.length - 1]);
        }
        this.combo_end = unique(key_list);
    }

    /**
     * Checks if the given hotkey combination is allowed and valid
     * @param combo Array of key codes
     */
    private validCombination(combo: string[]): boolean {
        let non_meta = 0;
        for (const key of combo) {
            if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
                non_meta++;
            }
        }
        return non_meta > 0;
    }
}
