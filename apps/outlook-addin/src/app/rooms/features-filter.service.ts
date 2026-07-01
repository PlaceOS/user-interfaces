import { Injectable, inject, signal } from '@angular/core';
import { Space } from '@placeos/common';
import { EventFormService } from '@placeos/events';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    private _state = inject(EventFormService);

    public readonly spaces = this._state.available_spaces;
    public readonly updated_spaces = signal<Space[]>([]);
    public readonly updated_spaces_applied = signal(false);
    public readonly selected_features = signal<any[]>(null);

    public readonly room_features: any[] = [
        { name: 'Video Conference (VC)', id: 'VidConf', value: false },
        { name: 'Conference Phone', id: 'ConfPhone', value: false },
        { name: 'Wireless Content Sharing', id: 'Wireless', value: false },
        { name: 'Video Wall', id: 'VidWall', value: false },
        { name: 'Whiteboard', id: 'Whiteboard', value: false },
        { name: 'Jamboard', id: 'Jamboard', value: false },
        { name: 'Projector', id: 'Projector', value: false },
        { name: 'Views', id: 'Views', value: false },
    ];

    public readonly features = signal<any[]>(this.room_features);

    getSelectedFeatures() {
        this.selected_features.set(
            this.features().filter((item) => item.value == true),
        );
    }

    applyFilter() {
        const requested_features = this.sortSelectedFeatures(
            this.selected_features() || [],
        );
        this.updated_spaces.set(
            this.spaces().filter((space: Space) =>
                this._sort_and_join(space.feature_list).includes(
                    requested_features,
                ),
            ),
        );
        this.updated_spaces_applied.set(true);
    }

    _sort_and_join(array: string[]): string {
        return array?.sort().join();
    }

    sortSelectedFeatures(array: any[]) {
        const features_array = array?.map((item) => item.id);
        return this._sort_and_join(features_array);
    }

    clearFilter() {
        this.selected_features.set(null);
        this.room_features?.forEach((feature) => (feature.value = false));
        this.features.set([...this.room_features]);
        this.updated_spaces_applied.set(false);
    }
}
