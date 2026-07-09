import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from '@placeos/common';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { DEFAULT_SETTINGS } from 'libs/common/src/lib/settings';
import { HashMap } from 'libs/common/src/lib/types';
import { IconComponent } from './icon.component';

interface SettingRow {
    key: string;
    /** Key without the implicit `app.` prefix, for display */
    label: string;
    value: any;
    display: string;
    overridden: boolean;
    description: string;
    control: 'toggle' | 'number' | 'select' | 'text';
    options?: string[];
}

interface GroupHeader {
    name: string;
    count: number;
    overridden: number;
}

interface PanelEntry {
    header?: GroupHeader;
    row?: SettingRow;
    grouped?: boolean;
}

function flattenKeys(map: HashMap, prefix: string, keys: Set<string>) {
    for (const key in map) {
        const full_key = prefix ? `${prefix}.${key}` : key;
        const value = map[key];
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            flattenKeys(value, full_key, keys);
        } else keys.add(full_key);
    }
}

/** Resolve `$ref: "#/$defs/..."` pointers against the schema root */
function resolveRef(root: HashMap, node: HashMap) {
    const ref = node?.['$ref'] as string;
    if (!ref?.startsWith('#/')) return node;
    let target: any = root;
    for (const part of ref.slice(2).split('/')) target = target?.[part];
    return target || node;
}

/** Find the JSON schema node for a dot-notation `app.*` setting key */
function schemaNode(root: HashMap, key: string): HashMap | null {
    if (!root || !key.startsWith('app.')) return null;
    let node: HashMap = root;
    for (const part of key.slice(4).split('.')) {
        node = resolveRef(root, node)?.properties?.[part];
        if (!node) return null;
    }
    return resolveRef(root, node);
}

function flattenSchemaKeys(
    root: HashMap,
    node: HashMap,
    prefix: string,
    keys: Set<string>,
    depth = 0,
) {
    // ponytail: depth cap guards against circular $refs
    if (depth > 8) return;
    node = resolveRef(root, node);
    if (!node?.properties) {
        if (prefix) keys.add(prefix);
        return;
    }
    for (const key in node.properties) {
        flattenSchemaKeys(
            root,
            node.properties[key],
            prefix ? `${prefix}.${key}` : key,
            keys,
            depth + 1,
        );
    }
}

