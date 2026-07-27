import { Component, computed, inject } from '@angular/core';
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
        @if (hierarchy().length || show_all_groups()) {
            <nav
                class="border-base-300 bg-base-200 text-base-content/70 flex min-w-0 items-center gap-0.5 overflow-hidden rounded-full border px-2 py-0.5 text-xs"
                [attr.aria-label]="'SIGNAGE_MANAGER.GROUPS_TITLE' | translate"
            >
                <button type="button" matRipple class="hover:border-base-300 border border-base-200 mr-0.5 shrink-0 text-sm p-0 m-0 flex items-center justify-center rounded-full" (click)="selectGroup()">
                    <icon>{{ show_all_groups() ? 'public' : 'group' }}</icon>
                </button>
                @if (show_all_groups()) {
                    <button
                        type="button"
                        matRipple
                        class="text-base-content hover:underline cursor-pointer truncate rounded-full px-1 font-medium"
                        aria-current="true"
                        (click)="selectGroup()"
                    >
                        {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (group of hierarchy(); track group.id; let last = $last) {
                    <button
                        type="button"
                        matRipple
                        class="hover:underline cursor-pointer truncate rounded-full px-1"
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

    /** The active signage group and its ancestors, root first. */
    public readonly hierarchy = this._service.selected_group_hierarchy;
    /** Sys admins can view every group at once; that state has no hierarchy. */
    public readonly show_all_groups = computed(
        () =>
            this._service.is_sys_admin() &&
            !this._service.selected_group_id() &&
            !this.hierarchy().length,
    );

    public applyGroup(group_id: string) {
        this._service.setSelectedGroup(group_id);
    }

    public async selectGroup() {
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: i18n('SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'),
                groups: this._service.signage_groups(),
                selected_group_id: this._service.selected_group_id(),
                show_all_groups: this._service.is_sys_admin(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed<string>(ref);
        if (group_id === undefined) return;
        this.applyGroup(group_id);
    }
}
