import { inject, Injectable } from '@angular/core';
import { AsyncHandler, flatten } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import {
    catchError,
    combineLatest,
    map,
    of,
    shareReplay,
    switchMap,
} from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import {
    ExplorePointOfInterestModalComponent,
    PointOfInterest,
} from './explore-poi-modal.component';
import { ExploreStateService } from './explore-state.service';

@Injectable({
    providedIn: 'root',
})
export class ExplorePointOfInterestService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _explore = inject(ExploreStateService);
    private _dialog = inject(MatDialog);

    private _features = this._org.active_building.pipe(
        switchMap(() =>
            showMetadata(this._org.organisation.id, 'points-of-interest').pipe(
                catchError((_) => of({ details: {} })),
            ),
        ),
        map((_) => {
            const mapping = _.details || {};
            const levels = this._org.levelsForBuilding(this._org.building);
            const list = flatten(
                levels.map((lvl) =>
                    (mapping[lvl.id] || []).map((_) => ({
                        ..._,
                        zone_id: lvl.id,
                    })),
                ),
            );
            return list as PointOfInterest[];
        }),
        shareReplay(1),
    );

    private _poi_list = combineLatest([
        this._features,
        this._explore.level,
    ]).pipe(
        map(([features, level]) =>
            features.filter((poi) => poi.zone_id === level.id),
        ),
        shareReplay(1),
    );

    constructor() {
        super();
        this.subscription(
            'poi_list',
            this._poi_list.subscribe((list) => {
                const features = [];
                const actions = [];
                for (const item of list) {
                    if (!item.location) continue;
                    if (
                        !(
                            item.extra_details?.length > 0 ||
                            item.image ||
                            item.media_url
                        )
                    ) {
                        continue;
                    }
                    let can_act = true;
                    ['mousedown', 'touchstart'].forEach((event) =>
                        actions.push({
                            id: item.location,
                            action: event,
                            priority: 10,
                            callback: () => {
                                console.log('Mouse down or touch start');
                                can_act = true;
                                this.timeout('act', () => (can_act = false));
                            },
                        }),
                    );
                    ['mouseup', 'touchend'].forEach((event) =>
                        actions.push({
                            id: item.location,
                            action: event,
                            priority: 10,
                            callback: () => {
                                console.log('Mouse up or touch end');
                                can_act ? this.viewDetails(item) : null;
                            },
                        }),
                    );
                    features.push({
                        track_id: `poi:hover:${item.location}`,
                        location: item.location,
                        content: ExploreDeskInfoComponent,
                        full_size: true,
                        no_scale: true,
                        data: {
                            id: item.location,
                            map_id: item.location,
                            name: item.name,
                        },
                        z_index: 20,
                    });
                }
                this._explore.setActions('poi', actions || []);
                this._explore.setFeatures('poi', features || []);
            }),
        );
    }

    public viewDetails(item: PointOfInterest) {
        this._dialog.open(ExplorePointOfInterestModalComponent, {
            data: item,
        });
    }
}
