import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '@placeos/components';
import { PlaceCurrentGroup } from '@placeos/ts-client';
import { groupHierarchy } from '../support-groups';

export interface GroupSelectModalData {
    groups: PlaceCurrentGroup[];
    selected_group_id?: string;
    show_all_groups?: boolean;
}

@Component({
    selector: 'group-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Select support group</h2>
            <button
                icon
                type="button"
                matRipple
                [mat-dialog-close]="undefined"
                aria-label="Close group selection"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            @if (selected_hierarchy().length > 1) {
                <nav
                    aria-label="Selected group hierarchy"
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
                    placeholder="Search groups..."
                    aria-label="Search groups"
                />
            </mat-form-field>
            @if (data.show_all_groups && !search()) {
                <button
                    type="button"
                    matRipple
                    group-option
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
                    <div class="min-w-0 flex-1 truncate">All groups</div>
                </button>
            }
            @for (item of filtered_groups(); track item.group.id) {
                <button
                    type="button"
                    matRipple
                    group-option
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
                    class="bg-base-200 flex w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">group</icon>
                    <div class="text-base-content/70">
                        No support groups available
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
        const groups = this.data.groups.map((item) => item.group);
        const selected = groups.find(
            (group) => group.id === this.data.selected_group_id,
        );
        return groupHierarchy(selected, groups);
    });
}
