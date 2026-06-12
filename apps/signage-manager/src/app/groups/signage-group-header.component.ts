import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageService } from '../signage.service';
import { SignageGroupEditModalComponent } from './signage-group-edit-modal.component';

@Component({
    selector: 'signage-group-header',
    template: `
        <header
            class="bg-base-100 border-base-300 sticky top-0 z-10 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.GROUPS_TITLE' | translate }}
                </h3>
                <div class="text-sm opacity-60">
                    {{
                        'SIGNAGE_MANAGER.GROUP_COUNT'
                            | translate: { count: group_count() } : group_count()
                    }}
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_manage_all_groups()) {
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 mr-1 rounded-lg border hover:shadow-md"
                    [matTooltip]="'SIGNAGE_MANAGER.GROUPS_NEW_TOOLTIP' | translate"
                    matTooltipPosition="left"
                    (click)="editGroup()"
                >
                    <icon>add</icon>
                </button>
            }
        </header>
    `,
    imports: [IconComponent, MatRippleModule, MatTooltipModule, TranslatePipe],
})
export class SignageGroupHeaderComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly can_manage_all_groups = this._service.can_manage_all_groups;
    public readonly group_count = computed(
        () => this._service.manageable_signage_groups().length,
    );

    public editGroup() {
        this._dialog.open(SignageGroupEditModalComponent, {
            data: { group: {} },
            panelClass: 'mobile-fullscreen',
        });
    }
}
