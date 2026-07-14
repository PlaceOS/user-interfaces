import { DOCUMENT } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from '@placeos/common';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { OrganisationService } from 'libs/common/src/lib/org/organisation.service';
import { DEFAULT_SETTINGS } from 'libs/common/src/lib/settings';
import { HashMap } from 'libs/common/src/lib/types';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { IconComponent } from './icon.component';

interface SettingZone {
    type: 'ORG' | 'Region' | 'Building';
    id: string;
    name: string;
}

interface SettingRow {
    key: string;
    /** Key without the implicit `app.` prefix, for display */
    label: string;
    value: any;
    display: string;
    overridden: boolean;
    description: string;
    zones: SettingZone[];
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

function hasSetting(map: HashMap, key: string) {
    let value: any = map;
    for (const part of key.slice(4).split('.')) value = value?.[part];
    return value != null;
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
            <aside
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-998 flex w-96 max-w-[90vw] flex-col border-l shadow-xl"
            >
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">Settings Viewer</div>
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
                    </div>
                </header>
                <div class="relative m-2 flex">
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
                                class="border-base-300 grid min-h-8 grid-cols-[minmax(0,1fr)_auto_auto] items-center border-b py-1 pr-2 text-xs"
                                [class.pl-8]="entry.grouped"
                                [class.pl-2]="!entry.grouped"
                                [class.bg-warning-light]="row.overridden"
                            >
                                <div
                                    class="min-w-0 pr-2"
                                    [class.col-span-3]="
                                        row.control !== 'toggle'
                                    "
                                    [class.pb-1]="row.control !== 'toggle'"
                                >
                                    <div
                                        class="flex min-w-0 items-center gap-1 font-mono"
                                    >
                                        <span class="truncate">
                                            {{ row.label }}
                                        </span>
                                        <span
                                            customTooltip
                                            class="shrink-0"
                                            [content]="zone_tooltip"
                                            [data]="{ zones: row.zones }"
                                            [hover]="true"
                                            [backdrop]="false"
                                            xPosition="start"
                                            yPosition="center"
                                            [xOffset]="20"
                                        >
                                            <icon class="text-sm opacity-60"
                                                >info</icon
                                            >
                                        </span>
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
                                            class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
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
                                            class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
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
                                            class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
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
                                            <div class="flex">
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
                                                class="border-base-300 bg-base-100 hover:border-info flex h-8 w-full cursor-pointer items-center truncate rounded-md border px-2 font-mono shadow-sm transition-colors"
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
            </aside>
        }
        <ng-template #zone_tooltip let-zones="zones">
            <div
                class="border-base-300 bg-base-100 text-base-content min-w-64 rounded-lg border p-2 shadow-lg"
            >
                <div
                    class="border-base-300 border-b px-1 pb-2 text-base font-medium"
                >
                    Setting sources
                </div>
                <div class="flex flex-col gap-1 pt-2">
                    @for (zone of zones; track zone.type + zone.id) {
                        <div
                            class="bg-base-200 flex items-start gap-2 rounded-sm p-2"
                        >
                            <div class="w-1/2 min-w-0 flex-1">
                                <div class="truncate text-base font-medium">
                                    {{ zone.name }}
                                </div>
                                <div
                                    class="truncate font-mono text-[0.625rem] opacity-60"
                                >
                                    {{ zone.id }}
                                </div>
                            </div>
                            <span
                                class="bg-base-300 rounded-sm px-1.5 py-0.5 text-[0.625rem] font-medium"
                            >
                                {{ zone.type }}
                            </span>
                        </div>
                    } @empty {
                        <div class="px-1 py-2 text-xs opacity-60">
                            No zone metadata value
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        CustomTooltipComponent,
        IconComponent,
    ],
})
export class SettingsDebugPanelComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _hotkey = inject(HotkeysService);
    private _org = inject(OrganisationService);
    private _document = inject(DOCUMENT);

    /** JSON schema describing the app's `app.*` settings */
    public readonly schema = input<HashMap | null>(null);

    public readonly show = signal(false);
    private readonly _dock_app = effect((on_cleanup) => {
        if (!this.show()) return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = 'min(24rem, 90vw)';
        on_cleanup(() => (body.style.paddingRight = padding_right));
    });
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
                    zones: this._zoneTooltip(key),
                    control,
                    options: node?.enum,
                };
            });
    });

    private _zoneTooltip(key: string) {
        const zones: SettingZone[] = [];
        const add_zone = (
            type: 'ORG' | 'Region' | 'Building',
            id: string,
            name: string,
            settings: HashMap[],
        ) => {
            if (!id || !settings.some((_) => hasSetting(_, key))) return;
            zones.push({ type, id, name: name || id });
        };
        for (const [id, settings] of Object.entries(
            this._org.building_settings,
        )) {
            const building = this._org.buildings.find((_) => _.id === id);
            add_zone(
                'Building',
                id,
                building?.display_name || building?.name || '',
                [settings],
            );
        }
        for (const [id, settings] of Object.entries(
            this._org.region_settings,
        )) {
            const region = this._org.regions.find((_) => _.id === id);
            add_zone('Region', id, region?.display_name || region?.name || '', [
                settings,
            ]);
        }
        const organisation = this._org.organisation;
        add_zone('ORG', organisation.id, organisation.name, this._org.settings);
        return zones;
    }

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
