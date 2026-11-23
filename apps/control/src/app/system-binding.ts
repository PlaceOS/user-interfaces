import { effect, Signal, signal } from '@angular/core';
import { getModule } from '@placeos/common';

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
        // Show the initial value until the new binding has a value
        value.set(initial);
        if (!id) return;
        const release = getModule(id, mod)
            .variable<T>(name)
            .subscribe((next) => value.set(next ?? initial));
        onCleanup(release);
    });
    return value.asReadonly();
}
