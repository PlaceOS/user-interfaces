import { inject, Injectable, resource, Signal, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    Deal,
    i18n,
    OrganisationService,
    randomString,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { DealModalComponent } from './deal-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DealsService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _changed = signal(0);

    public readonly loading = signal(false);

    private readonly _deals = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            change: this._changed(),
        }),
        defaultValue: [] as Deal[],
        loader: async ({ params }) => {
            if (!params.building) return [];
            this.loading.set(true);
            const metadata = await showMetadata(
                params.building,
                'deals-n-offers',
            ).catch(() => ({ details: [] }) as any);
            this.loading.set(false);
            return metadata?.details instanceof Array ? metadata.details : [];
        },
    });
    public readonly deals: Signal<Deal[]> = this._deals.value;

    /** Fetch the current list of deals directly from metadata */
    public async getDeals(): Promise<Deal[]> {
        const metadata = await showMetadata(
            this._org.building.id,
            'deals-n-offers',
        ).catch(() => null);
        return metadata?.details instanceof Array ? metadata.details : [];
    }

    public async saveDeal(deal: Partial<Deal>) {
        const metadata = await showMetadata(
            this._org.building.id,
            'deals-n-offers',
        ).catch(() => null);
        let deals = metadata?.details instanceof Array ? metadata.details : [];
        if (deal.id) {
            deals = deals.filter((d) => d.id !== deal.id);
        } else deal.id = `deal-${randomString(8)}`;
        deals.push(deal);
        await updateMetadata(this._org.building.id, {
            name: 'deals-n-offers',
            description: 'List of deals and offers',
            details: deals,
        });
        this._changed.set(Date.now());
        return deal;
    }

    public async removeDeal(deal: Deal, confirm = true) {
        if (confirm) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.CONCIERGE.DEALS_REMOVE_TITLE'),
                    content: i18n('APP.CONCIERGE.DEALS_REMOVE_BODY'),
                    confirm_text: i18n('COMMON.REMOVE'),
                    icon: { content: 'delete' },
                },
                this._dialog,
            );
            if (result?.reason !== 'done') return false;
            result.close();
        }
        const metadata = await showMetadata(
            this._org.building.id,
            'deals-n-offers',
        ).catch(() => null);
        let deals = metadata?.details instanceof Array ? metadata.details : [];
        deals = deals.filter((d) => d.id !== deal.id);
        await updateMetadata(this._org.building.id, {
            name: 'deals-n-offers',
            description: 'List of deals and offers',
            details: deals,
        });
        this._changed.set(Date.now());
        return true;
    }

    public viewDeal(deal: Deal) {
        const ref = this._dialog.open(DealModalComponent, { data: deal });
        this.subscription(
            'view_remove',
            ref.componentInstance.remove.subscribe(() => {
                this.removeDeal(deal).then((s) => (s ? ref.close() : ''));
            }),
        );
        ref.afterClosed().subscribe(() => this.unsub('view_remove'));
    }
}
