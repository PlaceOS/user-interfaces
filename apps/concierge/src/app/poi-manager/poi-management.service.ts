import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, notifySuccess } from '@placeos/common';
import { ExplorePointOfInterestModalComponent } from '@placeos/explore';
import { metadata as metadata_v7 } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { POIModalComponent } from './poi-modal.component';

export interface POIListOptions {
    search?: string;
}

export interface PointOfInterest {
    id: string;
    name: string;
    level_id: string;
    location: string | [number, number];
    short_link_id: string;
    qr_code?: string;
    qr_link?: string;
    can_search?: boolean;
    image?: string;
    media_type?: 'audio' | 'video';
    media_url?: string;
    extra_details?: [string, string][];
}

import { jsonRecord, showMetadata, toJsonValue } from '../metadata';
import { confirmAction, errorText } from '../ui/modal-actions';
@Injectable({
    providedIn: 'root',
})
export class POIManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private readonly _change = signal(0);

    public readonly options = signal<POIListOptions>({});

    private readonly _features = signal<PointOfInterest[]>([]);

    public readonly filtered_features = computed(() => {
        const list = this._features();
        const { search } = this.options();
        if (search) {
            return list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            );
        }
        return list;
    });

    constructor() {
        effect(() => {
            this._org.active_building();
            this._change();
            this._loadFeatures();
        });
    }

    private async _loadFeatures() {
        const metadata = await showMetadata(
            this._org.organisation.id,
            'points-of-interest',
        ).catch(() => null);
        const mapping = jsonRecord<Record<string, PointOfInterest[]>>(
            metadata?.details,
        );
        const levels = this._org.levelsForBuilding(this._org.building);
        this._features.set(levels.flatMap((lvl) => mapping[lvl.id] || []));
    }

    public setFilters(options: Partial<POIListOptions>) {
        this.options.update((current) => ({ ...current, ...options }));
    }

    public setSearchString(search: string) {
        this.options.update((current) => ({ ...current, search }));
    }

    public editPointOfInterest(poi?: PointOfInterest) {
        const ref = this._dialog.open(POIModalComponent, {
            data: poi,
        });
        ref.afterClosed().subscribe(() =>
            this._change.update((value) => value + 1),
        );
    }

    public previewPointOfInterest(poi: PointOfInterest) {
        this._dialog.open(ExplorePointOfInterestModalComponent, {
            data: poi,
        });
    }

    public async removePointOfInterest(poi: PointOfInterest) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: 'Remove Point of Interest',
                content: `Are you sure you want to remove the point of interest "${poi.name}"?`,
                icon: { content: 'delete_forever' },
                confirm_text: 'Remove',
            },
            {
                loading: 'Removing point of interest...',
                action: async () => {
                    const old_metadata = await showMetadata(
                        this._org.organisation.id,
                        'points-of-interest',
                    );
                    const metadata = jsonRecord<
                        Record<string, PointOfInterest[]>
                    >(old_metadata.details);
                    for (const lvl in metadata) {
                        if (metadata[lvl])
                            metadata[lvl] = metadata[lvl].filter(
                                (_) => _.id !== poi.id,
                            );
                    }
                    await metadata_v7
                        .update({
                            id: this._org.organisation.id,
                            body: {
                                name: 'points-of-interest',
                                details: toJsonValue(metadata),
                                description: '',
                            },
                        })
                        .then(orThrow);
                },
                error: (e) =>
                    `Failed to remove point of interest. ${errorText(e)}`,
            },
        );
        if (!removed) return;
        notifySuccess('Successfully removed point of interest.');
        this._change.update((value) => value + 1);
    }
}
