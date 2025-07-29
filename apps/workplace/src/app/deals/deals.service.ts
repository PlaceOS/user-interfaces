import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Deal } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import {
    catchError,
    combineLatest,
    filter,
    map,
    Observable,
    of,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs';
import { DealDetailsModalComponent } from './deal-details-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DealsService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    public readonly loading = signal(false);

    public readonly deals$: Observable<Deal[]> = combineLatest([
        this._org.active_building,
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

    public viewDeal(deal: Deal) {
        this._dialog.open(DealDetailsModalComponent, { data: deal });
    }
}
