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
import { groupHierarchy } from '../signage-context.service';
import { SignageGroupAdminService } from './signage-group-admin.service';

/** Group in the flat tree, with its depth */
interface GroupListRow {
    group: PlaceGroup;
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
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate
                        "
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
                        [expansionKey]="expansionKey"
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
                                    [attr.aria-expanded]="isExpanded(row.group)"
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
                                        setExpanded(
                                            row.group,
                                            !isExpanded(row.group)
                                        );
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
                } @else if (groups_failed()) {
                    <div class="text-error p-6 text-center" role="alert">
                        {{ 'SIGNAGE_MANAGER.GROUPS_LOAD_ERROR' | translate }}
                    </div>
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
    private readonly _group_admin = inject(SignageGroupAdminService);

    public readonly groups = this._group_admin.manageable_signage_groups;
    public readonly groups_failed =
        this._group_admin.manageable_signage_groups_failed;
    public readonly selected_group = this._group_admin.managed_group;
    public readonly search = signal('');
    public readonly expanded_groups =
        this._group_admin.signage_group_tree_expanded;
    public readonly show_search_results = computed(
        () => !!this.search().trim(),
    );
    public readonly levelAccessor = (row: GroupListRow) => row.level;
    public readonly trackByRow = (_: number, row: GroupListRow) => row.group.id;
    // The tree caches levels by this key. Rows are new objects on every
    // rebuild, so keying by object would lose the level of reused rows.
    public readonly expansionKey = (row: GroupListRow) => row.group.id;
    /** Child groups of each group, sorted by name */
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
    /**
     * Rows of the group tree, built from the full list of manageable groups.
     * Groups whose parent is not in the list are roots. Children show when
     * their parent is expanded.
     */
    public readonly visible_group_rows = computed(() => {
        const groups = this.groups();
        const lookup = this.child_lookup();
        const expanded = this.expanded_groups();
        const ids = new Set(groups.map(({ id }) => id));
        const rows: GroupListRow[] = [];
        // Each group shows once, so a parent cycle cannot loop forever
        const seen = new Set<string>();
        const visit = (group: PlaceGroup, level: number) => {
            if (seen.has(group.id)) return;
            seen.add(group.id);
            rows.push({ group, level });
            if (!expanded[group.id]) return;
            for (const child of lookup[group.id] || []) visit(child, level + 1);
        };
        for (const group of groups) {
            if (!group.parent_id || !ids.has(group.parent_id)) visit(group, 0);
        }
        return rows;
    });

    constructor() {
        // Open the branches down to the selected group, so it is visible
        effect(() => {
            const groups = this.groups();
            const selected_group = this.selected_group();
            if (this.show_search_results() || !selected_group?.id) return;
            untracked(() => this._expandPath(selected_group, groups));
        });
    }

    public setExpanded(group: PlaceGroup, expanded: boolean) {
        this.expanded_groups.update((state) => ({
            ...state,
            [group.id]: expanded,
        }));
    }

    public isExpanded(group: PlaceGroup) {
        return !!this.expanded_groups()[group.id];
    }

    public childCount(group: PlaceGroup) {
        return this.child_lookup()[group.id]?.length || 0;
    }

    public selectGroup(group: PlaceGroup) {
        this._group_admin.managed_group_id.set(group.id);
    }

    // Expands the ancestors of the group, and the group itself when it has
    // children
    private _expandPath(group: PlaceGroup, groups: PlaceGroup[]) {
        const path = groupHierarchy(group, groups);
        if (!this.childCount(group)) path.pop();
        const state = this.expanded_groups();
        if (path.every(({ id }) => state[id])) return;
        const next_state = { ...state };
        for (const { id } of path) next_state[id] = true;
        this.expanded_groups.set(next_state);
    }
}
