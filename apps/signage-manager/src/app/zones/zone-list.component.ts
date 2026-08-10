import { CdkTreeModule } from '@angular/cdk/tree';
import {
    Component,
    computed,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { OrganisationService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceZone } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

interface ZoneTreeNode {
    zone: PlaceZone;
    children: ZoneTreeNode[];
    children_loaded: boolean;
    children_loading: boolean;
}

interface FlatZoneTreeNode extends ZoneTreeNode {
    level: number;
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
                        [disabled]="!search_enabled()"
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                                | translate
                                    : {
                                          name:
                                              selected()?.display_name ||
                                              selected()?.name ||
                                              '',
                                      }
                        "
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                                | translate
                                    : {
                                          name:
                                              selected()?.display_name ||
                                              selected()?.name ||
                                              '',
                                      }
                        "
                    />
                </mat-form-field>
            </div>

            @if (tree_nodes().length) {
                <cdk-tree
                    class="zone-tree"
                    [dataSource]="flat_tree_nodes()"
                    [levelAccessor]="levelAccessor"
                    [trackBy]="trackByNode"
                >
                    <cdk-tree-node
                        *cdkTreeNodeDef="let node"
                        cdkTreeNodePadding
                        [cdkTreeNodePadding]="node.level"
                        [cdkTreeNodePaddingIndent]="8"
                        class="border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2"
                        [class.bg-primary]="selected()?.id === node.zone.id"
                        [class.text-primary-content]="
                            selected()?.id === node.zone.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== node.zone.id
                        "
                    >
                        <div
                            class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                            [style.width]="0.25 * node.level + 'rem'"
                            [style.opacity]="0.1 * node.level"
                        ></div>
                        @if (
                            childCount(node) > 0 &&
                            !(show_search_results() && node.level === 0)
                        ) {
                            <button
                                type="button"
                                class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                [attr.aria-label]="
                                    (isExpanded(node)
                                        ? 'SIGNAGE_MANAGER.COLLAPSE_ZONE'
                                        : 'SIGNAGE_MANAGER.EXPAND_ZONE'
                                    )
                                        | translate
                                            : {
                                                  name:
                                                      node.zone.display_name ||
                                                      node.zone.name,
                                              }
                                "
                                (click)="
                                    onExpandedChange(node, !isExpanded(node));
                                    $event.stopPropagation()
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
                        } @else {
                            <div class="min-w-8"></div>
                        }
                        <a
                            matRipple
                            class="flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-md py-3 text-left no-underline transition-colors"
                            [routerLink]="['/zones', node.zone.id]"
                            queryParamsHandling="merge"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.OPEN_ZONE'
                                    | translate
                                        : {
                                              name:
                                                  node.zone.display_name ||
                                                  node.zone.name,
                                          }
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
                                    @if (childCount(node) > 0) {
                                        <span
                                            class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                        >
                                            {{ childCount(node) }}
                                        </span>
                                    }
                                    @if (node.children_loading) {
                                        <icon class="animate-spin text-lg"
                                            >autorenew</icon
                                        >
                                    }
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
                    </cdk-tree-node>
                </cdk-tree>
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">layers</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_ZONES' | translate }}</p>
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
        CdkTreeModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ZoneListComponent {
    private readonly _org = inject(OrganisationService);
    private readonly _service = inject(SignageService);

    private readonly _org_initialised = this._org.initialised;
    private readonly _all_zones = this._service.all_zones;
    private readonly _root_zones = this._service.root_zones;
    private readonly _children_cache = this._service.zone_tree_children_cache;

    public readonly search = this._service.zone_search_term;
    public readonly zones = this._service.filtered_zones;
    public readonly selected = this._service.selected_zone;
    public readonly search_enabled = computed(() => !!this.selected()?.id);
    public readonly show_search_results = computed(
        () => this.search_enabled() && !!this.search().trim(),
    );
    public readonly tree_nodes = signal<ZoneTreeNode[]>([]);
    public readonly expanded_zones = this._service.zone_tree_expanded;
    public readonly flat_tree_nodes = computed(() => {
        const nodes: FlatZoneTreeNode[] = [];
        for (const node of this.tree_nodes()) {
            this.flattenNode(node, 0, nodes);
        }
        return nodes;
    });
    public readonly levelAccessor = (node: FlatZoneTreeNode) => node.level;
    public readonly trackByNode = (_: number, node: FlatZoneTreeNode) =>
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
            const searching = this.show_search_results();
            const root_zones = searching ? this.zones() : this._root_zones();
            const selected_zone = searching ? this.selected() : null;
            if (!this._org_initialised()) return;
            const existing_roots = untracked(() => this.tree_nodes());
            if (selected_zone) {
                const existing_children =
                    existing_roots.find(
                        (node) => node.zone.id === selected_zone.id,
                    )?.children || [];
                this.tree_nodes.set([
                    {
                        zone: selected_zone,
                        children: root_zones.map((zone) => {
                            const existing = existing_children.find(
                                (node) => node.zone.id === zone.id,
                            );
                            return existing
                                ? this.syncNode(existing)
                                : this.createNode(zone);
                        }),
                        children_loaded: true,
                        children_loading: false,
                    },
                ]);
                return;
            }
            this.tree_nodes.set(
                root_zones.map((zone) => {
                    const existing = existing_roots.find(
                        (node) => node.zone.id === zone.id,
                    );
                    return existing
                        ? this.syncNode(existing)
                        : this.createNode(zone);
                }),
            );
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

        effect(() => {
            const root_zone = this._root_zones()[0];
            const root_node = this.tree_nodes().find(
                (node) => node.zone.id === root_zone?.id,
            );
            if (
                this.show_search_results() ||
                !root_node ||
                !this.isExpanded(root_node) ||
                this.hasLoadedChildren(root_node) ||
                root_node.children_loading ||
                !this.childCount(root_node)
            ) {
                return;
            }
            untracked(() => this.loadNodeChildren(root_node));
        });
    }

    public onExpandedChange(node: ZoneTreeNode, expanded: boolean) {
        this.expanded_zones.update((state) => ({
            ...state,
            [node.zone.id]: expanded,
        }));
        if (
            !expanded ||
            this.hasLoadedChildren(node) ||
            node.children_loading
        ) {
            return;
        }
        this.loadNodeChildren(node);
    }

    private loadNodeChildren(node: ZoneTreeNode) {
        this.tree_nodes.update((nodes) =>
            this.updateNode(nodes, node.zone.id, (item) => ({
                ...item,
                children_loading: true,
            })),
        );
        this.loadChildren(node.zone.id);
    }

    public selectZone(zone: PlaceZone) {
        this.search.set('');
        this.selected.set(zone);
    }

    public isExpanded(zone_or_node: ZoneTreeNode | PlaceZone | string) {
        const zone_id = this.getZoneId(zone_or_node);
        if (this.show_search_results() && this.selected()?.id === zone_id) {
            return true;
        }
        const expanded_zones = this.expanded_zones();
        return zone_id in expanded_zones
            ? expanded_zones[zone_id]
            : this._root_zones()[0]?.id === zone_id;
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
        const cached_children = this.cachedChildren(zone.id);
        const has_cached_children = this.hasUsableCachedChildren(
            zone.id,
            cached_children,
        );
        return {
            zone,
            children: has_cached_children
                ? cached_children.map((child_zone) =>
                      this.createNode(child_zone),
                  )
                : [],
            children_loaded: has_cached_children,
            children_loading: false,
        };
    }

    private async loadChildren(zone_id: string) {
        const cached_children = this.cachedChildren(zone_id);
        if (this.hasUsableCachedChildren(zone_id, cached_children)) {
            this.applyLoadedChildren(zone_id, cached_children);
            return;
        }
        const children = await this._service
            .zoneChildren(zone_id)
            .catch(() => this.children_lookup()[zone_id] || []);
        this.cacheChildren(zone_id, children);
        this.applyLoadedChildren(zone_id, children);
    }

    private cacheChildren(zone_id: string, children: PlaceZone[]) {
        this._children_cache.update((cache) => ({
            ...cache,
            [zone_id]: children,
        }));
    }

    private applyLoadedChildren(zone_id: string, children: PlaceZone[]) {
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
        const cached_children = this.cachedChildren(node.zone.id);
        if (!node.children_loaded && !cached_children) {
            return { ...node, zone };
        }
        const existing_children = node.children;
        const zone_children =
            cached_children ||
            this.children_lookup()[node.zone.id] ||
            existing_children.map(({ zone }) => zone);
        const children = zone_children.map((child_zone) => {
            const child = existing_children.find(
                ({ zone }) => zone.id === child_zone.id,
            );
            return child ? this.syncNode(child) : this.createNode(child_zone);
        });
        return { ...node, zone, children };
    }

    private findZone(zone_id: string) {
        return this._all_zones().find(({ id }) => id === zone_id);
    }

    private getZonePath(zone_id: string) {
        const root_ids = new Set(this.tree_nodes().map(({ zone }) => zone.id));
        if (!zone_id || !root_ids.size) return [];
        if (root_ids.has(zone_id)) return [zone_id];
        const zone_path = [zone_id];
        let current_zone = this.findZone(zone_id);
        while (current_zone?.parent_id) {
            zone_path.unshift(current_zone.parent_id);
            if (root_ids.has(current_zone.parent_id)) {
                return zone_path;
            }
            current_zone = this.findZone(current_zone.parent_id);
        }
        return root_ids.has(zone_path[0]) ? zone_path : [];
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

    private cachedChildren(zone_id: string) {
        const cache = this._children_cache();
        return zone_id in cache ? cache[zone_id] : null;
    }

    private hasUsableCachedChildren(
        zone_id: string,
        cached_children: PlaceZone[] | null,
    ): cached_children is PlaceZone[] {
        return (
            !!cached_children &&
            (cached_children.length > 0 || this.childCount(zone_id) === 0)
        );
    }

    private hasLoadedChildren(node: ZoneTreeNode) {
        return (
            node.children_loaded &&
            (node.children.length > 0 || this.childCount(node.zone.id) === 0)
        );
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

    private flattenNode(
        node: ZoneTreeNode,
        level: number,
        flat_nodes: FlatZoneTreeNode[],
    ) {
        flat_nodes.push({ ...node, level });
        if (!this.isExpanded(node)) return;
        for (const child of node.children) {
            this.flattenNode(child, level + 1, flat_nodes);
        }
    }
}
