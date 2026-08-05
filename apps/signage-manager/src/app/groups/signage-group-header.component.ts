import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { SignageService } from '../signage.service';
import { SignageGroupEditModalComponent } from './signage-group-edit-modal.component';

@Component({
    selector: 'signage-group-header',
    template: `
        <header
            class="bg-base-100 border-base-300 sticky top-0 z-10 flex flex-nowrap items-center gap-4 border-b px-4 py-3 shadow"
        >
            <div class="flex-1 shrink-0">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.GROUPS_TITLE' | translate }}
                </h3>
                <div class="flex items-center gap-4">
                    <div class="text-sm opacity-60">
                        {{
                            'SIGNAGE_MANAGER.GROUP_COUNT'
                                | translate
                                    : { count: group_count() }
                                    : group_count()
                        }}
                    </div>
                    <div class="min-w-0 flex-1 overflow-hidden">
                        <group-breadcrumbs />
                    </div>
                </div>
            </div>
            @if (can_add_groups()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.GROUPS_NEW_TOOLTIP' | translate
                    "
                    matTooltipPosition="left"
                    (click)="editGroup()"
                >
                    <icon>add</icon>
                </button>
            }
        </header>
    `,
    imports: [
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        GroupBreadcrumbsComponent,
    ],
})
export class SignageGroupHeaderComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly groups = this._service.manageable_signage_groups;
    public readonly group_count = computed(() => this.groups().length);
    public readonly can_add_groups = computed(
        () => this._service.can_manage_all_groups() || this.group_count() > 0,
    );

    public editGroup() {
        this._dialog.open(SignageGroupEditModalComponent, {
            data: { group: {} },
            panelClass: 'mobile-fullscreen',
        });
    }
}
