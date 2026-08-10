import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceZone } from '@placeos/ts-client';
import { byDisplayName, PagedSearch } from '../shared/paged-search';
import { ZoneSelectTreeComponent } from '../shared/zone-select-tree.component';
import { SignageService } from '../signage.service';

@Component({
    selector: 'signage-group-zone-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.ADD_ZONE_TITLE' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="'SIGNAGE_MANAGER.CLOSE_ADD_ZONE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg overflow-auto px-4 pt-2 pb-4 max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <zone-select-tree
                [list]="list"
                [exclude_ids]="exclude_ids"
                (zoneSelected)="selectZone($event)"
            />
        </main>
    `,
    imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        TranslatePipe,
        ZoneSelectTreeComponent,
    ],
})
export class SignageGroupZoneSelectModalComponent {
    private readonly _service = inject(SignageService);
    private readonly _data = inject<{ exclude_ids?: string[] }>(
        MAT_DIALOG_DATA,
    );
    private readonly _dialog_ref = inject(
        MatDialogRef<SignageGroupZoneSelectModalComponent>,
    );

    public readonly list = new PagedSearch<PlaceZone>(
        (search) => this._service.queryGroupZones(search),
        byDisplayName,
        300,
    );
    public readonly exclude_ids = this._data.exclude_ids || [];

    public selectZone(zone: PlaceZone) {
        this._dialog_ref.close(zone);
    }
}
