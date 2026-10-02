import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceGroup } from '@placeos/ts-client';
import { SignageGroupAccessModalComponent } from './signage-group-access-modal.component';
import { SignageGroupAdminService } from './signage-group-admin.service';
import { SignageGroupEditModalComponent } from './signage-group-edit-modal.component';
import { SignageGroupFeaturesModalComponent } from './signage-group-features-modal.component';

@Component({
    selector: 'signage-group-detail-header',
    template: `
        @if (selected_group(); as group) {
            <div
                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-4 py-3"
            >
                <button
                    icon
                    matRipple
                    type="button"
                    class="desktop-hidden"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.BACK_TO_GROUPS' | translate
                    "
                    (click)="clearSelection()"
                >
                    <icon>arrow_back</icon>
                </button>
                <div class="min-w-0 flex-1">
                    <h4 class="truncate text-lg font-medium">
                        {{
                            group.name ||
                                ('SIGNAGE_MANAGER.UNNAMED_GROUP' | translate)
                        }}
                    </h4>
                </div>
                @if (can_edit_features()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.GROUP_FEATURES_TOOLTIP' | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.GROUP_FEATURES_TOOLTIP' | translate
                        "
                        (click)="editFeatures(group)"
                    >
                        <icon>tune</icon>
                    </button>
                }
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.GROUP_ACCESS_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.GROUP_ACCESS_TOOLTIP' | translate
                    "
                    (click)="editAccess(group)"
                >
                    <icon>admin_panel_settings</icon>
                </button>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP' | translate
                    "
                    (click)="editGroup(group)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP' | translate
                    "
                    (click)="removeGroup(group)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        }
    `,
    imports: [IconComponent, MatRippleModule, MatTooltipModule, TranslatePipe],
})
export class SignageGroupDetailHeaderComponent {
    private readonly _group_admin = inject(SignageGroupAdminService);
    private readonly _dialog = inject(MatDialog);

    public readonly selected_group = this._group_admin.managed_group;
    public readonly can_edit_features = computed(() =>
        this._group_admin.canEditGroupFeatures(this.selected_group()),
    );

    public clearSelection() {
        this._group_admin.managed_group_id.set('');
    }

    public editGroup(group: Partial<PlaceGroup> = {}) {
        this._dialog.open(SignageGroupEditModalComponent, {
            data: { group },
            panelClass: 'mobile-fullscreen',
        });
    }

    public editFeatures(group: PlaceGroup) {
        this._dialog.open(SignageGroupFeaturesModalComponent, {
            data: { group },
            panelClass: 'mobile-fullscreen',
        });
    }

    public editAccess(group: PlaceGroup) {
        this._dialog.open(SignageGroupAccessModalComponent, {
            data: { group },
            panelClass: 'mobile-fullscreen',
        });
    }

    public removeGroup(group: PlaceGroup) {
        this._group_admin.removeSignageGroup(group);
    }
}
