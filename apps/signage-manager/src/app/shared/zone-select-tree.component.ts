import { CdkTreeModule } from '@angular/cdk/tree';
import {
    Component,
    computed,
    effect,
    input,
    linkedSignal,
    model,
    output,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceZone } from '@placeos/ts-client';
import { IntersectDirective } from './intersect.directive';
import { PagedSearch } from './paged-search';

interface ZoneSelectTreeNode {
    zone: PlaceZone;
    children: ZoneSelectTreeNode[];
    children_loaded: boolean;
    children_loading: boolean;
    level: number;
}

@Component({
    selector: 'zone-select-tree',
    template: `
        <mat-form-field
            appearance="outline"
            class="no-subscript bg-base-100 sticky top-0 z-10 w-full pb-2"
        >
            <input
                matInput
                [disabled]="!search_enabled()"
                [ngModel]="list().search()"
                (ngModelChange)="list().search.set($event)"
                [placeholder]="
                    (scoped_search()
                        ? 'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                        : 'SIGNAGE_MANAGER.SEARCH_ZONES'
                    )
                        | translate
                            : {
                                  name:
                                      selected()?.display_name ||
                                      selected()?.name ||
                                      '',
                              }
                "
                [attr.aria-label]="
                    (scoped_search()
                        ? 'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                        : 'SIGNAGE_MANAGER.SEARCH_ZONES'
                    )
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
        @if (flat_tree_nodes().length) {
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
                    [cdkTreeNodePaddingIndent]="16"
                    class="border-base-300 bg-base-100 hover:bg-base-200/50 relative mb-2 flex min-h-0 items-center gap-1 overflow-hidden rounded-lg border pr-1 transition-colors"
                    [class.bg-primary]="selected()?.id === node.zone.id"
                    [class.text-primary-content]="
                        selected()?.id === node.zone.id
                    "
                    [class.hover:bg-base-200]="selected()?.id !== node.zone.id"
                >
                    <div
                        aria-hidden="true"
                        class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                        [style.width]="0.25 * node.level + 'rem'"
                        [style.opacity]="0.1 * node.level"
                    ></div>
                    @if (
                        childCount(node) &&
                        !(show_search_results() && node.level === 0)
                    ) {
                        <button
                            icon
                            default
                            type="button"
                            class="ml-2 text-xs"
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
                            (click)="toggleNode(node)"
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
                        <div class="ml-1 min-w-7"></div>
                    }
                    <button
                        type="button"
                        matRipple
                        class="flex min-h-16 min-w-0 flex-1 items-center gap-2 px-1 py-2 text-left"
                        (click)="selectZone(node.zone)"
                    >
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2">
                                <div
                                    class="min-w-0 flex-1 truncate font-medium"
                                >
                                    {{
                                        node.zone.display_name || node.zone.name
                                    }}
                                </div>
                                @if (childCount(node)) {
                                    <span
                                        class="bg-base-200 text-base-content/70 rounded-full px-2 py-0.5 text-xs"
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
                                <div class="mt-0.5 truncate text-xs opacity-70">
                                    {{ node.zone.description }}
                                </div>
                            }
                        </div>
                    </button>
                </cdk-tree-node>
            </cdk-tree>
            @if (list().has_more()) {
                <div
                    class="h-px w-full"
                    intersect
                    (intersect)="list().loadMore()"
                ></div>
            }
        } @else if (list().loading()) {
            <div
                class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
            >
                <div class="text-base-content/70">
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            </div>
        } @else {
            <div
                class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
            >
                <icon class="text-base-content/70 text-8xl">layers_clear</icon>
                <div class="text-base-content/70">
                    {{ 'SIGNAGE_MANAGER.NO_ZONES' | translate }}
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                min-height: 100%;
            }

            .zone-tree {
                background: transparent;
            }
        `,
    ],
    imports: [
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        CdkTreeModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class ZoneSelectTreeComponent {
    public readonly list = input.required<PagedSearch<PlaceZone>>();
    public readonly roots = input<PlaceZone[] | null>(null);
    public readonly load_children = input<
        ((parent_id: string) => Promise<PlaceZone[]>) | null
    >(null);
    public readonly exclude_ids = input<string[]>([]);
    public readonly scoped_search = input(false);
    public readonly selected = model<PlaceZone | null>(null);
    public readonly zoneSelected = output<PlaceZone>();
    public readonly expanded_zones = signal<Record<string, boolean>>({});
    public readonly search_enabled = computed(
        () => !this.scoped_search() || !!this.selected()?.id,
    );
    public readonly show_search_results = computed(
        () => this.search_enabled() && !!this.list().search().trim(),
    );

    private readonly _tree_source = computed(() => {
        const roots = this.roots();
        const searching = this.show_search_results();
        const lazy = roots !== null && !searching;
        return {
            zones: lazy ? roots : this.list().items(),
            exclude_ids: this.exclude_ids(),
            lazy,
            searching,
            selected: searching ? this.selected() : null,
        };
    });
    public readonly tree_nodes = linkedSignal({
        source: this._tree_source,
        computation: ({ zones, exclude_ids, lazy, searching, selected }) => {
            const excluded = new Set(exclude_ids);
            if (searching && selected && !excluded.has(selected.id)) {
                return [
                    {
                        zone: selected,
                        children: zones
                            .filter(
                                (zone) =>
                                    zone.id !== selected.id &&
                                    !excluded.has(zone.id),
                            )
                            .map((zone) => this.createNode(zone, false)),
                        children_loaded: true,
                        children_loading: false,
                        level: 0,
                    },
                ];
            }
            return this.buildTree(zones, excluded, lazy);
        },
    });
    public readonly flat_tree_nodes = computed(() => {
        const nodes: ZoneSelectTreeNode[] = [];
        for (const node of this.tree_nodes()) this.flattenNode(node, 0, nodes);
        return nodes;
    });
    public readonly levelAccessor = (node: ZoneSelectTreeNode) => node.level;
    public readonly trackByNode = (_: number, node: ZoneSelectTreeNode) =>
        node.zone.id;

    constructor() {
        effect(() => {
            const root = this.tree_nodes()[0];
            if (
                this.roots() === null ||
                !root ||
                !this.expansionRequested(root) ||
                root.children_loaded ||
                root.children_loading ||
                !this.childCount(root) ||
                !this.load_children()
            ) {
                return;
            }
            untracked(() => this.loadChildren(root.zone.id));
        });
    }

    public selectZone(zone: PlaceZone) {
        if (this.scoped_search()) {
            this.list().search.set('');
            this.selected.set(zone);
        }
        this.zoneSelected.emit(zone);
    }

    public toggleNode(node: ZoneSelectTreeNode) {
        const expanded = !this.expansionRequested(node);
        this.expanded_zones.update((state) => ({
            ...state,
            [node.zone.id]: expanded,
        }));
        if (
            expanded &&
            !node.children_loaded &&
            !node.children_loading &&
            this.load_children()
        ) {
            this.loadChildren(node.zone.id);
        }
    }

    public isExpanded(node: ZoneSelectTreeNode) {
        return (
            this.expansionRequested(node) &&
            (node.children_loaded || node.children_loading)
        );
    }

    private expansionRequested(node: ZoneSelectTreeNode) {
        if (
            this.show_search_results() &&
            this.selected()?.id === node.zone.id
        ) {
            return true;
        }
        const expanded_zones = this.expanded_zones();
        return node.zone.id in expanded_zones
            ? expanded_zones[node.zone.id]
            : this.roots()?.[0]?.id === node.zone.id;
    }

    public childCount(node: ZoneSelectTreeNode) {
        return node.children_loaded
            ? node.children.length
            : node.zone.children_count || node.zone.count || 0;
    }

    private buildTree(
        zones: PlaceZone[],
        excluded_ids: Set<string>,
        lazy: boolean,
    ) {
        const nodes = new Map<string, ZoneSelectTreeNode>();
        for (const zone of zones) {
            if (excluded_ids.has(zone.id)) continue;
            nodes.set(zone.id, this.createNode(zone, lazy));
        }
        const roots: ZoneSelectTreeNode[] = [];
        for (const node of nodes.values()) {
            const parent = nodes.get(node.zone.parent_id || '');
            if (parent) parent.children.push(node);
            else roots.push(node);
        }
        return roots;
    }

    private createNode(zone: PlaceZone, lazy: boolean): ZoneSelectTreeNode {
        return {
            zone,
            children: [],
            children_loaded: !lazy,
            children_loading: false,
            level: 0,
        };
    }

    private async loadChildren(zone_id: string) {
        this.updateNode(zone_id, (node) => ({
            ...node,
            children_loading: true,
        }));
        const excluded_ids = new Set(this.exclude_ids());
        const children = await this.load_children()!(zone_id).catch(() => []);
        this.updateNode(zone_id, (node) => ({
            ...node,
            children: this.buildTree(children, excluded_ids, true),
            children_loaded: true,
            children_loading: false,
        }));
    }

    private updateNode(
        zone_id: string,
        callback: (node: ZoneSelectTreeNode) => ZoneSelectTreeNode,
    ) {
        const update = (nodes: ZoneSelectTreeNode[]): ZoneSelectTreeNode[] =>
            nodes.map((node) =>
                node.zone.id === zone_id
                    ? callback(node)
                    : { ...node, children: update(node.children) },
            );
        this.tree_nodes.update(update);
    }

    private flattenNode(
        node: ZoneSelectTreeNode,
        level: number,
        flat_nodes: ZoneSelectTreeNode[],
    ) {
        flat_nodes.push({ ...node, level });
        if (!this.isExpanded(node)) return;
        for (const child of node.children) {
            this.flattenNode(child, level + 1, flat_nodes);
        }
    }
}
