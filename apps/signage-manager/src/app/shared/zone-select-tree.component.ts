import { CdkTreeModule } from '@angular/cdk/tree';
import { Component, computed, input, output, signal } from '@angular/core';
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
                [ngModel]="list().search()"
                (ngModelChange)="list().search.set($event)"
                [placeholder]="'SIGNAGE_MANAGER.SEARCH_ZONES' | translate"
                [attr.aria-label]="'SIGNAGE_MANAGER.SEARCH_ZONES' | translate"
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
                    class="border-base-300 bg-base-100 hover:bg-base-200/50 mb-2 flex min-h-0 items-center gap-1 overflow-hidden rounded-lg border pr-1 transition-colors"
                >
                    @if (node.children.length) {
                        <button
                            type="button"
                            class="border-base-300 bg-base-200/60 hover:bg-base-200 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors"
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
                        (click)="zoneSelected.emit(node.zone)"
                    >
                        <icon class="text-base-content/50 shrink-0 text-xl"
                            >layers</icon
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
                                @if (node.children.length) {
                                    <span
                                        class="bg-base-200 text-base-content/70 rounded-full px-2 py-0.5 text-xs"
                                    >
                                        {{ node.children.length }}
                                    </span>
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
    public readonly exclude_ids = input<string[]>([]);
    public readonly zoneSelected = output<PlaceZone>();
    public readonly expanded_zones = signal<Record<string, boolean>>({});

    public readonly tree_nodes = computed(() => {
        const excluded_ids = new Set(this.exclude_ids());
        const nodes = new Map<string, ZoneSelectTreeNode>();
        for (const zone of this.list().items()) {
            if (excluded_ids.has(zone.id)) continue;
            nodes.set(zone.id, { zone, children: [], level: 0 });
        }
        const roots: ZoneSelectTreeNode[] = [];
        for (const node of nodes.values()) {
            const parent = nodes.get(node.zone.parent_id || '');
            if (parent) parent.children.push(node);
            else roots.push(node);
        }
        return roots;
    });
    public readonly flat_tree_nodes = computed(() => {
        const nodes: ZoneSelectTreeNode[] = [];
        for (const node of this.tree_nodes()) this.flattenNode(node, 0, nodes);
        return nodes;
    });
    public readonly levelAccessor = (node: ZoneSelectTreeNode) => node.level;
    public readonly trackByNode = (_: number, node: ZoneSelectTreeNode) =>
        node.zone.id;

    public toggleNode(node: ZoneSelectTreeNode) {
        this.expanded_zones.update((state) => ({
            ...state,
            [node.zone.id]: !state[node.zone.id],
        }));
    }

    public isExpanded(node: ZoneSelectTreeNode) {
        return !!this.expanded_zones()[node.zone.id];
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
