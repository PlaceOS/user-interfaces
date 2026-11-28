import { getModule, placeRealtime } from '@placeos/common';
import { startMockPlaceClient } from '@placeos/common/tests';
import type { BindingState } from '@placeos/ts-client';

import {
    binding_records,
    execute_messages,
    installBindingDebugHooks,
} from '../lib/binding-debug-hooks';

describe('installBindingDebugHooks', () => {
    startMockPlaceClient();
    const realtime = placeRealtime();
    // Stand in for the websocket, so each test decides the reply and the
    // driver values
    const exec = vi.spyOn(realtime, 'exec');
    const driver = new Map<string, (state: BindingState) => void>();
    const release = vi.fn();
    vi.spyOn(realtime, 'bind').mockImplementation((target, listener) => {
        driver.set(`${target.sys}|${target.name}`, listener);
        return release;
    });
    installBindingDebugHooks();

    beforeEach(() => {
        exec.mockReset();
        release.mockClear();
        execute_messages.set([]);
    });

    it('should record a command and its reply or error', async () => {
        const display = getModule('sys-1', 'Display', 2);
        exec.mockResolvedValueOnce({ ok: true, value: 'on' });
        await display.execute('power', [true]);
        exec.mockResolvedValueOnce({ ok: false, error: { kind: 'stopped' } });
        await display.execute('input', ['HDMI']).catch(() => undefined);

        expect(exec).toHaveBeenCalledWith(
            { sys: 'sys-1', mod: 'Display', index: 2, name: 'power' },
            [true],
            undefined,
        );
        expect(
            execute_messages().map(({ method, direction, value, error }) => ({
                method,
                direction,
                value,
                error,
            })),
        ).toEqual([
            { method: 'power', direction: 'send', value: [true], error: false },
            {
                method: 'power',
                direction: 'receive',
                value: 'on',
                error: false,
            },
            {
                method: 'input',
                direction: 'send',
                value: ['HDMI'],
                error: false,
            },
            {
                method: 'input',
                direction: 'receive',
                value: { kind: 'stopped' },
                error: true,
            },
        ]);
        const [send, receive] = execute_messages();
        expect(send).toMatchObject({
            system_id: 'sys-1',
            module_name: 'Display',
            module_index: 2,
        });
        expect(receive.id).toBe(send.id);
    });

    it('should keep only the latest 250 messages', async () => {
        exec.mockResolvedValue({ ok: true, value: null });
        const display = getModule('sys-1', 'Display');
        for (let i = 0; i < 130; i++) await display.execute(`call_${i}`);

        expect(execute_messages()).toHaveLength(250);
        expect(execute_messages()[0].method).toBe('call_5');
        expect(execute_messages().at(-1).method).toBe('call_129');
    });

    it('should record each binding once and count its listeners', () => {
        const power = getModule('sys-2', 'Display').variable('power');
        const first = power.subscribe(() => undefined);
        const second = power.subscribe(() => undefined);

        const records = binding_records().filter(
            (record) => record.system_id === 'sys-2',
        );
        expect(records).toHaveLength(1);
        expect(records[0].key).toBe('sys-2|Display_1|power');
        expect(records[0].count).toBe(2);
        first();
        first();
        second();
        expect(records[0].count).toBe(0);
        expect(release).toHaveBeenCalledTimes(2);
    });

    it('should hold driver values while a value is overridden', () => {
        const input = getModule('sys-3', 'Display').variable<string>('input');
        const seen: string[] = [];
        input.subscribe((value) => seen.push(value));
        const send = driver.get('sys-3|input');
        const [record] = binding_records().filter(
            (item) => item.system_id === 'sys-3',
        );
        send({ kind: 'value', value: 'HDMI 1' });

        record.overridden.set(true);
        record.emit('HDMI 2');
        send({ kind: 'value', value: 'USB-C' });
        expect(input.value()).toBe('HDMI 2');
        expect(record.driver_value).toBe('USB-C');

        record.overridden.set(false);
        record.emit(record.driver_value);
        expect(seen).toEqual(['HDMI 1', 'HDMI 2', 'USB-C']);
    });

    it('should not record commands twice when installed again', async () => {
        installBindingDebugHooks();
        exec.mockResolvedValueOnce({ ok: true, value: null });
        await getModule('sys-1', 'Display').execute('power');

        expect(exec).toHaveBeenCalledOnce();
        expect(execute_messages()).toHaveLength(2);
    });
});
