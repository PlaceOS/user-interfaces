import { Component, computed, inject, signal } from '@angular/core';

import { MapObjectType } from '../data/types';
import { OBJECT_TYPES } from './constants';
import { EditorStateService } from './editor-state.service';
import { ToastService } from './toast.service';

interface ImportedId {
    id: string;
    label?: string;
    type?: string;
    assigned?: boolean;
}

const STORAGE_KEY = 'MAP_BUILDER.label-ids';

/** Parse a simple `id,label,type` list, tolerating a header row */
function parseIdList(text: string): ImportedId[] {
    const lines = text
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
    if (!lines.length) return [];
    const first = lines[0].toLowerCase();
    const has_header =
        first.includes('id') ||
        first.includes('name') ||
        first.includes('label');
    return lines
        .slice(has_header ? 1 : 0)
        .map((line) => {
            const parts = line
                .split(',')
                .map((part) => part.trim().replace(/^["']|["']$/g, ''));
            return {
                id: parts[0],
                label: parts[1] || undefined,
                type: parts[2] || undefined,
                assigned: false,
            };
        })
        .filter((entry) => !!entry.id);
}

function loadStored(): ImportedId[] {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed)
            ? parsed.filter((e) => e && typeof e.id === 'string')
            : [];
    } catch {
        sessionStorage.removeItem(STORAGE_KEY);
        return [];
    }
}

@Component({
    selector: 'map-studio-labelling-panel',
    template: `
        <div class="flex h-full flex-col">
            <div
                class="border-base-300 flex items-center justify-between border-b px-3 py-2.5"
            >
                <span class="text-xs font-bold">Data Labelling</span>
                <span class="text-base-content/60 text-xs">
                    {{ assignedCount() }}/{{ totalCount() }} labelled
                </span>
            </div>

            <div class="border-base-300 bg-base-200 flex border-b">
                @for (tab of tabs; track tab.id) {
                    <button
                        class="flex-1 px-2 py-1.5 text-xs"
                        [class]="
                            active_tab() === tab.id
                                ? 'bg-base-100 border-primary text-primary border-b-2 font-bold'
                                : 'text-base-content/60'
                        "
                        (click)="active_tab.set(tab.id)"
                    >
                        {{ tab.label }}
                    </button>
                }
            </div>

            <div class="flex-1 space-y-3 overflow-y-auto p-2">
                @if (active_tab() === 'assign') {
                    <div>
                        <div
                            class="text-base-content/60 mb-1 text-xs font-semibold tracking-wide uppercase"
                        >
                            1. Import ID list (CSV)
                        </div>
                        <div class="flex gap-1.5">
                            <label
                                btn
                                class="inverse min-h-0! flex-1 cursor-pointer px-2! py-1! text-xs"
                            >
                                {{
                                    imported().length
                                        ? imported().length + ' IDs loaded'
                                        : 'Choose CSV file'
                                }}
                                <input
                                    type="file"
                                    accept=".csv,.txt"
                                    class="hidden"
                                    (change)="onImportIds($event)"
                                />
                            </label>
                            @if (imported().length) {
                                <button
                                    btn
                                    class="clear text-error! min-h-0! px-2! py-1! text-xs"
                                    (click)="clearIds()"
                                >
                                    Clear
                                </button>
                            }
                        </div>
                        <p class="text-base-content/60 mt-1 text-xs">
                            Format: id, label (optional), type (optional)
                        </p>
                    </div>

                    @if (imported().length) {
                        <div>
                            <div
                                class="text-base-content/60 mb-1 text-xs font-semibold tracking-wide uppercase"
                            >
                                2. Click a room or desk on the canvas
                            </div>
                            @if (state.selected(); as selected) {
                                <div
                                    class="bg-primary/10 border-primary text-primary rounded border px-2.5 py-1.5 text-xs font-semibold"
                                >
                                    Selected:
                                    {{
                                        selected.label ||
                                            selected.svg_id ||
                                            selected.object_type
                                    }}
                                    <span class="font-normal opacity-70">
                                        ({{ selected.object_type }})
                                    </span>
                                </div>
                            } @else {
                                <div
                                    class="bg-warning-light border-warning text-warning-content rounded border px-2.5 py-1.5 text-xs"
                                >
                                    Click a room or desk on the canvas to select
                                    it
                                </div>
                            }
                        </div>

                        <div>
                            <div
                                class="text-base-content/60 mb-1 text-xs font-semibold tracking-wide uppercase"
                            >
                                3. Pick an ID to assign
                            </div>
                            <input
                                class="border-base-300 bg-base-200 mb-1 w-full rounded border px-2 py-1 text-xs"
                                placeholder="Search IDs..."
                                [value]="search()"
                                (input)="search.set(asValue($event))"
                            />
                            <div
                                class="border-base-300 max-h-44 overflow-y-auto rounded border"
                            >
                                @for (item of unassigned(); track item.id) {
                                    <div
                                        class="border-base-300 hover:bg-primary/10 flex items-center gap-2 border-b px-2.5 py-1 text-xs"
                                        [class.cursor-pointer]="
                                            !!state.selected()
                                        "
                                        [class.opacity-50]="!state.selected()"
                                        (click)="assign(item)"
                                        (keyup.enter)="assign(item)"
                                        tabindex="0"
                                        role="button"
                                    >
                                        <span
                                            class="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                                        ></span>
                                        <span class="flex-1 font-medium">
                                            {{ item.id }}
                                        </span>
                                        @if (item.label) {
                                            <span class="text-base-content/60">
                                                {{ item.label }}
                                            </span>
                                        }
                                    </div>
                                }
                                @if (assigned().length) {
                                    <div
                                        class="bg-base-200 text-base-content/60 px-2.5 py-1 text-xs font-bold uppercase"
                                    >
                                        Assigned ({{ assigned().length }})
                                    </div>
                                    @for (item of assigned(); track item.id) {
                                        <div
                                            class="border-base-300 flex items-center gap-2 border-b px-2.5 py-1 text-xs opacity-60"
                                        >
                                            <span
                                                class="bg-success h-1.5 w-1.5 shrink-0 rounded-full"
                                            ></span>
                                            <span
                                                class="flex-1 font-medium line-through"
                                            >
                                                {{ item.id }}
                                            </span>
                                            <button
                                                class="text-error"
                                                (click)="unassign(item)"
                                            >
                                                undo
                                            </button>
                                        </div>
                                    }
                                }
                                @if (
                                    !unassigned().length && !assigned().length
                                ) {
                                    <div
                                        class="text-base-content/60 p-3 text-center text-xs"
                                    >
                                        {{
                                            search()
                                                ? 'No matches'
                                                : 'All IDs assigned'
                                        }}
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    <button btn class="w-full" (click)="exportIds()">
                        Export IDs as CSV
                    </button>
                } @else {
                    <div>
                        <div
                            class="text-base-content/60 mb-1 text-xs font-semibold tracking-wide uppercase"
                        >
                            Select by type
                        </div>
                        <div class="flex gap-1.5">
                            <select
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                (change)="filter_type.set(asValue($event))"
                            >
                                <option value="">-- Choose type --</option>
                                @for (type of object_types; track type) {
                                    <option [value]="type">
                                        {{ type }} ({{ countOf(type) }})
                                    </option>
                                }
                            </select>
                            <button
                                btn
                                class="inverse min-h-0! px-2! py-1! text-xs"
                                [disabled]="!filter_type()"
                                (click)="selectByType()"
                            >
                                Select
                            </button>
                        </div>
                        @if (state.multi_select().length; as count) {
                            <p class="text-base-content/60 mt-1 text-xs">
                                {{ count }} selected
                            </p>
                        }
                    </div>

                    <div>
                        <div
                            class="text-base-content/60 mb-1 text-xs font-semibold tracking-wide uppercase"
                        >
                            Bulk set type
                        </div>
                        <div class="flex gap-1.5">
                            <select
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                (change)="bulk_type.set(asValue($event))"
                            >
                                <option value="">-- Choose type --</option>
                                @for (type of object_types; track type) {
                                    <option [value]="type">{{ type }}</option>
                                }
                            </select>
                            <button
                                btn
                                class="min-h-0! px-2! py-1! text-xs"
                                [disabled]="
                                    !bulk_type() || !state.multi_select().length
                                "
                                (click)="applyBulkType()"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    <div>
                        <div
                            class="text-base-content/60 mb-1 text-xs font-semibold tracking-wide uppercase"
                        >
                            Auto-number by type
                        </div>
                        <div class="flex gap-1.5">
                            <input
                                class="border-base-300 min-w-0 flex-2 rounded border px-2 py-1 text-xs"
                                placeholder="Prefix"
                                [value]="auto_prefix()"
                                (input)="auto_prefix.set(asValue($event))"
                            />
                            <input
                                type="number"
                                min="0"
                                class="border-base-300 w-16 rounded border px-2 py-1 text-xs"
                                [value]="auto_start()"
                                (input)="auto_start.set(+asValue($event))"
                            />
                        </div>
                        <select
                            class="border-base-300 mt-1.5 w-full rounded border px-2 py-1 text-xs"
                            (change)="auto_type.set(asValue($event))"
                        >
                            @for (type of object_types; track type) {
                                <option
                                    [value]="type"
                                    [selected]="type === auto_type()"
                                >
                                    {{ type }} ({{ countOf(type) }})
                                </option>
                            }
                        </select>
                        <button
                            btn
                            class="mt-1.5 w-full"
                            [disabled]="!countOf(auto_type())"
                            (click)="autoNumber()"
                        >
                            Generate Sequential IDs
                        </button>
                    </div>
                }
            </div>
        </div>
    `,
})
export class LabellingPanelComponent {
    public readonly state = inject(EditorStateService);
    private readonly _toasts = inject(ToastService);

    public readonly tabs = [
        { id: 'assign' as const, label: 'Assign IDs' },
        { id: 'bulk' as const, label: 'Bulk Edit' },
    ];
    public readonly object_types = OBJECT_TYPES;

    public readonly active_tab = signal<'assign' | 'bulk'>('assign');
    public readonly imported = signal<ImportedId[]>(loadStored());
    public readonly search = signal('');
    public readonly filter_type = signal('');
    public readonly bulk_type = signal('');
    public readonly auto_prefix = signal('desk-');
    public readonly auto_start = signal(1);
    public readonly auto_type = signal<string>('desk');

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement | HTMLSelectElement).value;

    public readonly countOf = (type: string) =>
        this.state.objects().filter((o) => o.object_type === type).length;

    private readonly _filtered = computed(() => {
        const query = this.search().trim().toLowerCase();
        if (!query) return this.imported();
        return this.imported().filter(
            (item) =>
                item.id.toLowerCase().includes(query) ||
                item.label?.toLowerCase().includes(query) ||
                item.type?.toLowerCase().includes(query),
        );
    });

    public readonly unassigned = computed(() =>
        this._filtered().filter((item) => !item.assigned),
    );

    public readonly assigned = computed(() =>
        this._filtered().filter((item) => item.assigned),
    );

    /**
     * Progress reads off the imported list when there is one, and otherwise
     * off how many bookable objects carry a custom svg id.
     */
    public readonly assignedCount = computed(() =>
        this.imported().length
            ? this.imported().filter((i) => i.assigned).length
            : this.state.bookable().filter((o) => o.svg_id && o.svg_id !== o.id)
                  .length,
    );

    public readonly totalCount = computed(() =>
        this.imported().length
            ? this.imported().length
            : this.state.bookable().length,
    );

    private _persist(ids: ImportedId[]) {
        this.imported.set(ids);
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
        } catch {
            // Storage full or blocked — the list just won't survive a reload
        }
    }

    public async onImportIds(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) {
            const ids = parseIdList(await file.text());
            this._persist(ids);
            this._toasts.show(`Loaded ${ids.length} IDs`, 'success');
        }
        input.value = '';
    }

    public clearIds() {
        this._persist([]);
    }

    public assign(item: ImportedId) {
        const selected = this.state.selected();
        if (!selected) return;
        this.state.pushHistory();
        this.state.updateObject(selected.id, {
            svg_id: item.id,
            label: item.label || item.id,
        });
        this._persist(
            this.imported().map((entry) =>
                entry.id === item.id ? { ...entry, assigned: true } : entry,
            ),
        );
    }

    public unassign(item: ImportedId) {
        this._persist(
            this.imported().map((entry) =>
                entry.id === item.id ? { ...entry, assigned: false } : entry,
            ),
        );
    }

    /** Exports the placed rooms, desks and zones as a simple id list */
    public exportIds() {
        const rows = ['svg_id,label,object_type,x,y,width,height'];
        for (const object of this.state.objects()) {
            if (!['room', 'desk', 'zone'].includes(object.object_type))
                continue;
            const g = object.geometry;
            rows.push(
                [
                    object.svg_id ?? '',
                    object.label ?? '',
                    object.object_type,
                    g.x ?? '',
                    g.y ?? '',
                    g.width ?? '',
                    g.height ?? '',
                ].join(','),
            );
        }
        const url = URL.createObjectURL(
            new Blob([rows.join('\n')], { type: 'text/csv' }),
        );
        const link = document.createElement('a');
        link.href = url;
        link.download = 'floorplan-ids.csv';
        link.click();
        URL.revokeObjectURL(url);
    }

    public selectByType() {
        const type = this.filter_type();
        if (!type) return;
        const ids = this.state
            .objects()
            .filter((o) => o.object_type === type)
            .map((o) => o.id);
        this.state.setMultiSelect(ids);
        this._toasts.show(`Selected ${ids.length} ${type}s`, 'info');
    }

    public applyBulkType() {
        const type = this.bulk_type() as MapObjectType;
        const ids = this.state.multi_select();
        if (!type || !ids.length) return;
        this.state.bulkUpdate(ids, { object_type: type });
        this._toasts.show(`Set ${ids.length} objects to ${type}`, 'success');
    }

    public async autoNumber() {
        const type = this.auto_type() as MapObjectType;
        await this.state.autoNumber(
            type,
            this.auto_prefix(),
            this.auto_start(),
        );
        this._toasts.show(
            `Renumbered ${this.countOf(type)} ${type}s`,
            'success',
        );
    }
}
