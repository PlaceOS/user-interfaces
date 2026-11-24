import {
    Component,
    computed,
    inject,
    signal,
    type Signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    DIALOG_TITLE_STYLES,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { PlaceCurrentGroup } from '@placeos/ts-client';
import { groupHierarchy } from '../signage-context.service';

export interface GroupSelectModalData {
    title: string;
    groups: PlaceCurrentGroup[];
    selected_group_id?: string;
    show_all_groups?: boolean;
    child_content?: {
        included: Signal<boolean>;
        setIncluded: (include: boolean) => void;
    };
}

@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    selector: 'group-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ data.title }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                [mat-dialog-close]="undefined"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_GROUP_SELECT' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <div
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            @if (data.child_content; as child_content) {
                <div class="text-left">
                    <mat-checkbox
                        [checked]="child_content.included()"
                        (change)="child_content.setIncluded($event.checked)"
                    >
                        {{ 'SIGNAGE_MANAGER.INCLUDE_CHILD_DATA' | translate }}
                    </mat-checkbox>
                </div>
            }
            @if (!data.selected_group_id && data.show_all_groups) {
                <nav
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY' | translate
                    "
                    class="border-base-300 bg-base-200/60 flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm"
                >
                    <icon class="text-base-content/60 text-xl">public</icon>
                    <span class="font-medium">{{
                        'SIGNAGE_MANAGER.ALL_GROUPS' | translate
                    }}</span>
                </nav>
            } @else if (selected_hierarchy().length) {
                <nav
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY' | translate
                    "
                    class="border-base-300 bg-base-200/60 flex w-full items-center gap-1 overflow-x-auto rounded-lg border px-3 py-2 text-left text-sm"
                >
                    <icon class="text-base-content/60 mr-1 text-xl">
                        account_tree
                    </icon>
                    @for (
                        group of selected_hierarchy();
                        track group.id;
                        let last = $last
                    ) {
                        @if (!last) {
                            <button
                                type="button"
                                class="hover:bg-base-300 shrink-0 rounded px-2 py-1"
                                [mat-dialog-close]="group.id"
                            >
                                {{ group.name }}
                            </button>
                            <icon class="text-base-content/40 text-lg">
                                chevron_right
                            </icon>
                        } @else {
                            <span
                                class="bg-primary/15 text-primary shrink-0 rounded px-2 py-1 font-medium"
                                aria-current="page"
                            >
                                {{ group.name }}
                            </span>
                        }
                    }
                </nav>
            }
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    cdkFocusInitial
                    [(ngModel)]="search"
                    [placeholder]="'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate
                    "
                />
            </mat-form-field>
            @if (data.show_all_groups && !search()) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [class.bg-secondary]="!data.selected_group_id"
                    [class.text-secondary-content]="!data.selected_group_id"
                    [mat-dialog-close]="''"
                    [attr.aria-current]="
                        !data.selected_group_id ? 'true' : null
                    "
                >
                    <icon class="shrink-0 text-2xl">
                        {{
                            !data.selected_group_id ? 'check_circle' : 'public'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">
                            {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                        </div>
                    </div>
                </button>
            }
            @let searching = !!search().trim();
            @for (row of filtered_groups(); track row.item.group.id) {
                @let item = row.item;
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex min-h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [style.padding-inline-start.rem]="
                        searching ? 0.5 : 0.5 + indent(row) * 1.5
                    "
                    [class.bg-secondary]="
                        data.selected_group_id === item.group.id
                    "
                    [class.text-secondary-content]="
                        data.selected_group_id === item.group.id
                    "
                    [mat-dialog-close]="item.group.id"
                    [attr.aria-current]="
                        data.selected_group_id === item.group.id ? 'true' : null
                    "
                >
                    <icon class="shrink-0 text-2xl">
                        {{
                            data.selected_group_id === item.group.id
                                ? 'check_circle'
                                : row.path.length && !searching
                                  ? 'subdirectory_arrow_right'
                                  : 'group'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <!-- Screen readers get the path, as the indent is visual only -->
                        @if (row.path.length) {
                            <div
                                class="text-base-content/70 truncate text-xs"
                                [class.sr-only]="!searching"
                            >
                                {{ row.path.join(' › ') }}
                            </div>
                        }
                        <div class="truncate">{{ item.group.name }}</div>
                        @if (item.group.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ item.group.description }}
                            </div>
                        }
                    </div>
                </button>
            } @empty {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">group</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_GROUPS_AVAILABLE' | translate }}
                    </div>
                </div>
            }
        </div>
    `,
    styles: [DIALOG_TITLE_STYLES],
    imports: [
        FormsModule,
        MatCheckboxModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class GroupSelectModalComponent {
    public readonly data = inject<GroupSelectModalData>(MAT_DIALOG_DATA);
    public readonly search = signal('');
    private readonly _rows = computed(() => groupTreeRows(this.data.groups));
    /** Rows in tree order. A search keeps the tree order and only drops the
     * groups that do not match. */
    public readonly filtered_groups = computed(() => {
        const term = this.search().toLowerCase().trim();
        if (!term) return this._rows();
        return this._rows().filter(({ item }) =>
            `${item.group.name} ${item.group.description || ''}`
                .toLowerCase()
                .includes(term),
        );
    });
    public readonly selected_hierarchy = computed(() => {
        const groups = this.data.groups.map((item) => item.group);
        const selected = this.data.selected_group_id
            ? groups.find((group) => group.id === this.data.selected_group_id)
            : undefined;
        return groupHierarchy(selected, groups);
    });

    /** Indent steps of a row. Deep trees stop at a maximum, so rows keep
     * room for the name. */
    public indent(row: GroupTreeRow) {
        return Math.min(row.path.length, MAX_INDENT);
    }
}

/** Group in the modal list, with the names of its ancestors, root first */
export interface GroupTreeRow {
    item: PlaceCurrentGroup;
    path: string[];
}

// Most indent steps a row gets
const MAX_INDENT = 6;

/**
 * Groups in depth-first tree order. Groups whose parent is not in the list
 * are roots. Siblings keep the order of the list. Each group shows once, so a
 * parent cycle cannot loop forever. The first group of a cycle shows as a
 * root.
 */
export function groupTreeRows(items: PlaceCurrentGroup[]) {
    const ids = new Set(items.map(({ group }) => group.id));
    const children = new Map<string, PlaceCurrentGroup[]>();
    for (const item of items) {
        const parent_id = item.group.parent_id;
        if (!parent_id || !ids.has(parent_id)) continue;
        const siblings = children.get(parent_id) || [];
        siblings.push(item);
        children.set(parent_id, siblings);
    }
    const rows: GroupTreeRow[] = [];
    const seen = new Set<string>();
    const visit = (item: PlaceCurrentGroup, path: string[]) => {
        if (seen.has(item.group.id)) return;
        seen.add(item.group.id);
        rows.push({ item, path });
        const child_path = [...path, item.group.name];
        for (const child of children.get(item.group.id) || []) {
            visit(child, child_path);
        }
    };
    for (const item of items) {
        const parent_id = item.group.parent_id;
        if (!parent_id || !ids.has(parent_id)) visit(item, []);
    }
    // Groups in a parent cycle have no root to reach them from
    for (const item of items) visit(item, []);
    return rows;
}
