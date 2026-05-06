import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
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
                aria-label="Close group selection dialog"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            @if (data.show_all_groups) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [class.bg-secondary]="!data.selected_group_id"
                    [class.text-secondary-content]="!data.selected_group_id"
                    [mat-dialog-close]="''"
                    [attr.aria-current]="!data.selected_group_id ? 'true' : null"
                >
                    <icon class="shrink-0 text-2xl">
                        {{ !data.selected_group_id ? 'check_circle' : 'public' }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">All Groups</div>
                    </div>
                </button>
            }
            @for (item of data.groups; track item.group.id) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [class.bg-secondary]="data.selected_group_id === item.group.id"
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
                    <div class="text-base-content/70">No groups available</div>
                </div>
            }
        </main>
    `,
    imports: [MatRippleModule, MatDialogModule, IconComponent],
})
export class GroupSelectModalComponent {
    public readonly data = inject<GroupSelectModalData>(MAT_DIALOG_DATA);
}
