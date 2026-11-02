import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { PlaceSystem } from '@placeos/ts-client';
import { SignageDisplayService } from '../displays/signage-display.service';
import { byDisplayName, PagedSearch } from './paged-search';
import {
    PickerItemDirective,
    PickerModalComponent,
} from './picker-modal.component';

@Component({
    selector: 'display-select-modal',
    template: `
        <picker-modal
            heading="SIGNAGE_MANAGER.ADD_DISPLAY_TITLE"
            close_label="SIGNAGE_MANAGER.CLOSE_ADD_DISPLAY"
            search_label="SIGNAGE_MANAGER.SEARCH_DISPLAYS"
            empty_icon="tv"
            empty_label="SIGNAGE_MANAGER.NO_DISPLAYS"
            [list]="list"
        >
            <ng-template [pickerItem]="list" let-display>
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [mat-dialog-close]="display.id"
                >
                    <icon class="text-base-content/60 shrink-0 text-2xl"
                        >tv</icon
                    >
                    <div class="min-w-0 flex-1">
                        <div class="truncate">
                            {{ display.display_name || display.name }}
                        </div>
                        @if (display.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ display.description }}
                            </div>
                        }
                    </div>
                </button>
            </ng-template>
        </picker-modal>
    `,
    imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        PickerModalComponent,
        PickerItemDirective,
    ],
})
export class DisplaySelectModalComponent {
    private readonly _display_service = inject(SignageDisplayService);

    public readonly list = new PagedSearch<PlaceSystem>(
        (search) => this._display_service.queryDisplays(search),
        byDisplayName,
    );
}