@Component({
    selector: 'settings-debug-panel',
    template: `
        @if (show()) {
            <div class="flex flex-col gap-2">
                <div
                    class="border-base-300 bg-base-100 text-base-content fixed bottom-123 left-2 z-998 flex w-160 max-w-[90vw] items-center overflow-hidden rounded-lg border p-1 shadow-sm"
                >
                    <div class="flex-1 px-3 font-medium">Settings Viewer</div>
                    <div class="flex items-center">
                        @if (has_overrides()) {
                            <button
                                matRipple
                                class="text-error px-2 py-1 text-xs underline"
                                (click)="clearAll()"
                            >
                                Clear all overrides
                            </button>
                        }
                        <button
                            icon
                            default
                            matRipple
                            class="text-sm"
                            (click)="show.set(false)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="border-base-300 bg-base-200 text-base-content fixed bottom-2 left-2 z-998 flex h-120 max-h-[80vh] w-160 max-w-[90vw] flex-col overflow-hidden rounded-xl border shadow-sm"
            >
                <div class="relative m-1 flex">
                    <input
                        name="setting-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter settings..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>
                <div class="flex-1 overflow-auto">
                    @for (entry of entries(); track $index) {
                        @if (entry.header; as group) {
                            <button
                                class="border-base-300 bg-base-100/50 hover:bg-base-100 flex min-h-8 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                (click)="toggleGroup(group.name)"
                            >
                                <icon
                                    class="text-sm transition-transform"
                                    [class.rotate-90]="
                                        filter() || expanded()[group.name]
                                    "
                                >
                                    chevron_right
                                </icon>
                                <span class="font-mono">{{ group.name }}</span>
                                <span class="opacity-40">
                                    ({{ group.count }})
                                </span>
                                @if (group.overridden) {
                                    <span
                                        class="bg-warning-light rounded-sm px-1 text-[0.65rem] text-black"
                                    >
                                        {{ group.overridden }} overridden
                                    </span>
                                }
                            </button>
                        }
                        @if (entry.row; as row) {
                            <div
                                class="border-base-300 flex min-h-8 items-center border-b py-1 pr-2 text-xs"
                                [class.pl-8]="entry.grouped"
                                [class.pl-2]="!entry.grouped"
                                [class.bg-warning-light]="row.overridden"
                            >
                                <div class="w-3/5 min-w-0 pr-2">
                                    <div
                                        class="truncate font-mono"
                                        [title]="row.label"
                                    >
                                        {{ row.label }}
                                    </div>
                                    @if (row.description) {
                                        <div
                                            class="truncate text-[0.65rem] opacity-60"
                                            [title]="row.description"
                                        >
                                            {{ row.description }}
                                        </div>
                                    }
                                </div>
                                @switch (
                                    editing_key() === row.key ? row.control : ''
                                ) {
                                    @case ('select') {
                                        <select
                                            name="setting-value"
                                            class="bg-base-100 flex-1 rounded-sm border px-1 py-0.5 font-mono"
                                            [(ngModel)]="edit_value"
                                            (keydown.escape)="
                                                editing_key.set('')
                                            "
                                        >
                                            @for (
                                                option of row.options;
                                                track option
                                            ) {
                                                <option [value]="option">
                                                    {{ option }}
                                                </option>
                                            }
                                        </select>
                                        <button
                                            icon
                                            matRipple
                                            title="Save override"
                                            (click)="saveEdit()"
                                        >
                                            <icon class="text-sm">check</icon>
                                        </button>
                                    }
                                    @case ('number') {
                                        <input
                                            name="setting-value"
                                            type="number"
                                            class="bg-base-100 flex-1 rounded-sm border px-1 py-0.5 font-mono"
                                            [(ngModel)]="edit_value"
                                            (keydown.enter)="saveEdit()"
                                            (keydown.escape)="
                                                editing_key.set('')
                                            "
                                        />
                                        <button
                                            icon
                                            matRipple
                                            title="Save override"
                                            (click)="saveEdit()"
                                        >
                                            <icon class="text-sm">check</icon>
                                        </button>
                                    }
                                    @case ('text') {
                                        <input
                                            name="setting-value"
                                            class="bg-base-100 flex-1 rounded-sm border px-1 py-0.5 font-mono"
                                            [(ngModel)]="edit_value"
                                            (keydown.enter)="saveEdit()"
                                            (keydown.escape)="
                                                editing_key.set('')
                                            "
                                        />
                                        <button
                                            icon
                                            matRipple
                                            title="Save override"
                                            (click)="saveEdit()"
                                        >
                                            <icon class="text-sm">check</icon>
                                        </button>
                                    }
                                    @default {
                                        @if (row.control === 'toggle') {
                                            <div class="flex flex-1">
                                                <button
                                                    class="relative h-4 w-8 rounded-full transition-colors"
                                                    [class.bg-info]="row.value"
                                                    [class.bg-base-300]="
                                                        !row.value
                                                    "
                                                    [title]="row.display"
                                                    (click)="toggleValue(row)"
                                                >
                                                    <div
                                                        class="absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-transform"
                                                        [class.translate-x-4]="
                                                            row.value
                                                        "
                                                    ></div>
                                                </button>
                                            </div>
                                        } @else {
                                            <div
                                                class="flex-1 cursor-pointer truncate font-mono"
                                                [class]="
                                                    row.display
                                                        ? 'opacity-80'
                                                        : 'italic opacity-40'
                                                "
                                                [title]="row.display || 'unset'"
                                                (click)="startEdit(row)"
                                            >
                                                {{ row.display || 'unset' }}
                                            </div>
                                        }
                                        @if (row.overridden) {
                                            <button
                                                icon
                                                matRipple
                                                title="Clear override"
                                                (click)="clearOverride(row.key)"
                                            >
                                                <icon class="text-sm"
                                                    >undo</icon
                                                >
                                            </button>
                                        }
                                    }
                                }
                            </div>
                        }
                    } @empty {
                        <div class="p-4 text-center opacity-30">
                            No matching settings
                        </div>
                    }
                </div>
                <div
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Click a value to override it. Text values are parsed as
                    JSON, falling back to plain strings. Overrides are stored
                    locally in this browser.
                </div>
            </div>
        }
    `,
    imports: [FormsModule, MatRippleModule, IconComponent],
})
export class SettingsDebugPanelComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _hotkey = inject(HotkeysService);

    /** JSON schema describing the app's `app.*` settings */
    public readonly schema = input<HashMap | null>(null);

    public readonly show = signal(false);
    public readonly filter = signal('');
    public readonly editing_key = signal('');
    /** Expansion state of top-level setting groups */
    public readonly expanded = signal<Record<string, boolean>>({});
    public edit_value = '';

    public readonly has_overrides = computed(
        () => Object.keys(this._settings.debug_overrides()).length > 0,
    );

    public readonly rows = computed<SettingRow[]>(() => {
        const schema = this.schema();
        const debug_overrides = this._settings.debug_overrides();
        const keys = new Set<string>();
        flattenKeys({ app: DEFAULT_SETTINGS.app }, '', keys);
        for (const layer of this._settings.overrides()) {
            flattenKeys({ app: layer }, '', keys);
        }
        if (schema) flattenSchemaKeys(schema, schema, 'app', keys);
        for (const key in debug_overrides) keys.add(key);
        const search = this.filter().toLowerCase();
        return [...keys]
            .filter((key) => key.slice(4).toLowerCase().includes(search))
            .sort()
            .map((key) => {
                const node = schemaNode(schema, key);
                const value = this._settings.get(key);
                let control: SettingRow['control'] = 'text';
                if (node?.enum?.length) control = 'select';
                else if (
                    node?.type === 'boolean' ||
                    typeof value === 'boolean'
                ) {
                    control = 'toggle';
                } else if (
                    node?.type === 'number' ||
                    node?.type === 'integer' ||
                    typeof value === 'number'
                ) {
                    control = 'number';
                }
                return {
                    key,
                    label: key.slice(4),
                    value,
                    display: JSON.stringify(value) ?? '',
                    overridden: key in debug_overrides,
                    description: node?.description || '',
                    control,
                    options: node?.enum,
                };
            });
    });

    /** Rows interleaved with collapsible group headers for nested keys.
     *  Relies on rows() being sorted, so grouped keys are contiguous. */
    public readonly entries = computed<PanelEntry[]>(() => {
        // Active filter forces all groups open so matches stay visible
        const show_all = !!this.filter();
        const expanded = this.expanded();
        const entries: PanelEntry[] = [];
        let header: GroupHeader | null = null;
        for (const row of this.rows()) {
            const index = row.label.indexOf('.');
            if (index < 0) {
                header = null;
                entries.push({ row });
                continue;
            }
            const group = row.label.slice(0, index);
            if (!header || header.name !== group) {
                header = { name: group, count: 0, overridden: 0 };
                entries.push({ header });
            }
            header.count += 1;
            if (row.overridden) header.overridden += 1;
            if (show_all || expanded[group]) {
                entries.push({
                    row: { ...row, label: row.label.slice(index + 1) },
                    grouped: true,
                });
            }
        }
        return entries;
    });

    public toggleGroup(name: string) {
        this.expanded.update((state) => ({ ...state, [name]: !state[name] }));
    }

    public ngOnInit() {
        this.subscription(
            'toggle',
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyS'], () =>
                this.show.set(!this.show()),
            ),
        );
    }

    public startEdit(row: SettingRow) {
        this.editing_key.set(row.key);
        this.edit_value =
            row.control === 'text' ? row.display : `${row.value ?? ''}`;
    }

    public toggleValue(row: SettingRow) {
        this._settings.setDebugOverride(row.key, !row.value);
    }

    public saveEdit() {
        const key = this.editing_key();
        const row = this.rows().find((_) => _.key === key);
        if (!row) return;
        let value: any = this.edit_value;
        if (row.control === 'number') {
            value = parseFloat(this.edit_value);
            if (isNaN(value)) return;
        } else if (row.control === 'text') {
            try {
                value = JSON.parse(this.edit_value);
            } catch {
                // ponytail: unquoted input is treated as a plain string
            }
        }
        this._settings.setDebugOverride(key, value);
        this.editing_key.set('');
    }

    public clearOverride(key: string) {
        this._settings.setDebugOverride(key, undefined);
    }

    public clearAll() {
        this._settings.clearDebugOverrides();
    }
}
