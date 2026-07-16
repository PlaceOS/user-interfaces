import { DOCUMENT } from '@angular/common';
import {
    Component,
    WritableSignal,
    computed,
    effect,
    inject,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, HotkeysService } from '@placeos/common';
import {
    PlaceModuleBinding,
    PlaceVariableBinding,
    showSystem,
} from '@placeos/ts-client';
import { IconComponent } from './icon.component';

interface ClientWritableSignal<T> {
    readonly value: T;
    set(value: T): void;
    subscribe(listener: (value: T) => void): () => void;
}

interface BindingRecord {
    key: string;
    system_id: string;
    module_id: string;
    module_name: string;
    module_index: number;
    name: string;
    binding: PlaceVariableBinding;
    value: WritableSignal<any>;
    last_update: WritableSignal<number>;
    overridden: WritableSignal<boolean>;
    driver_value: any;
    emit(value: any): void;
}

interface BindingRow extends BindingRecord {
    active: boolean;
    count: number;
    current_value: any;
    updated_at: number;
    is_overridden: boolean;
}

interface ExecuteMessage {
    id: number;
    direction: 'send' | 'receive';
    system_id: string;
    module_id: string;
    module_name: string;
    module_index: number;
    method: string;
    value: any;
    time: number;
    error: boolean;
}

interface ModuleGroup {
    key: string;
    id: string;
    name: string;
    index: number;
    bindings: BindingRow[];
    messages: ExecuteMessage[];
    active_count: number;
}

interface SystemGroup {
    id: string;
    name: string;
    modules: ModuleGroup[];
    binding_count: number;
    active_count: number;
    message_count: number;
}

const binding_records = signal<BindingRecord[]>([]);
const execute_messages = signal<ExecuteMessage[]>([]);
const records_by_key = new Map<string, BindingRecord>();
const system_name_cache = new Map<string, string>();
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
    const source = binding.listen() as unknown as ClientWritableSignal<any>;
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

