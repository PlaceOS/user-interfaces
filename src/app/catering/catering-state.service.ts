import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, Observable } from 'rxjs';

import { CateringItem } from './catering-item.class';
import { OrganisationService } from '../organisation/organisation.service';
import { Building } from '../organisation/building.class';
import { BaseClass } from 'src/app/common/base.class';
import { first } from 'rxjs/operators';
import { DialogEvent } from '../common/types';
import { unique } from '../common/general';
import { CateringOption } from './catering.interfaces';
import { CateringOrder } from './catering-order.class';
import { CateringOptionsModalComponent, CateringOptionsModalData } from './catering-options-modal/catering-options-modal.component';
import { CateringOrderModalComponent, CateringOrderModalData } from './catering-order-modal/catering-order-modal.component';

import { CateringRuleset } from 'src/app/catering/catering.interfaces';
import { CONFIRM_METADATA } from '../ui/confirm-modal/confirm-modal.component';

@Injectable({
    providedIn: 'root',
})
export class CateringStateService extends BaseClass {
    /** Active menu */
    private _menu = new BehaviorSubject<CateringItem[]>([]);
    /** Whether the menu for the active building is loading */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Currency code for the active building */
    private _currency = new BehaviorSubject<string>('USD');
    /** Observable for the active menu */
    public readonly menu = this._menu.asObservable();
    /** Observable for whether the menu for the active building is loadingg */
    public readonly loading = this._loading.asObservable();
    /** Observable for the currency code of the active building */
    public readonly currency = this._currency.asObservable();

    private get _categories() {
        const menu = this._menu.getValue();
        return unique(menu.map((i) => i.category));
    }

    constructor(private _org: OrganisationService, private _dialog: MatDialog) {
        super();
        this.subscription(
            'building',
            this._org.active_building.subscribe(async (bld: Building) => {
                if (bld) {
                    const menu = (await this.getCateringForZone(bld.id)).map(
                        (i) => new CateringItem(i)
                    );
                    this._currency.next(bld.currency || 'USD');
                    this._menu.next(menu);
                }
            })
        );
    }

    /**
     * Create/Edit catering order
     * @param order Order to manipulate
     */
    public manageCateringOrder(order: CateringOrder) {
        return new Promise<CateringOrder>((resolve) => {
            let is_resolved = false;
            const ref = this._dialog.open<CateringOrderModalComponent, CateringOrderModalData>(
                CateringOrderModalComponent,
                {
                    data: {
                        order,
                        menu: this.menu,
                        loading: this.loading,
                        getCateringConfig: (_) => this.getCateringConfig(_),
                        selectOptions: (_) => this.selectOptions(_)
                    },
                }
            );
            (ref.componentInstance.event as Observable<DialogEvent>)
                .pipe(first((_) => _.reason === 'done'))
                .subscribe((event) => {
                    is_resolved = true;
                    resolve(event.metadata.order);
                    ref.close();
                });
            ref.afterClosed().subscribe(() => (is_resolved ? '' : resolve(order)));
        });
    }

    public selectOptions(options: CateringOption[]) {
        return new Promise<CateringOption[]>((resolve, reject) => {
            let is_resolved = false;
            const ref = this._dialog.open<CateringOptionsModalComponent, CateringOptionsModalData>(
                CateringOptionsModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        options,
                    },
                }
            );
            (ref.componentInstance.event as Observable<DialogEvent>)
                .pipe(first((_) => _.reason === 'done'))
                .subscribe((event) => {
                    is_resolved = true;
                    resolve(event.metadata.options);
                    ref.close();
                });
            ref.afterClosed().subscribe(() => (is_resolved ? '' : reject()));
        });
    }

    private async getCateringForZone(zone_id: string): Promise<CateringItem[]> {
        const menu = (await showMetadata(zone_id, { name: 'catering' }).toPromise()).details;
        return menu instanceof Array ? menu : [];
    }

    public async getCateringConfig(zone_id: string = this._org.building.id): Promise<CateringRuleset[]> {
        const rules = (await showMetadata(zone_id, { name: 'catering_config' }).toPromise())
            .details;
        return rules instanceof Array ? (rules as any) : [];
    }
}
