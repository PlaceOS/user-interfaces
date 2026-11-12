import { getModule, PlaceModuleBinding } from '@placeos/ts-client';

import {
    binding_records,
    execute_messages,
    installBindingDebugHooks,
} from '../lib/binding-debug-hooks';

describe('installBindingDebugHooks', () => {
    // Stands in for the websocket request, so each test decides the reply
    const execute = vi.spyOn(PlaceModuleBinding.prototype, 'execute');
    installBindingDebugHooks();

    beforeEach(() => {
        execute.mockReset();
        execute_messages.set([]);
    });

    it('should record a command and its reply or error', async () => {
        const display = getModule('sys-1', 'Display', 2);
        execute.mockResolvedValueOnce('on');
        await display.execute('power', [true]);
        execute.mockRejectedValueOnce({ message: 'offline' });
        await display.execute('input', ['HDMI']).catch(() => undefined);

        expect(execute).toHaveBeenCalledWith('power', [true], undefined);
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
                value: { message: 'offline' },
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
        execute.mockResolvedValue(null);
        const display = getModule('sys-1', 'Display');
        for (let i = 0; i < 130; i++) await display.execute(`call_${i}`);

        expect(execute_messages()).toHaveLength(250);
        expect(execute_messages()[0].method).toBe('call_5');
        expect(execute_messages().at(-1).method).toBe('call_129');
    });

    it('should record each binding once', () => {
        const display = getModule('sys-2', 'Display');
        display.variable('power');
        display.binding('power');

        const records = binding_records().filter(
            (record) => record.system_id === 'sys-2',
        );
        expect(records).toHaveLength(1);
        expect(records[0].key).toBe('sys-2|Display_1|power');
    });

    it('should not record commands twice when installed again', async () => {
        installBindingDebugHooks();
        execute.mockResolvedValueOnce(null);
        await getModule('sys-1', 'Display').execute('power');

        expect(execute).toHaveBeenCalledOnce();
        expect(execute_messages()).toHaveLength(2);
    });
});
