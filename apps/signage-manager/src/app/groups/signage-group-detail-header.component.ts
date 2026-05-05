import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@placeos/components';
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
                    aria-label="Back to groups list"
                    (click)="clearSelection()"
                >
                    <icon>arrow_back</icon>
                </button>
                <div class="min-w-0 flex-1">
                    <h4 class="truncate text-lg font-medium">
                        {{ group.name || 'Unnamed group' }}
                    </h4>
                </div>
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 mr-1 rounded-lg border hover:shadow-md"
                    matTooltip="Edit group"
                    (click)="editGroup(group)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    type="button"
                    matRipple
                    class="border-base-200 hover:bg-base-200 hover:border-base-300 text-error mr-1 rounded-lg border hover:shadow-md"
                    matTooltip="Remove group"
                    (click)="removeGroup(group)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        }
    `,
    imports: [IconComponent, MatRippleModule, MatTooltipModule],
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
