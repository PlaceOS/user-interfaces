import { Injectable, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEvent, nextValueFrom, randomInt } from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { PointsAssetModalComponent } from './asset-modal.component';
import { PointAsset } from './points-assets.component';

@Injectable({
    providedIn: 'root',
})
export class PointsStateService {
    private _dialog = inject(MatDialog);

    private _assets = signal<PointAsset[]>(
        JSON.parse(localStorage.getItem('PLACEOS.point_assets') || '[]'),
    );

    public readonly assets = this._assets.asReadonly();

    constructor() {
        effect(() => {
            const list = this._assets();
            localStorage.setItem('PLACEOS.point_assets', JSON.stringify(list));
        });
    }

    public async newAsset(asset?: Partial<PointAsset>) {
        const ref = this._dialog.open(PointsAssetModalComponent, {
            data: { asset },
        });
        const details: DialogEvent = await Promise.race([
            new Promise<DialogEvent>((resolve) => {
                const sub = ref.componentInstance.event.subscribe((event) => {
                    if (event?.reason !== 'done') return;
                    sub.unsubscribe();
                    resolve(event);
                });
            }),
            nextValueFrom(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return ref.close();
        this._assets.set([
            ...this._assets().filter((_) => _.id !== asset?.id),
            {
                ...details.metadata,
                id: details.metadata.id || `PA-${randomInt(999_999_999)}`,
            },
        ]);
        ref.close();
    }

    /** Ask, then remove the asset from the list */
    public async removeAsset(asset: PointAsset) {
        const details = await openConfirmModal(
            {
                title: 'Remove asset',
                content: `Remove ${asset.name || 'this asset'} from the points assets?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        details.close();
        if (details.reason !== 'done') return;
        this._assets.set(this._assets().filter((_) => _.id !== asset.id));
    }
}
