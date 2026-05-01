import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@placeos/components';
import { SignageService } from '../signage.service';

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
                [matMenuTriggerFor]="group_menu"
                [matTooltip]="'[Group] ' + selected_label()"
                matTooltipPosition="right"
                [attr.aria-label]="'Signage group: ' + selected_label()"
            >
                <icon class="text-3xl">group</icon>
                <div class="line-clamp-3 max-w-14 text-xs font-medium">
                    {{ selected_label() }}
                </div>
            </button>
            <mat-menu #group_menu="matMenu">
                @if (is_sys_admin()) {
                    <button
                        type="button"
                        mat-menu-item
                        [class.bg-secondary]="!selected_group_id()"
                        [attr.aria-current]="
                            !selected_group_id() ? 'true' : null
                        "
                        (click)="setGroup('')"
                    >
                        <div
                            class="flex items-center gap-2"
                            [class.text-secondary-content]="
                                !selected_group_id()
                            "
                        >
                            <icon class="mr-2 text-2xl">public</icon>
                            <span>All Groups</span>
                        </div>
                    </button>
                }
                @for (item of groups(); track item.group.id) {
                    <button
                        type="button"
                        mat-menu-item
                        [class.bg-secondary]="
                            selected_group_id() === item.group.id
                        "
                        [attr.aria-current]="
                            selected_group_id() === item.group.id
                                ? 'true'
                                : null
                        "
                        (click)="setGroup(item.group.id)"
                    >
                        <div
                            class="flex items-center gap-2"
                            [class.text-secondary-content]="
                                selected_group_id() === item.group.id
                            "
                        >
                            <icon class="mr-2 text-2xl">
                                {{
                                    selected_group_id() === item.group.id
                                        ? 'check_circle'
                                        : 'group'
                                }}
                            </icon>
                            <span>{{ item.group.name }}</span>
                        </div>
                    </button>
                }
            </mat-menu>
        }
    `,
    imports: [MatMenuModule, MatRippleModule, MatTooltipModule, IconComponent],
})
export class SignageGroupSelectorComponent {
    private readonly _service = inject(SignageService);

    public readonly groups = this._service.signage_groups;
    public readonly selected_group = this._service.selected_group;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly selected_label = computed(
        () => this.selected_group()?.group.name || 'All Groups',
    );

    public setGroup(group_id: string) {
        this._service.setSelectedGroup(group_id);
    }
}
