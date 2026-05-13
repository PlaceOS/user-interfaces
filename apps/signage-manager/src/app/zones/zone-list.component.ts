import {
    Component,
    computed,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { RouterLink } from '@angular/router';
import { OrganisationService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { PlaceZone } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignageService } from '../signage.service';

interface ZoneTreeNode {
    zone: PlaceZone;
    children: ZoneTreeNode[];
    children_loaded: boolean;
    children_loading: boolean;
}

@Component({
    selector: 'zone-list',
    template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        placeholder="Search zones"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        aria-label="Search zones"
                    />
                </mat-form-field>
            </div>

            @if (show_search_results()) {
                @if (zones().length > 0) {
                    @for (zone of zones(); track zone.id) {
                        <a
                            matRipple
                            class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left no-underline transition-colors"
                            [class.bg-primary]="selected()?.id === zone.id"
                            [class.text-primary-content]="
                                selected()?.id === zone.id
                            "
                            [class.hover:bg-base-200]="
                                selected()?.id !== zone.id
                            "
                            [routerLink]="['/zones', zone.id]"
                            queryParamsHandling="merge"
                            [attr.aria-label]="
                                'Open zone ' + (zone.display_name || zone.name)
                            "
                            (click)="selectZone(zone)"
                        >
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-2">
                                    <div
                                        class="min-w-0 flex-1 truncate font-medium"
                                    >
                                        {{ zone.display_name || zone.name }}
                                    </div>
                                    @if (childCount(zone) > 0) {
                                        <span
                                            class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                        >
                                            {{ childCount(zone) }}
                                        </span>
                                    }
                                </div>
                                @if (zone.description) {
                                    <div
                                        class="mt-0.5 truncate text-xs"
                                        [class.opacity-70]="
                                            selected()?.id !== zone.id
                                        "
                                        [class.opacity-90]="
                                            selected()?.id === zone.id
                                        "
                                    >
                                        {{ zone.description }}
                                    </div>
                                }
                            </div>
                        </a>
                    }
                } @else {
                    <div
                        class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                    >
                        <icon class="text-6xl">layers</icon>
                        <p>No zones found.</p>
                    </div>
                }
            } @else if (tree_nodes().length) {
                <mat-tree
                    class="zone-tree"
                    [dataSource]="tree_nodes()"
                    [childrenAccessor]="children_accessor"
                    [expansionKey]="expansionKey"
                    [trackBy]="trackByNode"
                >
                    <mat-tree-node
                        *matTreeNodeDef="let node; when: is_leaf"
                        matTreeNodePadding
                        [matTreeNodePaddingIndent]="24"
                        class="border-base-300 bg-base-200/30 min-h-0 border-y pr-2"
                        [class.bg-primary]="selected()?.id === node.zone.id"
                        [class.text-primary-content]="
                            selected()?.id === node.zone.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== node.zone.id
                        "
                    >
                        <span class="w-8 shrink-0"></span>
                        <a
                            matRipple
                            class="flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-md py-3 text-left no-underline transition-colors"
                            [routerLink]="['/zones', node.zone.id]"
                            queryParamsHandling="merge"
                            [attr.aria-label]="
                                'Open zone ' +
                                (node.zone.display_name || node.zone.name)
                            "
                            (click)="selectZone(node.zone)"
                        >
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{
                                        node.zone.display_name || node.zone.name
                                    }}
                                </div>
                                @if (node.zone.children_count) {
                                    <div
                                        class="mt-0.5 truncate text-xs"
                                        [class.opacity-70]="
                                            selected()?.id !== node.zone.id
                                        "
                                        [class.opacity-90]="
                                            selected()?.id === node.zone.id
                                        "
                                    >
                                        {{ node.zone.children_count }}
                                    </div>
                                }
                            </div>
                        </a>
                    </mat-tree-node>

                    <mat-nested-tree-node
                        *matTreeNodeDef="let node; when: has_child"
                        [isExpandable]="true"
                        [isExpanded]="isExpanded(node)"
                        (expandedChange)="onExpandedChange(node, $event)"
                        class="border-base-300 block border-b"
                    >
                        <div
                            matTreeNodePadding
                            [matTreeNodePaddingIndent]="24"
                            class="mat-tree-node gap-1 pr-2"
                            [class.bg-primary]="selected()?.id === node.zone.id"
                            [class.text-primary-content]="
                                selected()?.id === node.zone.id
                            "
                            [class.hover:bg-base-200]="
                                selected()?.id !== node.zone.id
                            "
                        >
                            <button
                                type="button"
                                matTreeNodeToggle
                                class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                [attr.aria-label]="
                                    (isExpanded(node)
                                        ? 'Collapse zone '
                                        : 'Expand zone ') +
                                    (node.zone.display_name || node.zone.name)
                                "
                            >
                                <icon class="text-xl">
                                    {{
                                        isExpanded(node)
                                            ? 'expand_more'
                                            : 'chevron_right'
                                    }}
                                </icon>
                            </button>
                            <a
                                matRipple
                                class="flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-md py-3 text-left no-underline transition-colors"
                                [routerLink]="['/zones', node.zone.id]"
                                queryParamsHandling="merge"
                                [attr.aria-label]="
                                    'Open zone ' +
                                    (node.zone.display_name || node.zone.name)
                                "
                                (click)="selectZone(node.zone)"
                            >
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 flex-1 truncate font-medium"
                                        >
                                            {{
                                                node.zone.display_name ||
                                                    node.zone.name
                                            }}
                                        </div>
                                        <span
                                            class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                        >
                                            {{ childCount(node) }}
                                        </span>
                                    </div>
                                    @if (node.zone.description) {
                                        <div
                                            class="mt-0.5 truncate text-xs"
                                            [class.opacity-70]="
                                                selected()?.id !== node.zone.id
                                            "
                                            [class.opacity-90]="
                                                selected()?.id === node.zone.id
                                            "
                                        >
                                            {{ node.zone.description }}
                                        </div>
                                    }
                                </div>
                            </a>
                        </div>
                        <div [class.hidden]="!isExpanded(node)" role="group">
                            @if (node.children_loading) {
                                <div
                                    class="text-base-content/70 flex items-center gap-2 px-4 py-3"
                                    matTreeNodePadding
                                    [matTreeNodePaddingIndent]="24"
                                >
                                    <span class="w-8 shrink-0"></span>
                                    <icon class="animate-spin text-lg"
                                        >autorenew</icon
                                    >
                                    <span class="text-sm">Loading...</span>
                                </div>
                            }
                            <ng-container matTreeNodeOutlet />
                        </div>
                    </mat-nested-tree-node>
                </mat-tree>
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">layers</icon>
                    <p>No zones found.</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .zone-tree {
                background: transparent;
            }
        `,
    ],
    imports: [
        FormsModule,
        RouterLink,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        IconComponent,
    ],
})
export class ZoneListComponent {
    private readonly _org = inject(OrganisationService);
    private readonly _service = inject(SignageService);

    private readonly _org_initialised = toSignal(this._org.initialised, {
        initialValue: false,
    });
    private readonly _all_zones = toSignal(this._service.all_zones, {
        initialValue: [] as PlaceZone[],
    });

    public readonly search = this._service.zone_search_term;
    public readonly zones = this._service.filtered_zones;
    public readonly selected = this._service.selected_zone;
    public readonly show_search_results = computed(
        () => !!this.search().trim(),
    );
    public readonly tree_nodes = signal<ZoneTreeNode[]>([]);
    public readonly expanded_zones = signal<Record<string, boolean>>({});
    public readonly node_children_lookup = computed(() => {
        const lookup: Record<string, ZoneTreeNode[]> = {};
        this.mapNodeChildren(this.tree_nodes(), lookup);
        return lookup;
    });

    private readonly _node_children_lookup$ = toObservable(
        this.node_children_lookup,
    );

    public readonly children_accessor = (node: ZoneTreeNode) =>
        this._node_children_lookup$.pipe(
            map((lookup) => lookup[node.zone.id] || []),
        );
    public readonly has_child = (_: number, node: ZoneTreeNode) =>
        this.childCount(node) > 0;
    public readonly is_leaf = (_: number, node: ZoneTreeNode) =>
        !this.childCount(node);
    public readonly expansionKey = (node: ZoneTreeNode) => node.zone.id;
    public readonly trackByNode = (_: number, node: ZoneTreeNode) =>
        node.zone.id;

    public readonly child_count_lookup = computed(() => {
        const lookup: Record<string, number> = {};
        for (const zone of this._all_zones()) {
            if (!zone.parent_id) continue;
            lookup[zone.parent_id] = (lookup[zone.parent_id] || 0) + 1;
        }
        return lookup;
    });
    public readonly children_lookup = computed(() => {
        const lookup: Record<string, PlaceZone[]> = {};
        for (const zone of this._all_zones()) {
            if (!zone.parent_id) continue;
            lookup[zone.parent_id] ||= [];
            lookup[zone.parent_id].push(zone);
        }
        return lookup;
    });

    constructor() {
        effect(() => {
            this._all_zones();
            if (!this._org_initialised()) return;
            const org_zone =
                this.findZone(this._org.organisation.id) ||
                (this._org.organisation as unknown as PlaceZone);
            if (!org_zone?.id) return;
            const existing_root = untracked(() => this.tree_nodes()[0]);
            if (existing_root?.zone.id === org_zone.id) {
                this.tree_nodes.set([this.syncNode(existing_root)]);
                return;
            }
            this.tree_nodes.set([this.createNode(org_zone)]);
        });

        effect(() => {
            this._all_zones();
            const selected_zone = this.selected();
            if (
                !this._org_initialised() ||
                this.show_search_results() ||
                !selected_zone?.id
            ) {
                return;
            }
            untracked(() => this.syncSelectedPath(selected_zone.id));
        });
    }

    public onExpandedChange(node: ZoneTreeNode, expanded: boolean) {
        this.expanded_zones.update((state) => ({
            ...state,
            [node.zone.id]: expanded,
        }));
        if (!expanded || node.children_loaded || node.children_loading) return;
        this.tree_nodes.update((nodes) =>
            this.updateNode(nodes, node.zone.id, (item) => ({
                ...item,
                children_loading: true,
            })),
        );
        this.loadChildren(node.zone.id);
    }

    public selectZone(zone: PlaceZone) {
        this.selected.set(zone);
    }

    public isExpanded(zone_or_node: ZoneTreeNode | PlaceZone | string) {
        return !!this.expanded_zones()[this.getZoneId(zone_or_node)];
    }

    public childCount(zone_or_id: ZoneTreeNode | PlaceZone | string) {
        if (typeof zone_or_id !== 'string' && 'children_loaded' in zone_or_id) {
            if (zone_or_id.children_loaded) {
                return zone_or_id.children.length;
            }
            zone_or_id = zone_or_id.zone;
        }
        const zone_id = this.getZoneId(zone_or_id);
        const lookup = this.child_count_lookup();
        if (zone_id in lookup) {
            return lookup[zone_id] || 0;
        }
        if (typeof zone_or_id !== 'string') {
            return zone_or_id.children_count || zone_or_id.count || 0;
        }
        return 0;
    }

    private createNode(zone: PlaceZone): ZoneTreeNode {
        return {
            zone,
            children: [],
            children_loaded: false,
            children_loading: false,
        };
    }

    private async loadChildren(zone_id: string) {
        const children = await lastValueFrom(
            this._service.zoneChildren(zone_id),
        ).catch(() => this.children_lookup()[zone_id] || []);
        this.tree_nodes.update((nodes) =>
            this.updateNode(nodes, zone_id, (item) => ({
                ...item,
                children_loaded: true,
                children_loading: false,
                children: children.map((zone) => {
                    const existing = item.children.find(
                        (child) => child.zone.id === zone.id,
                    );
                    return existing
                        ? this.syncNode(existing)
                        : this.createNode(zone);
                }),
            })),
        );
    }

    private syncNode(node: ZoneTreeNode): ZoneTreeNode {
        const zone = this.findZone(node.zone.id) || node.zone;
        if (!node.children_loaded) {
            return { ...node, zone };
        }
        const existing_children = node.children;
        const zone_children =
            this.children_lookup()[node.zone.id] ||
            existing_children.map(({ zone }) => zone);
        const children = zone_children.map(
            (child_zone) => {
                const child = existing_children.find(
                    ({ zone }) => zone.id === child_zone.id,
                );
                return child
                    ? this.syncNode(child)
                    : this.createNode(child_zone);
            },
        );
        return { ...node, zone, children };
    }

    private findZone(zone_id: string) {
        return this._all_zones().find(({ id }) => id === zone_id);
    }

    private getZonePath(zone_id: string) {
        const root_id =
            this.tree_nodes()[0]?.zone.id || this._org.organisation?.id || '';
        if (!zone_id || !root_id) return [];
        if (zone_id === root_id) return [root_id];
        const zone_path = [zone_id];
        let current_zone = this.findZone(zone_id);
        while (current_zone?.parent_id) {
            zone_path.unshift(current_zone.parent_id);
            if (current_zone.parent_id === root_id) {
                return zone_path;
            }
            current_zone = this.findZone(current_zone.parent_id);
        }
        return zone_path[0] === root_id ? zone_path : [];
    }

    private getExpansionPath(zone_id: string) {
        const zone_path = this.getZonePath(zone_id);
        if (!zone_path.length) return [];
        return this.childCount(zone_id) > 0
            ? zone_path
            : zone_path.slice(0, -1);
    }

    private syncSelectedPath(zone_id: string) {
        this.ensureZonePathLoaded(zone_id);
        this.expandZonePath(zone_id);
    }

    private ensureZonePathLoaded(zone_id: string) {
        for (const current_zone_id of this.getExpansionPath(zone_id)) {
            const node = this.findTreeNode(this.tree_nodes(), current_zone_id);
            if (node?.children_loaded) continue;
            this.loadChildren(current_zone_id);
        }
    }

    private expandZonePath(zone_id: string) {
        const expansion_path = this.getExpansionPath(zone_id);
        if (!expansion_path.length) return;
        const state = untracked(() => this.expanded_zones());
        let changed = false;
        const next_state = { ...state };
        for (const current_zone_id of expansion_path) {
            if (next_state[current_zone_id]) continue;
            next_state[current_zone_id] = true;
            changed = true;
        }
        if (changed) {
            this.expanded_zones.set(next_state);
        }
    }

    private getZoneId(zone_or_node: ZoneTreeNode | PlaceZone | string) {
        if (typeof zone_or_node === 'string') {
            return zone_or_node;
        }
        return 'children_loaded' in zone_or_node
            ? zone_or_node.zone.id
            : zone_or_node.id;
    }

    private mapNodeChildren(
        nodes: ZoneTreeNode[],
        lookup: Record<string, ZoneTreeNode[]>,
    ) {
        for (const node of nodes) {
            lookup[node.zone.id] = node.children;
            if (!node.children.length) continue;
            this.mapNodeChildren(node.children, lookup);
        }
    }

    private findTreeNode(
        nodes: ZoneTreeNode[],
        zone_id: string,
    ): ZoneTreeNode | null {
        for (const node of nodes) {
            if (node.zone.id === zone_id) {
                return node;
            }
            if (!node.children.length) continue;
            const child_node = this.findTreeNode(node.children, zone_id);
            if (child_node) {
                return child_node;
            }
        }
        return null;
    }

    private updateNode(
        nodes: ZoneTreeNode[],
        zone_id: string,
        callback: (node: ZoneTreeNode) => ZoneTreeNode,
    ): ZoneTreeNode[] {
        return nodes.map((node) => {
            if (node.zone.id === zone_id) {
                return callback(node);
            }
            if (!node.children.length) return node;
            return {
                ...node,
                children: this.updateNode(node.children, zone_id, callback),
            };
        });
    }
}
