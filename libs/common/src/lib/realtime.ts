import {
    splitModuleSlug,
    type JsonValue,
    type RealtimeError,
    type RealtimeTarget,
} from '@placeos/ts-client';
import { Observable } from 'rxjs';

import { placeRealtime } from './place-client';

/**
 * The error of a failed module call. `error` is the realtime error. The
 * message is the message of the driver when the server sends one.
 */
export class ModuleCallFailed extends Error {
    constructor(
        public readonly error: RealtimeError,
        target: string,
    ) {
        super(
            error.kind === 'server' && error.message
                ? error.message
                : `${target}: ${error.kind}`,
        );
        this.name = 'ModuleCallFailed';
    }
}

/** A status variable of a module. See `getModule`. */
export interface ModuleVariable<T = JsonValue> {
    /** The value now, or `undefined` when it is not known or not bound. */
    value(): T | undefined;
    /**
     * Binds to the variable. `listener` gets each new value, and the value
     * now if it is known. Returns the function that releases the binding.
     */
    subscribe(listener: (value: T) => void): () => void;
    /** `subscribe` as an observable. Unsubscribe releases the binding. */
    listen(): Observable<T>;
}

/** A module of a system. See `getModule`. */
export interface ModuleHandle {
    /** ID of the system */
    readonly sys: string;
    /** Name of the module, such as `Bookings` */
    readonly mod: string;
    /** Index of the module, from 1 */
    readonly index: number;
    /**
     * Calls a function of the module. Resolves with its return value, and
     * rejects with `ModuleCallFailed`, as 6.x did.
     */
    execute<T = JsonValue>(
        method: string,
        args?: readonly unknown[],
        options?: { readonly timeout_ms?: number },
    ): Promise<T>;
    variable<T = JsonValue>(name: string): ModuleVariable<T>;
}

/**
 * A module of a system, for realtime calls and bindings on the realtime
 * client of `setupPlace`.
 * @param sys ID of the system
 * @param mod Name of the module, such as `Bookings`. A slug, such as
 * `Display_2`, gives the index when `index` is not given.
 * @param index Index of the module. The default is `1`.
 */
export function getModule(
    sys: string,
    mod: string,
    index?: number,
): ModuleHandle {
    const slug =
        index === undefined && /_\d+$/.test(mod)
            ? splitModuleSlug(mod)
            : { mod, index: index ?? 1 };
    const target = (name: string): RealtimeTarget => ({
        sys,
        mod: slug.mod,
        index: slug.index,
        name,
    });
    const label = `${sys} ${slug.mod}_${slug.index}`;
    return {
        sys,
        mod: slug.mod,
        index: slug.index,
        async execute<T>(
            method: string,
            args: readonly unknown[] = [],
            options?: { readonly timeout_ms?: number },
        ): Promise<T> {
            const result = await placeRealtime().exec(
                target(method),
                args as readonly JsonValue[],
                options,
            );
            if (result.ok === false) {
                throw new ModuleCallFailed(result.error, `${label}.${method}`);
            }
            return result.value as T;
        },
        variable<T>(name: string): ModuleVariable<T> {
            const subscribe = (listener: (value: T) => void) =>
                placeRealtime().bind(target(name), (state) => {
                    if (state.kind === 'value') listener(state.value as T);
                });
            return {
                value() {
                    const state = placeRealtime().value(target(name));
                    return state.kind === 'value'
                        ? (state.value as T)
                        : undefined;
                },
                subscribe,
                listen: () =>
                    new Observable<T>((observer) =>
                        subscribe((value) => observer.next(value)),
                    ),
            };
        },
    };
}
