import { Component, computed, inject, input, resource } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
import {
    listSignageSharedGroups,
    SignageShareableType,
    SignageSharedGroup,
    unshareSignageItem,
} from '../signage-shared-groups.util';

@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'signage-shared-with',
    template: `
        @if (visible()) {
            <label>{{ 'SIGNAGE_MANAGER.SHARED_WITH' | translate }}</label>
            <ul
                class="border-base-300 divide-base-300 mb-4 flex list-none flex-col divide-y rounded-lg border p-0"
            >
                @for (group of shared_groups(); track group.id) {
                    <li class="flex items-center gap-2 py-1 pr-2 pl-3">
                        <icon class="text-base-content/60 text-xl">groups</icon>
                        <span class="flex-1 truncate text-sm">
                            {{ group.name }}
                        </span>
                        @if (can_unshare()) {
                            <button
                                icon
                                type="button"
                                matRipple
                                class="text-error hover:bg-error/10"
                                (click)="unshare(group)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHARED_WITH_REMOVE'
                                        | translate
                                "
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    </li>
                }
            </ul>
        }
    `,
    imports: [IconComponent, TranslatePipe, MatRippleModule],
})
export class SignageSharedWithComponent {
    private readonly _dialog = inject(MatDialog);

    public readonly type = input.required<SignageShareableType>();
    public readonly item_id = input('');
    /** Signage group the item is being viewed from */
    public readonly group_id = input('');

    private readonly _shared_groups = resource({
        params: () => ({
            type: this.type(),
            id: this.item_id(),
            group_id: this.group_id(),
        }),
        loader: ({ params }) =>
            listSignageSharedGroups(params.type, params.id, params.group_id),
        defaultValue: [] as SignageSharedGroup[],
    });

    public readonly shared_groups = computed(
        () => this._shared_groups.value() ?? [],
    );

    /** Hidden while the item only lives in the group being viewed */
    public readonly visible = computed(() => {
        const groups = this.shared_groups();
        if (!groups.length) return false;
        return groups.length > 1 || groups[0].id !== this.group_id();
    });

    /**
     * Unlinking the last group deletes the item, so the final group has to be
     * removed with the delete action instead.
     */
    public readonly can_unshare = computed(
        () => this.shared_groups().length > 1,
    );

    public async unshare(group: SignageSharedGroup) {
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVE_CONTENT', {
                    name: group.name,
                }),
                icon: { content: 'link_off' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVING'));
        try {
            await unshareSignageItem(this.type(), this.item_id(), group.id);
        } catch (error) {
            result.close();
            notifyError(
                i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVE_ERROR', {
                    error: error instanceof Error ? error.message : `${error}`,
                }),
            );
            return;
        }
        result.close();
        notifySuccess(i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVED'));
        this._shared_groups.reload();
    }
}
