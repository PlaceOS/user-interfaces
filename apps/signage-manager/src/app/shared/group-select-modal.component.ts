import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceCurrentGroup } from '@placeos/ts-client';

export interface GroupSelectModalData {
    title: string;
    groups: PlaceCurrentGroup[];
    selected_group_id?: string;
    show_all_groups?: boolean;
}

@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'group-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ data.title }}</h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_GROUP_SELECT' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
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
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
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
            @for (item of filtered_groups(); track item.group.id) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
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
                                : 'group'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
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
        </main>
    `,
    imports: [
        FormsModule,
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
    public readonly filtered_groups = computed(() => {
        const term = this.search().toLowerCase().trim();
        if (!term) return this.data.groups;
        return this.data.groups.filter((item) =>
            `${item.group.name} ${item.group.description || ''}`
                .toLowerCase()
                .includes(term),
        );
    });
    public readonly selected_hierarchy = computed(() => {
        const selected_group_id = this.data.selected_group_id;
        if (!selected_group_id) return [];
        const groups = new Map(
            this.data.groups.map((item) => [item.group.id, item.group]),
        );
        const hierarchy: PlaceCurrentGroup['group'][] = [];
        const seen = new Set<string>();
        let group = groups.get(selected_group_id);
        while (group?.id && !seen.has(group.id)) {
            hierarchy.unshift(group);
            seen.add(group.id);
            group = group.parent_id ? groups.get(group.parent_id) : undefined;
        }
        return hierarchy;
    });
}
