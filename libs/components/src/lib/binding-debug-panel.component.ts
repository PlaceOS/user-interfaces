import { Clipboard } from '@angular/cdk/clipboard';
import { DOCUMENT } from '@angular/common';
import {
    Component,
    OnInit,
    computed,
    effect,
    inject,
    input,
    model,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, HotkeysService } from '@placeos/common';
import { showSystem } from '@placeos/ts-client';
import {
    BindingRecord,
    ExecuteMessage,
    binding_records,
    execute_messages,
    installBindingDebugHooks,
    records_by_key,
} from './binding-debug-hooks';
import { DebugPanelResize } from './debug-panel-resize';
import { IconComponent } from './icon.component';

const system_name_cache = new Map<string, string>();
/** Formatted text of object values, so each value is formatted only once */
const compact_text = new WeakMap<object, string>();
const pretty_text = new WeakMap<object, string>();

function stringify(value: unknown, pretty: boolean) {
    try {
        return (
            JSON.stringify(value, null, pretty ? 2 : undefined) ?? String(value)
        );
    } catch {
        return String(value);
    }
}

interface BindingRow extends BindingRecord {
    active: boolean;
    count: number;
    current_value: unknown;
    updated_at: number;
    is_overridden: boolean;
}

interface ExecuteExchange extends Omit<
    ExecuteMessage,
    'direction' | 'value' | 'error'
> {
    send?: ExecuteMessage;
    receive?: ExecuteMessage;
}

/** Match responses by request ID, including commands that finish out of order. */
export function pairExecuteMessages(
    messages: readonly ExecuteMessage[],
): ExecuteExchange[] {
    const exchanges = new Map<number, ExecuteExchange>();
    for (const message of messages) {
        let exchange = exchanges.get(message.id);
        if (!exchange) {
            exchange = {
                id: message.id,
                system_id: message.system_id,
                module_id: message.module_id,
                module_name: message.module_name,
                module_index: message.module_index,
                method: message.method,
                time: message.time,
            };
            exchanges.set(message.id, exchange);
        }
        exchange[message.direction] = message;
        if (message.direction === 'send') exchange.time = message.time;
    }
    return [...exchanges.values()];
}

