import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceZone } from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import { byDisplayName, PagedSearch } from './paged-search';
import { ZoneSelectTreeComponent } from './zone-select-tree.component';

@Component({
    selector: 'zone-select-modal',
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
                [roots]="roots()"
                [load_children]="loadChildren"
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
export class ZoneSelectModalComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog_ref = inject(
        MatDialogRef<ZoneSelectModalComponent>,
    );

    public readonly list = new PagedSearch<PlaceZone>(
        (search) =>
            search.trim() ? this._service.querySelectableZones(search) : null,
        byDisplayName,
    );
    public readonly roots = this._service.root_zones;
    public readonly loadChildren = (parent_id: string) =>
        this._service.zoneChildren(parent_id);

    public selectZone(zone: PlaceZone) {
        this._dialog_ref.close(zone.id);
    }
}
