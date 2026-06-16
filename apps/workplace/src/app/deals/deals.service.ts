import { effect, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Deal, OrganisationService } from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';
import { DealDetailsModalComponent } from './deal-details-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DealsService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    public readonly loading = signal(false);
    public readonly deals = signal<Deal[]>([]);

    constructor() {
        effect(async () => {
            const bld = this._org.active_building();
            if (!bld?.id) {
                this.deals.set([]);
                return;
            }
            this.loading.set(true);
            const { details } = await showMetadata(
                bld.id,
                'deals-n-offers',
            ).catch(() => ({ details: [] }));
            this.deals.set(details instanceof Array ? details : []);
            this.loading.set(false);
        });
    }

    public viewDeal(deal: Deal) {
        this._dialog.open(DealDetailsModalComponent, { data: deal });
    }
}
