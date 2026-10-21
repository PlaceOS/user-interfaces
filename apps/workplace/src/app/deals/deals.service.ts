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
    /** Whether the last load failed */
    public readonly failed = signal(false);
    public readonly deals = signal<Deal[]>([]);
    private _reload = signal(0);

    constructor() {
        effect(async () => {
            const bld = this._org.active_building();
            this._reload();
            if (!bld?.id) {
                this.deals.set([]);
                return;
            }
            this.loading.set(true);
            this.failed.set(false);
            const { details } = await showMetadata(
                bld.id,
                'deals-n-offers',
            ).catch(() => {
                this.failed.set(true);
                return { details: [] };
            });
            this.deals.set(details instanceof Array ? details : []);
            this.loading.set(false);
        });
    }

    /** Load the deals of the active building again */
    public reload() {
        this._reload.update((count) => count + 1);
    }

    public viewDeal(deal: Deal) {
        this._dialog.open(DealDetailsModalComponent, { data: deal });
    }
}
