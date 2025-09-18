import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsyncHandler, Deal, i18n, randomString } from '@placeos/common';
import { OrganisationService } from '@placeos/common';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import {
    BehaviorSubject,
    catchError,
    combineLatest,
    filter,
    lastValueFrom,
    map,
    Observable,
    of,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs';
import { DealModalComponent } from './deal-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DealsService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _changed = new BehaviorSubject(0);

    public readonly loading = signal(false);

    public readonly deals$: Observable<Deal[]> = combineLatest([
        this._org.active_building,
        this._changed,
    ]).pipe(
        filter(([b]) => !!b?.id),
        switchMap(([bld]) => {
            this.loading.set(true);
            return showMetadata(bld.id, 'deals-n-offers').pipe(
                catchError(() => of({ details: [] })),
            );
        }),
        map(({ details }) => (details instanceof Array ? details : [])),
        tap(() => this.loading.set(false)),
        startWith([]),
        shareReplay(1),
    );

    public async saveDeal(deal: Partial<Deal>) {
        const metadata = await lastValueFrom(
            showMetadata(this._org.building.id, 'deals-n-offers'),
        ).catch(() => null);
        let deals = metadata?.details instanceof Array ? metadata.details : [];
        if (deal.id) {
            deals = deals.filter((d) => d.id !== deal.id);
        } else deal.id = `deal-${randomString(8)}`;
        deals.push(deal);
        await lastValueFrom(
            updateMetadata(this._org.building.id, {
                name: 'deals-n-offers',
                description: 'List of deals and offers',
                details: deals,
            }),
        );
        this._changed.next(Date.now());
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
        const metadata = await lastValueFrom(
            showMetadata(this._org.building.id, 'deals-n-offers'),
        ).catch(() => null);
        let deals = metadata?.details instanceof Array ? metadata.details : [];
        deals = deals.filter((d) => d.id !== deal.id);
        await lastValueFrom(
            updateMetadata(this._org.building.id, {
                name: 'deals-n-offers',
                description: 'List of deals and offers',
                details: deals,
            }),
        );
        this._changed.next(Date.now());
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
