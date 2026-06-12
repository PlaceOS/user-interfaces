import {
    computed,
    effect,
    inject,
    Injectable,
    resource,
    untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncHandler, flatten, OrganisationService } from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';

import { MatDialog } from '@angular/material/dialog';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import {
    ExplorePointOfInterestModalComponent,
    POI,
} from './explore-poi-modal.component';
import { ExploreStateService } from './explore-state.service';

@Injectable({
    providedIn: 'root',
})
export class ExplorePointOfInterestService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _explore = inject(ExploreStateService);
    private _dialog = inject(MatDialog);

    private _building = toSignal(this._org.active_building, {
        initialValue: null,
    });

    private _features = resource({
        params: () => this._building() || undefined,
        loader: async () => {
            const metadata = await showMetadata(
                this._org.organisation.id,
                'points-of-interest',
            ).catch((_) => ({ details: {} }));
            const mapping = metadata.details || {};
            const levels = this._org.levelsForBuilding(this._org.building);
            const list = flatten(
                levels.map((lvl) =>
                    (mapping[lvl.id] || []).map((_) => ({
                        ..._,
                        zone_id: lvl.id,
                    })),
                ),
            );
            return list as POI[];
        },
    });

    private _poi_list = computed(() => {
        const features = this._features.value() ?? [];
        const level = this._explore.level();
        return level ? features.filter((poi) => poi.zone_id === level.id) : [];
    });

    constructor() {
        super();
        effect(() => {
            const list = this._poi_list();
            untracked(() => this._updateMapDetails(list));
        });
    }

    private _updateMapDetails(list: POI[]) {
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
                        if (can_act) this.viewDetails(item);
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
    }

    public viewDetails(item: POI) {
        this._dialog.open(ExplorePointOfInterestModalComponent, {
            data: item,
        });
    }
}