interface ModuleGroup {
    key: string;
    id: string;
    name: string;
    index: number;
    bindings: BindingRow[];
    messages: ExecuteExchange[];
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

@Component({
    selector: 'binding-debug-panel',
    template: `
        @if (show()) {
            <aside
                [style.width]="resize.panel_width()"
                aria-label="Driver debug"
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-999 flex max-w-full flex-col border-l shadow-xl"
            >
                <div
                    role="separator"
                    tabindex="0"
                    aria-label="Resize panel"
                    aria-orientation="vertical"
                    [attr.aria-valuemin]="resize.min_width"
                    [attr.aria-valuemax]="resize.maxWidth()"
                    [attr.aria-valuenow]="resize.width()"
                    class="hover:bg-primary/30 focus-visible:bg-primary/30 absolute inset-y-0 -left-1 z-10 w-2 cursor-col-resize touch-none select-none focus-visible:outline-2"
                    (pointerdown)="resize.start($event)"
                    (pointermove)="resize.move($event)"
                    (pointerup)="resize.end($event)"
                    (pointercancel)="resize.end($event)"
                    (keydown)="resize.onKeydown($event)"
                ></div>
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        aria-label="Close driver debug panel"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Driver debug
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
                    class="border-base-300 bg-base-100 grid grid-cols-2 gap-1 border-b p-1"
                >
                    <button
                        matRipple
                        class="flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm"
                        [class.bg-secondary]="tab() === 'bindings'"
                        [class.text-secondary-content]="tab() === 'bindings'"
                        [attr.aria-pressed]="tab() === 'bindings'"
                        (click)="tab.set('bindings')"
                    >
                        <div>Bindings</div>
                        <div
                            class="bg-base-content/10 flex h-5 w-5 items-center justify-center rounded-full p-1 font-mono text-[0.625rem]"
                        >
                            {{ binding_count() }}
                        </div>
                    </button>
                    <button
                        matRipple
                        class="flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm"
                        [class.bg-secondary]="tab() === 'executes'"
                        [class.text-secondary-content]="tab() === 'executes'"
                        [attr.aria-pressed]="tab() === 'executes'"
                        (click)="tab.set('executes')"
                    >
                        <div>Commands</div>
                        <div
                            class="bg-base-content/10 flex h-5 w-5 items-center justify-center rounded-full p-1 font-mono text-[0.625rem]"
                        >
                            {{ execute_count() }}
                        </div>
                    </button>
                </div>

                <div class="relative m-1 flex">
                    <input
                        name="binding-filter"
                        [(ngModel)]="filter"
                        aria-label="Search systems, modules, names or values"
                        placeholder="Search systems, modules, names or values"
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-10 text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>

                <div
                    class="flex items-center justify-between gap-2 px-3 py-2 text-xs"
                >
                    <span role="status"
                        >{{ visible_count() }}
                        {{ tab() === 'bindings' ? 'bindings' : 'commands' }}
                        shown</span
                    >
                    @if (filter()) {
                        <button
                            matRipple
                            class="underline"
                            (click)="filter.set('')"
                        >
                            Clear search
                        </button>
                    }
                </div>
                @if (has_overrides()) {
                    <p
                        class="bg-warning-light text-warning-content m-2 rounded-md p-3 text-xs"
                    >
                        Local overrides are active. Incoming driver values are
                        hidden until you restore them.
                    </p>
                }
                <div class="min-h-0 flex-1 overflow-auto">
                    @for (system of systems(); track system.id) {
                        <section>
                            <button
                                matRipple
                                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-h-9 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                [attr.aria-expanded]="
                                    isExpanded('system|' + system.id)
                                "
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
                                        {{ system.message_count }} commands
                                    </span>
                                }
                            </button>

                            @if (isExpanded('system|' + system.id)) {
                                @for (
                                    module of system.modules;
                                    track module.key
                                ) {
                                    <button
                                        matRipple
                                        class="border-base-300 bg-base-200 flex min-h-8 w-full items-center gap-1 border-b py-1 pr-2 pl-5 text-left text-xs"
                                        [attr.aria-expanded]="
                                            isExpanded('module|' + module.key)
                                        "
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
                                                commands
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
                                                    [class.bg-warning/20]="
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
                                                            [class.text-black]="
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
                                                            class="mt-2 space-y-2"
                                                        >
                                                            <label
                                                                [for]="
                                                                    'override-' +
                                                                    row.key
                                                                "
                                                                class="block font-medium"
                                                                >Local override
                                                                value</label
                                                            >
                                                            <textarea
                                                                [id]="
                                                                    'override-' +
                                                                    row.key
                                                                "
                                                                name="binding-value"
                                                                rows="4"
                                                                class="border-base-300 bg-base-100 w-full rounded-md border p-2 font-mono"
                                                                [(ngModel)]="
                                                                    edit_value
                                                                "
                                                                (keydown.escape)="
                                                                    editing_key.set(
                                                                        ''
                                                                    )
                                                                "
                                                            ></textarea>
                                                            <p
                                                                class="opacity-60"
                                                            >
                                                                Enter JSON for
                                                                numbers,
                                                                booleans, arrays
                                                                or objects.
                                                                Other text is a
                                                                string. This
                                                                does not send a
                                                                command to the
                                                                driver.
                                                            </p>
                                                            <div
                                                                class="flex gap-2"
                                                            >
                                                                <button
                                                                    matRipple
                                                                    class="bg-primary text-primary-content rounded-md px-3 py-2"
                                                                    (click)="
                                                                        saveOverride(
                                                                            row
                                                                        )
                                                                    "
                                                                >
                                                                    Apply
                                                                    override
                                                                </button>
                                                                <button
                                                                    matRipple
                                                                    class="rounded-md px-3 py-2"
                                                                    (click)="
                                                                        editing_key.set(
                                                                            ''
                                                                        )
                                                                    "
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    } @else {
                                                        <details
                                                            #binding_preview
                                                            class="border-base-300 bg-base-100 mt-2 rounded-md border p-2"
                                                            [open]="
                                                                open_values().has(
                                                                    'binding|' +
                                                                        row.key
                                                                )
                                                            "
                                                            (toggle)="
                                                                setValueOpen(
                                                                    'binding|' +
                                                                        row.key,
                                                                    binding_preview.open
                                                                )
                                                            "
                                                        >
                                                            <summary
                                                                class="cursor-pointer truncate font-mono"
                                                                [title]="
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                "
                                                            >
                                                                {{
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                }}
                                                            </summary>
                                                            @if (
                                                                open_values().has(
                                                                    'binding|' +
                                                                        row.key
                                                                )
                                                            ) {
                                                                <pre
                                                                    class="mt-2 max-h-64 overflow-auto font-mono break-all whitespace-pre-wrap"
                                                                    >{{
                                                                        formatValue(
                                                                            row.current_value,
                                                                            true
                                                                        )
                                                                    }}</pre
                                                                >
                                                            }
                                                        </details>
                                                        <button
                                                            matRipple
                                                            class="border-base-300 mt-2 rounded-md border px-3 py-1.5"
                                                            (click)="
                                                                startOverride(
                                                                    row
                                                                )
                                                            "
                                                        >
                                                            Override value
                                                        </button>
                                                        <button
                                                            matRipple
                                                            type="button"
                                                            class="border-base-300 mt-2 ml-2 rounded-md border px-3 py-1.5"
                                                            [attr.aria-label]="
                                                                'Copy ' +
                                                                row.name +
                                                                ' value'
                                                            "
                                                            (click)="
                                                                copyValue(
                                                                    row.current_value,
                                                                    'binding|' +
                                                                        row.key
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                copyLabel(
                                                                    'binding|' +
                                                                        row.key
                                                                )
                                                            }}
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
                                                                matRipple
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
                                                command of module.messages;
                                                track command.id
                                            ) {
                                                <article
                                                    class="border-base-300 border-b py-3 pr-3 pl-10 text-xs"
                                                >
                                                    <div
                                                        class="mb-2 flex items-start justify-between gap-2"
                                                    >
                                                        <div class="min-w-0">
                                                            <div
                                                                class="font-mono font-medium break-all"
                                                            >
                                                                {{
                                                                    command.method
                                                                }}
                                                            </div>
                                                            <div
                                                                class="mt-1 opacity-60"
                                                            >
                                                                #{{
                                                                    command.id
                                                                }}
                                                                ·
                                                                {{
                                                                    formatTime(
                                                                        command.time
                                                                    )
                                                                }}
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex items-center gap-2"
                                                        >
                                                            @if (
                                                                command.send &&
                                                                command.receive
                                                            ) {
                                                                <div
                                                                    class="font-mono text-xs opacity-60"
                                                                >
                                                                    {{
                                                                        command
                                                                            .receive
                                                                            .time -
                                                                            command
                                                                                .send
                                                                                .time
                                                                    }}
                                                                    ms
                                                                </div>
                                                            }
                                                            <div
                                                                class="bg-base-300 shrink-0 rounded-sm px-2 py-1"
                                                                [class.text-error-content]="
                                                                    command
                                                                        .receive
                                                                        ?.error
                                                                "
                                                                [class.text-success-content]="
                                                                    command.receive &&
                                                                    !command
                                                                        .receive
                                                                        .error
                                                                "
                                                                [class.bg-error]="
                                                                    command
                                                                        .receive
                                                                        ?.error
                                                                "
                                                                [class.bg-success]="
                                                                    command.receive &&
                                                                    !command
                                                                        .receive
                                                                        .error
                                                                "
                                                            >
                                                                {{
                                                                    command.receive
                                                                        ? command
                                                                              .receive
                                                                              .error
                                                                            ? 'Failed'
                                                                            : 'Completed'
                                                                        : 'Pending'
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    @if (!command.send) {
                                                        <p
                                                            class="mb-2 opacity-60"
                                                        >
                                                            Sent value is no
                                                            longer in the
                                                            message history.
                                                        </p>
                                                    }
                                                    @for (
                                                        message of [
                                                            command.send,
                                                            command.receive,
                                                        ];
                                                        track $index
                                                    ) {
                                                        @if (message) {
                                                            <div
                                                                class="border-base-300 bg-base-100 mt-2 rounded-md border p-1"
                                                            >
                                                                <div
                                                                    class="flex items-center justify-between gap-2"
                                                                >
                                                                    <span
                                                                        class="p-1 font-medium"
                                                                        [class.text-error]="
                                                                            message.error
                                                                        "
                                                                        >{{
                                                                            message.direction ===
                                                                            'send'
                                                                                ? 'Sent'
                                                                                : message.error
                                                                                  ? 'Error'
                                                                                  : 'Received'
                                                                        }}</span
                                                                    >
                                                                    <button
                                                                        icon
                                                                        default
                                                                        matRipple
                                                                        type="button"
                                                                        class="text-xs"
                                                                        matTooltip="Copy value"
                                                                        matTooltipPosition="left"
                                                                        [attr.aria-label]="
                                                                            'Copy ' +
                                                                            message.method +
                                                                            ' ' +
                                                                            message.direction +
                                                                            ' value'
                                                                        "
                                                                        [title]="
                                                                            copyLabel(
                                                                                message.direction +
                                                                                    '|' +
                                                                                    message.id
                                                                            )
                                                                        "
                                                                        (click)="
                                                                            copyValue(
                                                                                message.value,
                                                                                message.direction +
                                                                                    '|' +
                                                                                    message.id
                                                                            )
                                                                        "
                                                                    >
                                                                        <icon
                                                                            aria-hidden="true"
                                                                            >{{
                                                                                copyLabel(
                                                                                    message.direction +
                                                                                        '|' +
                                                                                        message.id
                                                                                ) ===
                                                                                'Copied'
                                                                                    ? 'check'
                                                                                    : 'content_copy'
                                                                            }}</icon
                                                                        >
                                                                    </button>
                                                                </div>
                                                                <details
                                                                    #message_preview
                                                                    class="my-2 min-w-0 px-1 font-mono"
                                                                    [open]="
                                                                        open_values().has(
                                                                            message.direction +
                                                                                '|' +
                                                                                message.id
                                                                        )
                                                                    "
                                                                    (toggle)="
                                                                        setValueOpen(
                                                                            message.direction +
                                                                                '|' +
                                                                                message.id,
                                                                            message_preview.open
                                                                        )
                                                                    "
                                                                >
                                                                    <summary
                                                                        class="cursor-pointer truncate"
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
                                                                    </summary>
                                                                    @if (
                                                                        open_values().has(
                                                                            message.direction +
                                                                                '|' +
                                                                                message.id
                                                                        )
                                                                    ) {
                                                                        <pre
                                                                            class="mt-2 max-h-64 overflow-auto break-all whitespace-pre-wrap"
                                                                            >{{
                                                                                formatValue(
                                                                                    message.value,
                                                                                    true
                                                                                )
                                                                            }}</pre
                                                                        >
                                                                    }
                                                                </details>
                                                            </div>
                                                        }
                                                    }
                                                    @if (!command.receive) {
                                                        <p
                                                            class="mt-2 opacity-60"
                                                        >
                                                            Waiting for a
                                                            response...
                                                        </p>
                                                    }
                                                </article>
                                            }
                                        }
                                    }
                                }
                            }
                        </section>
                    } @empty {
                        <div class="space-y-2 p-6 text-center text-sm">
                            <p class="font-medium">
                                {{
                                    filter().trim()
                                        ? 'No matching results'
                                        : tab() === 'bindings'
                                          ? 'No bindings observed yet'
                                          : 'No commands observed yet'
                                }}
                            </p>
                            <p class="opacity-60">
                                {{
                                    filter().trim()
                                        ? 'Try a different name or value, or clear the search.'
                                        : 'Use the app to see driver activity here.'
                                }}
                            </p>
                        </div>
                    }
                </div>

                <footer
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    <div role="status" class="mb-1 font-medium">
                        {{ copy_status() }}
                    </div>
                    Ctrl + Alt + Shift + B to toggle. Overrides stay active when
                    this panel is closed.
                    @if (tab() === 'executes') {
                        Only the latest 250 messages are kept.
                    }
                </footer>
            </aside>
        }
    `,
    styles: [
        `
            button:not(:disabled) {
                cursor: pointer;
            }
            button:not(:disabled):hover {
                background-image: linear-gradient(#8080801f, #8080801f);
            }
            button:not(:disabled):active {
                background-image: linear-gradient(#8080803d, #8080803d);
            }
            button:focus-visible,
            summary:focus-visible {
                outline: 2px solid currentColor;
                outline-offset: -2px;
            }
        `,
    ],
    imports: [FormsModule, MatRippleModule, IconComponent, MatTooltipModule],
})
export class BindingDebugPanelComponent extends AsyncHandler implements OnInit {
    private _hotkey = inject(HotkeysService);
    private _document = inject(DOCUMENT);
    private _clipboard = inject(Clipboard);

