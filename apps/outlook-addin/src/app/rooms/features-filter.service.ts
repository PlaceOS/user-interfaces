import { Injectable, computed, inject, signal } from '@angular/core';
import { Space } from '@placeos/common';
import { EventFormService } from '@placeos/events';

interface RoomFeatureFilter {
    readonly id: string;
    readonly name: string;
    value: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    private _state = inject(EventFormService);

    public readonly spaces = this._state.available_spaces;
    public readonly selected_features = signal<RoomFeatureFilter[]>([]);
    public readonly show_favourites = signal(false);

    private readonly _applied_features = signal<string[]>([]);
    private readonly _applied_show_favourites = signal(false);

    public readonly room_features: RoomFeatureFilter[] = [
        { name: 'Video Conference (VC)', id: 'VidConf', value: false },
        { name: 'Conference Phone', id: 'ConfPhone', value: false },
        { name: 'Wireless Content Sharing', id: 'Wireless', value: false },
        { name: 'Video Wall', id: 'VidWall', value: false },
        { name: 'Whiteboard', id: 'Whiteboard', value: false },
        { name: 'Jamboard', id: 'Jamboard', value: false },
        { name: 'Projector', id: 'Projector', value: false },
        { name: 'Views', id: 'Views', value: false },
    ];

    public readonly features = signal<RoomFeatureFilter[]>(this.room_features);
    public readonly filtered_spaces = computed(() => {
        const selected_features = this._applied_features();
        const favourite_spaces = this._applied_show_favourites()
            ? this._state.favorite_spaces
            : null;
        return this.spaces().filter((space: Space) => {
            const features = space.feature_list?.length
                ? space.feature_list
                : space.features || [];
            return (
                (!favourite_spaces || favourite_spaces.includes(space.id)) &&
                selected_features.every((feature) => features.includes(feature))
            );
        });
    });

    getSelectedFeatures() {
        this.selected_features.set(
            this.features().filter((item) => item.value),
        );
    }

    applyFilter() {
        this.getSelectedFeatures();
        this._applied_features.set(
            this.selected_features().map((item) => item.id),
        );
        this._applied_show_favourites.set(this.show_favourites());
    }

    clearFilter() {
        this.selected_features.set([]);
        this.show_favourites.set(false);
        this._applied_features.set([]);
        this._applied_show_favourites.set(false);
        this.room_features.forEach((feature) => (feature.value = false));
        this.features.set([...this.room_features]);
    }
}