function installBindingDebugHooks() {
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
        args: any[] = [],
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

installBindingDebugHooks();

@Component({
    selector: 'binding-debug-panel',
    template: `
        @if (show()) {
            <aside
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-999 flex w-96 max-w-[90vw] flex-col border-l shadow-xl"
            >
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        aria-label="Close binding viewer"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Driver Binding Viewer
                    </div>
                    @if (tab() === 'bindings' && has_overrides()) {
                        <button
                            matRipple
                            class="text-error px-2 py-1 text-xs underline"
                            (click)="clearAllOverrides()"
                        >
                            Clear overrides
                        </button>
                    } @else if (tab() === 'executes' && execute_count()) {
                        <button
                            matRipple
                            class="px-2 py-1 text-xs underline"
                            (click)="clearMessages()"
                        >
                            Clear messages
                        </button>
                    }
                </header>

                <div
                    class="border-base-300 bg-base-100 grid grid-cols-2 border-b p-1"
                >
                    <button
                        class="rounded-md px-3 py-1.5 text-sm"
                        [class.bg-base-300]="tab() === 'bindings'"
                        (click)="tab.set('bindings')"
                    >
                        Bindings ({{ binding_count() }})
                    </button>
                    <button
                        class="rounded-md px-3 py-1.5 text-sm"
                        [class.bg-base-300]="tab() === 'executes'"
                        (click)="tab.set('executes')"
                    >
                        Executes ({{ execute_count() }})
                    </button>
                </div>

                <div class="relative m-1 flex">
                    <input
                        name="binding-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter systems, modules or names..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>

                <div class="flex-1 overflow-auto">
                    @for (system of systems(); track system.id) {
                        <section>
                            <button
                                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-h-9 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                (click)="toggleGroup('system|' + system.id)"
                            >
                                <icon
                                    class="text-sm transition-transform"
                                    [class.rotate-90]="
                                        isExpanded('system|' + system.id)
                                    "
                                    >chevron_right</icon
                                >
                                <span class="min-w-0 flex-1">
                                    <span class="block truncate font-medium">
                                        {{ system.name }}
                                    </span>
                                    @if (system.name !== system.id) {
                                        <span
                                            class="block truncate font-mono text-[0.625rem] opacity-50"
                                        >
                                            {{ system.id }}
                                        </span>
                                    }
                                </span>
                                @if (tab() === 'bindings') {
                                    <span class="opacity-50">
                                        {{ system.active_count }}/{{
                                            system.binding_count
                                        }}
                                        active
                                    </span>
                                } @else {
                                    <span class="opacity-50">
                                        {{ system.message_count }} messages
                                    </span>
                                }
                            </button>

                            @if (isExpanded('system|' + system.id)) {
                                @for (
                                    module of system.modules;
                                    track module.key
                                ) {
                                    <button
                                        class="border-base-300 bg-base-200 sticky top-9 z-10 flex min-h-8 w-full items-center gap-1 border-b py-1 pr-2 pl-5 text-left text-xs"
                                        (click)="
                                            toggleGroup('module|' + module.key)
                                        "
                                    >
                                        <icon
                                            class="text-sm transition-transform"
                                            [class.rotate-90]="
                                                isExpanded(
                                                    'module|' + module.key
                                                )
                                            "
                                            >chevron_right</icon
                                        >
                                        <span
                                            class="min-w-0 flex-1 truncate font-mono"
                                        >
                                            {{ module.id }}
                                        </span>
                                        @if (tab() === 'bindings') {
                                            <span class="opacity-50">
                                                {{ module.active_count }}/{{
                                                    module.bindings.length
                                                }}
                                                active
                                            </span>
                                        } @else {
                                            <span class="opacity-50">
                                                {{ module.messages.length }}
                                                messages
                                            </span>
                                        }
                                    </button>

                                    @if (isExpanded('module|' + module.key)) {
                                        @if (tab() === 'bindings') {
                                            @for (
                                                row of module.bindings;
                                                track row.key
                                            ) {
                                                <div
                                                    class="border-base-300 border-b py-2 pr-2 pl-10 text-xs"
                                                    [class.bg-warning-light]="
                                                        row.is_overridden
                                                    "
                                                >
                                                    <div
                                                        class="flex min-w-0 items-center gap-2"
                                                    >
                                                        <span
                                                            class="min-w-0 flex-1 truncate font-mono font-medium"
                                                        >
                                                            {{ row.name }}
                                                        </span>
                                                        <span
                                                            class="rounded-sm px-1.5 py-0.5 text-[0.625rem]"
                                                            [class.bg-success-light]="
                                                                row.active
                                                            "
                                                            [class.text-success]="
                                                                row.active
                                                            "
                                                            [class.bg-base-300]="
                                                                !row.active
                                                            "
                                                        >
                                                            {{
                                                                row.active
                                                                    ? 'active'
                                                                    : 'inactive'
                                                            }}
                                                            · {{ row.count }}
                                                        </span>
                                                        @if (
                                                            row.is_overridden
                                                        ) {
                                                            <span
                                                                class="bg-warning rounded-sm px-1.5 py-0.5 text-[0.625rem] text-black"
                                                            >
                                                                overridden
                                                            </span>
                                                        }
                                                    </div>

                                                    @if (
                                                        editing_key() ===
                                                        row.key
                                                    ) {
                                                        <div
                                                            class="mt-1 flex items-center gap-1"
                                                        >
                                                            <input
                                                                name="binding-value"
                                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 min-w-0 flex-1 rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                                [(ngModel)]="
                                                                    edit_value
                                                                "
                                                                (keydown.enter)="
                                                                    saveOverride(
                                                                        row
                                                                    )
                                                                "
                                                                (keydown.escape)="
                                                                    editing_key.set(
                                                                        ''
                                                                    )
                                                                "
                                                            />
                                                            <button
                                                                icon
                                                                matRipple
                                                                title="Apply override"
                                                                (click)="
                                                                    saveOverride(
                                                                        row
                                                                    )
                                                                "
                                                            >
                                                                <icon
                                                                    class="text-sm"
                                                                    >check</icon
                                                                >
                                                            </button>
                                                        </div>
                                                    } @else {
                                                        <button
                                                            class="border-base-300 bg-base-100 hover:border-info mt-1 flex h-8 w-full items-center rounded-md border px-2 text-left font-mono shadow-sm"
                                                            [title]="
                                                                formatValue(
                                                                    row.current_value
                                                                )
                                                            "
                                                            (click)="
                                                                startOverride(
                                                                    row
                                                                )
                                                            "
                                                        >
                                                            <span
                                                                class="min-w-0 flex-1 truncate"
                                                            >
                                                                {{
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                }}
                                                            </span>
                                                            <icon
                                                                class="ml-1 text-sm opacity-40"
                                                                >edit</icon
                                                            >
                                                        </button>
                                                    }

                                                    <div
                                                        class="mt-1 flex items-center opacity-50"
                                                    >
                                                        <span class="flex-1">
                                                            Last update:
                                                            {{
                                                                formatTime(
                                                                    row.updated_at
                                                                )
                                                            }}
                                                        </span>
                                                        @if (
                                                            row.is_overridden
                                                        ) {
                                                            <button
                                                                class="underline"
                                                                (click)="
                                                                    clearOverride(
                                                                        row
                                                                    )
                                                                "
                                                            >
                                                                Restore driver
                                                                value
                                                            </button>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        } @else {
                                            @for (
                                                message of module.messages;
                                                track message.direction +
                                                    message.id
                                            ) {
                                                <div
                                                    class="border-base-300 grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-2 border-b py-2 pr-2 pl-10 text-xs"
                                                    [class.text-error]="
                                                        message.error
                                                    "
                                                >
                                                    <icon
                                                        class="text-base"
                                                        [class.text-info]="
                                                            message.direction ===
                                                            'send'
                                                        "
                                                        [class.text-success]="
                                                            message.direction ===
                                                                'receive' &&
                                                            !message.error
                                                        "
                                                    >
                                                        {{
                                                            message.direction ===
                                                            'send'
                                                                ? 'north_east'
                                                                : 'south_west'
                                                        }}
                                                    </icon>
                                                    <div class="min-w-0">
                                                        <div
                                                            class="truncate font-mono font-medium"
                                                        >
                                                            {{ message.method }}
                                                        </div>
                                                        <div
                                                            class="truncate font-mono opacity-60"
                                                            [title]="
                                                                formatValue(
                                                                    message.value
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                formatValue(
                                                                    message.value
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="text-right opacity-50"
                                                    >
                                                        <div>
                                                            {{
                                                                message.direction
                                                            }}
                                                        </div>
                                                        <div>
                                                            {{
                                                                formatTime(
                                                                    message.time
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                        </section>
                    } @empty {
                        <div class="p-4 text-center opacity-40">
                            No observed
                            {{
                                tab() === 'bindings'
                                    ? 'bindings'
                                    : 'execute messages'
                            }}
                        </div>
                    }
                </div>

                <footer
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Ctrl + Alt + Shift + B · Values and overrides are local to
                    this browser session.
                </footer>
            </aside>
        }
    `,
    imports: [FormsModule, MatRippleModule, IconComponent],
})
export class BindingDebugPanelComponent extends AsyncHandler {
    private _hotkey = inject(HotkeysService);
    private _document = inject(DOCUMENT);

    public readonly show = signal(false);
    public readonly tab = signal<'bindings' | 'executes'>('bindings');
    public readonly filter = signal('');
    public readonly expanded = signal<Record<string, boolean>>({});
    public readonly editing_key = signal('');
    public readonly edit_value = signal('');
    private readonly _refresh = signal(0);

    private readonly _system_names = resource({
        params: () => {
            if (!this.show()) return undefined;
            return [
                ...new Set([
                    ...binding_records().map((record) => record.system_id),
                    ...execute_messages().map((message) => message.system_id),
                ]),
            ];
        },
        loader: async ({ params }) =>
            Object.fromEntries(
                await Promise.all(
                    params.map(async (id) => {
                        if (!system_name_cache.has(id)) {
                            const system = await showSystem(id).catch(
                                () => null,
                            );
                            system_name_cache.set(
                                id,
                                system?.display_name || system?.name || id,
                            );
                        }
                        return [id, system_name_cache.get(id)] as const;
                    }),
                ),
            ),
        defaultValue: {},
    });

    public readonly binding_count = computed(() => binding_records().length);
    public readonly execute_count = computed(() => execute_messages().length);
    public readonly has_overrides = computed(() =>
        binding_records().some((record) => record.overridden()),
    );

    private readonly _dock_app = effect((on_cleanup) => {
        if (!this.show()) return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = 'min(24rem, 90vw)';
        on_cleanup(() => (body.style.paddingRight = padding_right));
    });

    private readonly _poll_counts = effect((on_cleanup) => {
        if (!this.show()) return;
        this._refresh.update((value) => value + 1);
        const timer = setInterval(
            () => this._refresh.update((value) => value + 1),
            1000,
        );
        on_cleanup(() => clearInterval(timer));
    });

    public readonly systems = computed<SystemGroup[]>(() => {
        this._refresh();
        const filter = this.filter().trim().toLowerCase();
        const selected_tab = this.tab();
        const system_names = this._system_names.value();
        const systems = new Map<string, SystemGroup>();
        const get_module = (
            system_id: string,
            module_id: string,
            module_name: string,
            module_index: number,
        ) => {
            let system = systems.get(system_id);
            if (!system) {
                system = {
                    id: system_id,
                    name: system_names[system_id] || system_id,
                    modules: [],
                    binding_count: 0,
                    active_count: 0,
                    message_count: 0,
                };
                systems.set(system_id, system);
            }
            const key = `${system_id}|${module_id}`;
            let module = system.modules.find((item) => item.key === key);
            if (!module) {
                module = {
                    key,
                    id: module_id,
                    name: module_name,
                    index: module_index,
                    bindings: [],
                    messages: [],
                    active_count: 0,
                };
                system.modules.push(module);
            }
            return { system, module };
        };

        if (selected_tab === 'bindings') {
            for (const record of binding_records()) {
                const current_value = record.value();
                const haystack =
                    `${record.system_id} ${system_names[record.system_id] || ''} ${record.module_id} ${record.name} ${this.formatValue(current_value)}`.toLowerCase();
                if (filter && !haystack.includes(filter)) continue;
                const { system, module } = get_module(
                    record.system_id,
                    record.module_id,
                    record.module_name,
                    record.module_index,
                );
                const count = record.binding.count;
                const row: BindingRow = {
                    ...record,
                    active: count > 0,
                    count,
                    current_value,
                    updated_at: record.last_update(),
                    is_overridden: record.overridden(),
                };
                module.bindings.push(row);
                module.active_count += row.active ? 1 : 0;
                system.binding_count += 1;
                system.active_count += row.active ? 1 : 0;
            }
        } else {
            for (const message of execute_messages()) {
                const haystack =
                    `${message.system_id} ${system_names[message.system_id] || ''} ${message.module_id} ${message.method} ${this.formatValue(message.value)}`.toLowerCase();
                if (filter && !haystack.includes(filter)) continue;
                const { system, module } = get_module(
                    message.system_id,
                    message.module_id,
                    message.module_name,
                    message.module_index,
                );
                module.messages.push(message);
                system.message_count += 1;
            }
        }

        return [...systems.values()]
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((system) => ({
                ...system,
                modules: system.modules
                    .sort((a, b) => a.id.localeCompare(b.id))
                    .map((module) => ({
                        ...module,
                        bindings: module.bindings.sort((a, b) =>
                            a.name.localeCompare(b.name),
                        ),
                        messages: module.messages.sort(
                            (a, b) => b.time - a.time,
                        ),
                    })),
            }));
    });

    public ngOnInit() {
        this.subscription(
            'toggle',
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyB'], () =>
                this.show.set(!this.show()),
            ),
        );
    }

    public isExpanded(key: string) {
        return !!this.filter() || !!this.expanded()[key];
    }

    public toggleGroup(key: string) {
        this.expanded.update((state) => ({
            ...state,
            [key]: !this.isExpanded(key),
        }));
    }

    public startOverride(row: BindingRow) {
        this.editing_key.set(row.key);
        this.edit_value.set(this.formatValue(row.current_value));
    }

    public saveOverride(row: BindingRow) {
        let value: any = this.edit_value();
        try {
            value = JSON.parse(value);
        } catch {
            // Unquoted input is intentionally treated as a plain string.
        }
        row.overridden.set(true);
        row.emit(value);
        this.editing_key.set('');
    }

    public clearOverride(row: BindingRow | BindingRecord) {
        const record = records_by_key.get(row.key) || row;
        record.overridden.set(false);
        record.emit(record.driver_value);
    }

    public clearAllOverrides() {
        for (const row of binding_records()) {
            if (row.overridden()) this.clearOverride(row);
        }
    }

    public clearMessages() {
        execute_messages.set([]);
    }

    public formatValue(value: any) {
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return value;
        try {
            return JSON.stringify(value);
        } catch {
            return String(value);
        }
    }

    public formatTime(time: number) {
        return time ? new Date(time).toLocaleTimeString() : 'not observed';
    }
}
