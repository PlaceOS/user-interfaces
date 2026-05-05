import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '@placeos/components';
import { PlaceGroup } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

interface GroupListRow {
    group: PlaceGroup;
    depth: number;
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
                        placeholder="Search groups"
                        [(ngModel)]="search"
                        aria-label="Search signage groups"
                    />
                </mat-form-field>
            </header>
            <section class="min-h-0 flex-1 overflow-auto">
                @for (row of visible_group_rows(); track row.group.id) {
                    <div
                        class="border-base-300 flex items-start border-b"
                        [style.paddingLeft.rem]="row.depth * 1.25"
                    >
                        <button
                            type="button"
                            class="hover:bg-base-content/10 mt-3 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                            [class.invisible]="!childCount(row.group)"
                            [attr.aria-label]="
                                (isExpanded(row.group)
                                    ? 'Collapse group '
                                    : 'Expand group ') +
                                (row.group.name || row.group.id)
                            "
                            (click)="toggleGroup(row.group, $event)"
                        >
                            <icon class="text-xl">
                                {{
                                    isExpanded(row.group)
                                        ? 'expand_more'
                                        : 'chevron_right'
                                }}
                            </icon>
                        </button>
                        <button
                            type="button"
                            matRipple
                            class="flex min-w-0 flex-1 items-center gap-3 px-2 py-3 text-left transition-colors"
                            [class.bg-primary]="
                                row.group.id === selected_group()?.id
                            "
                            [class.text-primary-content]="
                                row.group.id === selected_group()?.id
                            "
                            [class.hover:bg-base-200]="
                                row.group.id !== selected_group()?.id
                            "
                            (click)="selectGroup(row.group)"
                        >
                            <icon class="shrink-0 text-2xl">group</icon>
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-2">
                                    <div
                                        class="min-w-0 flex-1 truncate font-medium"
                                    >
                                        {{ row.group.name || 'Unnamed group' }}
                                    </div>
                                    @if (childCount(row.group)) {
                                        <span
                                            class="bg-base-200/70 text-base-content rounded-full px-2 py-0.5 text-xs"
                                        >
                                            {{ childCount(row.group) }}
                                        </span>
                                    }
                                </div>
                            </div>
                        </button>
                    </div>
                } @empty {
                    <div class="p-6 text-center opacity-60">
                        No manageable signage groups
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
        `,
    ],
    imports: [
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
    ],
})
export class SignageGroupListComponent {
    private readonly _service = inject(SignageService);

    public readonly groups = this._service.manageable_signage_groups;
    public readonly selected_group = this._service.managed_group;
    public readonly search = signal('');
    public readonly expanded_groups = signal<Record<string, boolean>>({});
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
    public readonly visible_group_rows = computed(() => {
        const search = this.search().toLowerCase();
        const groups = this.groups();
        if (search) {
            return groups
                .filter(
                    (group) =>
                        group.name.toLowerCase().includes(search) ||
                        group.description.toLowerCase().includes(search) ||
                        group.id.toLowerCase().includes(search),
                )
                .map((group) => ({ group, depth: 0 }));
        }
        const group_ids = new Set(groups.map((group) => group.id));
        const roots = groups
            .filter(
                (group) => !group.parent_id || !group_ids.has(group.parent_id),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        const rows: GroupListRow[] = [];
        const addRows = (items: PlaceGroup[], depth: number) => {
            for (const group of items) {
                rows.push({ group, depth });
                if (!this.isExpanded(group)) continue;
                addRows(this.child_lookup()[group.id] || [], depth + 1);
            }
        };
        addRows(roots, 0);
        return rows;
    });

    public toggleGroup(group: PlaceGroup, event: Event) {
        event.stopPropagation();
        this.expanded_groups.update((state) => ({
            ...state,
            [group.id]: !state[group.id],
        }));
    }

    public isExpanded(group: PlaceGroup) {
        return !!this.expanded_groups()[group.id];
    }

    public childCount(group: PlaceGroup) {
        return (
            this.child_lookup()[group.id]?.length || group.children_count || 0
        );
    }

    public selectGroup(group: PlaceGroup) {
        this._service.managed_group_id.set(group.id);
    }
}
