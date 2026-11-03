import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { SignageContextService } from '../signage-context.service';
import { SignageZoneService } from './signage-zone.service';

@Component({
    selector: 'zone-header',
    template: `
        <section-header
            heading="SIGNAGE_MANAGER.ZONES_TITLE"
            [count]="total_count()"
            [can_add]="can_manage_zones()"
            add_label="SIGNAGE_MANAGER.CREATE_NEW_ZONE"
            add_tooltip="SIGNAGE_MANAGER.NEW_ZONE"
            (add)="addZone()"
        />
    `,
    imports: [SectionHeaderComponent],
})
export class ZoneHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _zone_service = inject(SignageZoneService);
    private readonly _router = inject(Router);

    /** Search results while searching, otherwise the server total of
     * signage zones, as the tree also shows untagged parent zones. Null
     * when the total is not known. */
    public readonly total_count = computed(() =>
        this._zone_service.selected_zone()?.id &&
        this._zone_service.zone_search_term().trim()
            ? this._zone_service.filtered_zones().length
            : this._zone_service.signage_zone_count(),
    );
    public readonly can_manage_zones = this._context.can_manage_zones;

    public async addZone() {
        const zone = await this._zone_service.addZone();
        if (zone?.id) await this._router.navigate(['/zones', zone.id]);
    }
}
