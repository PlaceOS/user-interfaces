import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@placeos/components';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';
import { GroupSelectModalComponent } from './group-select-modal.component';

@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'signage-group-selector',
    template: `
        @if (is_sys_admin() || groups().length) {
            <button
                icon
                type="button"
                matRipple
                class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                [matTooltip]="'[Group] ' + selected_label()"
                matTooltipPosition="right"
                [attr.aria-label]="'Signage group: ' + selected_label()"
                (click)="selectGroup()"
            >
                <icon class="text-3xl">group</icon>
                <div class="line-clamp-3 max-w-14 text-xs font-medium">
                    {{ selected_label() }}
                </div>
            </button>
        }
    `,
    imports: [MatRippleModule, MatTooltipModule, IconComponent],
})
export class SignageGroupSelectorComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly groups = this._service.signage_groups;
    public readonly selected_group = this._service.selected_group;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly selected_label = computed(
        () => this.selected_group()?.group.name || 'All Groups',
    );

    public async selectGroup() {
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: 'Select signage group',
                groups: this.groups(),
                selected_group_id: this.selected_group_id(),
                show_all_groups: this.is_sys_admin(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await lastValueFrom(ref.afterClosed());
        if (group_id === undefined) return;
        this._service.setSelectedGroup(group_id);
    }
}
