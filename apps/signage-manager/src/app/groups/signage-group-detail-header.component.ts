import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceGroup } from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import { SignageGroupEditModalComponent } from './signage-group-edit-modal.component';

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
                    class="sm:hidden"
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
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 mr-1 rounded-lg border hover:shadow-md"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP' | translate
                    "
                    (click)="editGroup(group)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 text-error mr-1 rounded-lg border hover:shadow-md"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP' | translate
                    "
                    (click)="removeGroup(group)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IconComponent, MatRippleModule, MatTooltipModule, TranslatePipe],
})
export class SignageGroupDetailHeaderComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    public readonly selected_group = this._service.managed_group;

    public clearSelection() {
        this._service.managed_group_id.set('');
    }

    public editGroup(group: Partial<PlaceGroup> = {}) {
        this._dialog.open(SignageGroupEditModalComponent, {
            data: { group },
            panelClass: 'mobile-fullscreen',
        });
    }

    public removeGroup(group: PlaceGroup) {
        this._service.removeSignageGroup(group);
    }
}
