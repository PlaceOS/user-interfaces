import { effect, Signal, signal } from '@angular/core';
import { getModule } from '@placeos/ts-client';

/**
 * Create a signal that mirrors a status variable binding on a system module.
 * Rebinds whenever `system_id` changes. Call from an injection context.
 * @param system_id ID of the system to bind to
 * @param mod Module name, for example `System` or `VidConf`
 * @param name Status variable name
 * @param initial Value used when there is no system or no value
 */
export function systemBinding<T>(
    system_id: Signal<string>,
    mod: string,
    name: string,
    initial: T,
): Signal<T> {
    const value = signal<T>(initial);
    effect((onCleanup) => {
        const id = system_id();
        if (!id) {
            value.set(initial);
            return;
        }
        const binding = getModule(id, mod).variable(name);
        const unbind = binding.bind();
        const listener = binding.listen();
        const update = () => value.set((listener() ?? initial) as T);
        update();
        const unsubscribe = listener.subscribe(() => update());
        onCleanup(() => {
            unsubscribe();
            unbind();
        });
    });
    return value.asReadonly();
}
