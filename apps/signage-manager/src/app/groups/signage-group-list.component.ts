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
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceGroup } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';

interface GroupTreeNode {
    group: PlaceGroup;
    children: GroupTreeNode[];
    children_loaded: boolean;
    children_loading: boolean;
}

interface GroupListRow extends GroupTreeNode {
    level: number;
}

@Component({
    selector: 'signage-group-list',
    template: `
        <aside
            class="bg-base-100 border-base-300 flex h-full min-w-64 flex-col overflow-auto border-r sm:max-w-80"
            [class.mobile-hidden]="!!selected_group()"
        >
            <header class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        id="group-search"
                        name="group-search"
                        [placeholder]="'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate"
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.GROUPS_SEARCH_ARIA' | translate
                        "
                    />
                </mat-form-field>
            </header>
            <section class="min-h-0 flex-1 overflow-auto">
                @if (show_search_results()) {
                    @if (filtered_groups().length) {
                        @for (group of filtered_groups(); track group.id) {
                            <button
                                type="button"
                                matRipple
                                class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left transition-colors"
                                [class.bg-primary]="
                                    group.id === selected_group()?.id
                                "
                                [class.text-primary-content]="
                                    group.id === selected_group()?.id
                                "
                                [class.hover:bg-base-200]="
                                    group.id !== selected_group()?.id
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.OPEN_GROUP'
                                        | translate
                                            : { name: group.name || group.id }
                                "
                                (click)="selectGroup(group)"
                            >
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 flex-1 truncate font-medium"
                                        >
                                            {{
                                                group.name ||
                                                    ('SIGNAGE_MANAGER.UNNAMED_GROUP'
                                                        | translate)
                                            }}
                                        </div>
                                        @if (childCount(group) > 0) {
                                            <span
                                                class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {{ childCount(group) }}
                                            </span>
                                        }
                                    </div>
                                    @if (group.description) {
                                        <div
                                            class="mt-0.5 truncate text-xs"
                                            [class.opacity-70]="
                                                group.id !==
                                                selected_group()?.id
                                            "
                                            [class.opacity-90]="
                                                group.id ===
                                                selected_group()?.id
                                            "
                                        >
                                            {{ group.description }}
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                        >
                            <icon class="text-6xl">group</icon>
                            <p>{{ 'SIGNAGE_MANAGER.NO_GROUPS' | translate }}</p>
                        </div>
                    }
                } @else if (visible_group_rows().length) {
                    <cdk-tree
                        class="group-tree"
                        [dataSource]="visible_group_rows()"
                        [levelAccessor]="levelAccessor"
                        [trackBy]="trackByRow"
                    >
                        <cdk-tree-node
                            *cdkTreeNodeDef="let row"
                            cdkTreeNodePadding
                            [cdkTreeNodePadding]="row.level"
                            [cdkTreeNodePaddingIndent]="8"
                            class="border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2"
                            [class.bg-primary]="
                                row.group.id === selected_group()?.id
                            "
                            [class.text-primary-content]="
                                row.group.id === selected_group()?.id
                            "
                            [class.hover:bg-base-200]="
                                row.group.id !== selected_group()?.id
                            "
                        >
                            <div
                                class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                                [style.width]="0.25 * row.level + 'rem'"
                                [style.opacity]="0.1 * row.level"
                            ></div>
                            @if (childCount(row.group) > 0) {
                                <button
                                    type="button"
                                    class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                    [attr.aria-label]="
                                        (isExpanded(row.group)
                                            ? 'SIGNAGE_MANAGER.COLLAPSE_GROUP'
                                            : 'SIGNAGE_MANAGER.EXPAND_GROUP'
                                        )
                                            | translate
                                                : {
                                                      name:
                                                          row.group.name ||
                                                          row.group.id,
                                                  }
                                    "
                                    (click)="
                                        onExpandedChange(row, !isExpanded(row));
                                        $event.stopPropagation()
                                    "
                                >
                                    <icon class="text-xl">
                                        {{
                                            isExpanded(row.group)
                                                ? 'expand_more'
                                                : 'chevron_right'
                                        }}
                                    </icon>
                                </button>
                            } @else {
                                <div class="min-w-8"></div>
                            }
                            <button
                                type="button"
                                matRipple
                                class="flex min-w-0 flex-1 items-center gap-3 rounded-md py-3 text-left transition-colors"
                                (click)="selectGroup(row.group)"
                            >
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 flex-1 truncate font-medium"
                                        >
                                            {{
                                                row.group.name ||
                                                    ('SIGNAGE_MANAGER.UNNAMED_GROUP'
                                                        | translate)
                                            }}
                                        </div>
                                        @if (childCount(row.group)) {
                                            <span
                                                class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {{ childCount(row.group) }}
                                            </span>
                                        }
                                        @if (row.children_loading) {
                                            <icon class="animate-spin text-lg"
                                                >autorenew</icon
                                            >
                                        }
                                    </div>
                                    @if (row.group.description) {
                                        <div
                                            class="mt-0.5 truncate text-xs"
                                            [class.opacity-70]="
                                                row.group.id !==
                                                selected_group()?.id
                                            "
                                            [class.opacity-90]="
                                                row.group.id ===
                                                selected_group()?.id
                                            "
                                        >
                                            {{ row.group.description }}
                                        </div>
                                    }
                                </div>
                            </button>
                        </cdk-tree-node>
                    </cdk-tree>
                } @else {
                    <div class="p-6 text-center opacity-60">
                        {{ 'SIGNAGE_MANAGER.NO_MANAGEABLE_GROUPS' | translate }}
                    </div>
                }
            </section>
        </aside>
    `,
    styles: [
        `
            .mobile-hidden {
                @media (max-width: 639px) {
                    display: none !important;
                }
            }

            .group-tree {
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
    ],
})
export class SignageGroupListComponent {
    private readonly _service = inject(SignageService);

    public readonly groups = this._service.manageable_signage_groups;
    public readonly root_groups = this._service.root_manageable_signage_groups;
    public readonly selected_group = this._service.managed_group;
    public readonly search = signal('');
    public readonly expanded_groups = this._service.signage_group_tree_expanded;
    public readonly tree_nodes = signal<GroupTreeNode[]>([]);
    public readonly show_search_results = computed(
        () => !!this.search().trim(),
    );
    public readonly levelAccessor = (row: GroupListRow) => row.level;
    public readonly trackByRow = (_: number, row: GroupListRow) => row.group.id;
    public readonly child_lookup = computed(() => {
        const lookup: Record<string, PlaceGroup[]> = {};
        for (const group of this.groups()) {
            if (!group.parent_id) continue;
            lookup[group.parent_id] ||= [];
            lookup[group.parent_id].push(group);
        }
        for (const group_id in lookup) {
            lookup[group_id].sort((a, b) => a.name.localeCompare(b.name));
        }
        return lookup;
    });
    public readonly filtered_groups = computed(() => {
        const search = this.search().toLowerCase();
        const groups = this.groups();
        if (!search) return [];
        return groups.filter(
            (group) =>
                group.name.toLowerCase().includes(search) ||
                (group.description || '').toLowerCase().includes(search) ||
                group.id.toLowerCase().includes(search),
        );
    });
    public readonly visible_group_rows = computed(() => {
        const rows: GroupListRow[] = [];
        for (const node of this.tree_nodes()) {
            this.flattenNode(node, 0, rows);
        }
        return rows;
    });

    constructor() {
        effect(() => {
            const root_groups = this.root_groups();
            const existing_roots = untracked(() => this.tree_nodes());
            this.tree_nodes.set(
                root_groups.map((group) => {
                    const existing = existing_roots.find(
                        (node) => node.group.id === group.id,
                    );
                    return existing
                        ? this.syncNode(existing)
                        : this.createNode(group);
                }),
            );
        });

        effect(() => {
            this.groups();
            const selected_group = this.selected_group();
            if (this.show_search_results() || !selected_group?.id) return;
            untracked(() => this.syncSelectedPath(selected_group.id));
        });
    }

    public onExpandedChange(node: GroupTreeNode, expanded: boolean) {
        this.expanded_groups.update((state) => ({
            ...state,
            [node.group.id]: expanded,
        }));
        if (
            !expanded ||
            this.hasLoadedChildren(node) ||
            node.children_loading
        ) {
            return;
        }
        this.tree_nodes.update((nodes) =>
            this.updateNode(nodes, node.group.id, (item) => ({
                ...item,
                children_loading: true,
            })),
        );
        this.loadChildren(node.group.id);
    }

    public isExpanded(group_or_node: GroupTreeNode | PlaceGroup | string) {
        return !!this.expanded_groups()[this.getGroupId(group_or_node)];
    }

    public childCount(group_or_id: GroupTreeNode | PlaceGroup | string) {
        if (
            typeof group_or_id !== 'string' &&
            'children_loaded' in group_or_id
        ) {
            if (group_or_id.children_loaded) return group_or_id.children.length;
            group_or_id = group_or_id.group;
        }
        const group_id = this.getGroupId(group_or_id);
        return (
            this.child_lookup()[group_id]?.length ||
            (typeof group_or_id === 'string'
                ? 0
                : group_or_id.children_count || 0)
        );
    }

    public selectGroup(group: PlaceGroup) {
        this._service.managed_group_id.set(group.id);
    }

    private createNode(group: PlaceGroup): GroupTreeNode {
        return {
            group,
            children: [],
            children_loaded: false,
            children_loading: false,
        };
    }

    private async loadChildren(group_id: string) {
        const children = await lastValueFrom(
            this._service.groupChildren(group_id),
        ).catch(() => this.child_lookup()[group_id] || []);
        this.applyLoadedChildren(group_id, children);
    }

    private applyLoadedChildren(group_id: string, children: PlaceGroup[]) {
        this.tree_nodes.update((nodes) =>
            this.updateNode(nodes, group_id, (item) => ({
                ...item,
                children_loaded: true,
                children_loading: false,
                children: children.map((group) => {
                    const existing = item.children.find(
                        (child) => child.group.id === group.id,
                    );
                    return existing
                        ? this.syncNode(existing)
                        : this.createNode(group);
                }),
            })),
        );
    }

    private syncNode(node: GroupTreeNode): GroupTreeNode {
        const group = this.findGroup(node.group.id) || node.group;
        if (!node.children_loaded) return { ...node, group };
        const children = node.children.map((child) => this.syncNode(child));
        return { ...node, group, children };
    }

    private findGroup(group_id: string) {
        return this.groups().find(({ id }) => id === group_id);
    }

    private getGroupPath(group_id: string) {
        const groups = this.groups();
        const root_ids = new Set(
            this.tree_nodes().map(({ group }) => group.id),
        );
        if (!group_id || !root_ids.size) return [];
        if (root_ids.has(group_id)) return [group_id];
        const group_path = [group_id];
        let current_group = groups.find((group) => group.id === group_id);
        while (current_group?.parent_id) {
            group_path.unshift(current_group.parent_id);
            if (root_ids.has(current_group.parent_id)) {
                return group_path;
            }
            current_group = groups.find(
                (group) => group.id === current_group.parent_id,
            );
        }
        return root_ids.has(group_path[0]) ? group_path : [];
    }

    private getExpansionPath(group_id: string) {
        const group_path = this.getGroupPath(group_id);
        if (!group_path.length) return [];
        return this.childCount(group_id) > 0
            ? group_path
            : group_path.slice(0, -1);
    }

    private syncSelectedPath(group_id: string) {
        this.ensureGroupPathLoaded(group_id);
        this.expandGroupPath(group_id);
    }

    private ensureGroupPathLoaded(group_id: string) {
        for (const current_group_id of this.getExpansionPath(group_id)) {
            const node = this.findTreeNode(this.tree_nodes(), current_group_id);
            if (node?.children_loaded) continue;
            this.loadChildren(current_group_id);
        }
    }

    private expandGroupPath(group_id: string) {
        const expansion_path = this.getExpansionPath(group_id);
        if (!expansion_path.length) return;
        const state = untracked(() => this.expanded_groups());
        let changed = false;
        const next_state = { ...state };
        for (const current_group_id of expansion_path) {
            if (next_state[current_group_id]) continue;
            next_state[current_group_id] = true;
            changed = true;
        }
        if (changed) {
            this.expanded_groups.set(next_state);
        }
    }

    private getGroupId(group_or_node: GroupTreeNode | PlaceGroup | string) {
        if (typeof group_or_node === 'string') return group_or_node;
        return 'children_loaded' in group_or_node
            ? group_or_node.group.id
            : group_or_node.id;
    }

    private hasLoadedChildren(node: GroupTreeNode) {
        return (
            node.children_loaded &&
            (node.children.length > 0 || this.childCount(node.group.id) === 0)
        );
    }

    private findTreeNode(
        nodes: GroupTreeNode[],
        group_id: string,
    ): GroupTreeNode | null {
        for (const node of nodes) {
            if (node.group.id === group_id) return node;
            if (!node.children.length) continue;
            const child_node = this.findTreeNode(node.children, group_id);
            if (child_node) return child_node;
        }
        return null;
    }

    private updateNode(
        nodes: GroupTreeNode[],
        group_id: string,
        callback: (node: GroupTreeNode) => GroupTreeNode,
    ): GroupTreeNode[] {
        return nodes.map((node) => {
            if (node.group.id === group_id) return callback(node);
            if (!node.children.length) return node;
            return {
                ...node,
                children: this.updateNode(node.children, group_id, callback),
            };
        });
    }

    private flattenNode(
        node: GroupTreeNode,
        level: number,
        flat_nodes: GroupListRow[],
    ) {
        flat_nodes.push({ ...node, level });
        if (!this.isExpanded(node)) return;
        for (const child of node.children) {
            this.flattenNode(child, level + 1, flat_nodes);
        }
    }
}
