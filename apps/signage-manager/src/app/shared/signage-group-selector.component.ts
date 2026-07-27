import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { dialogClosed, SignageService } from '../signage.service';
import { GroupSelectModalComponent } from './group-select-modal.component';

@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'signage-group-selector',
    template: `
        @if (is_sys_admin() || groups().length) {
            <div
                customTooltip
                [content]="group_hierarchy_tooltip"
                [hover]="true"
                [backdrop]="false"
                [xOffset]="96"
                xPosition="start"
                yPosition="center"
            >
                <button
                    icon
                    type="button"
                    matRipple
                    class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL'
                            | translate
                                : { name: (selected_label() | translate) }
                    "
                    (click)="selectGroup()"
                >
                    <icon class="text-3xl">group</icon>
                    <div class="line-clamp-3 max-w-14 text-xs font-medium">
                        {{ selected_label() | translate }}
                    </div>
                </button>
            </div>
            <ng-template #group_hierarchy_tooltip>
                <div
                    class="border-base-300 bg-base-100 text-base-content my-2 w-72 rounded-xl border p-3 text-left shadow-xl"
                >
                    @if (selected_hierarchy().length) {
                        <ol class="m-0 space-y-1 p-0">
                            @for (
                                group of selected_hierarchy();
                                track group.id;
                                let last = $last
                            ) {
                                <li
                                    class="relative flex w-full items-center gap-2"
                                >
                                    <div
                                        class="relative z-10 h-3 w-3 shrink-0 rounded-full border"
                                        [class.border-primary]="last"
                                        [class.bg-primary]="last"
                                        [class.border-base-300]="!last"
                                        [class.bg-base-100]="!last"
                                    >
                                        @if (!last) {
                                            <div
                                                class="bg-base-300 absolute top-3.5 left-1/2 h-1.5 w-0.5 -translate-x-1/2 rounded"
                                            ></div>
                                        }
                                    </div>
                                    <div
                                        class="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md px-1"
                                    >
                                        <div
                                            class="flex-1 truncate text-sm"
                                            [class.font-semibold]="last"
                                        >
                                            {{ group.name }}
                                        </div>
                                        @if (last) {
                                            <div
                                                class="text-base-content/60 text-xs"
                                            >
                                                {{
                                                    'COMMON.STATE_ACTIVE'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                    </div>
                                </li>
                            }
                        </ol>
                    } @else {
                        <div class="bg-base-200 rounded-lg px-3 py-2 text-sm">
                            {{
                                'SIGNAGE_MANAGER.ALL_GROUPS_ACTIVE' | translate
                            }}
                        </div>
                    }
                </div>
            </ng-template>
        }
    `,
    imports: [
        MatRippleModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe,
    ],
})
export class SignageGroupSelectorComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly groups = this._service.signage_groups;
    public readonly selected_group = this._service.selected_group;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly selected_label = computed(
        () => this.selected_group()?.group.name || 'SIGNAGE_MANAGER.ALL_GROUPS',
    );
    public readonly selected_hierarchy = this._service.selected_group_hierarchy;

    public async selectGroup() {
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: i18n('SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'),
                groups: this.groups(),
                selected_group_id: this.selected_group_id(),
                show_all_groups: this.is_sys_admin(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed(ref);
        if (group_id === undefined) return;
        this._service.setSelectedGroup(group_id);
    }
}
