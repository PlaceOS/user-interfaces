import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { POIModalComponent } from './poi-modal.component';
import {
    SettingsService,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { generateQRCode } from 'libs/common/src/lib/qr-code';

export interface POIListOptions {
    search?: string;
}

export interface PointOfInterest {
    id: string;
    name: string;
    level_id: string;
    location: string | [number, number];
    qr_code?: string;
    qr_link?: string;
}

@Injectable({
    providedIn: 'root',
})
export class POIManagementService {
    private _options = new BehaviorSubject<POIListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    private _features = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        switchMap(([bld]) => showMetadata(bld.id, 'map_features', {})),
        map((_) => _.details || {}),
        shareReplay(1)
    );

    public readonly filtered_features = combineLatest([
        this._features,
        this._options,
    ]).pipe(
        map(([features, options]) => {
            let list = Object.values(features).reduce(
                (acc, _) => [...acc, ..._],
                []
            );
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase())
                );
            }
            return list;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public setFilters(options: Partial<POIListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editPointOfInterest(poi?: PointOfInterest) {
        const ref = this._dialog.open(POIModalComponent, {
            data: poi,
        });
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
    }

    public async removePointOfInterest(poi: PointOfInterest) {
        const ref = await openConfirmModal(
            {
                title: 'Remove Point of Interest',
                content: `Are you sure you want to remove the point of interest "${poi.name}"?`,
                icon: { content: 'delete_forever' },
                confirm_text: 'Remove',
            },
            this._dialog
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading('Removing point of interest...');
        const old_metadata = await showMetadata(
            this._org.building.id,
            'map_features',
            {}
        ).toPromise();
        const metadata = old_metadata.details || {};
        if (metadata[poi.level_id]) {
            metadata[poi.level_id] = metadata[poi.level_id].filter(
                (_) => _.id !== poi.id
            );
        }
        await updateMetadata(this._org.building.id, {
            name: 'map_features',
            details: metadata,
            description: '',
        })
            .toPromise()
            .catch((e) => {
                notifyError(e);
                ref.close();
                throw e;
            });
        notifySuccess('Successfully removed point of interest.');
        ref.close();
        this._change.next(Date.now());
    }
}
