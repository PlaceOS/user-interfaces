import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { dialogClosed, SignageService } from '../signage.service';
import { GroupSelectModalComponent } from './group-select-modal.component';

@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'group-breadcrumbs',
    template: `
        @if (hierarchy().length) {
            <nav
                class="border-base-300 bg-base-200 text-base-content/70 flex min-w-0 items-center gap-0.5 overflow-hidden rounded-full border px-2 py-0.5 text-xs"
                [attr.aria-label]="'SIGNAGE_MANAGER.GROUPS_TITLE' | translate"
            >
                <icon class="mr-0.5 shrink-0 text-sm">group</icon>
                @for (group of hierarchy(); track group.id; let last = $last) {
                    <button
                        type="button"
                        matRipple
                        class="hover:bg-base-300 truncate rounded-full px-1"
                        [class.text-base-content]="last"
                        [class.font-medium]="last"
                        [attr.aria-current]="last ? 'true' : null"
                        [attr.aria-label]="
                            last
                                ? ('SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL'
                                  | translate: { name: group.name })
                                : group.name
                        "
                        (click)="last ? selectGroup() : applyGroup(group.id)"
                    >
                        {{ group.name }}
                    </button>
                    @if (!last) {
                        <icon class="shrink-0 text-sm">chevron_right</icon>
                    }
                }
            </nav>
        }
    `,
    host: { class: 'flex min-w-0 items-center gap-2' },
    imports: [MatRippleModule, IconComponent, TranslatePipe],
})
export class GroupBreadcrumbsComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    /** Which group the crumbs follow: the active signage group, or the group
     * being managed on the groups page. */
    public readonly scope = input<'selected' | 'managed'>('selected');
    public readonly hierarchy = computed(() =>
        this.scope() === 'managed'
            ? this._service.managed_group_hierarchy()
            : this._service.selected_group_hierarchy(),
    );
    public applyGroup(group_id: string) {
        if (this.scope() === 'managed') {
            this._service.managed_group_id.set(group_id);
        } else {
            this._service.setSelectedGroup(group_id);
        }
    }

    public async selectGroup() {
        const managed = this.scope() === 'managed';
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: i18n('SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'),
                // The managed list is plain groups; the modal expects the
                // current-group shape it gets from the signage group list.
                groups: managed
                    ? this._service
                          .manageable_signage_groups()
                          .map((group) => ({ group, permissions: 0 }) as any)
                    : this._service.signage_groups(),
                selected_group_id: managed
                    ? this._service.managed_group_id()
                    : this._service.selected_group_id(),
                show_all_groups: !managed && this._service.is_sys_admin(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed<string>(ref);
        if (group_id === undefined) return;
        this.applyGroup(group_id);
    }
}
