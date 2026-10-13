import { Component, computed, inject, output, signal } from '@angular/core';
import { IconComponent } from '@placeos/components';

import { MapObject } from '../data/types';
import { EditorStateService } from './editor-state.service';

const TYPE_COLORS: Record<string, string> = {
    room: '#3b82f6',
    desk: '#22c55e',
    zone: '#a855f7',
    area: '#f59e0b',
    amenity: '#06b6d4',
    decorative: '#6b7280',
    parking: '#8b5cf6',
    locker: '#ec4899',
};

const TYPE_ORDER = [
    'room',
    'desk',
    'zone',
    'area',
    'amenity',
    'locker',
    'parking',
    'decorative',
];

@Component({
    selector: 'map-studio-object-list-panel',
    template: `
        <div class="flex h-full flex-col">
            <div
                class="border-base-300 flex items-center justify-between border-b px-3 py-2.5"
            >
                <span class="text-xs font-bold">Objects</span>
                <span
                    class="bg-base-200 text-base-content/60 rounded-full px-2 py-0.5 text-xs font-semibold"
                >
                    {{ state.objects().length }}
                </span>
            </div>

            <div class="border-base-300 border-b p-2">
                <input
                    class="border-base-300 bg-base-200 w-full rounded border px-2 py-1 text-xs"
                    placeholder="Filter objects..."
                    [value]="filter()"
                    (input)="filter.set(asValue($event))"
                />
            </div>

            <div class="flex-1 overflow-y-auto">
                @for (group of groups(); track group.type) {
                    <div
                        class="bg-base-200 border-base-300 text-base-content/60 flex cursor-pointer items-center gap-1.5 border-b px-3 py-1.5 text-xs font-bold tracking-wide uppercase select-none"
                        (click)="toggle(group.type)"
                        (keyup.enter)="toggle(group.type)"
                        tabindex="0"
                        role="button"
                    >
                        <span
                            class="inline-block text-base transition-transform"
                            [class.-rotate-90]="collapsed()[group.type]"
                        >
                            <icon>expand_more</icon>
                        </span>
                        <span
                            class="h-2 w-2 shrink-0 rounded-sm"
                            [style.background]="colorFor(group.type)"
                        ></span>
                        <span>{{ plural(group.type) }}</span>
                        <span
                            class="bg-base-100 ml-auto rounded-full px-1.5 text-[0.65rem] font-semibold"
                        >
                            {{ group.items.length }}
                        </span>
                    </div>

                    @if (!collapsed()[group.type]) {
                        @for (object of group.items; track object.id) {
                            <div
                                class="border-base-300 hover:bg-base-200 flex cursor-pointer items-center gap-2 border-b border-l-2 border-l-transparent py-1.5 pr-3 pl-7 text-xs"
                                [class]="
                                    object.id === state.selected_id()
                                        ? 'bg-primary/10 border-l-primary font-semibold'
                                        : ''
                                "
                                (click)="pick(object)"
                                (keyup.enter)="pick(object)"
                                tabindex="0"
                                role="button"
                            >
                                <span
                                    class="h-1.5 w-1.5 shrink-0 rounded-full"
                                    [style.background]="colorFor(group.type)"
                                    [style.opacity]="object.visible ? 1 : 0.3"
                                ></span>
                                <span class="flex-1 truncate">
                                    {{
                                        object.label ||
                                            object.svg_id ||
                                            'Unnamed'
                                    }}
                                </span>
                                @if (object.locked) {
                                    <span
                                        class="text-sm opacity-50"
                                        title="Locked"
                                    >
                                        <icon>lock</icon>
                                    </span>
                                }
                                @if (!object.visible) {
                                    <span
                                        class="text-sm opacity-40"
                                        title="Hidden"
                                    >
                                        <icon>visibility_off</icon>
                                    </span>
                                }
                            </div>
                        }
                    }
                }

                @if (!groups().length) {
                    <div
                        class="text-base-content/60 px-3 py-5 text-center text-xs"
                    >
                        {{
                            filter()
                                ? 'No objects match filter'
                                : 'No objects yet'
                        }}
                    </div>
                }
            </div>
        </div>
    `,
    imports: [IconComponent],
})
export class ObjectListPanelComponent {
    public readonly state = inject(EditorStateService);

    /** Emitted when a row is clicked, so the canvas can scroll it into view */
    public readonly scrollTo = output<MapObject>();

    public readonly filter = signal('');
    public readonly collapsed = signal<Record<string, boolean>>({});

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement).value;

    public readonly colorFor = (type: string) => TYPE_COLORS[type] ?? '#6b7280';

    public readonly plural = (type: string) =>
        type === 'amenity' ? 'amenities' : `${type}s`;

    public readonly groups = computed(() => {
        const query = this.filter().trim().toLowerCase();
        const matching = query
            ? this.state
                  .objects()
                  .filter(
                      (o) =>
                          o.label?.toLowerCase().includes(query) ||
                          o.svg_id?.toLowerCase().includes(query) ||
                          o.object_type.toLowerCase().includes(query),
                  )
            : this.state.objects();

        const grouped = new Map<string, MapObject[]>();
        for (const object of matching) {
            const items = grouped.get(object.object_type) ?? [];
            items.push(object);
            grouped.set(object.object_type, items);
        }

        return [...grouped.entries()]
            .map(([type, items]) => ({ type, items }))
            .sort((a, b) => {
                const ai = TYPE_ORDER.indexOf(a.type);
                const bi = TYPE_ORDER.indexOf(b.type);
                return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
            });
    });

    public toggle(type: string) {
        this.collapsed.update((state) => ({
            ...state,
            [type]: !state[type],
        }));
    }

    public pick(object: MapObject) {
        this.state.select(object.id);
        this.scrollTo.emit(object);
    }
}
