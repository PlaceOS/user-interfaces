import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEvent, randomInt } from '@placeos/common';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { PointsAssetModalComponent } from './asset-modal.component';
import { PointAsset } from './points-assets.component';

@Injectable({
    providedIn: 'root',
})
export class PointsStateService {
    private _assets = new BehaviorSubject<PointAsset[]>([]);

    public readonly assets = this._assets.asObservable();

    constructor(private _dialog: MatDialog) {
        this._assets.next(
            JSON.parse(localStorage.getItem('PLACEOS.point_assets') || '[]')
        );
        this.assets.subscribe((list) => {
            localStorage.setItem('PLACEOS.point_assets', JSON.stringify(list));
        });
    }

    public async newAsset(asset?: Partial<PointAsset>) {
        const ref = this._dialog.open(PointsAssetModalComponent, {
            data: { asset },
        });
        const details: DialogEvent = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details.reason !== 'done') return ref.close();
        this._assets.next([
            ...this._assets.getValue().filter((_) => _.id !== asset?.id),
            {
                ...details.metadata,
                id: details.metadata.id || `PA-${randomInt(999_999_999)}`,
            },
        ] as any);
        ref.close();
    }

    public removeAsset(asset_id: string) {
        this._assets.next(
            this._assets.getValue().filter((_) => _.id !== asset_id)
        );
    }
}
