import {
    Component,
    computed,
    inject,
    input,
    resource,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
import {
    listSignageSharedGroups,
    signage_shared_groups_change,
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
            <label
                [class]="
                    compact_label()
                        ? 'text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase'
                        : ''
                "
            >
                {{ 'SIGNAGE_MANAGER.SHARED_WITH' | translate }}
            </label>
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
                                [disabled]="!!unsharing_group_id()"
                                (click)="unshare(group)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHARED_WITH_REMOVE'
                                        | translate
                                "
                            >
                                @if (unsharing_group_id() === group.id) {
                                    <mat-spinner diameter="20" />
                                } @else {
                                    <icon>delete</icon>
                                }
                            </button>
                        }
                    </li>
                }
            </ul>
        }
    `,
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
    ],
})
export class SignageSharedWithComponent {
    private readonly _dialog = inject(MatDialog);

    public readonly type = input.required<SignageShareableType>();
    public readonly item_id = input('');
    /** Signage group the item is being viewed from */
    public readonly group_id = input('');
    public readonly allow_unshare = input(true);
    public readonly compact_label = input(false);
    public readonly unsharing_group_id = signal('');

    private readonly _shared_groups = resource({
        params: () => ({
            type: this.type(),
            id: this.item_id(),
            group_id: this.group_id(),
            shared_groups_change: signage_shared_groups_change(),
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

    /** Read-only views hide unlink actions. Unlinking the final group would
     * delete the item, so it must use the delete action instead. */
    public readonly can_unshare = computed(
        () => this.allow_unshare() && this.shared_groups().length > 1,
    );

    public async unshare(group: SignageSharedGroup) {
        if (this.unsharing_group_id()) return;
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
        this.unsharing_group_id.set(group.id);
        result.loading(i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVING'));
        try {
            await unshareSignageItem(this.type(), this.item_id(), group.id);
            result.close();
            notifySuccess(i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVED'));
            this._shared_groups.reload();
        } catch (error) {
            result.close();
            notifyError(
                i18n('SIGNAGE_MANAGER.SHARED_WITH_REMOVE_ERROR', {
                    error: error instanceof Error ? error.message : `${error}`,
                }),
            );
        } finally {
            this.unsharing_group_id.set('');
        }
    }
}
