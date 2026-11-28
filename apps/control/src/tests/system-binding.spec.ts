import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import type { JsonValue } from '@placeos/ts-client';
import { startTestPlaceClient } from 'libs/components/src/tests/test-place-client';
import { systemBinding } from '../app/system-binding';

describe('systemBinding', () => {
    /** Status value for each system */
    let values: Record<string, JsonValue>;
    /** Notifies the listener of a system that its value changed */
    let notify: Record<string, () => void>;
    /** Systems whose binding was released */
    let released: string[];

    beforeEach(() => {
        values = {};
        notify = {};
        released = [];
        const place = startTestPlaceClient();
        place.bind.mockImplementation((target, listener) => {
            const id = target.sys;
            notify[id] = () => listener({ kind: 'value', value: values[id] });
            // A known value goes to the listener at once
            if (id in values) notify[id]();
            return () => released.push(id);
        });
    });

    const create = (id: string) => {
        const system_id = signal(id);
        const value = TestBed.runInInjectionContext(() =>
            systemBinding(system_id, 'System', 'volume', 0),
        );
        TestBed.tick();
        return { system_id, value };
    };

    it('should follow status changes and use the initial value for null', () => {
        values['sys-1'] = 20;
        const { value } = create('sys-1');
        expect(value()).toBe(20);
        values['sys-1'] = 35;
        notify['sys-1']();
        expect(value()).toBe(35);
        values['sys-1'] = null;
        notify['sys-1']();
        expect(value()).toBe(0);
    });

    it('should release the old system and reset when the system is cleared', () => {
        values['sys-1'] = 20;
        values['sys-2'] = 70;
        const { system_id, value } = create('sys-1');
        system_id.set('sys-2');
        TestBed.tick();
        expect(released).toEqual(['sys-1']);
        expect(value()).toBe(70);
        system_id.set('');
        TestBed.tick();
        expect(released).toContain('sys-2');
        expect(value()).toBe(0);
    });
});
