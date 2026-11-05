import { signal, WritableSignal } from '@angular/core';
import { PlaceModuleBinding, PlaceVariableBinding } from '@placeos/ts-client';

interface ClientWritableSignal<T> {
    readonly value: T;
    set(value: T): void;
    subscribe(listener: (value: T) => void): () => void;
}

export interface BindingRecord {
    key: string;
    system_id: string;
    module_id: string;
    module_name: string;
    module_index: number;
    name: string;
    binding: PlaceVariableBinding;
    value: WritableSignal<unknown>;
    last_update: WritableSignal<number>;
    overridden: WritableSignal<boolean>;
    driver_value: unknown;
    emit(value: unknown): void;
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

/** Driver bindings seen since the hooks were installed */
export const binding_records = signal<BindingRecord[]>([]);
/** Latest command requests and responses, oldest first */
export const execute_messages = signal<ExecuteMessage[]>([]);
export const records_by_key = new Map<string, BindingRecord>();
let execute_id = 0;

function bindingKey(module: PlaceModuleBinding, binding: PlaceVariableBinding) {
    return `${module.system.id}|${module.id}|${binding.name}`;
}

function trackBinding(
    module: PlaceModuleBinding,
    binding: PlaceVariableBinding,
) {
    const key = bindingKey(module, binding);
    if (records_by_key.has(key)) return binding;
    const source = binding.listen() as unknown as ClientWritableSignal<unknown>;
    const emit = source.set.bind(source);
    const record: BindingRecord = {
        key,
        system_id: module.system.id,
        module_id: module.id,
        module_name: module.name,
        module_index: module.index,
        name: binding.name,
        binding,
        value: signal(source.value),
        last_update: signal(source.value === undefined ? 0 : Date.now()),
        overridden: signal(false),
        driver_value: source.value,
        emit,
    };
    records_by_key.set(key, record);
    binding_records.update((records) => [...records, record]);
    source.subscribe((value) => record.value.set(value));
    source.set = (value) => {
        record.driver_value = value;
        record.last_update.set(Date.now());
        if (!record.overridden()) emit(value);
    };
    return binding;
}

function addExecuteMessage(message: ExecuteMessage) {
    execute_messages.update((messages) => [...messages, message].slice(-250));
}

/**
 * Record driver bindings and commands for the binding debug panel. The
 * launcher calls this for admin and support users when it loads, so the
 * panel also shows activity from before it first opens. Only bindings
 * requested after this call are recorded. Safe to call more than once.
 */
export function installBindingDebugHooks() {
    const prototype = PlaceModuleBinding.prototype as PlaceModuleBinding & {
        __binding_debug_hooks__?: boolean;
    };
    if (prototype.__binding_debug_hooks__) return;
    prototype.__binding_debug_hooks__ = true;

    const variable = PlaceModuleBinding.prototype.variable;
    PlaceModuleBinding.prototype.variable = function <T>(name: string) {
        return trackBinding(
            this,
            variable.call(this, name),
        ) as PlaceVariableBinding<T>;
    };

    const binding = PlaceModuleBinding.prototype.binding;
    PlaceModuleBinding.prototype.binding = function <T>(name: string) {
        return trackBinding(
            this,
            binding.call(this, name),
        ) as PlaceVariableBinding<T>;
    };

    const execute = PlaceModuleBinding.prototype.execute;
    PlaceModuleBinding.prototype.execute = function <T>(
        method: string,
        args: unknown[] = [],
        timeout_delay?: number,
    ) {
        const id = ++execute_id;
        const details = {
            id,
            system_id: this.system.id,
            module_id: this.id,
            module_name: this.name,
            module_index: this.index,
            method,
        };
        addExecuteMessage({
            ...details,
            direction: 'send',
            value: args,
            time: Date.now(),
            error: false,
        });
        const request = execute.call(this, method, args, timeout_delay);
        request.then(
            (value) =>
                addExecuteMessage({
                    ...details,
                    direction: 'receive',
                    value,
                    time: Date.now(),
                    error: false,
                }),
            (error) =>
                addExecuteMessage({
                    ...details,
                    direction: 'receive',
                    value: error,
                    time: Date.now(),
                    error: true,
                }),
        );
        return request as Promise<T>;
    };
}
