import { signal, WritableSignal } from '@angular/core';
import { placeRealtime } from '@placeos/common';
import type {
    BindingState,
    JsonValue,
    Realtime,
    RealtimeTarget,
} from '@placeos/ts-client';

export interface BindingRecord {
    key: string;
    system_id: string;
    module_id: string;
    module_name: string;
    module_index: number;
    name: string;
    /** Number of listeners that are bound now */
    count: number;
    value: WritableSignal<JsonValue | undefined>;
    last_update: WritableSignal<number>;
    overridden: WritableSignal<boolean>;
    driver_value: JsonValue | undefined;
    /** Sends a value to each listener of the binding */
    emit(value: JsonValue): void;
}

export interface ExecuteMessage {
    id: number;
    direction: 'send' | 'receive';
    system_id: string;
    module_id: string;
    module_name: string;
    module_index: number;
    method: string;
    value: unknown;
    time: number;
    error: boolean;
}

/** Most messages that `execute_messages` keeps */
const EXECUTE_MESSAGES_MAX = 250;

/** Driver bindings seen since the hooks were installed */
export const binding_records = signal<BindingRecord[]>([]);
/** Latest command requests and responses, oldest first */
export const execute_messages = signal<ExecuteMessage[]>([]);
export const records_by_key = new Map<string, BindingRecord>();
/** Listeners of each binding record, by record key. `emit` calls them */
const listeners_by_key = new Map<string, Set<(state: BindingState) => void>>();
/** Realtime clients that have the hooks */
const hooked = new WeakSet<Realtime>();
let execute_id = 0;

function moduleDetails(target: RealtimeTarget) {
    const index = target.index ?? 1;
    return {
        system_id: target.sys,
        module_id: `${target.mod}_${index}`,
        module_name: target.mod,
        module_index: index,
    };
}

function trackBinding(target: RealtimeTarget, realtime: Realtime) {
    const details = moduleDetails(target);
    const key = `${details.system_id}|${details.module_id}|${target.name}`;
    const existing = records_by_key.get(key);
    if (existing) return existing;
    const state = realtime.value(target);
    const value = state.kind === 'value' ? state.value : undefined;
    const listeners = new Set<(state: BindingState) => void>();
    const record: BindingRecord = {
        key,
        ...details,
        name: target.name,
        count: 0,
        value: signal(value),
        last_update: signal(value === undefined ? 0 : Date.now()),
        overridden: signal(false),
        driver_value: value,
        emit: (next) => {
            record.value.set(next);
            for (const listener of listeners) {
                listener({ kind: 'value', value: next });
            }
        },
    };
    records_by_key.set(key, record);
    listeners_by_key.set(key, listeners);
    binding_records.update((records) => [...records, record]);
    return record;
}

function addExecuteMessage(message: ExecuteMessage) {
    execute_messages.update((messages) =>
        [...messages, message].slice(-EXECUTE_MESSAGES_MAX),
    );
}

/**
 * Record driver bindings and commands for the binding debug panel. The
 * launcher calls this for admin and support users when it loads, so the
 * panel also shows activity from before it first opens. Only bindings
 * made after this call are recorded. Safe to call more than once. Does
 * nothing before `setupPlace` makes the realtime client.
 */
export function installBindingDebugHooks() {
    let realtime: Realtime;
    try {
        realtime = placeRealtime();
    } catch {
        return;
    }
    if (hooked.has(realtime)) return;
    hooked.add(realtime);

    const bind = realtime.bind;
    realtime.bind = (target, listener) => {
        const record = trackBinding(target, realtime);
        const listeners = listeners_by_key.get(record.key);
        // Driver values wait while the value is overridden
        const wrapped = (state: BindingState) => {
            if (state.kind === 'value') {
                record.driver_value = state.value;
                record.last_update.set(Date.now());
                if (record.overridden()) return;
                record.value.set(state.value);
            }
            listener(state);
        };
        listeners.add(listener);
        record.count += 1;
        const release = bind(target, wrapped);
        const override = record.overridden() ? record.value() : undefined;
        if (override !== undefined)
            listener({ kind: 'value', value: override });
        let released = false;
        return () => {
            if (released) return;
            released = true;
            listeners.delete(listener);
            record.count -= 1;
            release();
        };
    };

    const value = realtime.value;
    realtime.value = (target) => {
        const { system_id, module_id } = moduleDetails(target);
        const record = records_by_key.get(
            `${system_id}|${module_id}|${target.name}`,
        );
        const override = record?.overridden() ? record.value() : undefined;
        if (override !== undefined) return { kind: 'value', value: override };
        return value(target);
    };

    const exec = realtime.exec;
    realtime.exec = (target, args = [], options) => {
        const details = {
            id: ++execute_id,
            ...moduleDetails(target),
            method: target.name,
        };
        addExecuteMessage({
            ...details,
            direction: 'send',
            value: args,
            time: Date.now(),
            error: false,
        });
        const request = exec(target, args, options);
        request.then(
            (result) =>
                addExecuteMessage({
                    ...details,
                    direction: 'receive',
                    value: result.ok === false ? result.error : result.value,
                    time: Date.now(),
                    error: result.ok === false,
                }),
            (error: unknown) =>
                addExecuteMessage({
                    ...details,
                    direction: 'receive',
                    value: error,
                    time: Date.now(),
                    error: true,
                }),
        );
        return request;
    };
}