    public readonly show = model(false);
    public readonly resize = new DebugPanelResize(512, 100);
    public readonly hotkeysEnabled = input(true);
    public readonly tab = signal<'bindings' | 'executes'>('bindings');
    public readonly filter = signal('');
    public readonly expanded = signal<Record<string, boolean>>({});
    public readonly editing_key = signal('');
    public readonly edit_value = signal('');
    public readonly copy_status = signal('');
    public readonly copy_result = signal<{
        key: string;
        success: boolean;
    } | null>(null);
    /** Keys of the value previews that are open */
    public readonly open_values = signal<ReadonlySet<string>>(new Set());
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
    private readonly _exchanges = computed(() =>
        pairExecuteMessages(execute_messages()),
    );
    public readonly execute_count = computed(() => this._exchanges().length);
    public readonly has_overrides = computed(() =>
        binding_records().some((record) => record.overridden()),
    );

    private readonly _dock_app = effect((on_cleanup) => {
        if (!this.show()) return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = this.resize.panel_width();
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
                // Only stringify values while the user filters
                if (filter) {
                    const haystack =
                        `${record.system_id} ${system_names[record.system_id] || ''} ${record.module_id} ${record.name} ${this.formatValue(current_value)}`.toLowerCase();
                    if (!haystack.includes(filter)) continue;
                }
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
            for (const message of this._exchanges()) {
                // Only stringify values while the user filters
                if (filter) {
                    const haystack =
                        `${message.system_id} ${system_names[message.system_id] || ''} ${message.module_id} ${message.method} ${message.send ? this.formatValue(message.send.value) : ''} ${message.receive ? this.formatValue(message.receive.value) : ''}`.toLowerCase();
                    if (!haystack.includes(filter)) continue;
                }
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

    constructor() {
        super();
        // The launcher installs the hooks earlier for admin and support users
        installBindingDebugHooks();
    }

    public ngOnInit() {
        if (!this.hotkeysEnabled()) return;
        this.subscription(
            'toggle',
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyB'], () =>
                this.show.set(!this.show()),
            ),
        );
    }

    public readonly visible_count = computed(() =>
        this.systems().reduce(
            (total, system) =>
                total +
                (this.tab() === 'bindings'
                    ? system.binding_count
                    : system.message_count),
            0,
        ),
    );

    public isExpanded(key: string) {
        return (
            this.expanded()[`${this.filter().trim()}|${key}`] ??
            !!this.filter().trim()
        );
    }

    public toggleGroup(key: string) {
        this.expanded.update((state) => ({
            ...state,
            [`${this.filter().trim()}|${key}`]: !this.isExpanded(key),
        }));
    }

    public startOverride(row: BindingRow) {
        this.editing_key.set(row.key);
        this.edit_value.set(
            JSON.stringify(row.current_value, null, 2) ?? 'undefined',
        );
    }

    public saveOverride(row: BindingRow) {
        let value = this.edit_value();
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

    /** Copy the complete value, including data hidden by the collapsed preview. */
    public copyValue(value: unknown, key = ''): void {
        const text =
            typeof value === 'string' ? value : this.formatValue(value, true);
        const copied = this._clipboard.copy(text);
        this.copy_result.set({ key, success: copied });
        this.copy_status.set(
            copied
                ? 'Value copied.'
                : 'Could not copy. Expand the value and copy it manually.',
        );
        this.timeout(
            'copy-status',
            () => {
                this.copy_status.set('');
                this.copy_result.set(null);
            },
            5000,
        );
    }

    /** Keep the open state of a value preview. Closed previews skip the full value. */
    public setValueOpen(key: string, open: boolean) {
        if (open === this.open_values().has(key)) return;
        this.open_values.update((keys) => {
            const next = new Set(keys);
            if (open) next.add(key);
            else next.delete(key);
            return next;
        });
    }

    public copyLabel(key: string): string {
        const result = this.copy_result();
        if (result?.key !== key) return 'Copy value';
        return result.success ? 'Copied' : 'Retry copy';
    }

    /** Text of a value. Object text is cached, as values are not changed in place. */
    public formatValue(value: unknown, pretty = false) {
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return value || '""';
        if (value instanceof Error) return value.message;
        if (typeof value !== 'object' || value === null) {
            return stringify(value, pretty);
        }
        const cache = pretty ? pretty_text : compact_text;
        let text = cache.get(value);
        if (text === undefined) {
            text = stringify(value, pretty);
            cache.set(value, text);
        }
        return text;
    }

    public formatTime(time: number) {
        return time ? new Date(time).toLocaleTimeString() : 'not observed';
    }
}
