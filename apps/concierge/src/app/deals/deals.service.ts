import { inject, Injectable, resource, Signal, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    Deal,
    i18n,
    notifyError,
    OrganisationService,
    randomString,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { metadata as metadata_v7 } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { jsonList, showMetadata, toJsonValue } from '../metadata';
import { DealModalComponent } from './deal-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DealsService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _changed = signal(0);

    private readonly _deals = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            change: this._changed(),
        }),
        defaultValue: [] as Deal[],
        loader: async ({ params }) => {
            if (!params.building) return [];
            const metadata = await showMetadata(
                params.building,
                'deals-n-offers',
            ).catch(() => null);
            return jsonList<Deal>(metadata?.details);
        },
    });
    public readonly deals: Signal<Deal[]> = this._deals.value;

    /** Fetch the current list of deals directly from metadata */
    public async getDeals(): Promise<Deal[]> {
        const metadata = await showMetadata(
            this._org.building.id,
            'deals-n-offers',
        ).catch(() => null);
        return jsonList<Deal>(metadata?.details);
    }

    public async saveDeal(deal: Partial<Deal>) {
        // Do not catch read errors: a failed read must not become an empty
        // list that is then written back over the stored deals.
        const metadata = await showMetadata(
            this._org.building.id,
            'deals-n-offers',
        );
        let deals = jsonList<Partial<Deal>>(metadata.details);
        if (deal.id) {
            deals = deals.filter((d) => d.id !== deal.id);
        } else deal.id = `deal-${randomString(8)}`;
        deals.push(deal);
        await metadata_v7
            .update({
                id: this._org.building.id,
                body: {
                    name: 'deals-n-offers',
                    description: 'List of deals and offers',
                    details: toJsonValue(deals),
                },
            })
            .then(orThrow);
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
        try {
            // Do not catch read errors on their own: a failed read must not
            // become an empty list that is then written back.
            const metadata = await showMetadata(
                this._org.building.id,
                'deals-n-offers',
            );
            let deals = jsonList<Deal>(metadata.details);
            deals = deals.filter((d) => d.id !== deal.id);
            await metadata_v7
                .update({
                    id: this._org.building.id,
                    body: {
                        name: 'deals-n-offers',
                        description: 'List of deals and offers',
                        details: toJsonValue(deals),
                    },
                })
                .then(orThrow);
        } catch (e) {
            notifyError(`Failed to remove deal. ${e}`);
            return false;
        }
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
